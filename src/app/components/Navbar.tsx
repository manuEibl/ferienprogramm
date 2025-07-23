'use client';

import React from 'react';
import {IconButton, Link, Menu, MenuItem, useMediaQuery} from "@mui/material";
import {Tab, Tabs} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import styles from "@/app/page.module.css";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function Navbar() {

    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const theme = useTheme();
    // Breakpoint sm (600px) - anpassen falls gewünscht
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const tabs = [
        { label: "Start", href: "/" },
        { label: "Anmeldung", href: "/anmeldung" },
        { label: "Programmliste", href: "/programmliste" },
        { label: "Kalender", href: "/kalender" },
        { label: "Login", href: "/login" },
    ];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (index?: number) => {
        if(index !== undefined) setValue(index);
        setAnchorEl(null);
    };

    return (
        <>
            <div className={styles['navigation']}>

                {isMobile ? (
                    <>
                        <IconButton
                            aria-label="navigation menu"
                            aria-controls="burger-menu"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                            size="large"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="burger-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={() => handleMenuClose()}
                            keepMounted
                        >
                            {tabs.map((tab, i) => (
                                <MenuItem
                                    key={tab.label}
                                    selected={i === value}
                                    href={tab.href}
                                    component={Link}
                                    onClick={() => handleMenuClose(i)}
                                >
                                    {tab.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Tabs value={value} onChange={handleChange} aria-label="navigation tabs">
                        {tabs.map((tab, index) => (
                            <Tab key={tab.label} label={tab.label} href={tab.href} component={Link}
                                 {...a11yProps(index)} />
                        ))}
                    </Tabs>
                )}
            </div>

        </>
    );
}
