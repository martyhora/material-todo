import * as React from 'react';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import ModeEditIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import styles from '../styles';
import IssueFormContainer from '../containers/IssueFormContainer';
import { formatDate } from './IssueForm';
import { red500 } from 'material-ui/styles/colors';
import StarToggle from './StarToggle';

const Issue = ({
  issue,
  onIssueComplete,
  onEditToggle,
  onIssueAdd,
  onIssueRemove,
  onIssueStarToggle,
}) => (
  <Paper style={styles.issue} className="row">
    <div
      style={{
        float: 'left',
        paddingTop: '5px',
        marginTop: issue.isEdit ? '-25px' : 0,
        width: issue.isEdit ? '100%' : '84%',
      }}
    >
      {issue.isEdit ? (
        <IssueFormContainer
          onIssueAdd={onIssueAdd}
          isEdit={true}
          issue={issue}
        />
      ) : (
        <div className="row">
          <div
            style={{
              textDecoration: issue.completed ? 'line-through' : '',
              color: issue.completed ? 'rgba(0, 0, 0, 0.3)' : '#000',
              float: 'left',
            }}
          >
            {issue.text}
          </div>
          <div
            style={{
              marginTop: '0.3em',
              float: 'right',
              fontSize: '0.7em',
              color: new Date() >= issue.dueDate ? red500 : '#000',
            }}
          >
            {issue.dueDate ? `${formatDate(issue.dueDate)}` : ''}
          </div>
        </div>
      )}
    </div>

    {!issue.isEdit && (
      <div
        style={{
          float: 'right',
          marginTop: issue.isEdit ? '15px' : 0,
          width: '14%',
        }}
      >
        <StarToggle
          toggled={issue.isStarred}
          onToggle={() => {
            onIssueStarToggle(issue.id);
          }}
        />
        <ModeEditIcon
          style={styles.icon}
          onClick={() => {
            onEditToggle(issue.id);
          }}
        />
        <DeleteIcon
          style={styles.icon}
          onClick={() => {
            onIssueRemove(issue.id);
          }}
        />
        <Checkbox
          label=""
          checked={issue.completed}
          onCheck={() => {
            onIssueComplete(issue.id);
          }}
          style={{ ...styles.icon, width: '40px' }}
        />
      </div>
    )}
  </Paper>
);

export default Issue;
