import { merge } from "lodash"
import { Theme, ThemeOptions } from "@material-ui/core/styles"
import Button from "./Button"

// ----------------------------------------------------------------------

const Buttons = ({ theme }: { theme: ThemeOptions }) => {
  return merge(Button({ theme: theme as Theme }))
}
export default Buttons
