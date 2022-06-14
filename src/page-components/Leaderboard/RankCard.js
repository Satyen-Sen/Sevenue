import * as React from "react";
import Prizes from "./Prizes";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useTranslations } from "next-intl";

const ActionPoints = () => {
  const translations = useTranslations();

  const table = [
    { _id: 1, action: "Attending Conference Session", point: "200/session" },
    { _id: 2, action: "Visiting an Exhibitor", point: "100/exhibitor" },
    {
      _id: 3,
      action: "Registering Your Interest with Exhibitor",
      point: "50/registeration",
    },
    { _id: 4, action: "Adding Files to Briefcase", point: "10/file" },
    { _id: 5, action: "Chatting with an Exhibitor", point: "50/chat" },
    { _id: 6, action: "Joining Networking Table", point: "100/entry" },
    { _id: 7, action: "Scheduling a Meeting", point: "50/meeting" },
    { _id: 8, action: "Sharing a Business Card", point: "50/share" },
    {
      _id: 9,
      action: "Adding a Business Card to your Briefcase",
      point: "50/card",
    },
    { _id: 10, action: "Joining a Meeting", point: "100/meeting" },
  ];

  return (
    <React.Fragment>
      <Prizes isActive={true} title={translations("first")} />
      <Prizes isActive={false} title={translations("second")} />
      <Prizes isActive={false} title={translations("third")} />

      <Card sx={() => ({ mt: 2, boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.16)" })}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell xs={8} sx={() => ({ backgroundColor: "#504E4E" })}>
                <Typography
                  sx={(theme) => ({
                    fontWeight: theme.typography.fontWeightBold,
                    color: theme.palette.common.white,
                    fontSize: "1.2rem",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "left",
                    m: 1,
                    ml: 2,
                  })}
                >
                  {translations("Action")}
                </Typography>
              </TableCell>

              <TableCell
                xs={4}
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.main,
                })}
              >
                <Typography
                  sx={(theme) => ({
                    fontWeight: theme.typography.fontWeightBold,
                    color: theme.palette.common.white,
                    fontSize: "1.2rem",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "left",
                    m: 1,
                    ml: 2,
                  })}
                >
                  {translations("Points")}
                </Typography>
              </TableCell>
            </TableRow>

            {table.map((data) => (
              <TableRow>
                <TableCell
                  xs={8}
                  sx={(theme) => ({
                    borderRight: 0.5,
                    borderBottom: 0.5,
                    borderColor: theme.palette.divider,
                  })}
                >
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightBold,
                      fontSize: "0.9rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "left",
                      m: 0.5,
                      ml: 2,
                    })}
                  >
                    {data.action}
                  </Typography>
                </TableCell>
                <TableCell
                  xs={4}
                  sx={(theme) => ({
                    borderBottom: 0.5,
                    borderColor: theme.palette.divider,
                  })}
                >
                  <Typography
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightBold,
                      color: theme.palette.info.main,
                      fontSize: "0.9rem",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "left",
                      m: 0.5,
                      ml: 2,
                    })}
                  >
                    {data.point}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </React.Fragment>
  );
};

export default ActionPoints;
