import axios from "axios"
const testdatamodelsAPI = axios.create({
  baseURL: "https://test-data-models-3-134938.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return testdatamodelsAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return testdatamodelsAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return testdatamodelsAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_test_list(payload) {
  return testdatamodelsAPI.get(`/api/v1/test/`)
}
function api_v1_test_create(payload) {
  return testdatamodelsAPI.post(`/api/v1/test/`, payload)
}
function api_v1_test_retrieve(payload) {
  return testdatamodelsAPI.get(`/api/v1/test/${payload.id}/`)
}
function api_v1_test_update(payload) {
  return testdatamodelsAPI.put(`/api/v1/test/${payload.id}/`, payload)
}
function api_v1_test_partial_update(payload) {
  return testdatamodelsAPI.patch(`/api/v1/test/${payload.id}/`, payload)
}
function api_v1_test_destroy(payload) {
  return testdatamodelsAPI.delete(`/api/v1/test/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return testdatamodelsAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return testdatamodelsAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testdatamodelsAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return testdatamodelsAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testdatamodelsAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return testdatamodelsAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return testdatamodelsAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return testdatamodelsAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return testdatamodelsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testdatamodelsAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return testdatamodelsAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_test_list,
  api_v1_test_create,
  api_v1_test_retrieve,
  api_v1_test_update,
  api_v1_test_partial_update,
  api_v1_test_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
