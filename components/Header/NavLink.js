import React from 'react'
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Link } from './Link';



export const NavLink = ({children, href, exact, ...props}) => {
    const { pathname } = useRouter();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    
    isActive ? props.className += ' text-white': props.className += ' text-gray-300'; 
    return <Link href={href} {...props}>{children}</Link>;

}

NavLink.propTypes = {
    href: PropTypes.string.isRequired,
    exact: PropTypes.bool
};

NavLink.defaultProps = {
    exact: false
};

