/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */

const Container = ({ children, className, ...more }) => (
  <div
    className={`d-flex flex-wrap ${className}`}
    {...more}
  >
    {children}
  </div>
);

const FloatingButton = ({
  elmId, styleClass, icon, title,
}) => (
  <Flex
    id={elmId}
    title={title || ''}
    className={`${styleClass || 'icon'}`}
    center
    onClick={e => e}
  >
    <span>
      <i className={icon} />
    </span>
  </Flex>
);

const Content = ({ children, className, ...more }) => (
  <div
    className={`${className}`}
    {...more}
  >
    {children}
  </div>
);

const Flex = ({
  children, row, column, center, between, wrap, className, ...more
}) => {
  const direction = (row, column) => {
    if (!row && column) {
      return 'flex-column';
    } if (row && !column) {
      return 'flex-row';
    }
    return '';
  };
  const fdirection = direction(row, column);
  const fwrap = wrap ? 'flex-wrap ' : '';
  const fcenter = center ? 'justify-content-center align-items-center' : '';
  const fbetween = between ? 'justify-content-between' : '';
  return (
    <div
      className={`d-flex p-1 ${fdirection} ${fwrap} ${fcenter} ${fbetween} ${className}`}
      {...more}
    >
      {children}
    </div>
  );
};

const TextInput = ({
  title, icon, value = '', placeholder, type, name,
}) => {
  const paddingRight = icon ? { paddingRight: '40px' } : { paddingRight: '2px' };
  return (
    <Content className="textInput col mt-2">
      <Content>
        <label>{title}</label>
      </Content>
      <Content className="textInputField">
        {icon && (<span><i className={icon} /></span>)}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
        // value={value}
          className="pl-2"
          style={paddingRight}
        />
      </Content>
    </Content>
  );
};

const SelectInput = ({
  title, options, name,
}) => (
  <Content className="textInput col mt-2">
    <Content>
      <label>{title}</label>
    </Content>
    <Content className="textInputField">
      <select name={name} className="form-select pr-3" aria-label="Default select example">
        {/* <option selected>Open this select menu</option> */}
        {options.map(option => (<option key={option} value={option}>{option}</option>))}
      </select>
    </Content>
  </Content>
);

const TextArea = ({
  title, placeholder, name,
}) => (
  <Content className="textInput col mt-2">
    <Content>
      <label>{title}</label>
    </Content>
    <Content className="textInputField">
      <textarea
        placeholder={placeholder}
        name={name}
        // value={value}
        className="pl-2"
      />
    </Content>
  </Content>
);

export {
  Container,
  Flex,
  FloatingButton,
  Content,
  TextInput,
  SelectInput,
  TextArea,
};
