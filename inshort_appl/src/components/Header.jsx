
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from '@mui/icons-material';

const styledHeader = styled(AppBar)`
   backgroung: #fff;
`

const Header = () => {
  return (  
    <styledHeader>
      <Toolbar></Toolbar>
    </styledHeader>
  );
};

export default Header;
