function App()
{
  return (
    <div>
      <Student name="Arshiya"/>
      <Student name="Pandu"/>
    </div>
  );
}
function Student(props)
{
  return <h2>Hello, {props.name}!</h2>;
}
export default App;