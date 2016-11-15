import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = state => ({
	curriculum: state.curriculum
});

const mapDispatchToProps = dispatch => ({
  getCode: () => { dispatch({ type: "GET_GITHUB_CODE" }); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View);