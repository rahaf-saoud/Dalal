import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
  Link,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import AppButton from '../components/common/AppButton'

// ─── Decorative background blob ───────────────────────────────────────────────
const BlobDecoration = () => (
  <Box
    sx={{
      position: "absolute",
      top: -120,
      right: -100,
      width: 420,
      height: 420,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, #CBACD455 0%, #E1CCDE22 60%, transparent 100%)",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />
);

const BlobDecorationBottom = () => (
  <Box
    sx={{
      position: "absolute",
      bottom: -80,
      left: -80,
      width: 280,
      height: 280,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, #DCCDDD44 0%, transparent 70%)",
      pointerEvents: "none",
      zIndex: 0,
    }}
  />
);

// ─── Main LoginPage Component ─────────────────────────────────────────────────
const Login = () => {
  const theme = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // ── Validation ───────────────────────────────────────────────────────────
  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Enter a valid email.";
    if (!password) newErrors.password = "Password is required.";
    else if (password.length < 6) newErrors.password = "At least 6 characters.";
    return newErrors;
  };

  // ── Submit handler ───────────────────────────────────────────────────────
  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 2000);
  };

  // ── Shared input sx ──────────────────────────────────────────────────────
  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      backgroundColor: "#F5F0F7",
      fontSize: "0.9rem",
      "& fieldset": { borderColor: "#DCCDDD" },
      "&:hover fieldset": { borderColor: "#CBACD4" },
      "&.Mui-focused fieldset": { borderColor: "#9B7DAD", borderWidth: 2 },
    },
    "& .MuiInputLabel-root": { color: "#9B7DAD" },
    "& .MuiInputLabel-root.Mui-focused": { color: "#7E678B" },
  };

  return (
    // ── Full-page layout ────────────────────────────────────────────────────
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        backgroundColor: "#F5F0F7",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      {/* ── Left panel — decorative ────────────────────────────────────── */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flex: "0 0 45%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(160deg, #2D1F35 0%, #7E678B 60%, #CBACD4 100%)",
          position: "relative",
          overflow: "hidden",
          px: 6,
        }}
      >
        {/* Decorative circles */}
        {[
          { size: 300, top: "-80px", left: "-80px", opacity: 0.08 },
          { size: 200, top: "40%",   left: "60%",   opacity: 0.06 },
          { size: 150, top: "70%",   left: "-20px",  opacity: 0.1  },
        ].map((c, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: c.size,
              height: c.size,
              borderRadius: "50%",
              border: "1.5px solid rgba(255,255,255,0.3)",
              top: c.top,
              left: c.left,
              opacity: c.opacity,
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Brand content */}
        <Box sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          {/* Logo mark */}
          <Box
            sx={{
              width: 100,
              height: 40,
              borderRadius: "5px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 4,
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 800 }}>
              Dallal
            </Typography>
          </Box>

          <Typography
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.4rem",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Welcome back
          </Typography>

          <Typography
            sx={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              maxWidth: 320,
            }}
          >
            Sign in to continue where you left off. Your workspace is waiting for you.
          </Typography>

          {/* Decorative dots grid */}
          <Box
            sx={{
              mt: 6,
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "10px",
              opacity: 0.2,
            }}
          >
            {Array.from({ length: 24 }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Right panel — form ─────────────────────────────────────────── */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          px: { xs: 3, sm: 6 },
          py: 6,
        }}
      >
        <BlobDecoration />
        <BlobDecorationBottom />

        {/* Form card */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: 420,
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            boxShadow: "0 8px 48px rgba(126, 103, 139, 0.14)",
            border: "1px solid #DCCDDD",
            p: { xs: 3, sm: 4.5 },
          }}
        >
          {/* Header */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#2D1F35",
                mb: 0.5,
              }}
            >
              Sign in
            </Typography>
            <Typography sx={{ fontSize: "0.875rem", color: "#7E678B" }}>
              Don't have an account?{" "}
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#9B7DAD", fontWeight: 600 }}
              >
                Create one
              </Link>
            </Typography>
          </Box>

          {/* Email field */}
          <Box sx={{ mb: 2.5 }}>
            <Typography
              sx={{ fontSize: "0.8rem", fontWeight: 600, color: "#3D2A4A", mb: 0.75 }}
            >
              Email address
            </Typography>
            <TextField
              fullWidth
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon sx={{ fontSize: 18, color: "#CBACD4" }} />
                  </InputAdornment>
                ),
              }}
              sx={inputSx}
            />
          </Box>

          {/* Password field */}
          <Box sx={{ mb: 1 }}>
            <Typography
              sx={{ fontSize: "0.8rem", fontWeight: 600, color: "#3D2A4A", mb: 0.75 }}
            >
              Password
            </Typography>
            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ fontSize: 18, color: "#CBACD4" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((p) => !p)}
                      edge="end"
                      size="small"
                      sx={{ color: "#CBACD4" }}
                    >
                      {showPassword
                        ? <VisibilityOffOutlinedIcon sx={{ fontSize: 18 }} />
                        : <VisibilityOutlinedIcon sx={{ fontSize: 18 }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={inputSx}
            />
          </Box>

          {/* Remember me + Forgot password */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  sx={{
                    color: "#CBBECA",
                    "&.Mui-checked": { color: "#9B7DAD" },
                    p: "4px",
                    mr: "2px",
                  }}
                />
              }
              label={
                <Typography sx={{ fontSize: "0.8rem", color: "#7E678B" }}>
                  Remember me
                </Typography>
              }
            />
            <Link
              href="#"
              underline="hover"
              sx={{ fontSize: "0.8rem", color: "#9B7DAD", fontWeight: 600 }}
            >
              Forgot password?
            </Link>
          </Box>

          {/* Submit button — uses AppButton */}
          <AppButton
            label="Sign in"
            variant="gradient"
            colorVariant="primary"
            size="large"
            fullWidth
            loading={loading}
            onClick={handleSubmit}
          />

          {/* Divider */}
          <Divider sx={{ my: 3, borderColor: "#DCCDDD" }}>
            <Typography sx={{ fontSize: "0.75rem", color: "#9B7DAD", px: 1 }}>
              or continue with
            </Typography>
          </Divider>

          {/* Social buttons */}
          <Box sx={{ display: "flex", gap: 1.5 }}>
            {[
              {
                label: "Google",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M5.27 9.76A7.08 7.08 0 0 1 19.07 12c0 .67-.06 1.31-.17 1.93H12v-3.64h7.49A7.1 7.1 0 0 0 5.27 9.76z"/>
                    <path fill="#34A853" d="M12 19.08a7.07 7.07 0 0 1-6.73-4.85L2.1 16.34A10.99 10.99 0 0 0 12 23c2.97 0 5.46-1.09 7.28-2.87l-3.1-2.4A6.93 6.93 0 0 1 12 19.08z"/>
                    <path fill="#FBBC05" d="M5.27 14.23A7.1 7.1 0 0 1 4.92 12c0-.77.13-1.52.35-2.24L2.1 7.65A10.99 10.99 0 0 0 1 12c0 1.77.42 3.44 1.1 4.94l3.17-2.71z"/>
                    <path fill="#4285F4" d="M12 4.92c1.68 0 3.18.62 4.36 1.62l3.02-3.02A10.96 10.96 0 0 0 12 1 10.99 10.99 0 0 0 2.1 7.65l3.17 2.11A7.07 7.07 0 0 1 12 4.92z"/>
                  </svg>
                ),
              },
              {
                label: "Apple",
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 1.5c.1 1.4-.4 2.8-1.2 3.8-.9 1-2.2 1.8-3.5 1.7-.2-1.3.4-2.7 1.2-3.6.9-1 2.3-1.8 3.5-1.9zm4.3 15c-.1.1-2.5 1.3-2.5 4 .1 3.1 2.7 4.1 2.8 4.2-.1.1-.4 1.4-1.4 2.8-1 1.4-2 2.8-3.6 2.8-1.5 0-2-.9-3.7-.9s-2.3.9-3.7.9c-1.5 0-2.6-1.4-3.7-2.8C3.6 25.8 2.3 22.4 2.3 19.2c0-5 3.2-7.6 6.4-7.7 1.5 0 2.9 1 3.9 1s2.6-1.2 4.4-1c.7 0 2.8.3 4.2 2.3l-.4.2z"/>
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <AppButton
                key={label}
                label={label}
                variant="outlined"
                colorVariant="primary"
                size="medium"
                startIcon={icon}
                sx={{ flex: 1 }}
              />
            ))}
          </Box>

          {/* Terms */}
          <Typography
            sx={{
              mt: 3,
              fontSize: "0.72rem",
              color: "#9B7DAD",
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            By signing in, you agree to our{" "}
            <Link href="#" underline="hover" sx={{ color: "#7E678B", fontWeight: 600 }}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" underline="hover" sx={{ color: "#7E678B", fontWeight: 600 }}>
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;