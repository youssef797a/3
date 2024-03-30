import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';

import './Dashboard.scss';

const Dashboard = () => {


	return (
		<div>
			<div className='dashboard'>
				<div className='dashboard__left'>
					<Sidebar />
				</div>
				<div className='dashboard__right'>
					<div className='dashboard__rightContent'>
						<h2>Task Status Dashboard</h2>
						<div className='taskcount'>
							<div className='todo box'>Todo - {pendingTask.length}</div>
							<div className='done box'>Complete - {completedTask.length}</div>
						</div>
						<div className='createButton'>
							<Link to='/taskmanager' className='button'>
								Create Task
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;