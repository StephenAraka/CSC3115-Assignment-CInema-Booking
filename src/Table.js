import React, { Component, createElement } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

const tableData = [{
        name: 'John Smith',
        status: 'Employed',
    },
    {
        name: 'Randal White',
        status: 'Unemployed',
    },
    {
        name: 'Stephanie Sanders',
        status: 'Employed',
    },
    {
        name: 'Steve Brown',
        status: 'Employed',
    },
    {
        name: 'Joyce Whitten',
        status: 'Employed',
    },
    {
        name: 'Samuel Roberts',
        status: 'Employed',
    },
    {
        name: 'Adam Moore',
        status: 'Employed',
    },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
export default class TableExampleComplex extends Component {
    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: true,
        height: '300px',
    };

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled,
        });
    };

    handleChange = (event) => {
        this.setState({ height: event.target.value });
    };

    render() {
        return (
            createElement("div", {},
                createElement(Table, {
                        height: this.state.height,
                        fixedHeader: this.state.fixedHeader,
                        fixedFooter: this.state.fixedFooter,
                        selectable: this.state.selectable,
                        multiSelectable: this.state.multiSelectable
                    },

                    createElement(TableHeader, {
                            displaySelectAll: this.state.showCheckboxes,
                            adjustForCheckbox: this.state.showCheckboxes,
                            enableSelectAll: this.state.enableSelectAll
                        },
                        createElement(TableRow, {},
                            createElement(TableHeaderColumn, { colSpan: "3", tooltip: "Super Header", style: { textAlign: "center" } },
                                "Super Header"),
                        ), createElement(TableRow, {},
                            createElement(TableHeaderColumn, { tooltip: "The ID" }),
                            createElement(TableHeaderColumn, { tooltip: "The Name" }),
                            createElement(TableHeaderColumn, { tooltip: "Status" }),
                        )),
                    createElement(TableBody, {
                        displayRowCheckbox: this.state.showCheckboxes,
                        deselectOnClickaway: this.state.deselectOnClickaway,
                        showRowHover: this.state.showRowHover,
                        stripedRows: this.state.stripedRows
                    }, tableData.map((row, index) => {
                        createElement(TableRow, { key: index },
                            createElement(TableRowColumn, {}, index),
                            createElement(TableRowColumn, {}, row.name),
                            createElement(TableRowColumn, {}, row.status))
                    }))),
                createElement("div", { style: styles.propContainer },
                    createElement("h3", {}, "Table Properties"),
                    createElement(TextField, {
                        floatingLabelText: "Table Body Height",
                        defaultValue: this.state.height,
                        onChange: this.handleChange
                    }),
                    createElement(Toggle, {
                        name: "fixedHeader",
                        label: "Fixed Header",
                        onToggle: this.handleToggle,
                        defaultToggled: this.state.fixedHeader
                    }),
                    createElement(Toggle, {
                        name: "selectable",
                        label: "Selectable",
                        onToggle: this.handleToggle,
                        defaultToggled: this.state.selectable
                    }),
                    createElement(Toggle, {
                        name: "multiSelectable",
                        label: "Multi-Selectable",
                        onToggle: this.handleToggle,
                        defaultToggled: this.state.multiSelectable
                    }),
                    createElement(Toggle, {
                        name: "enableSelectAll",
                        label: "Enable SelectAll",
                        onToggle: this.handleToggle,
                        defaultToggled: this.state.enableSelectAll
                    }),
                    createElement(Toggle, {
                        name: "deselectOnClickaway",
                        label: "Deselect On Clickaway",
                        onToggle: this.handleToggle,
                        defaultToggled: this.state.deselectOnClickaway
                    }),
                    createElement(Toggle, {
                        name: "stripedRows",
                        label: "Stripe Rows",
                        onToggle: this.handleToggle,
                        defaultToggled: this.state.stripedRows
                    }),
                    createElement(Toggle, {
                        name: "showRowHover",
                        label: "Show Row Hover",
                        onToggle: this.handleToggle,
                        defaultToggled: this.state.showRowHover
                    }),
                    createElement(Toggle, {
                        name: "showCheckboxes",
                        label: "Show Checkboxes",
                        onToggle: this.handleToggle,
                        defaultToggled: this.state.showCheckboxes
                    })
                ))
        )
    }
}