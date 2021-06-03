// import { image, time } from 'faker';
// import react from 'react';

// const CommentDetail = ({ image, author, time, content, reply }) => {
//   return (
//     <div className="comment">
//       <a className="avatar">
//         <img src={image} alt="logo" />
//       </a>
//       <div className="content">
//         <a className="author">{author}</a>
//         <div className="metadata">
//           <span className="date">{time}</span>
//         </div>
//         <div className="text">{content}</div>
//         <div className="actions">
//           <a className="reply">{reply}</a>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { Component } from 'react';

class CommentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image, author, date, content, reply } = this.props;
    return (
      <div className="comment">
        <a className="avatar">
          <img src={image} alt="logo" />
        </a>
        <div className="content">
          <a className="author">{author}</a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{content}</div>
          <div className="actions">
            <a className="reply">{reply}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
