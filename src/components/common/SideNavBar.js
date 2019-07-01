import React, { Suspense } from 'react';
//import propTypes from "prop-types";
import { connect } from "react-redux";
import { AppSidebar,AppSidebarFooter,AppSidebarForm,AppSidebarHeader,AppSidebarMinimizer,AppSidebarNav} from '@coreui/react';
import navigation from 'components/common/_nav';

class SideNavBar extends React.Component {
	render() {
		return (
			  <AppSidebar fixed display="lg">
	            <AppSidebarHeader />
	            <AppSidebarForm />
	            <Suspense>
	             <AppSidebarNav navConfig={navigation} {...this.props} />
	            </Suspense>
	            <AppSidebarFooter />
	            <AppSidebarMinimizer />
          	</AppSidebar>
		)
	}
}
export default connect (null, null)(SideNavBar)