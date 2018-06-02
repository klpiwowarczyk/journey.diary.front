import React from 'react';
import FileReaderInput from 'react-file-reader-input';




class AddPostModal extends React.Component {
    constructor() {
        super();
        this.state = {
            post: {
                userName: '',
                img: '',
                location: '',
                description: '',
                rate: 0
            }
        };
    }

    handleChangeImg = (e, results) => {
        results.forEach(result => {
            const [e, file] = result;
            this.setState({
                post: {
                    ...this.state.post,
                    img: file.name
                }
            });
        });
    };

    handleChangePostFactory = (e) => {
        this.setState({
            post: {
                ...this.state.post,
                [e.target.name]: e.target.value
            }
        });
    };

    render() {
        const {post} = this.state;
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
                                    <textarea
                                        className="form-control"
                                        placeholder='Opis zdjęcia'
                                        name='description'
                                        onChange={this.handleChangePostFactory}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Lokalizacja"
                                        name='location'
                                        onChange={this.handleChangePostFactory}
                                    />
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Twój nick"
                                        name='userName'
                                        onChange={this.handleChangePostFactory}
                                    />
                                </div>
                            </form>
                            <div className='row'>
                                <form>
                                    <FileReaderInput as="binary" id="my-file-input"
                                                     onChange={this.handleChangeImg}>
                                        <button className="btn" >Wybierz zdjęcie</button>
                                    </FileReaderInput>
                                    <label htmlFor="my-file-input">{post.img || ''}</label>
                                </form>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn" data-dismiss="modal">Anuluj</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.props.addPost(post)}
                                data-dismiss="modal"
                            >
                                Dodaj
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default AddPostModal;