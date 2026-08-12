export function initializeAnimations() {

    const animatedElements =
        document.querySelectorAll("[data-animation]");

    if (!animatedElements.length) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach((element) => {
        observer.observe(element);
    });

}