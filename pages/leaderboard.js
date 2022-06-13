import * as React from "react";
import getPageMessages from "../utils/getPageMessages";
import DashboardLayout from "../src/layouts/DashboardLayout";
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import PrimaryDisplayCard from "../src/page-components/Leaderboard/PrimaryDisplayCard";
import TopTenParticipants from "../src/page-components/Leaderboard/TopTenParticipants";
import RankCard from "../src/page-components/Leaderboard/RankCard";

const Leaderboard = () => {
  const translations = useTranslations();

  return (
    <React.Fragment>
      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: "1.2rem",
          marginBottom: theme.spacing(2),
        })}
      >
        {translations("title")}
      </Typography>

      <Divider />

      <Grid container spacing={6}>
        <Grid item lg={6} sm={12}>
          <PrimaryDisplayCard />
          <TopTenParticipants />
        </Grid>

        <Grid item lg={6} sm={12}>
          <RankCard/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const { locale } = context;

  return {
    props: {
      ...getPageMessages("leaderboard", locale),
    },
  };
};

Leaderboard.Layout = DashboardLayout;

export default Leaderboard;
