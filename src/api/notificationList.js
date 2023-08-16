import axios from 'axios';

export const fetchNotificationData = async (accessToken, reportedBy) => {
  try {
    const response = await axios.get(
      "http://localhost:3002/api/notification_list",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "X-Reported-By": reportedBy,
        },
      },
    );

    return response.data.znotifc_view_helpType;
  } catch (error) {
    throw error;
  }
};
