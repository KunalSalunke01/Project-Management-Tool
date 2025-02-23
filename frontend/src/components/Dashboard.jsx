import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TaskManager from "./Taskmanager";

function Dashboard() {
  return (
    <div className="border p-4 d-flex">
      <Container className="w-25 mt-4 border">
        <h2 className="text-center mb-4">Workspaces</h2>
      </Container>
      <Container className="mt-4 w-75 border">
        <h2 className="text-center mb-4">Dashboard</h2>

        <Row className="g-4">
          {/* Projects Card */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Projects</Card.Title>
                <Card.Text>Manage and track all your projects in one place.</Card.Text>
                <Button variant="primary">View Projects</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tasks Card */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Tasks</Card.Title>
                <Card.Text>Assign, update, and track task progress efficiently.</Card.Text>
                <Button variant="success">View Tasks</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Team Members Card */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Team Members</Card.Title>
                <Card.Text>Assign team members to projects and track their roles.</Card.Text>
                <Button variant="warning">Manage Team</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Add New Project Section */}
        <div className="text-center mt-4">
          <Button variant="dark" size="lg">+ Add New Project</Button>
        </div>

        <TaskManager/>
      </Container>
    </div>
  );
}

export default Dashboard;
