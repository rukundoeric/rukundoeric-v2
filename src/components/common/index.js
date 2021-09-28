import FloatingButton from './_FloatingButton'; 

const Container = ({children, className, ...more}) => {
  return(
    <div
      className={`d-flex flex-wrap p-3 ${className}`}
     {...more}
    >
      {children}
    </div>
  )
}

const Content = ({children, className, ...more}) => {
  return(
    <div
      className={`p-3 ${className}`}
     {...more}
    >
      {children}
    </div>
  )
}


const Flex = ({children, row, column, center, wrap, className, ...more}) => {
  const direction = (row, column) => {
    if(!row && column){
      return 'flex-column'
    } else if(row && !column){
      return 'flex-row'
    } else {
      return ''
    }
  }
  let fdirection = direction(row, column)
  let fwrap = wrap ? 'flex-wrap ' : '';
  let fcenter = center ? 'justify-content-center align-items-center' : '';
  return(
    <div 
     className={`d-flex p-3 ${fdirection} ${fwrap} ${fcenter} ${className}`}
     {...more}
     >
      {children}
    </div>
  )
}


export {
  Container,
  Flex,
  FloatingButton,
  Content
}