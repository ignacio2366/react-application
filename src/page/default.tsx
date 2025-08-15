import { ContainerMain, ContainerWrapper, SubmitButton } from "@/components";

const DefaultPage = () => {
  return (
    <div className="App">
      <ContainerWrapper>
        <ContainerMain>
          <h1>Default Page</h1>
          <SubmitButton
            label="test"
            onClick={() => {
              console.log("test");
            }}
          />
        </ContainerMain>
      </ContainerWrapper>
    </div>
  );
};
export default DefaultPage;
