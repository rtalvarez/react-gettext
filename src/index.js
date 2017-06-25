import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';
import Textdomain from './Textdomain';

export default function withGettext(translations, pluralForm) {
	return (WrappedComponent) => {
		class WithGettext extends Textdomain {

			render() {
				return React.createElement(WrappedComponent, this.props);
			}

		}

		WithGettext.defaultProps = {
			catalog: translations,
			plural: pluralForm,
		};

		WithGettext.displayName = `withGettext(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

		return hoistNonReactStatic(WithGettext, WrappedComponent);
	};
}
