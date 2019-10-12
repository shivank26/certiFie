import React from 'react'

class ShowData extends React.Component {
    render() {
        return (
            <div className="show-data container">
                <table className="data-table">
                    <tr>
                        <th>ID Number</th>
                        <th>Name</th>
                        <th>Mail-ID</th>
                    </tr>
                </table>
            </div>
        )
    }
}

export default ShowData;