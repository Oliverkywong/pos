const Panel = (props:{ children:any, toggle:any, event:any }) => {
    return (
      <section
      className={`panel ${props.toggle}`}
          onClick={props.event}
        >
        {props.children}
      </section>
    );
  };

  export default Panel;