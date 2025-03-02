import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const TeamMemberManager = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "Alice", role: "Developer" },
    { id: 2, name: "Bob", role: "Designer" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", role: "" });

  // Handle adding a new team member
  const handleAddMember = () => {
    setTeamMembers([...teamMembers, { id: teamMembers.length + 1, ...newMember }]);
    setShowModal(false);
  };

  return (
    <div className="mt-4">
      <h4>Team Members</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="dark" onClick={() => setShowModal(true)}>
        + Add Team Member
      </Button>

      {/* Add Team Member Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Team Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter name" 
                onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter role" 
                onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="success" onClick={handleAddMember}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TeamMemberManager;
