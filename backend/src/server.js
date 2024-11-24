import express from "express";

/*
    Local imports
*/
const PORT = process.env.PORT || 8000;
const app = express();

app.listen(PORT, () => {
	console.log(`Server running. Port: ${PORT}`);
});
