export default function JobCard({ job, type = "job" }) {
  const isReturnship = type === "returnship";
  return (
    <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-purple-700">{job.title}</h2>
      <p className="text-gray-600">{job.company} • {job.location}</p>
      {!isReturnship && (
        <span className="inline-block bg-purple-100 text-purple-800 text-sm px-2 py-1 rounded mt-2">
          {job.flexibility}
        </span>
      )}
      {isReturnship && (
        <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded mt-2">
          Returnship • {job.duration}
        </span>
      )}
      <p className="mt-2 text-gray-700">{job.description}</p>
      <a
        href={job.applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Apply Now
      </a>
    </div>
  );
}
