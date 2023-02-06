import { Tag } from 'rabbit-ui';

export default () => {
  const handleClick = () => {
    console.log('close');
  };

  return (
    <div>
      <Tag text="Tag1" closable onClose={handleClick} />
      <Tag text="Tag2" closable={false} />
      <br />
      <Tag text="Tag0" color="primary" />
      <Tag text="Tag1" color="success" />
      <Tag text="Tag2" color="warning" />
      <Tag text="Tag3" color="danger" />
      <br />
      <Tag text="Tag1" size="small" />
      <Tag text="Tag2" />
      <Tag text="Tag3" size="large" />
    </div>
  );
};
