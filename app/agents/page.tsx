import AgentDetailsCard from "@/components/AgentDetailsCard/AgentDetailsCard";
import BottomComponent from "@/components/BottomComponent";
import Layout from "@/components/Layout/Layout";
import UserList from "@/components/UserList/UserList";
import UserListItems from "@/components/UserListItems";

const Agents = () => {
  return (
    <Layout>
      <div className="container-fluid d-flex">
        <UserList icons={<UserListItems />}>
          <div className="d-flex flex-column cursor-pointer">
            <p className="small fw-bold mb-0"></p>
            <p className="small fw-bold mb-0">Anirudh Jonnalagadda </p>
            <span className="xxs mb-0">Front Office Manager </span>
            <span className="xxs mb-0">Front Office </span>
          </div>
        </UserList>
        <div className="col-md-8 border border-end-0 border-top-0 p-2 d-flex flex-column">
          <div className="d-flex justify-content-center align-items-center p-1">
            <AgentDetailsCard />
          </div>
          <div className="d-flex gap-1 p-2">
            <button
              className="col-md-2 btn btn-primary rounded-pill px-4 py-1"
              style={{ background: "#1C185B" }}
            >
              Tickets
            </button>
            <button className="col-md-2 btn btn-light rounded-pill px-4 py-1">
              Completed
            </button>
            <button className="col-md-2 btn btn-light rounded-pill px-4 py-1">
              Escalation
            </button>
            <button className="col-md-2 btn btn-light rounded-pill px-4 py-1">
              On Hold
            </button>
            <button className="col-md-2 btn btn-light rounded-pill px-4 py-1">
              Re-Opened
            </button>
            <button className="col-md-2 btn btn-light rounded-pill px-4 py-1">
              Peak Hours
            </button>
          </div>
          <div className="d-flex justify-content-center align-items-center pt-5 mt-5">
            <h3>Chart will come from the library</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Agents;
