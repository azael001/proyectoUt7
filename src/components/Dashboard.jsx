import { AppBar, Button, Container, Toolbar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <AppBar position="static" sx={{backgroundColor:'#1565c0'}}>
            <Container maxWidth="xl">
                <Toolbar >
                    <Grid container  sx={{ width: '100%', alignItems: "center"}} >
                        <Grid size={{xs:12, md:2, lg:4}} style={{ textAlign: "center" }}>        
                            <Link to={'/'} style={{textDecoration:'none', color:'white',fontWeight: 'bold', fontSize: '1.3rem'}}>Inicio</Link>
                        </Grid>

                        <Grid size={{xs:12, md:2, lg:4}} style={{ textAlign: "center" }}>        
                            <Link to={'/historia'} style={{textDecoration:'none', color:'white',fontWeight: 'bold', fontSize: '1.3rem'}}>Historia</Link>
                        </Grid> 
                        <Grid size={{xs:12, md:2, lg:4}} style={{ textAlign: "center" }}>        
                            <Link to={'/pista'} style={{textDecoration:'none', color:'white',fontWeight: 'bold', fontSize: '1.3rem'}}>Pista</Link>
                        </Grid>   
                    </Grid>
                </Toolbar >
            </Container>
        </AppBar>
      
    );
  }
  
  export default Dashboard;