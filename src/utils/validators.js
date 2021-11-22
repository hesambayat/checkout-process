export const email = value => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(value ?? '')

export const github = value => /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(value ?? '')

export const required = value => !!(typeof value === 'string' && value.trim() !== '')
