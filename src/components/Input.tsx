import { ComponentProps } from "react"
import {
  Input as GluestackInput,
  InputField,
  FormControl,
  FormControlError,
  FormControlErrorText,
} from "@gluestack-ui/themed"

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean
  errorMessage?: string | null
  isInvalid?: boolean
}

export const Input: React.FC<Props> = ({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...rest
}) => {
  const invalid = !!errorMessage || isInvalid
  return (
    <FormControl isInvalid={invalid} mb={invalid ? "$2" : "$0"} w="$full">
      <GluestackInput
        h="$14"
        borderWidth="$0"
        borderRadius="$md"
        $focus={{
          borderWidth: "$1",
          borderColor: invalid ? "$red500" : "$green500",
        }}
        $invalid={{
          borderWidth: "$1",
          borderColor: "$red500",
        }}
        isInvalid={invalid}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
      >
        <InputField
          px="$4"
          bg="$gray700"
          color="$white"
          fontFamily="$body"
          placeholderTextColor="$gray300"
          {...rest}
        />
      </GluestackInput>

      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}
