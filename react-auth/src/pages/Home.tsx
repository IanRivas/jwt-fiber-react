type props = {
  name: string;
};

export default function Home(props: props) {
  const { name } = props;
  return <div>{name ? 'hi ' + name : 'You are not logged in'}</div>;
}
