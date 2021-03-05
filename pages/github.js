import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { apiUrls } from "../app/urls";
import { requests } from "../app/utilities/requests";
import Cookies from "js-cookie";

const GitHubPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.code && router.query.state) {
      requests.post(apiUrls.githubOAuth, router.query).then((data) => {
        Cookies.set("auth_token", data.token);
        router.replace("/");
      });
    }
  }, [router.query]);

  return <div></div>;
};

export default GitHubPage;
