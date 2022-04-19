```ts
type Action = "get" | "clean" | "set";
```

# Actions

- get: put the value of the hook (token or email) in the hook where is called. Example:

```ts
  export const = useExample = () =>{
    const { token, setTokenAction } = useToken();

    console.log(token) //token here is undefined

    //the token start empty and i want to get the value of the local storage:
    useEffect(()=>{
      setTokenAction("get");
    },[])
    //this action put the value of the localStorage in this variable "token".
    console.log(token) //token here have a value.
  }
```

- set: prepare the hook to recieve a string and save it in localstorage. Example:

```ts
  export const = useExample = () =>{
    const {token, setTokenAction,setToken } = useToken();

    //data come from another part of the code, an API call of example.
    const {tokenData} = data.token;
    useEffect(()=>{
      console.log(token) //here is empty
      setTokenAction("set");
      setToken(tokentokenData);
      setTokenAction("get");
      console.log(token) //here have the value of "tokenData"
    },[])
  }
```

- clean: delete the values saved in the item. In this case might be "email" or "token"

```ts
  export const = useExample = () =>{
    const {token, setTokenAction } = useToken();

    useEffect(()=>{
      setTokenAction("get");
      console.log(token) //here have a value
      setTokenAction("clean");
      setTokenAction("get");
      console.log(token) //here is empty
    },[])
  }
```

The same works for useEmailStorage() instead seToken()
