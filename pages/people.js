import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import getPageMessages from '../utils/getPageMessages';
import DashboardLayout from '../src/layouts/DashboardLayout';
import { useTranslations } from 'next-intl';
import PeopleCard from '../src/page-components/People/PeopleCard';
import {useEffect, useState} from 'react';
import { UsersService } from '../src/apis/rest.app';
import InfiniteScroll from '../src/components/InfiniteScroll';
import Skeleton from '@mui/material/Skeleton';
import {useGlobalData} from "../src/store/GlobalContext";
import {Button, Chip, ListItemIcon, ListItemText, Menu, MenuItem, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import {Check, KeyboardArrowDown, SortByAlpha} from "@mui/icons-material";

const People = () => {
    const translations = useTranslations();
    const [hasMore, setHasMore] = useState(true);
    const [user] = useGlobalData();
    const [total, setTotal] = useState(0);
    const [people, setPeople] = useState([])

    const [hasMoreMatch, setHasMoreMatch] = useState(true);
    const [totalMatching, setTotalMatching] = useState(0);
    const [matching, setMatching] = useState([]);
    const [selectedInterest, setSelectedInterest] = useState([]);

    const [staticData, setStaticData] = React.useState(['Academics','Sports','Statups','Professional Services','Social','Other']);

    const [sortType, setSortType] = useState(0);
    const sorts = ['Recently Added', 'Name (A-Z)', 'Name (Z-A)'];

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorElSort, setAnchorElSort] = React.useState(null);
    const openSort = Boolean(anchorElSort);
    const handleClickSort = (event) => {
        setAnchorElSort(event.currentTarget);
    };
    const handleCloseSort = () => {
        setAnchorElSort(null);
    };

    useEffect(() => {
        setPeople([]);
        setHasMore(true);
    }, [selectedInterest, sortType]);

    const loadPeople = () => {
        UsersService.find({
            query: {
                $skip: people.length,
                $limit: 9,
                $sort: {
                    ...(sortType === 0 ? {createdAt: -1} : sortType === 1 ? {firstName: 1} : {firstName: -1}),
                },
                ...(selectedInterest && selectedInterest.length > 0 ?
                        {interests: {
                                $in: selectedInterest
                            }}
                        :{}
                )
            },
        })
            .then((response) => {
                const { data, total } = response;
                setTotal(total);
                const result = [...people, ...data];
                setHasMore(result.length < total);
                setPeople(result);
            })
            .catch(() => {
                setHasMore(false);
            });
    };

    const loadMatching = () => {
        UsersService.find({
            query: {
                $skip: people.length,
                $limit: 9,
                'matching.lookingFor': {
                    $in: user?.matching?.lookingFor ? user?.matching?.lookingFor : []
                },
                'matching.offering': {
                    $in: user?.matching?.offering ? user?.matching?.offering : []
                },
                interests: {
                    $in: user?.interests ? user?.interests : []
                },
                $sort: {
                    createdAt: -1,
                },
            },
        })
            .then((response) => {
                const { data, total } = response;
                setTotalMatching(total);
                const result = [...people, ...data];
                setHasMoreMatch(result.length < total);
                setMatching([...result]);
            })
            .catch(() => {
                setHasMore(false);
            });
    };
    return (
        <React.Fragment>
            <Typography
                sx={(theme) => ({
                    ...theme.typography.h6,
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: '1.2rem',
                    marginBottom: theme.spacing(2),
                })}
            >
                {translations('title')}
            </Typography>
            <Divider />
            <Typography
                sx={(theme) => ({
                    ...theme.typography.h6,
                    fontWeight: theme.typography.fontWeightBold,
                    fontSize: '1.2rem',
                    my: theme.spacing(2),
                })}
            >
                {translations('your-match', { count: totalMatching })}
            </Typography>
            <InfiniteScroll
                hasMore={hasMoreMatch}
                loadMore={loadMatching}
                loader={
                    <Grid container key={'all-teacher'} spacing={2} sx={{ mt: 2 }}>
                        {[...Array(9)].map((_, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Grid item key={index} md={4} sm={6} xs={12}>
                                <Skeleton animation={'wave'} height={110} sx={{ borderRadius: 1 }} variant={'rectangular'} />
                            </Grid>
                        ))}
                    </Grid>
                }
                pageStart={0}
            >
                <Grid container spacing={2}>
                    {matching.map((person) => (
                        <Grid item key={person?._id} md={4} sm={6} xs={12}>
                            <PeopleCard person={person} />
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography
                    sx={(theme) => ({
                        ...theme.typography.h6,
                        fontWeight: theme.typography.fontWeightBold,
                        fontSize: '1.2rem',
                        my: theme.spacing(2),
                    })}
                >
                    {translations('all-attendees', { count: total })}
                </Typography>
                <Box display={'flex'} alignItems={'center'}>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        variant={'outlined'}
                        sx={{textTransform: 'capitalize'}}
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDown />}
                    >
                        Interests
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Box p={2}>
                            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography variant={'body2'}>
                                    Select Interests
                                </Typography>
                                <Button sx={{textTransform: 'capitalize'}} onClick={() => {
                                    setSelectedInterest([]);
                                    handleClose();
                                }}>
                                    Clear
                                </Button>
                            </Box>

                            <Stack direction={'row'} maxWidth={300} flexWrap={'wrap'} mt={2}>
                                {
                                    staticData.map((each, pos) => (
                                        <Chip
                                            variant={selectedInterest.filter(e => e === each).length > 0 ? 'default' : 'outlined'}
                                            color={'primary'}
                                            label={each}
                                            sx={{mr: 1, mb: 1}}
                                            onClick={() => {
                                                let _selectedInterest = selectedInterest;
                                                const available = _selectedInterest.filter((e) => e === each).length > 0;
                                                console.log('Available --> ', available);
                                                if(available)
                                                    _selectedInterest.splice(_selectedInterest.indexOf(each), 1);
                                                else
                                                    _selectedInterest.push(each);
                                                console.log('Final --> ', _selectedInterest);
                                                setSelectedInterest([..._selectedInterest]);
                                            }}
                                        />
                                    ))
                                }
                            </Stack>
                        </Box>
                    </Menu>
                    <Button
                        id="basic-button"
                        aria-controls={openSort ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        variant={'outlined'}
                        sx={{textTransform: 'capitalize', ml: 1}}
                        aria-expanded={openSort ? 'true' : undefined}
                        onClick={handleClickSort}
                        endIcon={<SortByAlpha />}
                    >
                        Sort
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorElSort}
                        open={openSort}
                        onClose={handleCloseSort}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            sorts.map((each, pos) => {
                                if(pos === sortType)
                                    return(<MenuItem>
                                        <ListItemIcon>
                                            <Check/>
                                        </ListItemIcon>
                                        {each}
                                    </MenuItem>)
                                else
                                    return(
                                        <MenuItem onClick={() => {
                                            setSortType(pos);
                                            handleCloseSort();
                                        }}>
                                            <ListItemText inset>{each}</ListItemText>
                                        </MenuItem>
                                    )
                            })
                        }
                    </Menu>
                </Box>
            </Stack>
            <InfiniteScroll
                hasMore={hasMore}
                loadMore={loadPeople}
                loader={
                    <Grid container key={'all-teacher'} spacing={2} sx={{ mt: 2 }}>
                        {[...Array(9)].map((_, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Grid item key={index} md={4} sm={6} xs={12}>
                                <Skeleton animation={'wave'} height={110} sx={{ borderRadius: 1 }} variant={'rectangular'} />
                            </Grid>
                        ))}
                    </Grid>
                }
                pageStart={0}
            >
                <Grid container spacing={2}>
                    {people.map((person) => (
                        <Grid item key={person?._id} md={4} sm={6} xs={12}>
                            <PeopleCard person={person} />
                        </Grid>
                    ))}
                </Grid>
            </InfiniteScroll>
        </React.Fragment>
    );
};

export const getServerSideProps = async (context) => {
    const { locale } = context;

    return {
        props: {
            ...getPageMessages('people', locale),
        },
    };
};

People.Layout = DashboardLayout;

export default People;
