import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Nicole Bidigaray</Text>
                    <Text color="gray.300" fontSize="small">
                        nicolenatsume@gmail.com
                    </Text>
                </Box>
            )}
            
            <Avatar size="md" name="Nicole Bidigaray" src="https://scontent.fcgh37-1.fna.fbcdn.net/v/t1.6435-9/177829244_3749695908472838_3019077077704429184_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IuEug4CIE6sAX_nbQIw&_nc_ht=scontent.fcgh37-1.fna&oh=cd5f58d9c817c9bb7a64343aa5fdc5b7&oe=60DC9B18" />
        </Flex>
    );
}