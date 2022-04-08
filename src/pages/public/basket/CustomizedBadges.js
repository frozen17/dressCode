import React, { useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { BASKET_ROUTE } from '../../../utils/Consts';
import { Link} from 'react-router-dom'
import axios from 'axios'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));





   const CustomizedBadges = ( props ) => {
const { names } = props;




  return (
    <Link to={BASKET_ROUTE}>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </Link>
  );
}
export default CustomizedBadges;