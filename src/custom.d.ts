declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.json' {
  export const CATAGORIES: object[];
}
