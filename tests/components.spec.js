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

  it("renders Name Sprout first with problem/decision framing", async () => {
    const { default: Projects } = await import("../components/Projects.vue");
    const wrapper = mount(Projects);
    const firstCard = wrapper.find(".project-card");
    expect(firstCard.find(".project-title").text()).toBe("Name Sprout");
    expect(firstCard.find(".badge-progress").text()).toBe("In development");
    expect(firstCard.findAll(".project-meta-block").length).toBe(2);
    expect(firstCard.find(".tech-tag").exists()).toBe(true);
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
