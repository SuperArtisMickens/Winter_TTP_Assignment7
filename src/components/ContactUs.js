import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EmailMessage from './EmailMessage';

class ContactUs extends React.Component {
	render() {
		return (
			<Card>
				<CardContent>
					<Typography>
						Contact Us
					</Typography>
					<EmailMessage />
				</CardContent>
				<CardActions>
					<Button variant="contained" color="primary">
						Send Message
					</Button>
				</CardActions>
			</Card>
		);
	}
}

export default ContactUs;