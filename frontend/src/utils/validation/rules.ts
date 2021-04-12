export const requiredRule = (message?: string) => ({
  required: {
    value: true,
    message: message ?? 'Поле обязательно для заполнения',
  },
})

export const minLength = (length: number, message?: string) => ({
  minLength: {
    value: length,
    message: message ?? `Поле должно состоять минимум из ${length} символов`,
  },
})
