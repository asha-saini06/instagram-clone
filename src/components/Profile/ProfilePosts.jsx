import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Grid
      templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <ProfilePost img="/nobara.png" />
          <ProfilePost img="/jjk_trio.jpg" />
          <ProfilePost img="/maki.jpg" />
          <ProfilePost img="/jjk_trio1.png" />
          <ProfilePost img="/special_grade_sqaud.jpg" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;