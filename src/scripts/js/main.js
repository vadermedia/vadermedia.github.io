// deno-lint-ignore-file
document.addEventListener("DOMContentLoaded", function main() {
  const init = {
    header() {
        const elements = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elements, {});
    },
  };

  // init
  init.header();
});
