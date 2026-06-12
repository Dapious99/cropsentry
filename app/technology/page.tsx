import type { Metadata } from "next";
import { Database, Cpu, Layers, Network, Shield, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Our AI stack: computer vision models trained on African crops, deployed on AWS with NVIDIA-accelerated inference.",
  openGraph: {
    title: "Technology — CropSentry",
    description: "Computer vision, AWS infrastructure, NVIDIA acceleration.",
    url: "/technology",
  },
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return (
    <>
      <section className="section-pad">
        <div className="container-page max-w-3xl">
          <p className="eyebrow">Technology</p>
          <h1 className="mt-4 text-5xl md:text-6xl">A real AI stack, built for the field.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            CropSentry combines on-device computer vision, cloud-scale training pipelines,
            and GPU-accelerated inference. Here is exactly how it works.
          </p>
        </div>
      </section>

      <section className="section-pad bg-secondary/40">
        <div className="container-page">
          <p className="eyebrow">The AI pipeline</p>
          <h2 className="mt-4 text-4xl md:text-5xl">From dataset to diagnosis.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { icon: Database, t: "1. Data", d: "12,000+ labeled leaf images across maize, cassava, tomato, cocoa — collected in partnership with Nigerian cooperatives. Goal: 250k images by end of Phase 2." },
              { icon: Layers, t: "2. Models", d: "Fine-tuned EfficientNet-B4 (classification) and DINOv2 (feature extraction), distilled into a 12 MB on-device model using PyTorch Mobile and ONNX Runtime." },
              { icon: Cpu, t: "3. Training", d: "NVIDIA A100 GPUs (via AWS EC2 P4d) with CUDA + cuDNN. Mixed-precision training, automated hyperparameter sweeps, weekly retraining as new field data arrives." },
              { icon: Workflow, t: "4. Inference", d: "Two-tier inference: on-device for sub-100ms offline scans, cloud fallback (Triton Inference Server + TensorRT) for complex cases." },
              { icon: Network, t: "5. Outbreak intelligence", d: "Federated scan data (anonymized) feeds a regional disease-spread model on Amazon Bedrock — predicting hotspots before farmers report symptoms." },
              { icon: Shield, t: "6. Safety", d: "Every diagnosis carries a confidence score. Below 70%, we route the scan to a human agronomist via our extension-officer dashboard." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="card-surface p-7">
                <Icon className="h-6 w-6 text-leaf" />
                <h3 className="mt-5 text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary text-primary-foreground">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-harvest">AWS</p>
            <h2 className="mt-4 text-4xl text-primary-foreground">How we use AWS.</h2>
            <p className="mt-5 text-primary-foreground/80">
              AWS is our cloud backbone — from secure storage of farmer data to multimodal
              advice generation in local languages.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
              <li>• <strong>S3</strong> — versioned storage for raw training images, model artifacts, and scan history.</li>
              <li>• <strong>RDS (PostgreSQL)</strong> — farmer profiles, scan records, farm geometries, outbreak events.</li>
              <li>• <strong>Lambda + API Gateway</strong> — serverless inference API for low-cost scaling.</li>
              <li>• <strong>ECS Fargate</strong> — long-running Triton Inference Server instances behind a load balancer.</li>
              <li>• <strong>Amazon Bedrock</strong> — Claude/Llama models generate localized treatment advice in Yoruba, Hausa, Igbo, Swahili.</li>
              <li>• <strong>SageMaker</strong> — managed training jobs and model registry.</li>
              <li>• <strong>CloudFront + S3</strong> — fast app delivery across African regions.</li>
              <li>• <strong>SNS + Pinpoint</strong> — outbreak SMS alerts to farmers without smartphones.</li>
              <li>• <strong>CloudWatch + X-Ray</strong> — observability across the inference path.</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow text-harvest">NVIDIA</p>
            <h2 className="mt-4 text-4xl text-primary-foreground">How we use NVIDIA.</h2>
            <p className="mt-5 text-primary-foreground/80">
              NVIDIA accelerates every step where speed matters — training, inference, and
              edge deployment.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/80">
              <li>• <strong>CUDA + cuDNN</strong> — core GPU acceleration for PyTorch training jobs on A100s.</li>
              <li>• <strong>TensorRT</strong> — INT8 quantization and graph optimization drops inference latency from 240ms to under 80ms.</li>
              <li>• <strong>Triton Inference Server</strong> — multi-model serving so vision and language models share GPU memory efficiently.</li>
              <li>• <strong>NVIDIA NeMo</strong> — fine-tuning of language models for African-language advice generation.</li>
              <li>• <strong>RAPIDS</strong> — GPU-accelerated data pipelines for image preprocessing at scale.</li>
              <li>• <strong>Jetson Nano / Orin</strong> — planned edge deployment for extension-officer field kits and farm gateways.</li>
              <li>• <strong>NVIDIA Inception</strong> — applied; aligning with NVIDIA's startup AI program for technical mentorship.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
