import {
  Box,
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY="5px">
          <HStack>
            <Box width="32px" borderRadius={8}>
              <Skeleton height="32px" />
            </Box>
            <Box width="110px" borderRadius={8}>
              <SkeletonText height="32px" noOfLines={2} paddingY="4px" />
            </Box>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
