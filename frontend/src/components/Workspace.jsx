<div className="border p-3">
  <h3>Workspaces</h3>
  <ul className="list-group">
    {workspaces.map((workspace) => (
      <li key={workspace.id} className="list-group-item" onClick={() => onSelectWorkspace(workspace)}>
        {workspace.name}
      </li>
    ))}
  </ul>
  <button className="btn btn-primary mt-3" onClick={() => setShow(true)}>+ Add Workspace</button>
  {show && (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Workspace</h5>
            <button type="button" className="close" onClick={() => setShow(false)}>&times;</button>
          </div>
          <div className="modal-body">
            <label>Workspace Name</label>
            <input type="text" className="form-control" value={workspaceName} onChange={(e) => setWorkspaceName(e.target.value)} />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
            <button className="btn btn-primary" onClick={handleCreate}>Create</button>
          </div>
        </div>
      </div>
    </div>
  )}
</div>
