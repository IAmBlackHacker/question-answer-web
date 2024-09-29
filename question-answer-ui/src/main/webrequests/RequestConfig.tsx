export function optionProvider(props:any) {
  if(props.user === undefined) {
    console.warn("User not logged in");
  }

  return {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': props.user === undefined ? "": props.user.token
    },
    withCredentials: true,
  };
}
