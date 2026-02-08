import Text from "./components/text";

export default function App() {
  return (
    <div>
      <Text variant="body-sm-bold" className="text-pink-base">
        Olá mundo!
      </Text>
      <Text variant="body-md-bold" className="text-green-base">
        Olá Mundo!
      </Text>
    </div>
  );
}
