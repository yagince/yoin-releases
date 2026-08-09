const applyLatestRelease = async () => {
  try {
    const response = await fetch("./appcast.xml", { cache: "no-store" });
    if (!response.ok) return;

    const xml = new DOMParser().parseFromString(await response.text(), "application/xml");
    const item = xml.querySelector("channel > item");
    const version = item
      ?.getElementsByTagNameNS("*", "shortVersionString")[0]
      ?.textContent?.trim();
    const enclosure = item?.querySelector("enclosure");
    const downloadURL = enclosure?.getAttribute("url");

    if (version) {
      document.querySelectorAll("[data-version]").forEach((element) => {
        element.textContent = `v${version}`;
      });
    }

    if (downloadURL) {
      document.querySelectorAll("[data-download-link]").forEach((element) => {
        element.setAttribute("href", downloadURL);
      });
    }
  } catch {
    // The static fallback links remain usable when the update feed is unavailable.
  }
};

void applyLatestRelease();
