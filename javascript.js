document.addEventListener("DOMContentLoaded", () => {
    const makeupItems = document.querySelectorAll(".makeup-item");
    const dropZone = document.getElementById("drop-zone");
    const resetBtn = document.getElementById("reset-btn");

    // Elements on the model face to be modified
    const lips = document.getElementById("lips");
    const leftEyeshadow = document.getElementById("left-eyeshadow");
    const rightEyeshadow = document.getElementById("right-eyeshadow");
    const leftBlush = document.getElementById("left-blush");
    const rightBlush = document.getElementById("right-blush");

    // 1. Drag Start Handler
    makeupItems.forEach(item => {
        item.addEventListener("dragstart", (e) => {
            // Store which makeup type is currently being dragged
            e.dataTransfer.setData("text/plain", item.dataset.makeup);
            item.style.opacity = "0.5";
        });

        item.addEventListener("dragend", () => {
            item.style.opacity = "1";
        });
    });

    // 2. Drop Zone Event Handlers
    dropZone.addEventListener("dragover", (e) => {
        // Necessary to prevent default handling so drop can trigger
        e.preventDefault();
    });

    dropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        
        // Retrieve data package showing which element was dropped
        const makeupType = e.dataTransfer.getData("text/plain");

        // Dynamically apply correct overlay based on product type dropped
        if (makeupType === "lipstick") {
            lips.style.opacity = "0.9";
        } else if (makeupType === "eyeshadow") {
            leftEyeshadow.style.opacity = "0.6";
            rightEyeshadow.style.opacity = "0.6";
        } else if (makeupType === "blush") {
            leftBlush.style.opacity = "0.7";
            rightBlush.style.opacity = "0.7";
        }
    });

    // 3. Clear Canvas Handler (Wash Face)
    resetBtn.addEventListener("click", () => {
        lips.style.opacity = "0";
        leftEyeshadow.style.opacity = "0";
        rightEyeshadow.style.opacity = "0";
        leftBlush.style.opacity = "0";
        rightBlush.style.opacity = "0";
    });
});