import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CBACD4",       
      dark: "#7E678B",       
      light: "#E1CCDE",      
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#9B7DAD",       
      dark: "#6B5278",       
      light: "#CBBECA",      
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#C4875A",       
      light: "#D9A87A",
      dark: "#9E6A3F",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#C0546A",       
      light: "#D4788A",
      dark: "#963048",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#6A9E82",       
      light: "#8BBDA0",
      dark: "#4E7D65",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#8BAEC4",       
      light: "#A9C5D9",
      dark: "#6490AA",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F0F7",   
      paper: "#FFFFFF",     
      secondary: "#E4DBE4",  
      muted: "#DCCDDD",     
    },
    text: {
      primary: "#2D1F35",    
      secondary: "#7E678B", 
      disabled: "#CBBECA",   
      hint: "#B09EBB",     
    },
    divider: "#DCCDDD",      
    action: {
      active: "#7E678B",
      hover: "#E1CCDE",
      selected: "#CBACD433",
      disabled: "#CBBECA",
      disabledBackground: "#E4DBE4",
      focus: "#CBACD420",
    },
  },

  typography: {
    fontFamily: "'Playfair Display', 'Lato', sans-serif",
    h1: { fontWeight: 800, color: "#2D1F35" },
    h2: { fontWeight: 700, color: "#2D1F35" },
    h3: { fontWeight: 700, color: "#2D1F35" },
    h4: { fontWeight: 600, color: "#3D2A4A" },
    h5: { fontWeight: 600, color: "#3D2A4A" },
    h6: { fontWeight: 600, color: "#3D2A4A" },
    subtitle1: { fontWeight: 500, color: "#7E678B" },
    subtitle2: { fontWeight: 500, color: "#9B7DAD" },
    body1: { fontWeight: 400, color: "#2D1F35" },
    body2: { fontWeight: 400, color: "#5C4A6A" },
    caption: { fontWeight: 400, color: "#7E678B" },
    overline: { fontWeight: 600, color: "#9B7DAD", letterSpacing: "0.1em" },
    button: { textTransform: "none", fontWeight: 700 },
  },

  shape: { borderRadius: 14 },

  shadows: [
    "none",
    "0px 2px 8px rgba(126, 103, 139, 0.08)",
    "0px 4px 16px rgba(126, 103, 139, 0.12)",
    "0px 6px 20px rgba(126, 103, 139, 0.14)",
    "0px 8px 24px rgba(126, 103, 139, 0.16)",
    "0px 10px 28px rgba(126, 103, 139, 0.18)",
    "0px 12px 32px rgba(126, 103, 139, 0.20)",
    "0px 14px 36px rgba(126, 103, 139, 0.22)",
    "0px 16px 40px rgba(126, 103, 139, 0.24)",
    "0px 18px 44px rgba(126, 103, 139, 0.26)",
    "0px 20px 48px rgba(126, 103, 139, 0.28)",
    "0px 22px 52px rgba(126, 103, 139, 0.30)",
    "0px 24px 56px rgba(126, 103, 139, 0.32)",
    "0px 26px 60px rgba(126, 103, 139, 0.34)",
    "0px 28px 64px rgba(126, 103, 139, 0.36)",
    "0px 30px 68px rgba(126, 103, 139, 0.38)",
    "0px 32px 72px rgba(126, 103, 139, 0.40)",
    "0px 34px 76px rgba(126, 103, 139, 0.42)",
    "0px 36px 80px rgba(126, 103, 139, 0.44)",
    "0px 38px 84px rgba(126, 103, 139, 0.46)",
    "0px 40px 88px rgba(126, 103, 139, 0.48)",
    "0px 42px 92px rgba(126, 103, 139, 0.50)",
    "0px 44px 96px rgba(126, 103, 139, 0.52)",
    "0px 46px 100px rgba(126, 103, 139, 0.54)",
    "0px 48px 104px rgba(126, 103, 139, 0.56)",
  ],

  components: {
    // ── AppBar ──────────────────────────────────────────────
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#2D1F35",
          boxShadow: "0px 2px 12px rgba(126, 103, 139, 0.10)",
        },
      },
    },

    // ── Drawer ───────────────────────────────────────────────
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid #DCCDDD",
        },
      },
    },

    // ── ListItemButton (sidebar nav) ─────────────────────────
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          margin: "3px 10px",
          transition: "all 0.2s ease",
          "&.Mui-selected": {
            backgroundColor: "#CBACD433",
            color: "#7E678B",
            fontWeight: 700,
            "&:hover": {
              backgroundColor: "#CBACD455",
            },
            "& .MuiListItemIcon-root": {
              color: "#7E678B",
            },
          },
          "&:hover": {
            backgroundColor: "#E4DBE4",
          },
        },
      },
    },

    // ── ListItemIcon ─────────────────────────────────────────
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#9B7DAD",
          minWidth: 40,
        },
      },
    },

    // ── Button ───────────────────────────────────────────────
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 700,
          transition: "all 0.2s ease",
          boxShadow: "none",
          "&:hover": { boxShadow: "0px 4px 16px rgba(126, 103, 139, 0.25)" },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #CBACD4 0%, #9B7DAD 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #9B7DAD 0%, #7E678B 100%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #9B7DAD 0%, #7E678B 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #7E678B 0%, #5C4A6A 100%)",
          },
        },
        outlinedPrimary: {
          borderColor: "#CBACD4",
          color: "#7E678B",
          "&:hover": {
            backgroundColor: "#E1CCDE",
            borderColor: "#9B7DAD",
          },
        },
        textPrimary: {
          color: "#7E678B",
          "&:hover": {
            backgroundColor: "#E4DBE4",
          },
        },
      },
    },

    // ── IconButton ───────────────────────────────────────────
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#9B7DAD",
          "&:hover": {
            backgroundColor: "#E4DBE4",
          },
        },
      },
    },

    // ── Card ─────────────────────────────────────────────────
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0px 4px 16px rgba(126, 103, 139, 0.10)",
          border: "1px solid #DCCDDD",
          backgroundImage: "none",
        },
      },
    },

    // ── CardHeader ───────────────────────────────────────────
    MuiCardHeader: {
      styleOverrides: {
        title: {
          fontWeight: 700,
          color: "#2D1F35",
        },
        subheader: {
          color: "#7E678B",
        },
      },
    },

    // ── TextField / Input ────────────────────────────────────
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "#F5F0F7",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CBACD4",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9B7DAD",
            borderWidth: 2,
          },
        },
        notchedOutline: {
          borderColor: "#DCCDDD",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#9B7DAD",
          "&.Mui-focused": {
            color: "#7E678B",
          },
        },
      },
    },

    // ── Chip ─────────────────────────────────────────────────
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
        colorPrimary: {
          backgroundColor: "#E1CCDE",
          color: "#7E678B",
        },
        colorSecondary: {
          backgroundColor: "#DCCDDD",
          color: "#5C4A6A",
        },
      },
    },

    // ── Tabs ─────────────────────────────────────────────────
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          textTransform: "none",
          color: "#9B7DAD",
          "&.Mui-selected": {
            color: "#7E678B",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "#7E678B",
          height: 3,
          borderRadius: 2,
        },
      },
    },

    // ── Tooltip ──────────────────────────────────────────────
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#3D2A4A",
          borderRadius: 8,
          fontSize: "0.78rem",
          fontWeight: 500,
        },
        arrow: {
          color: "#3D2A4A",
        },
      },
    },

    // ── Badge ────────────────────────────────────────────────
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#CBACD4",
          color: "#FFFFFF",
        },
      },
    },

    // ── Switch ───────────────────────────────────────────────
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          "&.Mui-checked": {
            color: "#CBACD4",
            "& + .MuiSwitch-track": {
              backgroundColor: "#9B7DAD",
            },
          },
        },
      },
    },

    // ── Checkbox & Radio ─────────────────────────────────────
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#CBBECA",
          "&.Mui-checked": {
            color: "#9B7DAD",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#CBBECA",
          "&.Mui-checked": {
            color: "#9B7DAD",
          },
        },
      },
    },

    // ── Divider ──────────────────────────────────────────────
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#DCCDDD",
        },
      },
    },

    // ── Avatar ───────────────────────────────────────────────
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#CBACD4",
          color: "#FFFFFF",
          fontWeight: 700,
        },
      },
    },

    // ── LinearProgress ───────────────────────────────────────
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          backgroundColor: "#E4DBE4",
        },
        bar: {
          borderRadius: 8,
          background: "linear-gradient(90deg, #CBACD4, #7E678B)",
        },
      },
    },

    // ── CircularProgress ─────────────────────────────────────
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: "#9B7DAD",
        },
      },
    },

    // ── Pagination ───────────────────────────────────────────
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          color: "#7E678B",
          "&.Mui-selected": {
            backgroundColor: "#CBACD4",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#9B7DAD",
            },
          },
        },
      },
    },

    // ── Paper ────────────────────────────────────────────────
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: 14,
        },
        elevation1: {
          boxShadow: "0px 2px 12px rgba(126, 103, 139, 0.10)",
        },
        elevation2: {
          boxShadow: "0px 4px 20px rgba(126, 103, 139, 0.14)",
        },
      },
    },

    // ── Alert ────────────────────────────────────────────────
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
        standardInfo: {
          backgroundColor: "#E4DBE4",
          color: "#3D2A4A",
          "& .MuiAlert-icon": { color: "#7E678B" },
        },
      },
    },

    // ── Dialog ───────────────────────────────────────────────
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 18,
          boxShadow: "0px 16px 48px rgba(126, 103, 139, 0.25)",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          color: "#2D1F35",
        },
      },
    },

    // ── Select / Menu ────────────────────────────────────────
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: "2px 6px",
          "&.Mui-selected": {
            backgroundColor: "#CBACD433",
            color: "#7E678B",
            fontWeight: 600,
          },
          "&:hover": {
            backgroundColor: "#E4DBE4",
          },
        },
      },
    },

    // ── Table ────────────────────────────────────────────────
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            backgroundColor: "#E4DBE4",
            color: "#3D2A4A",
            fontWeight: 700,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#F5F0F7",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: "#DCCDDD",
        },
      },
    },
  },
});

export default theme;