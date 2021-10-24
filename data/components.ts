import Home from "@/components/Home";

interface Component {
  name: string;
  component: () => JSX.Element;
}

const components: Component[] = [
  {
    name: "Home",
    component: Home,
  },
];

export default components;
