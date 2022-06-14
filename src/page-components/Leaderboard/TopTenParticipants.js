import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import profile from "../../assets/landing/temp_profile_image.png";
import ParticipantCard from "./ParticipantCard";
import { useTranslations } from "next-intl";

const TopTenParticipants = () => {
  const translations = useTranslations();

  const participants = [
    { name: "Alan Rickman", points: 9000, avatar: profile },
    { name: "Ronald Tan", points: 8500, avatar: profile },
    { name: "Abdullah Omar (me)", points: 7000, avatar: profile },
    { name: "Aisyah Abdul", points: 6980, avatar: profile },
    { name: "Kamala Muthu", points: 6830, avatar: profile },
    { name: "Razif Nazri", points: 5500, avatar: profile },
    { name: "Razif Nazri", points: 4600, avatar: profile },
    { name: "Razif Nazri", points: 4500, avatar: profile },
    { name: "Razif Nazri", points: 4000, avatar: profile },
    { name: "Razif Nazri", points: 3000, avatar: profile },
  ];

  return (
    <Box
      sx={(theme) => ({
        mt: 2,
        p: 2,
        border: "1px solid",
        borderColor: theme.palette.divider,
        borderRadius: 1,
      })}
    >
      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: "1.2rem",
        })}
      >
        {translations("currentRank")}
      </Typography>
      <ParticipantCard
        isActive={true}
        person={{ name: "Abdullah Omar (me)", points: 3000, avatar: profile }}
        rank={3}
      />

      <Typography
        sx={(theme) => ({
          ...theme.typography.h6,
          fontWeight: theme.typography.fontWeightBold,
          fontSize: "1.2rem",
          mt: 3,
        })}
      >
        {translations("topTen")}
      </Typography>
      {participants.map((each, index) => {
        return (
          <ParticipantCard
            isActive={each?.name === "Abdullah Omar (me)"}
            key={each.name}
            person={each}
            rank={index + 1}
          />
        );
      })}
    </Box>
  );
};

export default TopTenParticipants;
