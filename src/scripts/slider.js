export function initializeSliders() {

    const sliders =
        document.querySelectorAll("[data-slider]");

    if (!sliders.length) {
        return;
    }

    sliders.forEach((slider) => {

        console.log(
            "Slider initialized:",
            slider
        );

    });

}