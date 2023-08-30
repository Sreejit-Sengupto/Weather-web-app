import { SkeletonText, Stack, Skeleton } from "@chakra-ui/react";

function Loader() {
  return (
    <>
      <Stack marginTop={"2rem"}>
        <Skeleton
          height="40px"
          width={"80%"}
          margin={"auto"}
          display={"block"}
        />
        <Skeleton
          height="40px"
          width={"90%"}
          margin={"auto"}
          display={"block"}
        />
        <Skeleton
          height="40px"
          width={"90%"}
          margin={"auto"}
          display={"block"}
        />
      </Stack>
      <Stack marginTop={'5rem'}>
        <SkeletonText
          height="40px"
          width={"80%"}
          margin={"auto"}
          display={"block"}
        />
        <SkeletonText
          height="40px"
          width={"80%"}
          margin={"auto"}
          display={"block"}
        />
        <SkeletonText
          height="40px"
          width={"80%"}
          margin={"auto"}
          display={"block"}
        />
      </Stack>
    </>
  );
}

export default Loader;
