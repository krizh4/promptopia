// app/prompt/[id]/page.tsx    ← this is a *Server* Component by default
import { Suspense } from 'react';
import EditPromptClient from './EditPromptClient';

export default function EditPromptPage() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Prompt</h1>
      <Suspense fallback={<p>Loading prompt form…</p>}>
        <EditPromptClient />
      </Suspense>
    </section>
  );
}
