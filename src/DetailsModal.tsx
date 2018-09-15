import * as React from 'react';

import './DetailsModal.css';

interface IProps {
  active: boolean,
  onClose: () => any,
}
class DetailsModal extends React.PureComponent<IProps> {
  public render() {
    const cn = (name: string) => {
      if (this.props.active) {
        return name;
      } else {
        return name.split(' ').map(x => `${x}--hidden ${x}`).join(' ');
      }
    }
    return <div className={cn("DetailsModal")} onClick={this.handleClick}>
      <div className={cn("DetailsModal__inner")}>
        <div className={cn("DetailsModal__card")}>
          Hello
        </div>
        <div className={cn("DetailsModal__card")}>
          Hello
        </div>
      </div>
    </div>;
  }

  private handleClick = () => {
    this.props.onClose();
  }
}
export default DetailsModal;
