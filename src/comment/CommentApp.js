/**
 * Created by limuzi on 2017/9/18.
 */
import React, {Component} from 'react'
import {withRouter} from 'react-router'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import '../scss/Comment.css'

export default class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            commentList: []
        }
    }

    fetchComment(list) {
        const array = this.state.commentList
        array.push(list)
        this.setState({commentList: array})
        this.props.history.push('/Calculator/' + 13)
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput getComponet={ this.fetchComment.bind(this)}/>
                <CommentList list={this.state.commentList}/>
            </div>
        )
    }
}
