import Layout from "@/components/Layout/Layout";
import Notifications from "@/components/Notifications/Notifications";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="col-md-4">
        <div style={{ height: '94vh', overflow: 'auto' }} >
          <Notifications />
        </div>
      </div>
    </Layout>
  );
}
