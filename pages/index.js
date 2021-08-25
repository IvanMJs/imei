import { useAuth } from "../lib/auth";

export default function Index() {
  const auth = useAuth();

  return auth.user ? (
    <div>
      <p>Hello! {auth.user.name}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <div>
      <button onClick={(e) => auth.signinWithGitHub()}>
        Sign in with github
      </button>
      <button onClick={(e) => auth.signinWithGoogle()}>
        Sign In with google
      </button>
    </div>
  );
}
