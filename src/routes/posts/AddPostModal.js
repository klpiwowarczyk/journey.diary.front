import React from 'react';

class AddPostModal extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Dodaj post</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>

                        <div className="modal-body">
                            <form className='row'>
                                <div className="form-group col-md-6 inputDescription">
                                    <textarea className="form-control" placeholder='Opis zdjęcia' />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control mb-3"
                                            placeholder="Lokalizacja" />
                                    <input type="text" className="form-control"
                                           placeholder="Twój nick" />
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn" data-dismiss="modal">Anuluj</button>
                            <button type="button" className="btn btn-primary">Dodaj</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddPostModal;