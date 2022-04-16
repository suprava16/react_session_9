import React from 'react'
import { Button, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Design() {
  return (
    <div>
      {/* <Button variant='contained' color="error" size="medium" startIcon={<AccountCircleIcon/>}>LOGIN</Button> */}

      <Grid container style={{ border: "3px solid red" }}>

        <Grid item xs={12} md={6} lg={4} style={{ border: "2px solid green" }}>
          Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
          Items have padding to create the spacing between individual items.
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{ border: "2px solid green" }}>
          Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
          Items have padding to create the spacing between individual items.
        </Grid>
        <Grid item xs={12} md={6} lg={4} style={{ border: "2px solid green" }}>
          Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
          Items have padding to create the spacing between individual items.
        </Grid>

      </Grid>

    </div>
  )
}

export default Design