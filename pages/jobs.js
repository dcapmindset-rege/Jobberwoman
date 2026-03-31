import Layout from '../components/Layout';
import JobCard from '../components/JobCard';
import { jobs } from '../data/jobs';

export default function Jobs() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Job Opportunities</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} type="job" />
        ))}
      </div>
    </Layout>
  );
}
