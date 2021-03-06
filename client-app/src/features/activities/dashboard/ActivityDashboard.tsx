import React from 'react';
import { Grid } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../../activities/details/ActivityDetails';
import ActivityForm from '../../activities/form/ActivityForm';

interface IProps {
	activities: IActivity[];
	selectActivity: (id: string) => void;
	selectedActivity: IActivity | null;
	setSelectedActivity: (activity: IActivity | null) => void;
	editMode: boolean;
	setEditMode: (editMode: boolean) => void;
	createActivity: (activity: IActivity) => void;
	editActivity: (activity: IActivity) => void;
	deleteActivity: (id: string) => void;
}

export const ActivityDashboard: React.FC<IProps> = ({
	activities,
	selectActivity,
	selectedActivity,
	setSelectedActivity,
	editMode,
	setEditMode,
	createActivity,
	editActivity,
	deleteActivity,
}) => {
	return (
		<Grid>
			<Grid.Column width={10}>
				<ActivityList
					activities={activities}
					selectActivity={selectActivity}
					deleteActivity={deleteActivity}
				/>
			</Grid.Column>
			<Grid.Column width={6}>
				{selectedActivity && !editMode && (
					<ActivityDetails
						activity={selectedActivity}
						setSelectedActivity={setSelectedActivity}
						setEditMode={setEditMode}
					/>
				)}
				{editMode && (
					<ActivityForm
						key={selectedActivity?.id || 0}
						setEditMode={setEditMode}
						activity={selectedActivity!}
						createActivity={createActivity}
						editActivity={editActivity}
					/>
				)}
			</Grid.Column>
		</Grid>
	);
};
