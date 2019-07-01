import React from 'react';
import HeaderNavBar from 'components/common/HeaderNavBar';
import SideNavBar from 'components/common/SideNavBar';
//import propTypes from "prop-types";
import { connect } from "react-redux";
import { AppHeader} from '@coreui/react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import ProductForm from "./ProductForm"
import ProductList from "./ProductList"

class ProductPage extends React.Component {
	state = {
		add :false,
		list:true
	}

	render() {
		const { add,list } = this.state
		return (
			<div className="app">
				<HeaderNavBar/>
				<div className="app-body">
					<SideNavBar/>
					<main className="main">
						<AppHeader>
							<Nav className="d-md-down-none" navbar>
					          <NavItem className="px-3">
					            <NavLink to="#" onClick= {()=> {this.setState({add:false,list:true})}}className="nav-link">Product List</NavLink>
					          </NavItem>
					          <NavItem className="px-3">
					           <Link className="nav-link" onClick= {()=> {this.setState({add:true,list:false})}}>Product</Link>
					          </NavItem>
					        </Nav>
						</AppHeader>
						<br/><br/><br/>
						<div className="container-fluid">
							<div className="animated fadeIn">
							{list &&
								<ProductList/>
							}
							{add &&
								<ProductForm/>
							}
							</div>
						</div>
					</main>
				</div>
			</div>
		)
	}
}
export default connect (null, null)(ProductPage)