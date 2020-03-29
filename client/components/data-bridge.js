const dataBridge = (WrappedComponent) => {
  return () => (
    <WrappedComponent data={data} />
  );
}

export default dataBridge;
