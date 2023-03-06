/* eslint-disable-next-line */
export interface Component1Props { }
// 15
export function Component1(props: Component1Props) {
  return (
    <div>
      <h1>Welcome to Component1! <span data-testid="now">{Date.now()}</span></h1>
    </div>
  );
}

export default Component1;
