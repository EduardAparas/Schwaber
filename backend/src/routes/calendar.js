const express = require("express");
const router = express.Router();
const ical = require("node-ical");
const multer = require("multer");
const fs = require("fs");

const upload = multer({ dest: "uploads/" });

router.post("/upload-ics", upload.single("file"), async (req, res) => {
  try {
    const data = await ical.async.parseFile(req.file.path);

    const events = Object.values(data)
      .filter((e) => e.type === "VEVENT")
      .map((e) => ({
        id: e.uid,
        title: e.summary,
        start: e.start,
        end: e.end || e.start,
        location: e.location || "",
        description: e.description || "",
        category: e.categories || "",
      }));

    fs.unlinkSync(req.file.path); // borrar el .ics temporal

    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error leyendo el archivo ICS" });
  }
});

module.exports = router;
