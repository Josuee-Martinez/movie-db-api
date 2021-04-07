const { Router } = require("express");
const router = Router();

const axios = require("axios");

router.get("/:movie", async (req, res) => {
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
         },
      };
      const axiosRes = await axios.get(
         `https://api.themoviedb.org/3/search/movie?language=en-US&query=${req.params.movie}&page=1&include_adult=false`,
         config
      );

      res.json(axiosRes.data);
   } catch (error) {
      res.send(error);
      console.error(error);
   }
});

module.exports = router;
