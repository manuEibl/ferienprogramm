'use client';

import React from 'react';
import {Box, IconButton, Menu, MenuItem, useMediaQuery} from "@mui/material";
import {Tab, Tabs} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Kalender from "@/pages/kalender";
import Programmliste from "@/pages/programmliste";
import StartPage from "@/pages/start";
import Anmeldung from "@/pages/anmeldung";
import { useTheme } from '@mui/material/styles';
import styles from "@/app/page.module.css";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

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
        { label: "Start", component: <StartPage /> },
        { label: "Anmeldung", component: <Anmeldung /> },
        { label: "Programmliste", component: <Programmliste /> },
        { label: "Kalender", component: <Kalender /> },
        { label: "Login", component: <>Login</> }
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
                            <Tab key={tab.label} label={tab.label} {...a11yProps(index)} />
                        ))}
                    </Tabs>
                )}
            </div>

            {tabs.map((tab, index) => (
                <CustomTabPanel key={tab.label} value={value} index={index}>
                    {tab.component}
                </CustomTabPanel>
            ))}
        </>
    );
}
