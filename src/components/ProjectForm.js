import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAddIcon from 'material-ui/svg-icons/content/add';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import styles from '../styles';
import { red500 } from 'material-ui/styles/colors';

const validateForm = project => project.name.trim().length > 0;

const ProjectForm = ({
  newProject,
  error,
  dialogOpen,
  onNewProjectNameUpdate,
  onProjectAdd,
  onProjectSubmit,
  removeProject,
  toggleDialog,
  cancelDialog,
}) => (
  <div>
    <Dialog
      title={`${newProject.id ? 'Edit' : 'Add a new'} project`}
      modal={true}
      open={dialogOpen}
    >
      <TextField
        floatingLabelText="Project name"
        style={{ ...styles.textField, width: newProject.id ? '60%' : '65%' }}
        fullWidth={true}
        value={newProject.name}
        onChange={e => {
          onNewProjectNameUpdate(e.currentTarget.value);
        }}
        onKeyPress={e => {
          onProjectSubmit(e.key);
        }}
        errorText={error ? 'Project description is required' : ''}
      />
      {newProject.id && (
        <DeleteIcon
          style={{ ...styles.icon, marginTop: '35px', marginRight: '10px' }}
          onClick={() => {
            removeProject(newProject.id);
          }}
          color={red500}
        />
      )}
      <RaisedButton
        className="add-issue-button"
        label="Cancel"
        onClick={cancelDialog}
        style={{ ...styles.addButton, float: 'left', marginRight: '15px' }}
        secondary={true}
      />
      <RaisedButton
        className="add-issue-button"
        label={`${newProject.id ? 'Edit' : 'Add'} project`}
        onClick={onProjectAdd}
        style={styles.addButton}
        primary={true}
        disabled={!validateForm(newProject)}
      />
    </Dialog>

    <FloatingActionButton
      style={styles.addProjectButton}
      onClick={toggleDialog}
      secondary={true}
    >
      <ContentAddIcon />
    </FloatingActionButton>
  </div>
);

export default ProjectForm;
