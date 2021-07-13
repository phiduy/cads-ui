import { alpha, Theme } from "@material-ui/core/styles"

// ----------------------------------------------------------------------

const Button = ({ theme }: { theme: Theme }) => {
  const shadows = (theme.shadows as unknown) as Shadows
  const greyColor = (theme.palette?.grey as unknown) as GreyColor

  return {
    MuiButton: {
      variants: [
        // Contained Button
        {
          props: {
            variant: "contained",
            color: "inherit"
          },
          style: {
            color: "red",
            boxShadow: shadows[25].z8,
            backgroundColor: greyColor[300],
            "&:hover": {
              boxShadow: "none",
              backgroundColor: greyColor[400]
            }
          }
        },
        {
          props: { variant: "contained", color: "primary" },
          style: { boxShadow: shadows[25].primary }
        },

        // Outlined Button
        {
          props: {
            color: "inherit",
            variant: "outlined"
          },
          style: {
            border: `1px solid ${greyColor[500_32]}`,
            "&:hover": { backgroundColor: greyColor[500_8] }
          }
        },

        // Text Button
        {
          props: { variant: "text", color: "inherit" },
          style: {
            "&:hover": {
              backgroundColor: greyColor[500_8]
            }
          }
        },

        // Size
        {
          props: { size: "large" },
          style: { height: 48 }
        }
      ],

      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none"
          }
        },
        outlinedPrimary: {
          border: `solid 1px ${alpha(theme.palette.primary.main, 0.48)}`
        }
      }
    }
  }
}

export default Button
