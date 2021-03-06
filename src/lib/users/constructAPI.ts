import bent from "bent"

import { IConfigAuth } from "../config/interfaces/IConfig"

/**
 * Constructs API with user authorization credentials.
 * @param auth The user authorization config values.
 *
 * @returns Bent object representing the API.
 */
const constructAPI = (auth: IConfigAuth) => {
  return bent(`${process.env.BASE_URL}/api`, {
    Authorization: `Bearer ${auth.user_id}:${auth.access_token}`,
  }, "json")
}

export default constructAPI
