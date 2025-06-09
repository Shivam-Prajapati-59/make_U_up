import { API_BACKEND_URL } from "@/config";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

interface Website {
  id: string;
  url: string;
  ticks: {
    id: string;
    createdAt: string;
    status: string;
    latency: number;
  }[];
}

export function useWebsites() {
  const { getToken } = useAuth();
  const [webistes, setWebsites] = useState<Website[]>([]);

  async function refreshWebsites() {
    const token = await getToken();
    const response = await axios.get(`${API_BACKEND_URL}/api/v1/webistes`, {
      headers: {
        Authorization: token,
      },
    });
    setWebsites(response.data.webistes);
  }
  useEffect(() => {
    refreshWebsites();

    const interval = setInterval(
      () => {
        refreshWebsites();
      },
      1000 * 60 * 5
    ); // 5 minutes

    return () => {
      clearInterval(interval);
    };
  }, []);
  return webistes;
}
