// import type { AutoRc } from "auto";

// Can't do typescript
// https://github.com/hydrosquall/storybook-addon-datadog-rum/runs/3090274106
// Likely related to Tsconfig loader, investigate if using TS config more often
// https://github.com/intuit/auto/issues/1943
function rc() {
  return {
    plugins: [
      "npm",
      "conventional-commits",
      "first-time-contributor",
      "released"
    ],

    // Use this branching scheme:
    // https://intuit.github.io/auto/docs/generated/shipit#next-branch-default
    // prelease branches contains the latest changes

    baseBranch: "stable",        // latest "official" version
    // TODO: consider renaming this branch to "next"
    prereleaseBranches: ["main"] // cutting-edge versions
  };
}

module.exports = rc();
