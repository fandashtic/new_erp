import React from 'react';
//import propTypes from "prop-types";
import {Card,CardBody,CardHeader,Col,Row,Table} from 'reactstrap';

class ProductList extends React.Component {
	render() {
		return (
			<span>
				<Row>
					<Col >
						<Card>
				            <CardHeader>
				           Product Lists
				            </CardHeader>
				          	<CardBody>
				                <Table responsive>
				                  <thead>
				                  <tr>
				                    <th>Code</th>
				                    <th> Name</th>
				                    <th>Type</th>
				                    <th>Action</th>
				                    <th>Edit/Delete</th>
				                  </tr>
				                  </thead>
				                  <br/>
				                  <tbody>
				                   <tr>
				                    No Data Found
				                    </tr>
				                  </tbody>
				                </Table>
				          	</CardBody>
				        </Card>
		        	</Col>
		        </Row>
        	</span>
		)
	}
}
export default ProductList