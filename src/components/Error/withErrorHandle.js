import React from 'react'

function withErrorHandler(Component) {

    const FallBackComponent = ({error, errorInfo}) =>
        <div>
            <h2>Something went wrong.</h2>
            <details style={{whiteSpace: "pre-wrap"}}>
                {error && error.toString()}
                <br/>
                {errorInfo.componentStack}
            </details>
        </div>;

    class WithErrorHandler extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                hasError: false,
                error: null,
                errorInfo: null
            }
        }

        componentDidCatch(error, info) {
            this.setState({hasError: true, error, errorInfo: info});
            console.error(error, info, this.props)
        }

        render() {
            if (this.state.hasError) {
                const {error, errorInfo} = this.state;
                return (
                    <FallBackComponent
                        {...this.props}
                        error={error}
                        errorInfo={errorInfo}
                    />
                )
            }

            return <Component {...this.props} />
        }
    }

    WithErrorHandler.displayName = `withErrorHandler(${Component.displayName})`;
    return WithErrorHandler
}

export default withErrorHandler;
