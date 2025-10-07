const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js server!');
});
app.post('/zalo-webhook', (req, res) => {
    const payload = req.body;

    console.log('Received Zalo webhook event:', JSON.stringify(payload, null, 2));

    // Xử lý tuỳ theo loại sự kiện
    const eventName = payload.event_name;

    if (eventName === 'user_send_text') {
        const senderId = payload.sender.id;
        const message = payload.message.text;

        console.log(`Người dùng ${senderId} gửi: ${message}`);

        // 👉 Tại đây bạn có thể gọi API Zalo để gửi tin nhắn phản hồi
    }

    // Trả về 200 OK cho Zalo
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});