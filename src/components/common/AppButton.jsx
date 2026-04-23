import { Button, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";

/**
 * AppButton
 * ─────────────────────────────────────────────────────────────
 * A single reusable button shared across all components.
 * You only pass props to change what you need — everything
 * else comes from the purple theme automatically.
 */

// ─── 1. COLOR MAP ─────────────────────────────────────────────────────────────
// Reads colors directly from the MUI theme so everything stays in sync.
// If you update theme.jsx, all buttons update automatically.

const resolveColor = (colorVariant, theme) => {
  const p = theme.palette;

  const colorMap = {
    primary:   { main: p.primary.main,   dark: p.primary.dark,   light: p.primary.light,   contrast: p.primary.contrastText   },
    secondary: { main: p.secondary.main, dark: p.secondary.dark, light: p.secondary.light, contrast: p.secondary.contrastText },
    success:   { main: p.success.main,   dark: p.success.dark,   light: p.success.light,   contrast: p.success.contrastText   },
    error:     { main: p.error.main,     dark: p.error.dark,     light: p.error.light,     contrast: p.error.contrastText     },
    warning:   { main: p.warning.main,   dark: p.warning.dark,   light: p.warning.light,   contrast: p.warning.contrastText   },
    info:      { main: p.info.main,      dark: p.info.dark,      light: p.info.light,      contrast: p.info.contrastText      },
    dark:      { main: "#2D1F35",        dark: "#1a1020",        light: "#3D2A4A",          contrast: "#FFFFFF"                },
    light:     { main: "#E4DBE4",        dark: "#CBBECA",        light: "#F5F0F7",          contrast: "#3D2A4A"                },
  };

  return colorMap[colorVariant] ?? colorMap.primary;
};


// ─── 2. VARIANT STYLE BUILDER ─────────────────────────────────────────────────
// Returns an `sx` object for each visual variant.
// `size` and spacing are handled by MUI — we only control colors & effects here.

const buildVariantSx = (variant, color, rounded) => {

  const base = {
    fontWeight: 700,
    textTransform: "none",
    transition: "all 0.2s ease",
    boxShadow: "none",
    ...(rounded && { borderRadius: "999px" }),
    "&:active": { transform: "translateY(0)", boxShadow: "none" },
    "&.Mui-disabled": { opacity: 0.5, cursor: "not-allowed" },
  };

  switch (variant) {

    case "contained":
      return {
        ...base,
        backgroundColor: color.main,
        color: color.contrast,
        "&:hover": {
          backgroundColor: color.dark,
          boxShadow: `0 4px 16px ${color.main}55`,
          transform: "translateY(-1px)",
        },
      };

    case "outlined":
      return {
        ...base,
        backgroundColor: "transparent",
        color: color.main,
        border: `1.5px solid ${color.main}`,
        "&:hover": {
          backgroundColor: `${color.light}44`,
          borderColor: color.dark,
          color: color.dark,
          transform: "translateY(-1px)",
        },
      };

    case "text":
      return {
        ...base,
        backgroundColor: "transparent",
        color: color.main,
        border: "none",
        "&:hover": {
          backgroundColor: `${color.light}44`,
          color: color.dark,
        },
      };

    case "ghost":
      return {
        ...base,
        backgroundColor: `${color.light}55`,
        color: color.dark,
        border: "none",
        "&:hover": {
          backgroundColor: `${color.light}99`,
          boxShadow: `0 2px 10px ${color.main}33`,
          transform: "translateY(-1px)",
        },
      };

    case "gradient":
      return {
        ...base,
        background: `linear-gradient(135deg, ${color.main} 0%, ${color.dark} 100%)`,
        color: color.contrast,
        border: "none",
        "&:hover": {
          background: `linear-gradient(135deg, ${color.dark} 0%, ${color.main} 100%)`,
          boxShadow: `0 6px 20px ${color.main}66`,
          transform: "translateY(-2px)",
        },
      };

    default:
      return base;
  }
};


// ─── 3. THE COMPONENT ─────────────────────────────────────────────────────────

const AppButton = ({
  label        = "Button",
  variant      = "contained",
  colorVariant = "primary",
  size         = "medium",   
  fullWidth    = false,
  disabled     = false,
  loading      = false,
  rounded      = false,
  startIcon    = null,
  endIcon      = null,
  onClick,
  sx = {},
  ...rest                    
}) => {
  const theme = useTheme();
  const color = resolveColor(colorVariant, theme);
  const variantSx = buildVariantSx(variant, color, rounded);

  return (
    <Button
      size={size}              
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      startIcon={loading ? null : startIcon}
      endIcon={loading ? null : endIcon}
      variant="contained"      
      sx={{
        ...variantSx,          
        ...sx,                 
      }}
      {...rest}
    >
      {loading ? (
        <>
          <CircularProgress
            size={size === "large" ? 18 : size === "small" ? 13 : 16}
            thickness={5}
            sx={{
              mr: 1,
              color: variant === "outlined" || variant === "text"
                ? color.main
                : color.contrast,
            }}
          />
          Loading…
        </>
      ) : (
        label
      )}
    </Button>
  );
};

export default AppButton;


