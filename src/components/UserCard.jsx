const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm border border-amber-400">
        <div className="w-full h-64 overflow-hidden flex items-start justify-center p-3 ">
          <img
            className="w-full h-full object-contain object-top rounded "
            src={photoUrl}
            alt="photo"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">{`${firstName} ${lastName}, ${age}`}</h2>
          <p>{`${gender}`}</p>
          <p>{about}</p>
          <div className="card-actions flex justify-between items-center w-full mt-5 ">
            <button className="btn bg-red-500 text-amber-50">Ignore</button>
            <button className="btn bg-pink-500 text-amber-50">
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
