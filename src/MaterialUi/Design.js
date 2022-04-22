import React from 'react'
import { Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Design() {
  return (
    <div>
      {/* <Button variant='contained' color="error" size="medium" startIcon={<AccountCircleIcon/>}>LOGIN</Button> */}

      {/* <Grid container style={{ border: "3px solid red" }}>

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

      </Grid> */}


      {/* card design */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
            <h2>Title</h2>
              Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
              Items have padding to create the spacing between individual items.
            </CardContent>
            <CardActions>
              <Button size="small" color='secondary' variant='contained'>READ MORE</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 2nd card */}
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
            <h2>Title-2</h2>
              Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
              Items have padding to create the spacing between individual items.
            </CardContent>
            <CardActions>
              <Button size="small" color='secondary' variant='contained'>READ MORE</Button>
            </CardActions>
          </Card>
        </Grid>
        {/* 3rd card */}
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
            <h2>Title-3</h2>
              Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
              Items have padding to create the spacing between individual items.
            </CardContent>
            <CardActions>
              <Button size="small" color='secondary' variant='contained'>READ MORE</Button>
            </CardActions>
          </Card>
        </Grid>

        {/* 4th card */}
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
            <h2>Title-4</h2>
              Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
              Items have padding to create the spacing between individual items.
            </CardContent>
            <CardActions>
              <Button size="small" color='secondary' variant='contained'>READ MORE</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

    </div>
  )
}

export default Design