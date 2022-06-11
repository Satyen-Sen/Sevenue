import * as React from "react";
import getPageMessages from "../utils/getPageMessages";
import DashboardLayout from "../src/layouts/DashboardLayout";
import { useTranslations } from "next-intl";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";

import profile from "../src/assets/landing/temp_profile_image.png";

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

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          <Grid item lg={6} sm={12}>
            <Box sx={{ backgroundColor: "#b8244f", borderRadius: 1, mt: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      mt: 8,
                    }}
                  >
                    <Avatar
                      alt="Profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(14),
                        width: theme.spacing(14),
                        border: 5,
                        color: "background.paper",
                        borderRadius: "50%",
                      })}
                    />
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h4,
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "16px",
                        mt: 2,
                        color: "background.paper",
                      })}
                    >
                      Daniel Gilberg
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h2,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "12px",
                        mt: 1,
                        color: "background.paper",
                      })}
                    >
                      Sales Manager at Brumy
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h4,
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "16px",
                        mt: 3,
                        color: "#FEC954",
                      })}
                    >
                      Rank 02
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h4,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "14px",
                        mt: 1,
                        mb: 4,
                        color: "background.paper",
                        borderColor: "background.paper",
                        border: 1,
                        borderRadius: 1,
                        width: "120px",
                        height: "40px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      220 Points
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={4}>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      mt: 6,
                    }}
                  >
                    <Avatar
                      alt={"Profile"}
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(16),
                        width: theme.spacing(16),
                        border: 5,
                        color: "background.paper",
                        borderRadius: "50%",
                      })}
                    />
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h4,
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "16px",
                        mt: 2,
                        color: "background.paper",
                      })}
                    >
                      Abdel Latif
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h2,
                        fontWeight: 300,
                        fontSize: "12px",
                        mt: 1,
                        color: "background.paper",
                      })}
                    >
                      CEO at XYZ.co
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h4,
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "16px",
                        mt: 3,
                        color: "#FEC954",
                      })}
                    >
                      Rank 01
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h4,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "14px",
                        mt: 1,
                        mb: 4,
                        color: "background.paper",
                        backgroundColor: "#f52b60",
                        borderColor: "background.paper",
                        border: 1,
                        borderRadius: 1,
                        width: "120px",
                        height: "40px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      247 Points
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={4} sm={4}>
                  <Box
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      mt: 8,
                    }}
                  >
                    <Avatar
                      alt={"Profile"}
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(14),
                        width: theme.spacing(14),
                        border: 5,
                        color: "background.paper",
                        borderRadius: "50%",
                      })}
                    />
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h4,
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "16px",
                        mt: 2,
                        color: "background.paper",
                      })}
                    >
                      Shasha Braus
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h2,
                        fontWeight: 300,
                        fontSize: "12px",
                        mt: 1,
                        color: "background.paper",
                      })}
                    >
                      Entrepreneur at JJCM
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h4,
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "16px",
                        mt: 3,
                        color: "#FEC954",
                      })}
                    >
                      Rank 03
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h4,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "14px",
                        mt: 1,
                        mb: 4,
                        color: "background.paper",
                        borderColor: "background.paper",
                        border: 1,
                        borderRadius: 1,
                        width: "120px",
                        height: "40px",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      209 Points
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box
              sx={{
                alignItems: "left",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                mt: 2,
                border: "1px solid",
                borderColor: "#d1d1d1",
                borderRadius: 1,
              }}
            >
              <Typography
                sx={(theme) => ({
                  ...theme.typography.h6,
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: "1.2rem",
                  m: 2,
                  mt: 3,
                  mb: 0,
                })}
              >
                Your Current Rank
              </Typography>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 1,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#f6a328",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      3
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F8E9EE",
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
                        ml: 4,
                      })}
                    >
                      Abdullah Omar (me)
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "text.secondary",
                        ml: 4,
                      })}
                    >
                      7000 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F8E9EE",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Typography
                sx={(theme) => ({
                  ...theme.typography.h6,
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: "1.2rem",
                  m: 2,
                  mt: 3,
                  mb: 0,
                })}
              >
                Top 10 Participants
              </Typography>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 1,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#C46480",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      1
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
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
                        ml: 4,
                      })}
                    >
                      Alan Rickman
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "#F55858",
                        ml: 4,
                      })}
                    >
                      9000 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 0,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#C46480",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      2
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
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
                        ml: 4,
                      })}
                    >
                      Ronald Tan
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "#F55858",
                        ml: 4,
                      })}
                    >
                      8500 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 0,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F6A328",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      3
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#B8244F",
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
                        color: "background.paper",
                        ml: 4,
                      })}
                    >
                      Abdullah Omar (me)
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "background.paper",
                        ml: 4,
                      })}
                    >
                      7000 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#B8244F",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 0,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#C46480",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      4
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
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
                        ml: 4,
                      })}
                    >
                      Aisyah Abdul
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "#F55858",
                        ml: 4,
                      })}
                    >
                      6980 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 0,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#C46480",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      5
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
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
                        ml: 4,
                      })}
                    >
                      Kamala Muthu
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "#F55858",
                        ml: 4,
                      })}
                    >
                      6830 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 0,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#C46480",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      6
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
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
                        ml: 4,
                      })}
                    >
                      Razif Nazri
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "#F55858",
                        ml: 4,
                      })}
                    >
                      5500 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 0,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#C46480",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      7
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
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
                        ml: 4,
                      })}
                    >
                      Razif Nazri
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "#F55858",
                        ml: 4,
                      })}
                    >
                      4600 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 0,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#C46480",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      8
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
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
                        ml: 4,
                      })}
                    >
                      Razif Nazri
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "#F55858",
                        ml: 4,
                      })}
                    >
                      4500 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 0,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#C46480",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      9
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
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
                        ml: 4,
                      })}
                    >
                      Razif Nazri
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "#F55858",
                        ml: 4,
                      })}
                    >
                      4000 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>

              <Card
                sx={{
                  display: "flex",
                  m: 2,
                  mt: 0,
                  mb: 4,
                  backgroundColor: "#F8E9EE",
                }}
              >
                <Grid container spacing={2}>
                  <Grid
                    item
                    md={2.5}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#C46480",
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
                        color: "background.paper",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      })}
                    >
                      10
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={7.5}
                    sm={6}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
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
                        ml: 4,
                      })}
                    >
                      Alan Rickman
                    </Typography>
                    <Typography
                      sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightLight,
                        fontSize: "0.8rem",
                        color: "#F55858",
                        ml: 4,
                      })}
                    >
                      3000 Points
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    md={2}
                    sm={3}
                    sx={(theme) => ({
                      backgroundColor: "#F4F4F6",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    })}
                  >
                    <Avatar
                      alt="profile"
                      src={profile}
                      sx={(theme) => ({
                        height: theme.spacing(8),
                        width: theme.spacing(8),
                        m: 2,
                      })}
                    />
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Grid>

          <Grid item lg={6} sm={12}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                m: 0,
                mt: 2,
                borderRadius: "0 0 5px 5px",
              }}
            >
              <Box
                sx={(theme) => ({ height: "50px", backgroundColor: "#F6A328" })}
              >
                <Typography
                  sx={(theme) => ({
                    ...theme.typography.h6,
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: "1.5rem",
                    alignItems: "center",
                    color: "background.paper",
                    display: "flex",
                    justifyContent: "center",
                    m: 1,
                  })}
                >
                  1ˢᵗ Prize
                </Typography>
              </Box>

              <Box
                sx={(theme) => ({
                  height: "200",
                  backgroundColor: "#B8244F",
                  display: "flex",
                  flexDirection: "row",
                })}
              >
                <Grid item xs={5} sx={(theme) => ({ m: 2 })}>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: "1rem",
                      alignItems: "center",
                      color: "background.paper",
                      display: "flex",
                      justifyContent: "right",
                      mb: 1,
                    })}
                  >
                    RM500
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      color: "background.paper",
                      display: "flex",
                      justifyContent: "right",
                    })}
                  >
                    CASH
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      color: "background.paper",
                      display: "flex",
                      justifyContent: "right",
                    })}
                  >
                    PRIZES
                  </Typography>
                </Grid>

                <Grid item xs={2}></Grid>

                <Grid item xs={4.5} sx={(theme) => ({ m: 2 })}>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: "1rem",
                      alignItems: "center",
                      color: "background.paper",
                      display: "flex",
                      justifyContent: "left",
                      mb: 1,
                    })}
                  >
                    RM5000
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      color: "background.paper",
                      display: "flex",
                      justifyContent: "left",
                    })}
                  >
                    VOUCHERS
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      color: "background.paper",
                      display: "flex",
                      justifyContent: "left",
                    })}
                  >
                    WORTHS
                  </Typography>
                </Grid>
              </Box>
            </Card>

            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                m: 0,
                mt: 2,
                borderRadius: "0 0 5px 5px",
              }}
            >
              <Box
                sx={(theme) => ({ height: "50px", backgroundColor: "#F6A328" })}
              >
                <Typography
                  sx={(theme) => ({
                    ...theme.typography.h6,
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: "1.5rem",
                    alignItems: "center",
                    color: "background.paper",
                    display: "flex",
                    justifyContent: "center",
                    m: 1,
                  })}
                >
                  2ⁿᵈ Prize
                </Typography>
              </Box>

              <Box
                sx={(theme) => ({
                  height: "200",
                  backgroundColor: "#F8E9EE",
                  display: "flex",
                  flexDirection: "row",
                })}
              >
                <Grid item xs={5} sx={(theme) => ({ m: 2 })}>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: "1rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "right",
                      mb: 1,
                    })}
                  >
                    RM500
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "right",
                    })}
                  >
                    CASH
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "right",
                    })}
                  >
                    PRIZES
                  </Typography>
                </Grid>

                <Grid item xs={2}></Grid>

                <Grid item xs={4.5} sx={(theme) => ({ m: 2 })}>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: "1rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "left",
                      mb: 1,
                    })}
                  >
                    RM5000
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "left",
                    })}
                  >
                    VOUCHERS
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "left",
                    })}
                  >
                    WORTHS
                  </Typography>
                </Grid>
              </Box>
            </Card>

            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                m: 0,
                mt: 2,
                borderRadius: "0 0 5px 5px",
              }}
            >
              <Box
                sx={(theme) => ({ height: "50px", backgroundColor: "#F6A328" })}
              >
                <Typography
                  sx={(theme) => ({
                    ...theme.typography.h6,
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: "1.5rem",
                    alignItems: "center",
                    color: "background.paper",
                    display: "flex",
                    justifyContent: "center",
                    m: 1,
                  })}
                >
                  3ʳᵈ Prize
                </Typography>
              </Box>

              <Box
                sx={(theme) => ({
                  height: "200",
                  backgroundColor: "#F8E9EE",
                  display: "flex",
                  flexDirection: "row",
                })}
              >
                <Grid item xs={5} sx={(theme) => ({ m: 2 })}>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: "1rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "right",
                      mb: 1,
                    })}
                  >
                    RM500
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "right",
                    })}
                  >
                    CASH
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "right",
                    })}
                  >
                    PRIZES
                  </Typography>
                </Grid>

                <Grid item xs={2}></Grid>

                <Grid item xs={4.5} sx={(theme) => ({ m: 2 })}>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: "1rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "left",
                      mb: 1,
                    })}
                  >
                    RM5000
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "left",
                    })}
                  >
                    VOUCHERS
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightMedium,
                      fontSize: "0.8rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "left",
                    })}
                  >
                    WORTHS
                  </Typography>
                </Grid>
              </Box>
            </Card>

            <Card sx={(theme) => ({ mt: 8 })}>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({ backgroundColor: "#504E4E" })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "background.paper",
                        fontSize: "1.2rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 3,
                        ml: 4,
                      })}
                    >
                      Action
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({ backgroundColor: "#B8244F" })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "background.paper",
                        fontSize: "1.2rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 3,
                        ml: 8,
                      })}
                    >
                      Points
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        mt: 0,
                        ml: 4,
                      })}
                    >
                      Attending Conference Session
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        mt: 0,
                        ml: 8,
                      })}
                    >
                      200/session
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 4,
                        mt: 0,
                      })}
                    >
                      Visiting an Exhibitor
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 8,
                        mt: 0,
                      })}
                    >
                      100/exhibitor
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 4,
                        mt: 0,
                      })}
                    >
                      Registering Your Interest with Exhibitor
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 8,
                        mt: 0,
                      })}
                    >
                      50/registeration
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 4,
                        mt: 0,
                      })}
                    >
                      Adding Files to Briefcase
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 8,
                        mt: 0,
                      })}
                    >
                      10/file
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 4,
                        mt: 0,
                      })}
                    >
                      Chatting with an Exhibitor
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 8,
                        mt: 0,
                      })}
                    >
                      50/chat
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 4,
                        mt: 0,
                      })}
                    >
                      Joining Network Table
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 8,
                        mt: 0,
                      })}
                    >
                      100/entry
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 4,
                        mt: 0,
                      })}
                    >
                      Scheduling a Meeting
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 8,
                        mt: 0,
                      })}
                    >
                      50/meeting
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 4,
                        mt: 0,
                      })}
                    >
                      Sharing a Business Card
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 8,
                        mt: 0,
                      })}
                    >
                      50/share
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 4,
                        mt: 0,
                      })}
                    >
                      Adding a Business Card to your Briefcase
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 8,
                        mt: 0,
                      })}
                    >
                      50/card
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={7}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderRight: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 4,
                        mt: 0,
                      })}
                    >
                      Joining a Meeting
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={5}
                    sx={(theme) => ({
                      borderBottom: 1,
                      borderBottLeft: 1,
                      borderColor: "#E2E2E2",
                      mt: 2,
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#5581E9",
                        fontSize: "0.9rem",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "left",
                        m: 2,
                        ml: 8,
                        mt: 0,
                      })}
                    >
                      100/meeting
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
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
