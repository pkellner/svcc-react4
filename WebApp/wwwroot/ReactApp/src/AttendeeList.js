import React from 'react';
import createReactClass from 'create-react-class';


const AttendeeList = createReactClass({


    render() {
        return (
            <table>
                {this.props.attendeeArray.map(
                    function(vv){
                        return (
                            <tr>
                                <td>
                                    {vv.userFirstName}
                                </td>
                                <td>
                                    {vv.userLastName}
                                </td>
                                <td>
                                    {vv.paidAmount}
                                </td>
                                <td>
                                    {vv.attendeesId}
                                </td>
                            </tr>
                        );
                    }
                )}
            </table>
        )
    }
});

export default AttendeeList;
