export function initializeSearch() {

    const searchForm =
        document.querySelector("#parking-search-form");

    if (!searchForm) {
        return;
    }

    searchForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const formData = new FormData(searchForm);

        const searchData = {
            location: formData.get("location"),
            date: formData.get("date"),
            time: formData.get("time"),
            vehicle: formData.get("vehicle")
        };

        console.log(
            "Parking search:",
            searchData
        );

    });

}