export const config = {
	hostname: 'https://visitor.codissia.com',
	//hostname: 'http://localhost:8080',
	srchDelay: 5,
	signupNotifyStyle: {
	  NotificationItem: { 
	    DefaultStyle: { 
	      fontSize: '15px',
	      width: '150%',
	      height: '100%',
	      padding: '20px',
	      margin: '0 auto',
	      marginTop: '100px',
	    }
	  }
	},
	notifyStyle: {
	  NotificationItem: { 
	    DefaultStyle: { 
	      fontSize: '15px',
	      width: '100%',
	      height: '100%',
	      padding: '20px',
	      margin: '0 auto',
	      marginTop: '100px',
	    }
	  }
	},
	tableLimit: {
		offset: 0,
        limit: 10
	},
	Pagination: {
		perPage: 10,
    	pageCount: 0,
    	offset: 0,
    	limit: 10
	},
	NoOfRows: [{'value':10,'label':10},{'value':30,'label':30},{'value':50,'label':50},{'value':100,'label':100}],

};

export const notifyMsg = (msg, level, children) => {
  	return {
		message: msg,
		level: level,
		children: children,
		position: 'tc',
		autoDismiss: 7
	}
};