import { useState } from "react";
import { Button, Modal, Form, ListGroup } from "react-bootstrap";

const Projects = ({ workspace, projects, onAddProject, onSelectProject }) => {
  const [show, setShow] = useState(false);
  const [projectName, setProjectName] = useState("");

  const handleCreate = () => {
    if (projectName.trim()) {
      onAddProject({ id: projects.length + 1, name: projectName, workspaceId: workspace.id });
      setProjectName("");
      setShow(false);
    }
  };

  return (
    <div className="border p-3">
      <h3>Projects in {workspace.name}</h3>
      <ListGroup>
        {projects.map((project) => (
          <ListGroup.Item key={project.id} action onClick={() => onSelectProject(project)}>
            {project.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button className="mt-3" variant="primary" onClick={() => setShow(true)}>
        + Add Project
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;
