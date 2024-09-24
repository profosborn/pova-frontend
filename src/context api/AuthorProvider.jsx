import { createContext, useState } from "react";

export const AuthorContext = createContext();

// eslint-disable-next-line react/prop-types
function AuthorProvider({children}) {
  const [author, setAuthor] = useState("Author Name");

  return (
    <AuthorContext.Provider value={{ author, setAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
}


export default AuthorProvider;
