import { initializeNavbar } from "./navbar.js";
import { initializeSearch } from "./search.js";
import { initializeSliders } from "./slider.js";
import { initializeAnimations } from "./animations.js";


document.addEventListener("DOMContentLoaded", async () => {

    await loadComponents();

    initializeNavbar();
    initializeSearch();
    initializeSliders();
    initializeAnimations();

    initializeIcons();

});


async function loadComponents() {

    const components = document.querySelectorAll(
        "[data-component]"
    );

    for (const component of components) {

        const name = component.dataset.component;

        try {

            const response = await fetch(
                `../components/${name}.html`
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to load component: ${name}`
                );
            }

            component.innerHTML = await response.text();

        } catch (error) {

            console.error(
                `Component loading error: ${name}`,
                error
            );

            component.innerHTML = "";
        }
    }
}


function initializeIcons() {

    if (typeof lucide !== "undefined") {
        lucide.createIcons();
    }

}