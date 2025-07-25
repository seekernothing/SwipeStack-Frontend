import noConnections from "../assets/noConnections.svg";

const NoConnections = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center ">
      <img
        src={noConnections}
        alt="No Connections"
        className="w-64 h-64 mb-4"
      />
      <h3 className="text-xl font-semibold text-base-content">
        No Connections Found
      </h3>
    </div>
  );
};

export default NoConnections;
