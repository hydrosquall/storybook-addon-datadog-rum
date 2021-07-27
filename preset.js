// function config(entry = []) {
//   return [...entry, require.resolve("./dist/esm/preset/preview")];
// }

// TODO: https://github.com/storybookjs/addon-kit/issues/16#issuecomment-870201802
// Figure out if it's possible to pass config from presetOptions into manager.ts
function managerEntries(entry = [], presetOptions) {
  return [...entry, require.resolve("./dist/esm/preset/manager")];
}

module.exports = {
  managerEntries
};
