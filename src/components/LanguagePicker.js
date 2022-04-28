import React from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import languages from '../../config/languages.json';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import CheckIcon from '@mui/icons-material/Check';

const ArrowDownIcon = require('../assets/img/icons/arrow_drop_down.svg');

const LanguagePicker = () => {
  const Router = useRouter();
  const translations = useTranslations('layout');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const { locale, route } = Router;

  return (
    <React.Fragment>
      <Box display="flex" onClick={(ev) => setAnchorEl(ev.currentTarget)}>
        <Box fontSize={'9px'} mr={1}>
          {translations('language.picker')}
        </Box>
        <span>
          {locale}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={String(translations('language.iconAlt'))} src={ArrowDownIcon} />
        </span>
      </Box>
      <Menu
        anchorEl={anchorEl}
        // anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        // id={menuId}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        // transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        onClose={handleMenuClose}
        open={isMenuOpen}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {languages.locales.map((each) => (
          // @ts-ignore
          <Link href={route} key={each.key} locale={each.key} passHref>
            <Box
              alignItems="center!important"
              borderBottom="1px solid #707070"
              component={MenuItem}
              display="flex!important"
              justifyContent="space-between"
              onClick={handleMenuClose}
              width="180px !important"
            >
              {/* @ts-ignore*/}
              <span>{each.name}</span>
              {/* @ts-ignore*/}
              {each.key === locale && <CheckIcon />}
            </Box>
          </Link>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default LanguagePicker;
