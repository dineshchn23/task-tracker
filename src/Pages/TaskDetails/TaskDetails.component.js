import React, { useSelector } from "react";
import {
  Button,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Form,
  Row,
  Col,
  Badge,
  FloatingLabel,
  Image,
} from "react-bootstrap";
import "./TaskDetails.style.css";

const data = {
  id: "1001",
  taskName: "Create the base layout",
  projectName: "Task Tracker",
  description:
    "To develop the task tracker project, we need a base layout to get it started.",
};

const TaskDetails = (props) => {
  const taskDetails = data;

  return (
    <Row>
      <Col xs={12} md={7}>
        <Row>
          <Col xs={12} md={7}>
            <h4>
              #{taskDetails.id}/{taskDetails.taskName}Contrary to popular belief, Lorem Ipsum is not simply random text.
            </h4>
            <div className="mb-2">
              <div>
                <small>
                  <b>Created On:</b> 29/12/2021 14:23:22
                </small>
              </div>
              <div>
                <small>
                  <b>Updated On:</b> 29/12/2021 14:23:22 (30mins ago)
                </small>
              </div>
              <small>
                <b>Tags: </b>
                <Badge pill bg="primary">
                  base layout
                </Badge>
                <Badge pill bg="primary">
                  bootstrap
                </Badge>
              </small>
            </div>
          </Col>
          <Col>
            <div className="mb-2">
              <div>
                <small>
                  <b>Status: </b>
                </small>
              </div>
              <Button size="sm" variant="primary">
                Open
              </Button>
              <Button size="sm" variant="light">
                On Hold
              </Button>
              <Button size="sm" variant="light">
                In Progress
              </Button>
              <Button size="sm" variant="light">
                Done
              </Button>
            </div>
            <div className="mb-2">
              <div>
                <small>
                  <b>Priority: </b>
                </small>
              </div>
              <Button size="sm" variant="primary">
                High
              </Button>
              <Button size="sm" variant="light">
                Medium
              </Button>
              <Button size="sm" variant="light">
                Low
              </Button>
            </div>
          </Col>
        </Row>
        <hr></hr>
        <div>
          <h6>
            <b>Description</b>
          </h6>
          <p>{taskDetails.description}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis tellus vitae libero auctor malesuada. Donec imperdiet mollis
            tortor ac pellentesque. Vestibulum cursus urna eu dolor dignissim
            accumsan. Sed feugiat sem vel nibh eleifend, id aliquet metus
            faucibus. Sed ut tellus tincidunt, volutpat turpis fermentum,
            ultricies elit. Cras feugiat massa ac erat dignissim, in tincidunt
            orci sagittis. Phasellus nec mi vitae risus tincidunt tincidunt.
            Suspendisse et tempus ex. Aliquam ut convallis nulla, sit amet
            tristique nisl. Cras quis leo non diam vehicula placerat.
            Pellentesque ac fringilla erat. Donec quis venenatis sapien. Nunc
            vitae nisl tempus, interdum neque quis, consectetur elit. Vestibulum
            in lacus euismod, laoreet magna eu, imperdiet eros. Donec ac libero
            eu leo eleifend consectetur. Sed vel ipsum arcu. Integer congue
            interdum facilisis. Pellentesque ac egestas erat. Cras sit amet
            rhoncus purus, vel varius quam. Maecenas consequat enim vitae tempor
            elementum. Etiam tempus porta justo, sit amet vestibulum massa
            sodales a. In hac habitasse platea dictumst. Phasellus auctor
            ullamcorper turpis at volutpat. Curabitur placerat velit a diam
            vestibulum, vitae lacinia magna gravida. Ut nec sapien dignissim,
            vestibulum quam eget, semper velit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Cras imperdiet id ante in ultrices. Etiam eu tristique massa, sit
            amet iaculis nulla. Phasellus vitae lorem metus. Cras id ultricies
            sapien. Mauris sed felis sit amet lectus bibendum posuere eu ut
            purus. Maecenas tristique nisl malesuada, rhoncus nisl at, ultricies
            sapien.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            quis tellus vitae libero auctor malesuada. Donec imperdiet mollis
            tortor ac pellentesque. Vestibulum cursus urna eu dolor dignissim
            accumsan. Sed feugiat sem vel nibh eleifend, id aliquet metus
            faucibus. Sed ut tellus tincidunt, volutpat turpis fermentum,
            ultricies elit. Cras feugiat massa ac erat dignissim, in tincidunt
            orci sagittis. Phasellus nec mi vitae risus tincidunt tincidunt.
            Suspendisse et tempus ex. Aliquam ut convallis nulla, sit amet
            tristique nisl. Cras quis leo non diam vehicula placerat.
            Pellentesque ac fringilla erat. Donec quis venenatis sapien. Nunc
            vitae nisl tempus, interdum neque quis, consectetur elit. Vestibulum
            in lacus euismod, laoreet magna eu, imperdiet eros. Donec ac libero
            eu leo eleifend consectetur. Sed vel ipsum arcu. Integer congue
            interdum facilisis.
          </p>
        </div>
        <div>
          <h6>
            <b>Attachments</b>
          </h6>
          <p>No item attached yet!</p>
        </div>
      </Col>
      <Col>
        <h6>
          <b>Activities</b>
        </h6>
        <div>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Comments"
            className="mb-2"
          >
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Form.Group controlId="formFileMultiple" className="mb-2">
            <Form.Label>Attachments (optional)</Form.Label>
            <Form.Control type="file" multiple size="sm" />
          </Form.Group>
          <Button style={{ marginRight: "0.25rem" }} variant="primary">
            Submit
          </Button>
          <Button variant="light">Cancel</Button>
        </div>
        <hr></hr>
        <div>
          <div>
            <div>
              <b>Dinesh Loganathan </b>
              <small>29/12/2021 18:34:29</small>
            </div>
            <div>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </div>
            <div></div>
          </div>
          <hr></hr>
          <div>
            <div>
              <b>Dinesh Loganathan </b>
              <small>29/12/2021 18:34:29</small>
            </div>
            <div>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </div>
            <div></div>
          </div>
          <hr></hr>
          <div>
            <div>
              <b>Dinesh Loganathan </b>
              <small>29/12/2021 18:34:29</small>
            </div>
            <div>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </div>
            <div></div>
          </div>
          <hr></hr>
          <div>
            <div>
              <b>Dinesh Loganathan </b>
              <small>29/12/2021 18:34:29</small>
            </div>
            <div>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </div>
            <div></div>
          </div>
          <hr></hr>
          <div>
            <div>
              <b>Dinesh Loganathan </b>
              <small>29/12/2021 18:34:29</small>
            </div>
            <div>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </div>
            <div></div>
          </div>
          <hr></hr>
        </div>
      </Col>
    </Row>
  );
};
export default TaskDetails;
