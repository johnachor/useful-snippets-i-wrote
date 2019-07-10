/*
    Nest child components in an ErrorBoundary to catch exceptions as they travel up the tree.
    Can be used to conditionally render error messages or other alternate displays.
*/

import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
		hasError: false,
		error: null,
		errorInfo: null
	}
	
	componentDidCatch(error, info) {
		// Can insert logging for caught exception here
		this.setState({ hasError: true, error: error, errorInfo: info });
	}

	render() {
		if (this.state.hasError) {
            // render an error message component instead of children?
            return null;
		} else {
			return this.props.children;
		}
	}
}