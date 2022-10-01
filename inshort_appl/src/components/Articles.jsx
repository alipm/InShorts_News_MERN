
import { useEffect } from "react";
import { Box } from "@mui/material";

import { getNews } from "../service/api";

const Articles = () => {

    useEffect(() => {
        dailyNews();
    }, []);

    const dailyNews = () => {
       let response = getNews();
    }

    return (
        <Box>

        </Box>
    )
}

export default Articles;
