export const handlerSubscribe = {
  next: (value: any) => console.log("next", value),
  error: (error: any) => console.error("error", error),
  complete: () => console.log("complete"),
};
