import { Component } from "react";
import ReactDOM from "react-dom";

const cartRoot = document.getElementById("cart-root");

class Portal extends Component {
	constructor(props) {
		super(props);
		this.el = document.createElement("div");
	}

	componentDidMount() {
		// The portal element is inserted in the DOM tree after
		// the Modal's children are mounted, meaning that children
		// will be mounted on a detached DOM node. If a child
		// component requires to be attached to the DOM tree
		// immediately when mounted, for example to measure a
		// DOM node, or uses 'autoFocus' in a descendant, add
		// state to Modal and only render the children when Modal
		// is inserted in the DOM tree.
		cartRoot.appendChild(this.el);
	}

	componentWillUnmount() {
		cartRoot.removeChild(this.el);
	}

	render() {
		// eslint-disable-next-line react/prop-types
		const { children } = this.props;
		return ReactDOM.createPortal(children, this.el);
	}
}

export default Portal;
