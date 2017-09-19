/**
 * Created by limuzi on 2017/9/18.
 */
import React, {Component} from 'react'
import '../scss/Comment.css'

export default class CommentList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const itemList = this.props.list.map((item, i) => {
            return <div className='comment' key={i}>
                <div className='comment-user'>
                    <span>{item.userName}:</span>
                </div>
                <p>{item.userName}</p>
            </div>
        })
        return (
            <div>
                {itemList}
            </div>


        )
    }
}
