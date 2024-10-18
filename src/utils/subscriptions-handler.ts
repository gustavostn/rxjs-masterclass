export const handlerSubscribe = (subIndex: number) => {
  return {
    next: (value: any) => console.log(`next-${subIndex}`, value),
    error: (error: any) => console.error(`error-${subIndex}`, error),
    complete: () => console.log(`complete-${subIndex}`),
  };
};
