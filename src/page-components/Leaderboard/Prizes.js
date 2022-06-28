import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTranslations } from "next-intl";

const title = [];

const Prizes = ({ isActive, title }) => {
  const translations = useTranslations();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        m: 0,
        mt: 2,
        borderRadius: "0 0 5px 5px",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
      }}
    >
      <Box
        sx={(theme) => ({
          height: "50px",
          backgroundColor: theme.palette.warning.light,
        })}
      >
        <Typography
          sx={(theme) => ({
            ...theme.typography.h6,
            fontWeight: theme.typography.fontWeightBold,
            fontSize: "1.5rem",
            alignItems: "center",
            color: theme.palette.common.white,
            display: "flex",
            justifyContent: "center",
            m: 1,
          })}
        >
          {title} {translations("prize")}
        </Typography>
      </Box>

      <Box
        sx={(theme) => ({
          height: "200",
          backgroundColor: isActive ? theme.palette.primary.main : "#F8E9EE",
          display: "flex",
          flexDirection: "row",
        })}
      >
        <Grid item sx={() => ({ m: 2 })} xs={5}>
          <Typography
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightBold,
              fontSize: "1rem",
              alignItems: "center",
              color: isActive
                ? theme.palette.common.white
                : theme.palette.common.black,
              display: "flex",
              justifyContent: "right",
              mb: 1,
            })}
          >
            {translations("rm500")}
          </Typography>
          <Typography
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: "0.8rem",
              alignItems: "center",
              color: isActive
                ? theme.palette.common.white
                : theme.palette.common.black,
              display: "flex",
              justifyContent: "right",
            })}
          >
            {translations("cash")}
          </Typography>
          <Typography
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: "0.8rem",
              alignItems: "center",
              color: isActive
                ? theme.palette.common.white
                : theme.palette.common.black,
              display: "flex",
              justifyContent: "right",
            })}
          >
            {translations("prizes")}
          </Typography>
        </Grid>

        <Grid item xs={2}></Grid>

        <Grid item sx={() => ({ m: 2 })} xs={4.5}>
          <Typography
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightBold,
              fontSize: "1rem",
              alignItems: "center",
              color: isActive
                ? theme.palette.common.white
                : theme.palette.common.black,
              display: "flex",
              justifyContent: "left",
              mb: 1,
            })}
          >
            {translations("rm5000")}
          </Typography>
          <Typography
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: "0.8rem",
              alignItems: "center",
              color: isActive
                ? theme.palette.common.white
                : theme.palette.common.black,
              display: "flex",
              justifyContent: "left",
            })}
          >
            {translations("vouchers")}
          </Typography>
          <Typography
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: "0.8rem",
              alignItems: "center",
              color: isActive
                ? theme.palette.common.white
                : theme.palette.common.black,
              display: "flex",
              justifyContent: "left",
            })}
          >
            {translations("worths")}
          </Typography>
        </Grid>
      </Box>
    </Card>
  );
};

Prizes.defaultProps = {};

export default Prizes;
