
import { API_REG_URL } from "../GlobalConst.mjs"

const a = `/auth/register`;

export async function regUser(userProfile) {
  const regURL = API_REG_URL + a;

  console.log(regURL);

  try {
    const response = await fetch(regURL, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(userProfile),
    });

    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}



