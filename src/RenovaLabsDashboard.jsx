import labsData from "../labs-data.json";
import { ShellLayout } from "./components/ShellLayout.jsx";
import { LabModuleCard } from "./components/LabModuleCard.jsx";

const MODULES = labsData.modules;

export default function RenovaLabsDashboard() {
  return (
    <ShellLayout
      eyebrow="Curriculum · Experiments · Sandboxes"
      title="Labs modules"
      subtitle="Prototype learning surfaces with the same shell you ship to production—thin borders, calm type, and paths you can wire to the router later."
      footer="Mock data from labs-data.json · Replace targetPath with app routes when ready."
    >
      <section aria-labelledby="modules-heading">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="modules-heading" className="text-sm font-medium text-slate-200">
              Featured modules
            </h2>
            <p className="text-xs text-slate-500">{MODULES.length} tracks · sourced from labs-data.json</p>
          </div>
        </div>

        <ul
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
        >
          {MODULES.map((mod) => (
            <li key={mod.id} className="min-w-0 list-none">
              <LabModuleCard
                tag={mod.tag}
                header={mod.header}
                description={mod.description}
                status={mod.status}
                targetPath={mod.targetPath}
              />
            </li>
          ))}
        </ul>
      </section>
    </ShellLayout>
  );
}
