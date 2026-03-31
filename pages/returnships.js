import Layout from '../components/Layout';
import JobCard from '../components/JobCard';
import { returnships } from '../data/returnships';

export default function Returnships() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Returnship Programs</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {returnships.map(program => (
          <JobCard key={program.id} job={program} type="returnship" />
        ))}
      </div>
    </Layout>
  );
}
