import React from 'react';
//import { Link, NavLink } from 'react-router-dom';
import {  Nav } from 'reactstrap';
//import PropTypes from 'prop-types';
import { AppAsideToggler, /*AppNavbarBrand*/AppSidebarToggler } from '@coreui/react';
//import logo from 'assets/img/brand/inc56.jpg'
import { AppHeader} from '@coreui/react';

class HeaderNavBar extends React.Component {
	
	render() {
		return (
			  <div>
   			 	<AppHeader fixed>
   			 	 	<React.Fragment>
				        <AppSidebarToggler className="d-lg-none" display="md" mobile />
				        {/*<AppNavbarBrand
				        				         	 full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
				        					          minimized={{ src: logo, width: 30, height: 30, alt: 'CoreUI Logo' }}
				        				        />*/}
				        <AppSidebarToggler className="d-md-down-none" display="lg" />
				        <Nav className="d-md-down-none" navbar>
				        </Nav>
				        <Nav className="ml-auto" navbar>
				       	</Nav>
				        <AppAsideToggler className="d-lg-none" mobile />
				      </React.Fragment>
       			  </AppHeader>
       			 </div>
		)
	}
}
export default HeaderNavBar