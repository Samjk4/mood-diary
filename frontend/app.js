const API_URL = "https://mood-diary-api.onrender.com";

async function sendMood() {
    const mood = document.getElementById("moodInput").value;
    const resultBox = document.getElementById("result");

    if (!mood) {
        resultBox.innerHTML = "請先輸入心情！";
        return;
    }

    resultBox.innerHTML = "送出中...";

    try {
        const response = await fetch(`${API_URL}/mood`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ mood })
        });

        if (!response.ok) {
            throw new Error("API 回應錯誤");
        }

        const data = await response.json();
        resultBox.innerHTML = "回應：" + data.message;
    } catch (error) {
        console.error(error);
        resultBox.innerHTML = "❌ 無法連接到後端（Render）";
    }
}
