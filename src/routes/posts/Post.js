import React from 'react';

class Post extends React.Component {
    render() {
        const {post} = this.props;
        return( 
            <div className='post container-fluid col-xl-8 border-bottom'>
                <div className='row user'>
                          {post.username} 
                        <div className = "likesF container-fluid">
                            <div className='likeLabel'>
                                <b> Liczba polubień: {post.rate} </b>
                            </div>
                        </div>  
                </div>

                <div className='row location'>
                        {post.location}
                          
                </div>
                <div className = "row">
                    <img src={`${window.location.origin}/img/${post.img}`}  className = "fill img-responsive "  alt='brak zdjęcia' />
                </div>

                <div className='container-fluid col-xl-11'>
                    <div className='description'>
                        {post.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;