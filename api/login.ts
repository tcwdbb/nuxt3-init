export interface LoginResultModel {
  id: number
  user_name: string
  real_name: string
  user_nickname: string
  mobile: string
  status: string
  sex: string
  last_login_ip: string
  last_login_time: number
  birthday: string
  avatar: string
  avatar_frame: string
  grade_id: string
  province_id: number
  city_id: number
  area_id: number
  score: number
  days: number
  updated_at: string
  // orders: Orders[]
  // vip_type: Vip_type
  isSimplePwd: boolean
  remember_token: string
}

export interface LoginParams {
  mobile: number
  user_pass?: string
  sms_code?: number
}

enum Api {
  login = '/users/app/login',
  logout = '/users/app/logout',
  getUserInfo = '/users/app/getUserInfo'
}
export const login = async (params: LoginParams) => {
  return await useHttp.post<LoginResultModel>(Api.login, params)
}
export const logout = async () => {
  await useHttp.post<void>(Api.logout)
}
