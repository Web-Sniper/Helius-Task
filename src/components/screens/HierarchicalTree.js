import React from 'react'

const HierarchicalTree = () => {
    return (
        <div className="container">
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header">Class A</div>
                    <div className="collapsible-body">
                        <ul className="collapsible">
                            <li>
                                <div className="collapsible-header">Class B</div>
                                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                                <div className="collapsible-header">Class C</div>
                                <div className="collapsible-body">

                                    <ul className="collapsible">
                                        <li>
                                            <div className="collapsible-header">Class D</div>
                                            <div className="collapsible-body">
                                                <ul className="collapsible">
                                                    <li>
                                                        <div className="collapsible-header">Class F</div>
                                                        <div className="collapsible-body">
                                                            <ul className="collapsible">
                                                                <li>
                                                                    <div className="collapsible-header">Class J</div>
                                                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                                                </li>
                                                                <li>
                                                                    <div className="collapsible-header">Class K</div>
                                                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="collapsible-header">Class G</div>
                                                        <div className="collapsible-body">

                                                            <ul className="collapsible">
                                                                <li>
                                                                    <div className="collapsible-header">Class L</div>
                                                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                                                </li>
                                                                <li>
                                                                    <div className="collapsible-header">Class M</div>
                                                                    <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="collapsible-header">Class E</div>
                                            <div className="collapsible-body">
                                                <ul className="collapsible">
                                                    <li>
                                                        <div className="collapsible-header">Class H</div>
                                                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                                    </li>
                                                    <li>
                                                        <div className="collapsible-header">Class I</div>
                                                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                </li>


            </ul>
        </div>
    )
}

export default HierarchicalTree