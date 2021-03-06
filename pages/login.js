import { useRouter } from "next/router";
import { login, validateLoginForm } from "../app/api/login";
import { apiUrls } from "../app/urls";
import { requests } from "../app/utilities/requests";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { useForm } from "../components/hooks/useForm";
import { Input } from "../components/Input";
const { Layout } = require("../components/Layout");

const LoginPage = () => {
  const router = useRouter();
  const form = useForm({
    id: "login",
    initialData: {
      username: "",
      password: "",
    },
  });

  const handleFormSubmit = (data) => {
    login(data)
      .then(() => {
        router.replace("/");
      })
      .catch((res) => {
        if (res.status > 0) {
          form.setErrors({ password: ["Invalid password."] });
        }
      });
  };

  const handleLoginGitHub = () => {
    requests.get(apiUrls.githubOAuth).then((data) => {
      window.open(data.url, "_self");
    });
  };

  return (
    <Layout title="Login">
      <Form
        form={form}
        onSubmit={handleFormSubmit}
        onValidation={validateLoginForm}
      >
        <Input
          form={form}
          autoComplete="username"
          label="Username"
          name="username"
          minLength={3}
          maxLength={50}
          type="text"
        />
        <Input
          form={form}
          autoComplete="current-password"
          label="Password"
          name="password"
          type="password"
        />
        <Button type="submit">Sign In</Button>
      </Form>
    </Layout>
  );
};

export default LoginPage;
