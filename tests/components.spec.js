import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

vi.stubGlobal("useState", (key, init) => {
  const state = { value: typeof init === "function" ? init() : init };
  return {
    value: state.value,
    get value() {
      return state.value;
    },
    set value(v) {
      state.value = v;
    },
  };
});

vi.stubGlobal("useTheme", () => {
  const isDark = { value: false };
  return {
    isDark,
    toggleTheme: () => {
      isDark.value = !isDark.value;
    },
    initTheme: vi.fn(),
  };
});

vi.stubGlobal("import", { meta: { client: true } });

describe("Hero Component", () => {
  it("renders correctly", async () => {
    const { default: Hero } = await import("../components/Hero.vue");
    const wrapper = mount(Hero);
    expect(wrapper.find(".hero").exists()).toBe(true);
    expect(wrapper.find(".hero-title").text()).toContain("Juan Almeida Ross");
    expect(wrapper.find(".hero-subtitle").exists()).toBe(true);
    expect(wrapper.find(".hero-buttons").exists()).toBe(true);
  });

  it("has correct eyebrow text", async () => {
    const { default: Hero } = await import("../components/Hero.vue");
    const wrapper = mount(Hero);
    expect(wrapper.find(".hero-eyebrow").text()).toBe(
      "Open to full-time roles",
    );
  });

  it("has both buttons", async () => {
    const { default: Hero } = await import("../components/Hero.vue");
    const wrapper = mount(Hero);
    expect(wrapper.find(".btn-primary").text()).toBe("View work");
    expect(wrapper.find(".btn-ghost").text()).toBe("Contact");
  });
});

describe("Projects Component", () => {
  it("renders projects section", async () => {
    const { default: Projects } = await import("../components/Projects.vue");
    const wrapper = mount(Projects);
    expect(wrapper.find("#projects").exists()).toBe(true);
    expect(wrapper.find(".section-heading").text()).toBe("Selected projects");
  });

  it("renders project cards", async () => {
    const { default: Projects } = await import("../components/Projects.vue");
    const wrapper = mount(Projects);
    const cards = wrapper.findAll(".project-card");
    expect(cards.length).toBe(2);
  });

  it("renders Name Sprout first with problem/solution/decision framing", async () => {
    const { default: Projects } = await import("../components/Projects.vue");
    const wrapper = mount(Projects);
    const firstCard = wrapper.find(".project-card");
    expect(firstCard.find(".project-title").text()).toBe("Name Sprout");
    expect(firstCard.find(".badge-progress").text()).toBe("In development");
    const labels = firstCard.findAll(".meta-label").map((l) => l.text());
    expect(labels).toEqual(["Problem", "Solution", "Decision"]);
    expect(firstCard.find(".tech-tag").exists()).toBe(true);
  });

  it("keeps the demo video unmounted until Watch demo is clicked", async () => {
    const { default: Projects } = await import("../components/Projects.vue");
    const wrapper = mount(Projects);
    expect(wrapper.find("video").exists()).toBe(false);
    const toggle = wrapper.find(".demo-toggle");
    expect(toggle.text()).toBe("Watch demo");

    await toggle.trigger("click");

    const video = wrapper.find("video");
    expect(video.exists()).toBe(true);
    expect(video.attributes("preload")).toBe("none");
    expect(video.attributes("controls")).toBeDefined();
    expect(video.attributes("autoplay")).toBeUndefined();
    expect(video.attributes("loop")).toBeUndefined();
    expect(video.attributes("poster")).toBe("/images/name-sprout/demo-poster.webp");

    const descId = video.attributes("aria-describedby");
    const desc = wrapper.find(`#${descId}`);
    expect(desc.exists()).toBe(true);
    expect(desc.classes()).toContain("visually-hidden");
    expect(desc.text()).toContain("Silent screen recording");

    expect(wrapper.findAll(".project-shot").length).toBe(0);
    expect(wrapper.find(".demo-toggle").text()).toBe("Show screenshots");
  });

  it("links the portfolio card to its GitHub repo", async () => {
    const { default: Projects } = await import("../components/Projects.vue");
    const wrapper = mount(Projects);
    const cards = wrapper.findAll(".project-card");
    const portfolioCard = cards[1];
    expect(portfolioCard.find(".project-title").text()).toBe("This Portfolio");
    expect(portfolioCard.find(".project-link-muted").attributes("href")).toBe(
      "https://github.com/JL1P/portfolio",
    );
  });

  it("still renders a links block for an in-progress project that has a link", async () => {
    const { default: Projects } = await import("../components/Projects.vue");
    const wrapper = mount(Projects);
    const firstCard = wrapper.find(".project-card");
    expect(firstCard.find(".badge-progress").text()).toBe("In development");
    expect(firstCard.find(".project-links").exists()).toBe(true);
    expect(firstCard.find(".project-link-muted").exists()).toBe(true);
  });

  it("overrides the GitHub link label when the repo isn't the source code", async () => {
    const { default: Projects } = await import("../components/Projects.vue");
    const wrapper = mount(Projects);
    const cards = wrapper.findAll(".project-card");
    const nameSproutLabel = cards[0].find(".project-link-label");
    expect(nameSproutLabel.text()).toBe("Architecture notes");
    const portfolioLabel = cards[1].find(".project-link-label");
    expect(portfolioLabel.text()).toBe("GitHub");
  });
});

describe("Contact Component", () => {
  it("shows the email address as visible text", async () => {
    const { default: Contact } = await import("../components/Contact.vue");
    const wrapper = mount(Contact);
    expect(wrapper.text()).toContain("jluisar13@gmail.com");
  });

  it("keeps the address as a mailto link", async () => {
    const { default: Contact } = await import("../components/Contact.vue");
    const wrapper = mount(Contact);
    expect(wrapper.find(".contact-email-link").attributes("href")).toBe(
      "mailto:jluisar13@gmail.com",
    );
  });

  it("gives the copy button a real accessible name", async () => {
    const { default: Contact } = await import("../components/Contact.vue");
    const wrapper = mount(Contact);
    const btn = wrapper.find(".copy-btn");
    expect(btn.element.tagName).toBe("BUTTON");
    expect(btn.text().trim()).toBe("Copy email address");
  });

  it("announces success in the live region when the clipboard write resolves", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    vi.stubGlobal("navigator", { clipboard: { writeText } });

    const { default: Contact } = await import("../components/Contact.vue");
    const wrapper = mount(Contact);

    await wrapper.find(".copy-btn").trigger("click");
    await vi.waitUntil(() => wrapper.find(".copy-status").text() !== "");

    expect(writeText).toHaveBeenCalledWith("jluisar13@gmail.com");
    const status = wrapper.find(".copy-status");
    expect(status.attributes("aria-live")).toBe("polite");
    expect(status.text()).toBe("Copied to clipboard");
    expect(status.classes()).toContain("copy-status-visible");

    vi.unstubAllGlobals();
  });

  it("reports failure instead of claiming success when the clipboard is unavailable", async () => {
    vi.stubGlobal("navigator", {});

    const { default: Contact } = await import("../components/Contact.vue");
    const wrapper = mount(Contact);

    await wrapper.find(".copy-btn").trigger("click");
    await vi.waitUntil(() => wrapper.find(".copy-status").text() !== "");

    const status = wrapper.find(".copy-status");
    expect(status.text()).not.toBe("Copied to clipboard");
    expect(status.text().toLowerCase()).toContain("couldn't copy");

    vi.unstubAllGlobals();
  });
});

describe("Experience Component", () => {
  it("renders the section with heading and entries", async () => {
    const { default: Experience } = await import("../components/Experience.vue");
    const wrapper = mount(Experience);
    expect(wrapper.find("#experience").exists()).toBe(true);
    expect(wrapper.find(".section-heading").text()).toBe("Where I've worked");
    expect(wrapper.findAll(".experience-entry").length).toBe(3);
  });

  it("marks up periods with machine-readable time elements", async () => {
    const { default: Experience } = await import("../components/Experience.vue");
    const wrapper = mount(Experience);
    const times = wrapper.findAll("time");
    expect(times.length).toBeGreaterThanOrEqual(3);
    for (const t of times) {
      expect(t.attributes("datetime")).toBeTruthy();
    }
  });

  it("contains no links — non-public work has nothing to click through to", async () => {
    const { default: Experience } = await import("../components/Experience.vue");
    const wrapper = mount(Experience);
    expect(wrapper.findAll("a").length).toBe(0);
  });
});
