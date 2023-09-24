

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type}=job;
    return (
        <div className="border p-4 border-black rounded-lg py-6">
            <img src= {logo} alt="" />
            <h1 className="text-2xl font-bold mt-4">{job_title}</h1>
            <h3 className="text-2xl font-medium mt-3">{company_name}</h3>
            <div className="mt-4">
                <button className="bg-blue-400 text-white p-3 rounded-lg mr-6">{remote_or_onsite}</button>
                <button className="bg-blue-400 text-white p-3 rounded-lg ">{job_type}</button>
            </div>
            {/* <Link to=''>View Details</Link> */}
        </div>
    );
};

export default Job;