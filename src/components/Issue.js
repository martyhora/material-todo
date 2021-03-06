import * as React from 'react';
import Paper from 'material-ui/Paper';
import styles from '../styles';
import IssueFormContainer from '../containers/IssueFormContainer';
import { formatDate } from './IssueForm';
import IssueActions from './IssueActions';
import { redColor } from '../styles/colors';

const Issue = ({
  issue,
  issueFulltext,
  onIssueComplete,
  onEditToggle,
  onIssueAdd,
  onIssueRemove,
  onIssueStarToggle,
}) => (
  <Paper style={styles.issue} className="row">
    <div className={`issue ${issue.isEdit ? 'issue--edit' : ''}`}>
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
              color: new Date() >= issue.dueDate ? redColor : '#000',
            }}
          >
            {issue.dueDate ? `${formatDate(issue.dueDate)}` : ''}
          </div>
        </div>
      )}
    </div>

    {!issue.isEdit && (
      <IssueActions
        issue={issue}
        onIssueStarToggle={onIssueStarToggle}
        onEditToggle={onEditToggle}
        onIssueRemove={onIssueRemove}
        onIssueComplete={onIssueComplete}
      />
    )}
  </Paper>
);

export default Issue;
