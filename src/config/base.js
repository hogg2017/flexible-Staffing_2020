/* eslint-disable import/prefer-default-export */
// ******************
// 请求接口的基本配置
// base http请求接口
// 
// 
// *******************
export const base = "http://114.116.174.5:8080"
export const register_sms = "/app/register/sms"
export const register = "/app/register"
// login微信小程序登录
// verify token登录
// login code登录
export const login_verify ="/app/login/verify"
export const login = "/app/login"
// labor 劳务人员
// info 获取人员个人信息
// deit 人员表单提交
export const labor_info = "/app/labor/info"
export const labor_edit = "/app/labor/edit"
// pub 通用数据接口
// pub_area:获取下级地区列表
// pub_dict:获取制定类型索引
export const pub_area = "/app/pub/area"
export const pub_dict = "/app/pub/dict"
// oder任务订单
// pub获取推荐订单
// list获取登录人员订单
export const order_pub="/app/order/pub"
export const order_list="/app/order/list"
// 实名注册
export const labor_identify ="/app/labor/identify/idCardVerify"
//电子合同
export const labor_contract ="/app/labor/contract/list"