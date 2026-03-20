import app from "./app";
import AppDataSource from "./config/database"

const PORT = 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("DB conectada y sincronizada");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error DB:", err);
  });
