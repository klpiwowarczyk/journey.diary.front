import React from 'react';

class Post extends React.Component {
    render() {
        const {post} = this.props;
        console.log('post',post);
        return(
            <div className='post'>
                <div className='row user'>
                    <div className='col-md-4'>
                        Użytkownik: {post.username}
                    </div>
                </div>

                <div className='row location'>
                    <div className='col-md-4'>
                        Lokalizacja: {post.location}
                    </div>
                </div>
                <div className='row'>
                    <div className='postImg'>
                        <img src={`${window.location.origin}/img/${post.img}`} alt='brak zdjęcia' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3 likeLabel'>
                        <b> Liczba polubień: </b>
                    </div>
                    <div className='col-md-1 like'>
                        <b>{post.rate} </b>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        {post.description}
                    </div>
                </div>
                <div className='row'>

                </div>
            </div>
        );
    }
}

export default Post;