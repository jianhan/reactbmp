import React from 'react'

export default class Auth extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <form className="content">
            <div className="row">
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group label-floating is-empty">
                        <label className="control-label">First Name</label>
                        <input className="form-control" placeholder="" type="text"/>
                        <span className="material-input"></span></div>
                </div>
                <div className="col col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group label-floating is-empty">
                        <label className="control-label">Last Name</label>
                        <input className="form-control" placeholder="" type="text"/>
                        <span className="material-input"></span></div>
                </div>
                <div className="col col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group label-floating is-empty">
                        <label className="control-label">Your Email</label>
                        <input className="form-control" placeholder="" type="email"/>
                        <span className="material-input"></span></div>
                    <div className="form-group label-floating is-empty">
                        <label className="control-label">Your Password</label>
                        <input className="form-control" placeholder="" type="password"/>
                        <span className="material-input"></span></div>

                    <div className="form-group date-time-picker label-floating">
                        <label className="control-label">Your Birthday</label>
                        <input name="datetimepicker" value="10/24/1984"/>
                        <span className="input-group-addon">
														<svg className="olymp-calendar-icon"><use
                                                            xlinkHref="svg-icons/sprites/icons.svg#olymp-calendar-icon"></use></svg>
													</span>
                    </div>

                    <div className="form-group label-floating is-select">
                        <label className="control-label">Your Gender</label>
                        <div className="btn-group bootstrap-select form-control">
                            <button type="button" className="btn dropdown-toggle btn-secondary" data-toggle="dropdown"
                                    role="button" title="Male"><span
                                className="filter-option pull-left">Male</span>&nbsp;<span className="bs-caret"><span
                                className="caret"></span></span></button>
                            <div className="dropdown-menu open" role="combobox">
                                <ul className="dropdown-menu inner" role="listbox" aria-expanded="false">
                                    <li data-original-index="0" className="selected"><a tabIndex="0"
                                                                                        className=" dropdown-item"
                                                                                        data-tokens="null"
                                                                                        role="option"
                                                                                        aria-disabled="false"
                                                                                        aria-selected="true"><span
                                        className="text">Male</span><span
                                        className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                    <li data-original-index="1"><a tabIndex="0" className=" dropdown-item"
                                                                   data-tokens="null" role="option"
                                                                   aria-disabled="false" aria-selected="false"><span
                                        className="text">Female</span><span
                                        className="glyphicon glyphicon-ok check-mark"></span></a></li>
                                </ul>
                            </div>
                            <select className="selectpicker form-control" tabIndex="-98">
                                <option value="MA">Male</option>
                                <option value="FE">Female</option>
                            </select></div>
                        <span className="material-input"></span></div>

                    <div className="remember">
                        <div className="checkbox">
                            <label>
                                <input name="optionsCheckboxes" type="checkbox"/>
                                <span className="checkbox-material"><span className="check"></span></span>
                                I accept the <a href="01-LandingPage.html#">Terms and Conditions</a> of the website
                            </label>
                        </div>
                    </div>

                    <a href="01-LandingPage.html#" className="btn btn-purple btn-lg full-width">Complete
                        Registration!</a>
                </div>
            </div>
        </form>
    }
}