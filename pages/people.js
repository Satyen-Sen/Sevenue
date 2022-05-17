import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Box, Button } from '@mui/material/';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import ForumIcon from '@mui/icons-material/Forum';
import EventNoteSharpIcon from '@mui/icons-material/EventNoteSharp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function people() {
    return (
        <Box sx={{ my: 4, width: '100%' }}>
            <Card>

                <CardHeader

                    action={
                        <IconButton aria-label="settings">
                            <SearchIcon sx={{ fontSize: 40, color: "#b9394f" }} />
                        </IconButton>

                    }
                    title="People"
                ></CardHeader>

                <Divider />
                <Box>
                    <Typography
                        sx={(theme) => ({
                            ...theme.typography.subtitle1,
                            fontSize: '1.3rem',
                            fontWeight: theme.typography.fontWeightBold,
                            marginBottom: theme.spacing(3),
                            marginLeft: theme.spacing(2)
                        })}
                    >
                        Your Matches
                    </Typography>
                  
                </Box>
                <Box alignItems="right" justifyContent={'right'} width={'100%'} display={'flex'} >
                    <ArrowBackIosNewIcon/>
                    <ArrowForwardIosIcon/>
                            </Box>
                <Box width={380}>
                    <Grid container spacing={2} px={2}>
                        <Grid item sm={12} xs={12}>
                            <Box px={2} pt={2} pb={1} bgcolor={'#f4f4f6'} borderRadius={2}>
                                <Box display={'flex'} >
                                    <Avatar   >

                                    </Avatar>
                                    <Box display={'flex'} flexDirection={'column'} ml={2}>

                                        <Typography style={{ fontSize: 11, fontWeight: "bold" }} color="default">
                                            Abdullah Omar
                                        </Typography>
                                        <Typography style={{ fontSize: 11 }} color={'textSecondary'}>
                                            General Manager, Light Up 7 Lab
                                        </Typography>
                                        <Box display={'flex'} alignItems={'center'} mt={1} width={'100%'} zIndex={200}>
                                            <ForumIcon sx={{ color: "#b9394f" }} />
                                            <Button style={{
                                                textTransform: 'capitalize', fontSize: 10, fontWeight: "bold", color: "black",
                                                borderRadius: 15
                                            }} > Send Message
                                            </Button>
                                            <EventNoteSharpIcon sx={{ color: "#b9394f" }} />
                                            <Button style={{
                                                textTransform: 'capitalize', fontSize: 10, fontWeight: "bold", color: "black",
                                                borderRadius: 15
                                            }} >Schedule Meeting
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ paddingTop: "20px" }}>
                    <Typography
                        sx={(theme) => ({
                            ...theme.typography.subtitle1,
                            fontSize: '1.3rem',
                            fontWeight: theme.typography.fontWeightBold,
                            marginBottom: theme.spacing(3),
                            marginLeft: theme.spacing(2)
                        })}
                    >
                        All attendees (254)
                    </Typography>
                 
                </Box>
            </Card>
        </Box>

    );
}
