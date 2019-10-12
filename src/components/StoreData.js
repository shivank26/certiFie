import React from 'react'

class StoreData extends React.Component {
    render() {
        return (
            <div className="store-data">
                {/* <h1 className="StoreData">Store Data</h1> */}

                <div className="row">
                    <div className="col-md-6" style={{textAlign: 'right'}}>
                        <p>Enter the file path</p>
                    </div>
                    <div className="col-md-6" style={{textAlign: 'left'}}>
                        <input type="file" className="file-upload"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default StoreData;