
async function extractText() {

    const image = document.getElementById("imageInput").files[0];

    if (!image) {
        alert("Please select an image!");
        return;
    }

    document.getElementById("status").innerText =
        "Processing image...";

    const result = await Tesseract.recognize(
        image,
        "ara+eng",
        {
            logger: info => {
                document.getElementById("status").innerText =
                    info.status + " " +
                    Math.round(info.progress * 100) + "%";
            }
        }
    );

    document.getElementById("result").value =
        result.data.text;

    document.getElementById("status").innerText =
        "Completed!";
}

function copyText() {
    const text = document.getElementById("result").value;

    navigator.clipboard.writeText(text);
}
