  export interface Validatable {
    value: string | number;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export function validate(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {
      isValid =
        isValid && validatableInput.value.toString().trim().length !== 0;
    }
    // if(validatableInput.minLength !== undefined && typeof validatableInput.value === 'string')//厳密なチェックの書き方(undefined)
    if (
      validatableInput.minLength != null &&
      typeof validatableInput.value === "string"
    ) {
      //こちらの方が少し安全らしい
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    //ここまでで最小文字数のチェックはおｋ
    //ここからはMaxLengthのチェック
    if (
      validatableInput.maxLength != null &&
      typeof validatableInput.value === "string"
    ) {
      //こちらの方が少し安全らしい
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    //最小値のチェック
    if (
      validatableInput.min != null &&
      typeof validatableInput.value === "number"
    ) {
      //こちらの方が少し安全らしい
      isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    //最大値のチェック
    if (
      validatableInput.max != null &&
      typeof validatableInput.value === "number"
    ) {
      //こちらの方が少し安全らしい
      isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
  }

