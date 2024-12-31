import { Button, Text } from "@gluestack-ui/themed"
import React, { ComponentProps } from "react"

type Props = ComponentProps<typeof Button> & {
  name: string
  isActive: boolean
}

export const Group: React.FC<Props> = ({ name, isActive, ...rest }) => {
  return (
    <Button
      marginRight={3}
      minWidth="$24"
      h="$10"
      bg="$gray600"
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      borderColor="$green500"
      borderWidth={isActive ? 1 : 0}
      sx={{
        ":active": {
          borderWidth: 1,
        },
      }}
      {...rest}
    >
      <Text
        color={isActive ? "$green500" : "$gray200"}
        textTransform="uppercase"
        fontSize="$xs"
        fontFamily="$heading"
      >
        {name}
      </Text>
    </Button>
  )
}
