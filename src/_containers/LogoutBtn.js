import {mapUserLogoutToProps} from '../_maps/auth'
import LogoutBtn from '../layout/LogoutBtn'
import {connect} from 'react-redux'

export default connect(
    null,
    mapUserLogoutToProps
)(LogoutBtn)