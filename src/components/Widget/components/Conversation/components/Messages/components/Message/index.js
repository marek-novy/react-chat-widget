import React, { PureComponent } from "react";
import reactRender from "@bbob/react/es/render";
import reactPreset from "@bbob/preset-react/es";

import { PROP_TYPES } from "@constants";

import "./styles.scss";

class Message extends PureComponent {
  bbToReact = input => reactRender(input, reactPreset());

  render() {
    const textRenderProp = this.bbToReact(this.props.message.get("text"));

    return (
      <div className={`rcw-${this.props.message.get("sender")}`}>
        <div className="rcw-message-text">{textRenderProp}</div>
      </div>
    );
  }
}

Message.propTypes = {
  message: PROP_TYPES.MESSAGE
};

export default Message;
