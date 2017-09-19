/**
 * Created by limuzi on 2017/9/18.
 */
import React, {Component} from 'react'

export default class CommentInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            content: '',
        }
    }

    handleUsernameChange(event) {
        this.setState({userName: event.target.value})
    }

    handleContentChange(event) {
        this.setState({content: event.target.value})
    }

    submit() {
        const name = {userName: this.state.userName, content: this.state.content}
        this.props.getComponet(name)
        this.setState({userName: '', content: ''})
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input type="text" value={this.state.userName}
                               onChange={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea type="text" value={this.state.content}
                                  onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={() => this.submit()}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
