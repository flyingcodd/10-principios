import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

const Logo = forwardRef(({ sx }, ref) => {

    const logo = (
        <Box component="img" src="/logo/logo.png" sx={{ width: 25, height: 'auto', cursor: 'pointer', ...sx }} />
    );

    return (
        <Link to="/" component={RouterLink} sx={{ display: 'contents', ...sx }}>
            {logo} UNAMBA Pagos
        </Link>
    );
});

Logo.propTypes = {
    sx: PropTypes.object,
    disabledLink: PropTypes.bool,
};

export default Logo;
