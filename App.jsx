
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock3,
  FileCheck2,
  ShieldCheck,
  Upload,
  Factory,
  PackageCheck,
  Eye,
  CircleCheck,
} from "lucide-react";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="brand">
          <div className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="brand-name">
            <strong>ANTROPI</strong>
            <strong>ROBOTICS</strong>
          </div>
        </div>

        <div className="nav-links">
          <a href="#capabilities">Capabilities</a>
          <a href="#process">How it works</a>
          <a href="#quality">Quality</a>
          <a href="#materials">Materials</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <a href="#">Sign Up</a>
          <a href="#">Log in</a>

          <a href="#quote" className="nav-order">
            Create New Order
            <ArrowUpRight size={16} />
          </a>
        </div>

      </nav>


      {/* ================= HERO ================= */}
      <section className="hero">

        {/* LEFT */}
        <div className="hero-content">

          <div className="eyebrow">
            <span className="status-dot"></span>
            CNC MACHINING · CUSTOMER PORTAL
          </div>

          <h1>
            Order CNC parts with
            <br />
            <span>schedule confidence.</span>
          </h1>

          <p className="hero-copy">
            Upload whatever you already have — CAD, drawing, or notes —
            and get a structured draft, transparent commercial summary,
            and an assured delivery date.
          </p>

          <div className="hero-buttons">

            <a href="#quote" className="hero-primary">
              Create New Order
              <ArrowUpRight size={18} />
            </a>

            <a href="#process" className="hero-secondary">
              See how it works
              <ChevronRight size={18} />
            </a>

            <a href="#quote" className="hero-quick">
              Try Quick Quote
            </a>

          </div>


          {/* TRUST */}
          <div className="hero-trust">

            <div className="trust-item">
              <div className="trust-icon">
                <Clock3 size={20} />
              </div>

              <div>
                <strong>5 days</strong>
                <span>Assured delivery</span>
              </div>
            </div>


            <div className="trust-divider"></div>


            <div className="trust-item">
              <div className="trust-icon">
                <ShieldCheck size={20} />
              </div>

              <div>
                <strong>Backed</strong>
                <span>Inspection</span>
              </div>
            </div>


            <div className="trust-divider"></div>


            <div className="trust-item">
              <div className="trust-icon">
                <Eye size={20} />
              </div>

              <div>
                <strong>Visible</strong>
                <span>Production tracking</span>
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT HERO */}
        <div className="hero-product">

          {/* TECHNICAL DRAWING */}
          <div className="technical-drawing">

            <div className="drawing-box">

              <div className="drawing-part">
                <div className="drawing-hole"></div>
                <div className="drawing-circle"></div>
              </div>

              <div className="dimension-line horizontal">
                <span>82.40 mm</span>
              </div>

              <div className="dimension-line vertical">
                <span>48.00 mm</span>
              </div>

              <div className="drawing-label">
                Ø22.00 mm
              </div>

            </div>

          </div>


          {/* REAL CNC IMAGE */}
          <div className="cnc-image-container">

            <img
                 src="/cnc_component.png"
                alt="CNC Component"
                className="img-fluid rounded shadow"/>

          </div>


          {/* PRODUCT CARD */}
          <div className="product-card">

            <div className="product-card-header">

              <div>
                <span className="card-label">
                  PART
                </span>

                <h3>
                  BEARING HOUSING 650
                </h3>

                <p>
                  PRECISION COMPONENT
                </p>
              </div>

              <div className="track-status">
                <span></span>
                ON TRACK
              </div>

            </div>


            <div className="client-row">

              <span>CLIENT</span>

              <strong>
                ASTER MOBILITY
              </strong>

            </div>


            <div className="product-details">

              <div className="detail-block">

                <span>MATERIAL</span>

                <strong>
                  Aluminium
                  <br />
                  6061-T6
                </strong>

              </div>


              <div className="detail-block">

                <span>PROCESS</span>

                <strong>
                  5-Axis CNC
                </strong>

              </div>


              <div className="detail-block">

                <span>FINISH</span>

                <strong>
                  Anodized
                </strong>

              </div>

            </div>


            <div className="product-bottom">

              <div>
                <span>QUANTITY</span>
                <strong>1,000</strong>
              </div>

              <div>
                <span>DELIVERY</span>
                <strong>5 Days</strong>
              </div>

              <div>
                <span>QUALITY</span>
                <strong>Inspection Backed</strong>
              </div>

            </div>

          </div>


          {/* MATERIAL FLOATING CARD */}
          <div className="material-card">

            <div className="material-ball"></div>

            <div>
              <span>Material</span>

              <strong>
                Aluminium 6061-T6
              </strong>

              <small>
                CNC Machined · Anodized
              </small>
            </div>

          </div>

        </div>

      </section>


      {/* ================= TRUST BAR ================= */}
      <section className="trust-bar">

        <div className="trust-title">
          BUILT FOR ENGINEERS
        </div>

        <div>EV & MOBILITY</div>
        <div>AEROSPACE</div>
        <div>INDUSTRIAL AUTOMATION</div>
        <div>CLIMATE HARDWARE</div>
        <div>PRECISION COMPONENTS</div>

      </section>


      {/* ================= PROCESS ================= */}
      <section className="process-section" id="process">

        <div className="section-intro">

          <div>
            <span className="section-label">
              HOW IT WORKS
            </span>

            <h2>
              From design to
              <br />
              <span>delivery, simplified.</span>
            </h2>
          </div>

          <p>
            A manufacturing workflow designed for engineers and
            procurement teams. Everything you need, without the
            unnecessary back-and-forth.
          </p>

        </div>


        <div className="process-grid">

          <ProcessCard
            number="01"
            icon={<Upload size={23} />}
            title="Upload & Share"
            text="CAD, drawings or notes. Send whatever you already have."
          />

          <ProcessCard
            number="02"
            icon={<FileCheck2 size={23} />}
            title="Get Your Quote"
            text="Review pricing, lead time and manufacturing requirements."
          />

          <ProcessCard
            number="03"
            icon={<Factory size={23} />}
            title="We Manufacture"
            text="CNC machining, finishing and inspection handled for you."
          />

          <ProcessCard
            number="04"
            icon={<PackageCheck size={23} />}
            title="Receive Parts"
            text="On-time delivery with quality documents attached."
          />

        </div>

      </section>


      {/* ================= CAPABILITIES ================= */}
      <section className="capabilities" id="capabilities">

        <div className="section-label">
          CAPABILITIES
        </div>

        <h2>
          Manufacturing without
          <br />
          <span>the uncertainty.</span>
        </h2>

        <div className="capability-grid">

          <Capability
            number="01"
            title="CNC Milling"
            text="Precision 3-axis, 4-axis and 5-axis machining for complex components."
          />

          <Capability
            number="02"
            title="CNC Turning"
            text="High-repeatability shafts, pins and cylindrical components."
          />

          <Capability
            number="03"
            title="Finishing"
            text="Anodizing, surface treatments and production-ready finishes."
          />

        </div>

      </section>


      {/* ================= VISIBILITY ================= */}
      <section className="visibility">

        <div className="visibility-copy">

          <span className="section-label">
            PRODUCTION VISIBILITY
          </span>

          <h2>
            Manufacturing
            <br />
            shouldn't be a
            <br />
            <span>black box.</span>
          </h2>

          <p>
            Know where your parts are, what has been completed,
            and whether anything needs your attention.
          </p>

        </div>


        <div className="timeline-card">

          <div className="timeline-header">

            <div>
              <span>ORDER</span>
              <strong>#A-2048</strong>
            </div>

            <div className="timeline-status">
              <CircleCheck size={15} />
              ON TRACK
            </div>

          </div>


          <TimelineItem
            done
            title="Design confirmed"
            text="Completed · 09:42"
          />

          <TimelineItem
            done
            title="Material allocated"
            text="Completed · Today"
          />

          <TimelineItem
            active
            title="CNC machining"
            text="In production · 68%"
          />

          <TimelineItem
            title="Inspection"
            text="Upcoming"
          />

          <TimelineItem
            title="Dispatch"
            text="Upcoming"
          />


          <div className="delivery-summary">

            <span>ESTIMATED DELIVERY</span>

            <strong>
              05 DAYS
            </strong>

          </div>

        </div>

      </section>


      {/* ================= QUALITY ================= */}
      <section className="quality-section" id="quality">

        <div className="section-label">
          QUALITY & TRACEABILITY
        </div>

        <div className="quality-heading">

          <h2>
            Every part comes
            <br />
            with <span>proof.</span>
          </h2>

          <p>
            Quality shouldn't be something you chase after delivery.
            Every order stays documented from production through shipment.
          </p>

        </div>


        <div className="quality-grid">

          <QualityCard
            icon={<ShieldCheck />}
            title="Inspection"
            text="Inspection documentation is linked directly to your order."
          />

          <QualityCard
            icon={<FileCheck2 />}
            title="Traceability"
            text="Manufacturing records stay connected to every shipped lot."
          />

          <QualityCard
            icon={<Clock3 />}
            title="Reliable delivery"
            text="Production planning is built around dependable delivery dates."
          />

        </div>

      </section>


      {/* ================= MATERIALS ================= */}
      <section className="materials" id="materials">

        <div>

          <span className="section-label">
            MATERIALS
          </span>

          <h2>
            The materials
            <br />
            your products
            <br />
            <span>actually use.</span>
          </h2>

          <p>
            Production-ready materials for prototypes,
            pilot builds and scaled production.
          </p>

        </div>


        <div className="materials-list">

          <Material number="01" name="Aluminium" info="6061 · 7075" />
          <Material number="02" name="Stainless Steel" info="304 · 316" />
          <Material number="03" name="Steel" info="Carbon · Alloy" />
          <Material number="04" name="Engineering Plastics" info="Delrin · Nylon · PEEK" />

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="final-cta" id="quote">

        <span className="section-label">
          START YOUR NEXT PART
        </span>

        <h2>
          Have a part
          <br />
          to <span>make?</span>
        </h2>

        <p>
          Upload what you have. We'll take it from there.
        </p>

        <a href="#" className="cta-button">
          Get a quote
          <ArrowUpRight size={19} />
        </a>

        <div className="cta-note">
          <Check size={15} />
          No long forms. No commitment.
        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-brand">

          <div className="brand">
            <div className="brand-mark">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="brand-name">
              <strong>ANTROPI</strong>
              <strong>ROBOTICS</strong>
            </div>
          </div>

          <p>
            Manufacturing infrastructure
            <br />
            for modern engineering teams.
          </p>

        </div>


        <div className="footer-links">

          <div>
            <span>PRODUCT</span>
            <a href="#capabilities">Capabilities</a>
            <a href="#process">How it works</a>
            <a href="#quality">Quality</a>
          </div>

          <div>
            <span>COMPANY</span>
            <a href="#">About</a>
            <a href="#">Technology</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <span>RESOURCES</span>
            <a href="#materials">Materials</a>
            <a href="#">Design Guide</a>
            <a href="#">Support</a>
          </div>

        </div>

      </footer>

    </div>
  );
}


/* ================= COMPONENTS ================= */

function ProcessCard({ number, icon, title, text }) {
  return (
    <div className="process-card">

      <div className="process-number">
        {number}
      </div>

      <div className="process-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <div className="process-arrow">
        <ArrowUpRight size={17} />
      </div>

    </div>
  );
}


function Capability({ number, title, text }) {
  return (
    <div className="capability-card">

      <span>{number}</span>

      <h3>{title}</h3>

      <p>{text}</p>

      <ArrowUpRight size={19} />

    </div>
  );
}


function TimelineItem({ done, active, title, text }) {
  return (
    <div className={`timeline-item ${done ? "done" : ""} ${active ? "active" : ""}`}>

      <div className="timeline-dot">
        {done && <Check size={11} />}
      </div>

      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>

      {active && <b>68%</b>}

    </div>
  );
}


function QualityCard({ icon, title, text }) {
  return (
    <div className="quality-card">

      <div className="quality-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

      <div className="quality-check">
        <Check size={14} />
        DOCUMENTED
      </div>

    </div>
  );
}


function Material({ number, name, info }) {
  return (
    <div className="material-row">

      <span>{number}</span>

      <strong>{name}</strong>

      <small>{info}</small>

      <ChevronRight size={18} />

    </div>
  );
}


export default App;