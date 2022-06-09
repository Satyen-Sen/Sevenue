import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import getPageMessages from '../utils/getPageMessages';
import DashboardLayout from '../src/layouts/DashboardLayout';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { UsersService } from '../src/apis/rest.app';
import InfiniteScroll from '../src/components/InfiniteScroll';
import Skeleton from '@mui/material/Skeleton';
import { useGlobalData } from '../src/store/GlobalContext';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Search from '@mui/icons-material/Search';
import Check from '@mui/icons-material/Check';
import SortByAlpha from '@mui/icons-material/SortByAlpha';
import PeopleAnimationCard from '../src/page-components/People/PeopleAnimationCard';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
import useDebounce from '../src/hooks/useDebounce';

const People = () => {
  const translations = useTranslations();
  const [hasMore, setHasMore] = useState(true);
  const [user] = useGlobalData();
  const [total, setTotal] = useState(0);
  const [people, setPeople] = useState([]);

  const [hasMoreMatch, setHasMoreMatch] = useState(true);
  const [totalMatching, setTotalMatching] = useState(0);
  const [matching, setMatching] = useState([]);
  const [selectedInterest] = useState([]);

  // const [staticData, setStaticData] = React.useState([
  //   'Academics',
  //   'Sports',
  //   'Statups',
  //   'Professional Services',
  //   'Social',
  //   'Other',
  // ]);

  const [sortType, setSortType] = useState(0);
  const sorts = ['Recently Added', 'Name (A-Z)', 'Name (Z-A)'];

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const [anchorElSort, setAnchorElSort] = React.useState(null);
  const openSort = Boolean(anchorElSort);
  const handleClickSort = (event) => {
    setAnchorElSort(event.currentTarget);
  };
  const handleCloseSort = () => {
    setAnchorElSort(null);
  };

  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const debounceSearchValue = useDebounce(searchValue, 500);

  const loadPeople = () => {
    const $or = [];
    if (searchValue.trim() !== '') {
      searchValue.split(' ').map((word) =>
        $or.push(
          {
            firstName: {
              $regex: `.*${word}*.`,
              $options: 'i',
            },
          },
          {
            lastName: {
              $regex: `.*${word}*.`,
              $options: 'i',
            },
          },
          {
            'userInfo.company': {
              $regex: `.*${word}*.`,
              $options: 'i',
            },
          },
          {
            'userInfo.jobTitle': {
              $regex: `.*${word}*.`,
              $options: 'i',
            },
          },
        ),
      );
    }

    UsersService.find({
      query: {
        $skip: people.length,
        $limit: 45,
        $or,
        $sort: {
          ...(sortType === 0 ? { createdAt: -1 } : sortType === 1 ? { firstName: 1 } : { firstName: -1 }),
        },
        ...(selectedInterest && selectedInterest.length > 0
          ? {
              interests: {
                $in: selectedInterest,
              },
            }
          : {}),
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
          $in: user?.matching?.lookingFor ? user?.matching?.lookingFor : [],
        },
        'matching.offering': {
          $in: user?.matching?.offering ? user?.matching?.offering : [],
        },
        // interests: {
        //   $in: user?.interests ? user?.interests : [],
        // },
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

  useEffect(() => {
    setPeople([]);
    setHasMore(true);
  }, [selectedInterest, sortType, debounceSearchValue]);

  return (
    <React.Fragment>
      <Box alignItems={'center'} display={'flex'} height={'40px'} justifyContent={'space-between'} mb={1}>
        {!isSearching && (
          <Typography
            sx={(theme) => ({
              ...theme.typography.h6,
              fontWeight: theme.typography.fontWeightBold,
              fontSize: '1.5rem',
            })}
          >
            {translations('title')}
          </Typography>
        )}

        {isSearching && (
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color={'primary'} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setIsSearching(false);
                      setSearchValue('');
                    }}
                    size={'small'}
                    sx={(theme) => ({
                      border: '1px solid',
                      borderColor: theme.palette.divider,
                    })}
                  >
                    <CloseIcon fontSize={'small'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={translations('search-by-name-company')}
            size={'small'}
            value={searchValue}
          />
        )}

        {!isSearching && (
          <IconButton
            color={'primary'}
            onClick={() => setIsSearching(true)}
            size={'small'}
            sx={(theme) => ({
              border: '1px solid',
              borderColor: theme.palette.primary.main,
            })}
          >
            <Search />
          </IconButton>
        )}
      </Box>

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
              <PeopleAnimationCard person={person} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
      <Stack alignItems={'center'} direction={'row'} justifyContent={'space-between'}>
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
        <Box alignItems={'center'} display={'flex'}>
          {/*<Button*/}
          {/*  aria-controls={open ? 'basic-menu' : undefined}*/}
          {/*  aria-expanded={open ? 'true' : undefined}*/}
          {/*  aria-haspopup="true"*/}
          {/*  endIcon={<KeyboardArrowDown />}*/}
          {/*  id="basic-button"*/}
          {/*  onClick={handleClick}*/}
          {/*  sx={{ textTransform: 'capitalize' }}*/}
          {/*  variant={'outlined'}*/}
          {/*>*/}
          {/*  Interests*/}
          {/*</Button>*/}
          {/*<Menu*/}
          {/*  MenuListProps={{*/}
          {/*    'aria-labelledby': 'basic-button',*/}
          {/*  }}*/}
          {/*  anchorEl={anchorEl}*/}
          {/*  id="basic-menu"*/}
          {/*  onClose={handleClose}*/}
          {/*  open={open}*/}
          {/*>*/}
          {/*  <Box p={2}>*/}
          {/*    <Box alignItems={'center'} display={'flex'} justifyContent={'space-between'}>*/}
          {/*      <Typography variant={'body2'}>Select Interests</Typography>*/}
          {/*      <Button*/}
          {/*        onClick={() => {*/}
          {/*          setSelectedInterest([]);*/}
          {/*          handleClose();*/}
          {/*        }}*/}
          {/*        sx={{ textTransform: 'capitalize' }}*/}
          {/*      >*/}
          {/*        Clear*/}
          {/*      </Button>*/}
          {/*    </Box>*/}

          {/*    <Stack direction={'row'} flexWrap={'wrap'} maxWidth={300} mt={2}>*/}
          {/*      {staticData.map((each, pos) => (*/}
          {/*        <Chip*/}
          {/*          color={'primary'}*/}
          {/*          label={each}*/}
          {/*          onClick={() => {*/}
          {/*            let _selectedInterest = selectedInterest;*/}
          {/*            const available = _selectedInterest.filter((e) => e === each).length > 0;*/}
          {/*            console.log('Available --> ', available);*/}
          {/*            if (available) _selectedInterest.splice(_selectedInterest.indexOf(each), 1);*/}
          {/*            else _selectedInterest.push(each);*/}
          {/*            console.log('Final --> ', _selectedInterest);*/}
          {/*            setSelectedInterest([..._selectedInterest]);*/}
          {/*          }}*/}
          {/*          sx={{ mr: 1, mb: 1 }}*/}
          {/*          variant={selectedInterest.filter((e) => e === each).length > 0 ? 'default' : 'outlined'}*/}
          {/*        />*/}
          {/*      ))}*/}
          {/*    </Stack>*/}
          {/*  </Box>*/}
          {/*</Menu>*/}
          <Button
            aria-controls={openSort ? 'basic-menu' : undefined}
            aria-expanded={openSort ? 'true' : undefined}
            aria-haspopup="true"
            endIcon={<SortByAlpha />}
            id="basic-button"
            onClick={handleClickSort}
            sx={{ textTransform: 'capitalize', ml: 1 }}
            variant={'outlined'}
          >
            {translations('sort')}
          </Button>
          <Menu
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            anchorEl={anchorElSort}
            id="basic-menu"
            onClose={handleCloseSort}
            open={openSort}
          >
            {sorts.map((each, pos) => {
              if (pos === sortType)
                return (
                  <MenuItem key={each}>
                    <ListItemIcon>
                      <Check />
                    </ListItemIcon>
                    {each}
                  </MenuItem>
                );
              else
                return (
                  <MenuItem
                    key={each}
                    onClick={() => {
                      setSortType(pos);
                      handleCloseSort();
                    }}
                  >
                    <ListItemText inset>{each}</ListItemText>
                  </MenuItem>
                );
            })}
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
              <PeopleAnimationCard person={person} />
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
