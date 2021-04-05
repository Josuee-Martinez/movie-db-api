const { Router } = require("express");
const axios = require("axios");

const router = Router();

router.get("/", async (req, res) => {
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
         },
      };
      const axiosRes = await axios.get(
         "https://api.themoviedb.org/3/search/movie?language=en-US&query=The%20Avengers&page=1&include_adult=false",
         config
      );

      res.json(axiosRes.data);
   } catch (error) {
      res.send(error);
      console.error(error);
   }
});

module.exports = router;
