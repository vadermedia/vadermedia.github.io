// deno-lint-ignore-file
document.addEventListener('DOMContentLoaded', function main() {
    const init = {
        sidenavs() {
            const elements = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elements, {});
        }
    };
    
    
    // init
    init.sidenavs();
});