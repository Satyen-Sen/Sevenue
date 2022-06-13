import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";

const ParticipantCard = ({ rank, person, isActive }) => {
  return (
    <Card
      sx={{
        display: "flex",
        mt: 2,
        backgroundColor: "#f4f4f6",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          md={2.5}
          sm={3}
          sx={(theme) => ({
            backgroundColor: isActive ? theme.palette.warning.light : theme.palette.primary.light,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightRegular,
              fontSize: "2rem",
              color: theme.palette.common.white,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            })}
          >
            {rank || "-"}
          </Typography>
        </Grid>

        <Grid
          item
          md={7.5}
          sm={6}
          sx={(theme) => ({
            backgroundColor: isActive ? theme.palette.primary.main : "#f4f4f6",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
          })}
        >
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: "1rem",
              color: isActive
                ? theme.palette.common.white
                : theme.palette.common.black,
              ml: 4,
            })}
          >
            {person?.name || "---"}
          </Typography>
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightLight,
              fontSize: "0.8rem",
              color: isActive
                ? theme.palette.common.white
                : theme.palette.primary.main,
              ml: 4,
            })}
          >
            {person?.points || "---"} {"Points"}
          </Typography>
        </Grid>

        <Grid
          item
          md={2}
          sm={3}
          sx={(theme) => ({
            backgroundColor: isActive ? theme.palette.primary.main : "#f4f4f6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        >
          <Avatar
            alt="profile"
            src={person?.avatar || null}
            sx={(theme) => ({
              height: theme.spacing(8),
              width: theme.spacing(8),
              m: 2,
            })}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

ParticipantCard.defaultProps = {
  rank: 0,
  person: {},
  isActive: false,
};

ParticipantCard.propTypes = {
  rank: PropTypes.number,
  person: PropTypes.object,
  isActive: PropTypes.bool,
};

export default ParticipantCard;
