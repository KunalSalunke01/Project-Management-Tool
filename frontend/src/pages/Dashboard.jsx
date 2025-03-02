import { useState } from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import TaskManager from "../components/TaskManager";
import ProjectManager from "../components/ProjectManager";
import TeamMemberManager from "../components/TeamMembers"; // New Component for Team Members

function Dashboard() {
  const [showTaskManager, setShowTaskManager] = useState(false);
  const [showProjectManager, setShowProjectManager] = useState(false);
  const [showTeamMemberManager, setShowTeamMemberManager] = useState(false);
  const [projects, setProjects] = useState([]);

  // Toggle Projects View
  const toggleProjectManager = () => {
    setShowProjectManager(!showProjectManager);
  };

  // Toggle Team Members View
  const toggleTeamMemberManager = () => {
    setShowTeamMemberManager(!showTeamMemberManager);
  };

  return (
    <div className="border p-4 d-flex">
      {/* Left Sidebar - Workspaces */}
      <Container className="w-25 mt-4 border p-3">
        <h2 className="text-center mb-3">Workspaces</h2>
        <ListGroup>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ListGroup.Item key={index}>
                <strong>{project.name}</strong> - {project.description}
              </ListGroup.Item>
            ))
          ) : (
            <p className="text-center">No projects available</p>
          )}
        </ListGroup>
      </Container>

      {/* Main Dashboard Section */}
      <Container className="mt-4 w-75 border p-3">
        <h2 className="text-center mb-3">Dashboard</h2>

        <Row className="g-4">
          {/* Projects Card */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Projects</Card.Title>
                <Card.Text>Manage and track all your projects in one place.</Card.Text>
                <Button variant="primary" onClick={toggleProjectManager}>
                  {showProjectManager ? "Hide Projects" : "View Projects"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Tasks Card */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Tasks</Card.Title>
                <Card.Text>Assign, update, and track task progress efficiently.</Card.Text>
                <Button variant="success" onClick={() => setShowTaskManager(!showTaskManager)}>
                  {showTaskManager ? "Hide Tasks" : "View Tasks"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Team Members Card */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Team Members</Card.Title>
                <Card.Text>Assign team members to projects and track their roles.</Card.Text>
                <Button variant="warning" onClick={toggleTeamMemberManager}>
                  {showTeamMemberManager ? "Hide Team Members" : "View Team Members"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Add New Project Section */}
        <div className="text-center mt-4">
          <ProjectManager 
            projects={projects} 
            setProjects={setProjects} 
            showProjectManager={showProjectManager} 
            toggleProjectManager={toggleProjectManager} 
          />
        </div>

        {/* Task Manager - Visible Only When "View Tasks" is Clicked */}
        {showTaskManager && <TaskManager />}

        {/* Team Member Manager - Visible Only When "View Team Members" is Clicked */}
        {showTeamMemberManager && <TeamMemberManager />}
      </Container>
    </div>
  );
}

export default Dashboard;
