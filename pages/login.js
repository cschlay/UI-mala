import { apiUrls } from "../app/urls";
import { requests } from "../app/utilities/requests";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { useForm } from "../components/hooks/useForm";
import { Input } from "../components/Input";

const { Layout } = require("../components/Layout");

const LoginPage = () => {
  const form = useForm({
    id: "login",
    initialData: {
      username: "",
      password: "",
    },
  });

  const handleFormSubmit = () => {
    console.info("Login data submitted.");

    return true;
  };

  const handleLoginGitHub = () => {
    requests.get(apiUrls.githubOAuth).then((data) => {
      window.open(data.url, "_self");
    });
  };

  return (
    <Layout>
      <Form onSubmit={handleFormSubmit}>
        <Input label="Username" name="username" form={form} />
        <Input label="Password" name="password" form={form} />
        <Button type="submit">Sign In</Button>
      </Form>
    </Layout>
  );
};

export default LoginPage;
