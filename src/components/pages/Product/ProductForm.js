import React from 'react';
import {Button,Card,CardBody,Col,FormGroup,Input,Label,Row} from 'reactstrap';
class ProductForm extends React.Component {
	render() {
		return (
			<span>
				<Row>
          <Col xs="12" sm="6">
            <Card>
              <CardBody>
                <FormGroup>
                  <Label htmlFor="code">Code :</Label>
                  <Input type="text" id="code" placeholder="Enter your code" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="name">Name :</Label>
                  <Input type="text" id="name" placeholder="Enter your Name" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="cause">Cause :</Label>
                  <Input type="text" id="cause" placeholder="Enter Cause " />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="effect">Effect :</Label>
                  <Input type="text" id="effect" placeholder="Enter Effect" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="action">Action :</Label>
                  <Input type="text" id="action" placeholder="Enter Action" />
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
        	<Row  className="text-center">
	            <Card>
	              <Button block color="primary">
	                Create
	              </Button>
	            </Card>
        	</Row>
        </span>
		)
	}
}
export default ProductForm