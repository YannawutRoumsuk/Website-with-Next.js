import { Activity, Bot, Box, Check, CircleDollarSign, Cloud, Code2, Database, FileText, ScanLine } from "lucide-react";
import type { Project } from "../content/profile";

export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div className={`project-visual project-visual--${project.accent} ${compact ? "project-visual--compact" : ""}`}>
      <div className="project-visual__noise" />
      {project.visual === "finance" && <FinanceVisual />}
      {project.visual === "cards" && <CardsVisual />}
      {project.visual === "pipeline" && <PipelineVisual />}
      {project.visual === "monitoring" && <MonitoringVisual />}
      {project.visual === "bot" && <BotVisual />}
      {project.visual === "ocr" && <OcrVisual />}
      {project.visual === "code" && <CodeVisual name={project.name} />}
      <span className="project-visual__index">{project.year}</span>
    </div>
  );
}

function WindowBar({ label }: { label: string }) {
  return (
    <div className="window-bar">
      <span className="window-dot" />
      <span className="window-dot" />
      <span className="window-dot" />
      <span className="window-label">{label}</span>
    </div>
  );
}

function FinanceVisual() {
  return (
    <div className="visual-window visual-window--finance">
      <WindowBar label="nudget / overview" />
      <div className="finance-body">
        <div className="finance-balance">
          <span>AVAILABLE THIS MONTH</span>
          <strong>฿24,680</strong>
          <small>↑ 12.4% from last month</small>
        </div>
        <div className="finance-chart" aria-hidden>
          {[42, 66, 48, 78, 58, 88, 72, 96, 82, 108, 94, 118].map((height, index) => (
            <i key={index} style={{ height }} />
          ))}
        </div>
        <div className="finance-row"><CircleDollarSign /><span>Food & daily life</span><b>42%</b></div>
        <div className="finance-row"><Check /><span>On track</span><b>Healthy</b></div>
      </div>
    </div>
  );
}

function CardsVisual() {
  return (
    <div className="cards-scene">
      <div className="playing-card playing-card--one"><small>ROOM 7284</small><strong>SPY</strong><span>?</span></div>
      <div className="playing-card playing-card--two"><small>FORBIDDEN</small><strong>WORD</strong><span>พูด</span></div>
      <div className="playing-card playing-card--three"><small>SCORE</small><strong>+2</strong><span>GO!</span></div>
      <div className="room-pill"><i /> 6 players connected</div>
    </div>
  );
}

function PipelineVisual() {
  const nodes = [
    { icon: Code2, label: "Commit" },
    { icon: Box, label: "Build" },
    { icon: Check, label: "Test" },
    { icon: Cloud, label: "Deploy" },
  ];
  return (
    <div className="pipeline-scene">
      <WindowBar label="release / v1.0.0" />
      <div className="pipeline-nodes">
        {nodes.map(({ icon: Icon, label }, index) => (
          <div className="pipeline-node" key={label}>
            <div><Icon /></div><span>{label}</span>{index < nodes.length - 1 && <i />}
          </div>
        ))}
      </div>
      <div className="pipeline-status"><span>All systems ready</span><b>00:43</b></div>
    </div>
  );
}

function MonitoringVisual() {
  return (
    <div className="monitoring-scene">
      <WindowBar label="grafana / service overview" />
      <div className="monitor-grid">
        <div><Activity /><strong>99.98%</strong><span>availability</span></div>
        <div><Database /><strong>24ms</strong><span>query p95</span></div>
      </div>
      <svg className="monitor-line" viewBox="0 0 400 120" aria-hidden>
        <path d="M0 88 C30 82, 42 92, 70 70 S110 78, 132 56 S180 90, 208 52 S250 62, 276 34 S330 48, 400 18" />
      </svg>
    </div>
  );
}

function BotVisual() {
  return (
    <div className="bot-scene">
      <div className="bot-avatar"><Bot /></div>
      <div className="chat-bubble chat-bubble--in">What can I help you find?</div>
      <div className="chat-bubble chat-bubble--out">Show me the shortest path.</div>
      <div className="chat-typing"><i /><i /><i /></div>
    </div>
  );
}

function OcrVisual() {
  return (
    <div className="ocr-scene">
      <div className="ocr-document"><FileText /><i className="ocr-line ocr-line--one" /><i className="ocr-line ocr-line--two" /><i className="ocr-line ocr-line--three" /></div>
      <div className="ocr-beam" />
      <div className="ocr-result"><ScanLine /><strong>98.4%</strong><span>text confidence</span></div>
    </div>
  );
}

function CodeVisual({ name }: { name: string }) {
  return (
    <div className="code-scene">
      <WindowBar label={name.toLowerCase().replaceAll(" ", "-").slice(0, 24)} />
      <div className="code-lines" aria-hidden>
        <i /><i /><i /><i /><i /><i />
      </div>
      <div className="code-success"><Check /> ready to ship</div>
    </div>
  );
}
