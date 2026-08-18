/**
 * Project & Research Architecture Diagrams Data Repository
 * High-fidelity, vector-based architectural charts and experimental snapshots
 */

window.PROJECT_DIAGRAMS = {
  'proj-01': {
    badge: 'PROJECT 01',
    category: 'System Architecture & Graph-RAG',
    title: 'Evidence-Traceable Graph-RAG for Research Gap Discovery',
    slides: [
      {
        title: 'End-to-End Hybrid Extraction & Knowledge Graph Construction',
        metrics: [
          { label: 'Latency', value: '420ms' },
          { label: 'Traceability', value: '100% Granular', highlight: true },
          { label: 'Faithfulness', value: '94.8%' }
        ],
        desc: 'Unstructured scientific publications (PDFs/ArXiv) are parsed through layout-aware parsers into structural passages, entity triples, and citation edges stored in Neo4j and vector indexes.',
        points: [
          { strong: 'Document Ingestion:', text: 'Section-aware chunking with metadata tagging (Methods, Findings, Limitations).' },
          { strong: 'Entity-Relation Extraction:', text: 'Extracts core scientific concepts, hypotheses, and experimental claims.' },
          { strong: 'Dual Indexing:', text: 'Dense embeddings in Qdrant alongside explicit relational topology in Neo4j.' }
        ],
        svg: `<svg viewBox="0 0 900 320" class="carousel-diagram-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EEF2FF"/><stop offset="100%" stop-color="#E0E7FF"/></linearGradient>
            <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#FDE68A"/></linearGradient>
            <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ECFDF5"/><stop offset="100%" stop-color="#D1FAE5"/></linearGradient>
            <filter id="shadow" x="-5%" y="-5%" width="110%" height="115%"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity="0.06"/></filter>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#D97706"/></marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#4F46E5"/></marker>
          </defs>
          <rect width="900" height="320" rx="10" fill="#FAFAFA"/>
          
          <!-- Stage 1: Ingestion -->
          <g transform="translate(30, 40)" filter="url(#shadow)">
            <rect width="180" height="240" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <rect width="180" height="32" rx="8" fill="#F3F4F6"/>
            <text x="90" y="21" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">1. MULTI-SOURCE INGESTION</text>
            
            <rect x="15" y="48" width="150" height="42" rx="6" fill="#F9FAFB" stroke="#D1D5DB"/>
            <text x="90" y="68" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#1F2937" text-anchor="middle">PDF Papers &amp; ArXiv</text>
            <text x="90" y="82" font-family="Inter, sans-serif" font-size="8.5" fill="#6B7280" text-anchor="middle">Layout &amp; Section Parser</text>

            <rect x="15" y="102" width="150" height="42" rx="6" fill="#F9FAFB" stroke="#D1D5DB"/>
            <text x="90" y="122" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#1F2937" text-anchor="middle">Structured Passages</text>
            <text x="90" y="136" font-family="Inter, sans-serif" font-size="8.5" fill="#6B7280" text-anchor="middle">Semantic Chunking (512 t)</text>

            <rect x="15" y="156" width="150" height="60" rx="6" fill="url(#g1)" stroke="#818CF8"/>
            <text x="90" y="178" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#312E81" text-anchor="middle">OpenIE Triple Extractor</text>
            <text x="90" y="194" font-family="Inter, sans-serif" font-size="8.5" fill="#4338CA" text-anchor="middle">(Subject, Predicate, Object)</text>
            <text x="90" y="206" font-family="Inter, sans-serif" font-size="8" fill="#4F46E5" text-anchor="middle">+ Sentence Provenance UID</text>
          </g>

          <line x1="215" y1="160" x2="255" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#arrow)"/>

          <!-- Stage 2: Dual Indexing -->
          <g transform="translate(260, 40)" filter="url(#shadow)">
            <rect width="200" height="240" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <rect width="200" height="32" rx="8" fill="#F3F4F6"/>
            <text x="100" y="21" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">2. DUAL-STORE INDEXING</text>
            
            <rect x="15" y="48" width="170" height="80" rx="6" fill="url(#g2)" stroke="#F59E0B"/>
            <text x="100" y="72" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#78350F" text-anchor="middle">Neo4j Graph Database</text>
            <text x="100" y="90" font-family="Inter, sans-serif" font-size="9" fill="#92400E" text-anchor="middle">• Entity Concepts &amp; Synonyms</text>
            <text x="100" y="105" font-family="Inter, sans-serif" font-size="9" fill="#92400E" text-anchor="middle">• Multi-Hop Edge Relations</text>
            <text x="100" y="119" font-family="Inter, sans-serif" font-size="8.5" font-weight="600" fill="#B45309" text-anchor="middle">Evidence-Anchored Nodes</text>

            <rect x="15" y="142" width="170" height="80" rx="6" fill="url(#g1)" stroke="#6366F1"/>
            <text x="100" y="168" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#312E81" text-anchor="middle">Dense Vector Store (Qdrant)</text>
            <text x="100" y="186" font-family="Inter, sans-serif" font-size="9" fill="#3730A3" text-anchor="middle">• BGE / Text-Embedding-3</text>
            <text x="100" y="201" font-family="Inter, sans-serif" font-size="9" fill="#3730A3" text-anchor="middle">• Cosine Distance Metric</text>
            <text x="100" y="215" font-family="Inter, sans-serif" font-size="8.5" font-weight="600" fill="#4338CA" text-anchor="middle">HNSW Hierarchical Nav</text>
          </g>

          <line x1="465" y1="160" x2="505" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#arrow)"/>

          <!-- Stage 3: Hybrid Retrieval & Fusion -->
          <g transform="translate(510, 40)" filter="url(#shadow)">
            <rect width="200" height="240" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <rect width="200" height="32" rx="8" fill="#F3F4F6"/>
            <text x="100" y="21" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#374151" text-anchor="middle">3. SUBGRAPH RETRIEVAL</text>

            <rect x="15" y="48" width="170" height="52" rx="6" fill="#F9FAFB" stroke="#D1D5DB"/>
            <text x="100" y="69" font-family="Inter, sans-serif" font-size="10" font-weight="600" fill="#111827" text-anchor="middle">Query: "Identify Gap in..."</text>
            <text x="100" y="85" font-family="Inter, sans-serif" font-size="8.5" fill="#6B7280" text-anchor="middle">Named Entity Disambiguation</text>

            <rect x="15" y="110" width="170" height="60" rx="6" fill="url(#g2)" stroke="#D97706"/>
            <text x="100" y="132" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#78350F" text-anchor="middle">k-Hop Subgraph Expansion</text>
            <text x="100" y="148" font-family="Inter, sans-serif" font-size="8.5" fill="#92400E" text-anchor="middle">Personalized PageRank &amp; Path Scoring</text>
            <text x="100" y="161" font-family="Inter, sans-serif" font-size="8" fill="#B45309" text-anchor="middle">Filtered by Citation Confidence</text>

            <rect x="15" y="180" width="170" height="48" rx="6" fill="#F3F4F6" stroke="#D1D5DB"/>
            <text x="100" y="200" font-family="Inter, sans-serif" font-size="9.5" font-weight="600" fill="#374151" text-anchor="middle">Reciprocal Rank Fusion</text>
            <text x="100" y="215" font-family="Inter, sans-serif" font-size="8" fill="#6B7280" text-anchor="middle">Vector Sim + Graph Proximity</text>
          </g>

          <line x1="715" y1="160" x2="745" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#arrow)"/>

          <!-- Stage 4: Synthesis & Output -->
          <g transform="translate(750, 40)" filter="url(#shadow)">
            <rect width="125" height="240" rx="8" fill="url(#g3)" stroke="#10B981" stroke-width="1.5"/>
            <rect width="125" height="32" rx="8" fill="#A7F3D0"/>
            <text x="62.5" y="21" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#065F46" text-anchor="middle">4. VERIFIED GAP</text>
            
            <circle cx="62.5" cy="75" r="22" fill="#FFFFFF" stroke="#059669" stroke-width="2"/>
            <text x="62.5" y="79" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#059669" text-anchor="middle">LLM</text>
            
            <text x="62.5" y="118" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#065F46" text-anchor="middle">Gap Formulation</text>
            <text x="62.5" y="132" font-family="Inter, sans-serif" font-size="8" fill="#047857" text-anchor="middle">Synthesizes missing</text>
            <text x="62.5" y="144" font-family="Inter, sans-serif" font-size="8" fill="#047857" text-anchor="middle">method links</text>

            <rect x="10" y="165" width="105" height="62" rx="5" fill="#FFFFFF" stroke="#34D399"/>
            <text x="62.5" y="185" font-family="Inter, sans-serif" font-size="8.5" font-weight="700" fill="#065F46" text-anchor="middle">Citation Audit</text>
            <text x="62.5" y="200" font-family="Inter, sans-serif" font-size="7.5" fill="#047857" text-anchor="middle">[Doc #1, p.4, §2]</text>
            <text x="62.5" y="214" font-family="Inter, sans-serif" font-size="7.5" fill="#047857" text-anchor="middle">Zero Hallucination</text>
          </g>
        </svg>`
      },
      {
        title: 'Multi-Hop Relational Subgraph Traversal & Gap Reasoning',
        metrics: [
          { label: 'Hop Depth', value: 'k=3' },
          { label: 'PPR Decay', value: 'α=0.85' },
          { label: 'Conflict Catch', value: '98.2%', highlight: true }
        ],
        desc: 'Visual representation of how the graph traversal engine isolates unexplored bridges between disparate research clusters (e.g., Domain A Algorithms applied to Domain B Challenges).',
        points: [
          { strong: 'Cluster Discovery:', text: 'Hierarchical Leiden community detection groups related papers by methodology.' },
          { strong: 'Bridging Edges:', text: 'Measures high betweenness centrality nodes with low explicit co-citation counts.' },
          { strong: 'Gap Candidate Ranking:', text: 'Ranks novel hypothesis candidates based on structural graph hole metrics.' }
        ],
        svg: `<svg viewBox="0 0 900 320" class="carousel-diagram-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter>
          </defs>
          <rect width="900" height="320" rx="10" fill="#0F172A"/>

          <!-- Graph Cluster A -->
          <g>
            <circle cx="200" cy="160" r="110" fill="rgba(99, 102, 241, 0.08)" stroke="rgba(99, 102, 241, 0.3)" stroke-dasharray="4 4"/>
            <text x="200" y="70" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#818CF8" text-anchor="middle">Cluster A: Dense Contrastive Learning</text>

            <line x1="160" y1="130" x2="220" y2="120" stroke="#6366F1" stroke-width="2"/>
            <line x1="160" y1="130" x2="190" y2="190" stroke="#6366F1" stroke-width="2"/>
            <line x1="220" y1="120" x2="240" y2="170" stroke="#6366F1" stroke-width="2"/>
            <line x1="190" y1="190" x2="240" y2="170" stroke="#6366F1" stroke-width="2"/>

            <circle cx="160" cy="130" r="16" fill="#312E81" stroke="#818CF8" stroke-width="2"/>
            <text x="160" y="134" font-family="Inter, sans-serif" font-size="8" fill="#EEF2FF" text-anchor="middle">SimCLR</text>

            <circle cx="220" cy="120" r="18" fill="#312E81" stroke="#818CF8" stroke-width="2"/>
            <text x="220" y="124" font-family="Inter, sans-serif" font-size="8" fill="#EEF2FF" text-anchor="middle">MoCo v3</text>

            <circle cx="190" cy="190" r="16" fill="#312E81" stroke="#818CF8" stroke-width="2"/>
            <text x="190" y="194" font-family="Inter, sans-serif" font-size="8" fill="#EEF2FF" text-anchor="middle">InfoNCE</text>

            <circle cx="240" cy="170" r="20" fill="#4338CA" stroke="#A5B4FC" stroke-width="2"/>
            <text x="240" y="174" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">Node α</text>
          </g>

          <!-- Middle: Structural Gap & Evidence Bridge -->
          <g>
            <path d="M 260 170 Q 450 110 635 165" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="6 6"/>
            
            <rect x="375" y="100" width="150" height="75" rx="8" fill="#1E293B" stroke="#D97706" stroke-width="2" filter="url(#glow)"/>
            <text x="450" y="122" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#FBBF24" text-anchor="middle">DETECTED RESEARCH GAP</text>
            <text x="450" y="139" font-family="Inter, sans-serif" font-size="8.5" fill="#E2E8F0" text-anchor="middle">Zero Existing Co-Citations</text>
            <text x="450" y="154" font-family="Inter, sans-serif" font-size="8" fill="#94A3B8" text-anchor="middle">High Potential Cross-Domain Bridge</text>
            <text x="450" y="167" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#10B981" text-anchor="middle">Confidence Score: 0.94</text>
          </g>

          <!-- Graph Cluster B -->
          <g>
            <circle cx="700" cy="160" r="110" fill="rgba(16, 185, 129, 0.08)" stroke="rgba(16, 185, 129, 0.3)" stroke-dasharray="4 4"/>
            <text x="700" y="70" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#34D399" text-anchor="middle">Cluster B: SMT Solder Inspection</text>

            <line x1="640" y1="170" x2="680" y2="120" stroke="#10B981" stroke-width="2"/>
            <line x1="640" y1="170" x2="720" y2="200" stroke="#10B981" stroke-width="2"/>
            <line x1="680" y1="120" x2="750" y2="140" stroke="#10B981" stroke-width="2"/>
            <line x1="720" y1="200" x2="750" y2="140" stroke="#10B981" stroke-width="2"/>

            <circle cx="640" cy="170" r="20" fill="#064E3B" stroke="#6EE7B7" stroke-width="2"/>
            <text x="640" y="174" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF" text-anchor="middle">Node β</text>

            <circle cx="680" cy="120" r="17" fill="#064E3B" stroke="#34D399" stroke-width="2"/>
            <text x="680" y="124" font-family="Inter, sans-serif" font-size="8" fill="#ECFDF5" text-anchor="middle">ResNet</text>

            <circle cx="720" cy="200" r="16" fill="#064E3B" stroke="#34D399" stroke-width="2"/>
            <text x="720" y="204" font-family="Inter, sans-serif" font-size="8" fill="#ECFDF5" text-anchor="middle">AXI Line</text>

            <circle cx="750" cy="140" r="17" fill="#064E3B" stroke="#34D399" stroke-width="2"/>
            <text x="750" y="144" font-family="Inter, sans-serif" font-size="8" fill="#ECFDF5" text-anchor="middle">Youden J</text>
          </g>

          <!-- Bottom Legend -->
          <rect x="250" y="280" width="400" height="28" rx="6" fill="#1E293B"/>
          <circle cx="270" cy="294" r="5" fill="#818CF8"/>
          <text x="282" y="297" font-family="Inter, sans-serif" font-size="8.5" fill="#CBD5E1">AI/ML Literature</text>
          <circle cx="390" cy="294" r="5" fill="#34D399"/>
          <text x="402" y="297" font-family="Inter, sans-serif" font-size="8.5" fill="#CBD5E1">Industrial SMT Domain</text>
          <line x1="510" y1="294" x2="530" y2="294" stroke="#F59E0B" stroke-width="2" stroke-dasharray="3 3"/>
          <text x="538" y="297" font-family="Inter, sans-serif" font-size="8.5" fill="#FBBF24">Unexplored Gap</text>
        </svg>`
      }
    ]
  },

  'proj-02': {
    badge: 'PROJECT 02',
    category: 'Computer Vision & Deep Learning',
    title: 'Tamil Script Character Recognition System',
    slides: [
      {
        title: 'Image Preprocessing & Custom CNN Feature Extraction Pipeline',
        metrics: [
          { label: 'Char Classes', value: '156' },
          { label: 'Accuracy', value: '96.4%', highlight: true },
          { label: 'Inference', value: '18ms' }
        ],
        desc: 'Multi-stage computer vision workflow transforming raw handwritten manuscript scans through adaptive thresholding, morphological thinning, stroke contour extraction and classification.',
        points: [
          { strong: 'Otsu & Adaptive Binarization:', text: 'Handles uneven illumination and ancient paper textures.' },
          { strong: 'Stroke Segmentation:', text: 'Decomposes complex ligatures and composite vowel modifiers into isolated glyphs.' },
          { strong: 'Deep CNN Architecture:', text: 'Stack of 3x3 convolutions with BatchNorm, Spatial Dropout and Softmax classifier.' }
        ],
        svg: `<svg viewBox="0 0 900 320" class="carousel-diagram-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="c1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F3F4F6"/><stop offset="100%" stop-color="#E5E7EB"/></linearGradient>
            <linearGradient id="c2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#FDE68A"/></linearGradient>
            <linearGradient id="c3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EEF2FF"/><stop offset="100%" stop-color="#C7D2FE"/></linearGradient>
            <marker id="ar2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#D97706"/></marker>
          </defs>
          <rect width="900" height="320" rx="10" fill="#FAFAFA"/>

          <!-- 1. Input Image -->
          <g transform="translate(30, 45)">
            <rect width="130" height="230" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <text x="65" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">1. INPUT IMAGE</text>
            <rect x="15" y="40" width="100" height="100" rx="6" fill="#F8FAFC" stroke="#CBD5E1"/>
            <!-- Render Tamil Character 'க' -->
            <text x="65" y="105" font-family="'Noto Sans Tamil', serif" font-size="52" font-weight="bold" fill="#1E293B" text-anchor="middle">க</text>
            <text x="65" y="160" font-family="Inter, sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Raw Scan (RGB)</text>
            <text x="65" y="176" font-family="Inter, sans-serif" font-size="8.5" fill="#64748B" text-anchor="middle">Handwritten Script</text>
            <rect x="15" y="195" width="100" height="22" rx="4" fill="#F1F5F9"/>
            <text x="65" y="210" font-family="Inter, sans-serif" font-size="8" font-weight="600" fill="#475569" text-anchor="middle">Size: 256x256 px</text>
          </g>

          <line x1="165" y1="160" x2="195" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#ar2)"/>

          <!-- 2. Preprocessing & Morphological Thinning -->
          <g transform="translate(200, 45)">
            <rect width="170" height="230" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <text x="85" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">2. PREPROCESSING</text>
            
            <rect x="12" y="40" width="146" height="50" rx="5" fill="url(#c1)" stroke="#CBD5E1"/>
            <text x="85" y="60" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1E293B" text-anchor="middle">Adaptive Threshold</text>
            <text x="85" y="76" font-family="Inter, sans-serif" font-size="8" fill="#475569" text-anchor="middle">Otsu Binarization</text>

            <rect x="12" y="98" width="146" height="50" rx="5" fill="url(#c1)" stroke="#CBD5E1"/>
            <text x="85" y="118" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1E293B" text-anchor="middle">Gaussian Denoising</text>
            <text x="85" y="134" font-family="Inter, sans-serif" font-size="8" fill="#475569" text-anchor="middle">Salt-and-Pepper Filter</text>

            <rect x="12" y="156" width="146" height="60" rx="5" fill="url(#c2)" stroke="#F59E0B"/>
            <text x="85" y="176" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#92400E" text-anchor="middle">Skeletonization</text>
            <text x="85" y="192" font-family="Inter, sans-serif" font-size="8" fill="#B45309" text-anchor="middle">Zhang-Suen Thinning</text>
            <text x="85" y="205" font-family="Inter, sans-serif" font-size="7.5" font-weight="600" fill="#78350F" text-anchor="middle">1-Pixel Stroke Width</text>
          </g>

          <line x1="375" y1="160" x2="405" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#ar2)"/>

          <!-- 3. CNN Architecture -->
          <g transform="translate(410, 45)">
            <rect width="280" height="230" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <text x="140" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">3. DEEP CNN FEATURE EXTRACTION</text>

            <!-- Conv Block 1 -->
            <rect x="15" y="45" width="75" height="165" rx="5" fill="url(#c3)" stroke="#818CF8"/>
            <text x="52.5" y="70" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#312E81" text-anchor="middle">Conv2D</text>
            <text x="52.5" y="85" font-family="Inter, sans-serif" font-size="7.5" fill="#4338CA" text-anchor="middle">32 filters (3x3)</text>
            <text x="52.5" y="100" font-family="Inter, sans-serif" font-size="7.5" fill="#4338CA" text-anchor="middle">ReLU + BN</text>
            <rect x="22" y="125" width="60" height="30" rx="3" fill="#C7D2FE"/>
            <text x="52.5" y="143" font-family="Inter, sans-serif" font-size="8" font-weight="600" fill="#3730A3" text-anchor="middle">MaxPool 2x2</text>
            <text x="52.5" y="195" font-family="Inter, sans-serif" font-size="7" fill="#6B7280" text-anchor="middle">64x64x32</text>

            <!-- Conv Block 2 -->
            <rect x="100" y="45" width="75" height="165" rx="5" fill="url(#c3)" stroke="#6366F1"/>
            <text x="137.5" y="70" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#312E81" text-anchor="middle">Conv2D</text>
            <text x="137.5" y="85" font-family="Inter, sans-serif" font-size="7.5" fill="#4338CA" text-anchor="middle">64 filters (3x3)</text>
            <text x="137.5" y="100" font-family="Inter, sans-serif" font-size="7.5" fill="#4338CA" text-anchor="middle">ReLU + BN</text>
            <rect x="107" y="125" width="60" height="30" rx="3" fill="#A5B4FC"/>
            <text x="137.5" y="143" font-family="Inter, sans-serif" font-size="8" font-weight="600" fill="#312E81" text-anchor="middle">MaxPool 2x2</text>
            <text x="137.5" y="195" font-family="Inter, sans-serif" font-size="7" fill="#6B7280" text-anchor="middle">32x32x64</text>

            <!-- Dense & Dropout -->
            <rect x="185" y="45" width="80" height="165" rx="5" fill="#EEF2FF" stroke="#4F46E5"/>
            <text x="225" y="70" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#312E81" text-anchor="middle">Dense FC</text>
            <text x="225" y="88" font-family="Inter, sans-serif" font-size="8" fill="#4338CA" text-anchor="middle">512 Units</text>
            <rect x="192" y="110" width="66" height="25" rx="3" fill="#E0E7FF"/>
            <text x="225" y="126" font-family="Inter, sans-serif" font-size="7.5" fill="#3730A3" text-anchor="middle">Dropout 0.4</text>
            <text x="225" y="160" font-family="Inter, sans-serif" font-size="8" font-weight="600" fill="#4338CA" text-anchor="middle">Dense 156</text>
            <text x="225" y="195" font-family="Inter, sans-serif" font-size="7.5" fill="#3730A3" text-anchor="middle">Softmax</text>
          </g>

          <line x1="695" y1="160" x2="725" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#ar2)"/>

          <!-- 4. Output Character Class -->
          <g transform="translate(730, 45)">
            <rect width="140" height="230" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5"/>
            <text x="70" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#065F46" text-anchor="middle">4. CLASSIFICATION</text>
            
            <circle cx="70" cy="80" r="32" fill="#FFFFFF" stroke="#059669" stroke-width="2"/>
            <text x="70" y="92" font-family="'Noto Sans Tamil', serif" font-size="34" font-weight="bold" fill="#065F46" text-anchor="middle">க</text>

            <rect x="15" y="130" width="110" height="36" rx="4" fill="#FFFFFF" stroke="#A7F3D0"/>
            <text x="70" y="146" font-family="Inter, sans-serif" font-size="8" fill="#047857" text-anchor="middle">Unicode: U+0B95</text>
            <text x="70" y="159" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#065F46" text-anchor="middle">Prob: 98.7%</text>

            <rect x="15" y="176" width="110" height="42" rx="4" fill="#D1FAE5"/>
            <text x="70" y="192" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#065F46" text-anchor="middle">Tamil Glyph: 'KA'</text>
            <text x="70" y="206" font-family="Inter, sans-serif" font-size="7.5" fill="#047857" text-anchor="middle">Segment Verified</text>
          </g>
        </svg>`
      }
    ]
  },

  'proj-03': {
    badge: 'PROJECT 03',
    category: 'Distributed Systems & Mobile Cloud',
    title: 'Multi-Role Food Delivery Application',
    slides: [
      {
        title: 'Distributed Cloud Architecture & Real-Time Sync Topology',
        metrics: [
          { label: 'Roles', value: '4 Discrete' },
          { label: 'Sync Latency', value: '<120ms', highlight: true },
          { label: 'Security', value: 'RBAC Rules' }
        ],
        desc: 'End-to-end multi-tier architecture uniting Flutter client applications across four distinct roles with Firebase Authentication, Firestore real-time listeners, Cloud Functions, and FCM notifications.',
        points: [
          { strong: 'Role-Based Authentication:', text: 'JWT claims dictate access levels for Customer, Vendor, Rider, and Admin.' },
          { strong: 'Event-Driven Microservices:', text: 'Cloud functions execute payment webhooks and dispatch state-change alerts.' },
          { strong: 'Live Order Synchronization:', text: 'Bi-directional Firestore snapshots propagate live order statuses.' }
        ],
        svg: `<svg viewBox="0 0 900 320" class="carousel-diagram-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="f1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EEF2FF"/><stop offset="100%" stop-color="#E0E7FF"/></linearGradient>
            <linearGradient id="f2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#FDE68A"/></linearGradient>
            <marker id="ar3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#D97706"/></marker>
          </defs>
          <rect width="900" height="320" rx="10" fill="#FAFAFA"/>

          <!-- 4 Client Role Cards -->
          <g transform="translate(30, 30)">
            <rect width="180" height="260" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <rect width="180" height="30" rx="8" fill="#EEF2FF"/>
            <text x="90" y="20" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#3730A3" text-anchor="middle">FLUTTER APPS (4 ROLES)</text>

            <rect x="12" y="42" width="156" height="42" rx="5" fill="#F8FAFC" stroke="#CBD5E1"/>
            <text x="24" y="60" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1E293B">Customer App</text>
            <text x="24" y="74" font-family="Inter, sans-serif" font-size="8" fill="#64748B">Menu Browse · Live Tracking</text>

            <rect x="12" y="94" width="156" height="42" rx="5" fill="#F8FAFC" stroke="#CBD5E1"/>
            <text x="24" y="112" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1E293B">Vendor / Restaurant</text>
            <text x="24" y="126" font-family="Inter, sans-serif" font-size="8" fill="#64748B">Order Accept · Kitchen Queue</text>

            <rect x="12" y="146" width="156" height="42" rx="5" fill="#F8FAFC" stroke="#CBD5E1"/>
            <text x="24" y="164" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1E293B">Delivery Rider</text>
            <text x="24" y="178" font-family="Inter, sans-serif" font-size="8" fill="#64748B">GPS Route · Status Ping</text>

            <rect x="12" y="198" width="156" height="42" rx="5" fill="#F8FAFC" stroke="#CBD5E1"/>
            <text x="24" y="216" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1E293B">Admin Dashboard</text>
            <text x="24" y="230" font-family="Inter, sans-serif" font-size="8" fill="#64748B">Analytics · Commission</text>
          </g>

          <line x1="215" y1="160" x2="255" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#ar3)"/>

          <!-- Firebase Cloud Core -->
          <g transform="translate(260, 30)">
            <rect width="360" height="260" rx="8" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1.5"/>
            <rect width="360" height="30" rx="8" fill="url(#f2)"/>
            <text x="180" y="20" font-family="Inter, sans-serif" font-size="11" font-weight="700" fill="#78350F" text-anchor="middle">FIREBASE SERVERLESS BACKEND</text>

            <!-- Auth -->
            <rect x="15" y="42" width="155" height="95" rx="6" fill="#FFFBEB" stroke="#FCD34D"/>
            <text x="92.5" y="64" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#92400E" text-anchor="middle">Firebase Auth (RBAC)</text>
            <text x="92.5" y="82" font-family="Inter, sans-serif" font-size="8" fill="#B45309" text-anchor="middle">• JWT Custom User Claims</text>
            <text x="92.5" y="98" font-family="Inter, sans-serif" font-size="8" fill="#B45309" text-anchor="middle">• Phone OTP &amp; Email Auth</text>
            <text x="92.5" y="114" font-family="Inter, sans-serif" font-size="8" fill="#B45309" text-anchor="middle">• Session Token Refresh</text>

            <!-- Firestore -->
            <rect x="190" y="42" width="155" height="95" rx="6" fill="#FFFBEB" stroke="#FCD34D"/>
            <text x="267.5" y="64" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#92400E" text-anchor="middle">Cloud Firestore</text>
            <text x="267.5" y="82" font-family="Inter, sans-serif" font-size="8" fill="#B45309" text-anchor="middle">• Real-Time Order Stream</text>
            <text x="267.5" y="98" font-family="Inter, sans-serif" font-size="8" fill="#B45309" text-anchor="middle">• GeoPoint Rider Location</text>
            <text x="267.5" y="114" font-family="Inter, sans-serif" font-size="8" fill="#B45309" text-anchor="middle">• Granular Security Rules</text>

            <!-- Cloud Functions -->
            <rect x="15" y="150" width="330" height="95" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="180" y="172" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#1E293B" text-anchor="middle">Event-Driven Node.js Cloud Functions</text>
            <text x="180" y="190" font-family="Inter, sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">onOrderCreated() ➔ Assigns Vendor ➔ Triggers FCM Notification</text>
            <text x="180" y="206" font-family="Inter, sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">onStatusChanged() ➔ Broadcasts live websocket coordinates to Customer</text>
            <text x="180" y="222" font-family="Inter, sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Automated Refund / Payment Settlement Handler</text>
          </g>

          <line x1="625" y1="160" x2="665" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#ar3)"/>

          <!-- Messaging & Telemetry -->
          <g transform="translate(670, 30)">
            <rect width="200" height="260" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <rect width="200" height="30" rx="8" fill="#ECFDF5"/>
            <text x="100" y="20" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#065F46" text-anchor="middle">COMMUNICATIONS &amp; FCM</text>

            <rect x="15" y="45" width="170" height="85" rx="6" fill="#ECFDF5" stroke="#34D399"/>
            <text x="100" y="68" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#065F46" text-anchor="middle">Firebase Cloud Messaging</text>
            <text x="100" y="86" font-family="Inter, sans-serif" font-size="8" fill="#047857" text-anchor="middle">• Targeted Topic Subscriptions</text>
            <text x="100" y="102" font-family="Inter, sans-serif" font-size="8" fill="#047857" text-anchor="middle">• High-Priority Push Alerts</text>
            <text x="100" y="118" font-family="Inter, sans-serif" font-size="8" fill="#047857" text-anchor="middle">• Background Sound Trigger</text>

            <rect x="15" y="145" width="170" height="85" rx="6" fill="#F8FAFC" stroke="#CBD5E1"/>
            <text x="100" y="168" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#1E293B" text-anchor="middle">Cloud Storage &amp; Logs</text>
            <text x="100" y="186" font-family="Inter, sans-serif" font-size="8" fill="#64748B">• Restaurant Menu Media</text>
            <text x="100" y="202" font-family="Inter, sans-serif" font-size="8" fill="#64748B">• Delivery Proof Photos</text>
            <text x="100" y="218" font-family="Inter, sans-serif" font-size="8" fill="#64748B">• Cloud Audit Trail Logs</text>
          </g>
        </svg>`
      }
    ]
  },

  'res-01': {
    badge: 'RESEARCH 01',
    category: 'Peer-Reviewed Research · ICECT 2026',
    title: 'Deep Learning for False-Call Reduction in Automated X-Ray Inspection',
    slides: [
      {
        title: 'Imbalance-Aware Transfer Learning Architecture & Decision Threshold Tuning',
        metrics: [
          { label: 'False-Call Cut', value: '81.8%', highlight: true },
          { label: 'Class Skew', value: '91:1' },
          { label: 'Sensitivity', value: '91.6%' },
          { label: 'AUROC', value: '0.9221' }
        ],
        desc: 'SMT industrial X-ray inspection pipeline utilizing pre-trained ResNet-18 feature extraction combined with Youden Index-based decision boundary shifts to counteract severe 91:1 operational imbalance.',
        points: [
          { strong: 'Class Skew Problem:', text: 'Passing joints vastly outnumber defective solder joints on high-yield lines.' },
          { strong: 'Transfer Learning:', text: 'ResNet-18 backbone fine-tuned on specialized X-ray absorption projections.' },
          { strong: 'Youden’s J Index Optimization:', text: 'Shifts classification threshold from standard 0.5 to J-optimal value, eliminating 81.8% of false rejections.' }
        ],
        svg: `<svg viewBox="0 0 900 320" class="carousel-diagram-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="r1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#FDE68A"/></linearGradient>
            <linearGradient id="r2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EEF2FF"/><stop offset="100%" stop-color="#C7D2FE"/></linearGradient>
            <marker id="ar4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#D97706"/></marker>
          </defs>
          <rect width="900" height="320" rx="10" fill="#FAFAFA"/>

          <!-- 1. X-Ray Ingestion -->
          <g transform="translate(30, 40)">
            <rect width="160" height="240" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <text x="80" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">1. SMT AXI SCANNER</text>

            <rect x="15" y="42" width="130" height="85" rx="6" fill="#1E293B"/>
            <circle cx="80" cy="85" r="26" fill="#334155" stroke="#94A3B8" stroke-width="2"/>
            <circle cx="80" cy="85" r="8" fill="#F59E0B"/>
            <text x="80" y="118" font-family="Inter, sans-serif" font-size="7.5" fill="#94A3B8" text-anchor="middle">Solder Void Defect</text>

            <rect x="15" y="138" width="130" height="85" rx="6" fill="#FEF2F2" stroke="#FCA5A5"/>
            <text x="80" y="158" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#991B1B" text-anchor="middle">Severe Skew</text>
            <text x="80" y="174" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#DC2626" text-anchor="middle">91 : 1</text>
            <text x="80" y="192" font-family="Inter, sans-serif" font-size="7.5" fill="#7F1D1D" text-anchor="middle">Pass : Defect Ratio</text>
            <text x="80" y="206" font-family="Inter, sans-serif" font-size="7.5" fill="#7F1D1D" text-anchor="middle">Standard Loss Fails</text>
          </g>

          <line x1="195" y1="160" x2="235" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#ar4)"/>

          <!-- 2. ResNet-18 Transfer Learning -->
          <g transform="translate(240, 40)">
            <rect width="250" height="240" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <text x="125" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">2. RESNET-18 TRANSFER LEARNING</text>

            <rect x="15" y="42" width="220" height="52" rx="5" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="125" y="62" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#1E293B" text-anchor="middle">ImageNet Pretrained Weights</text>
            <text x="125" y="78" font-family="Inter, sans-serif" font-size="8" fill="#64748B" text-anchor="middle">Initial 7x7 Conv + Residual Blocks</text>

            <rect x="15" y="104" width="220" height="58" rx="5" fill="url(#r2)" stroke="#818CF8"/>
            <text x="125" y="125" font-family="Inter, sans-serif" font-size="9.5" font-weight="700" fill="#312E81" text-anchor="middle">Layer 4 Fine-Tuning</text>
            <text x="125" y="140" font-family="Inter, sans-serif" font-size="8" fill="#4338CA" text-anchor="middle">Discriminative Solder Joint Features</text>
            <text x="125" y="152" font-family="Inter, sans-serif" font-size="7.5" font-weight="600" fill="#3730A3" text-anchor="middle">Weighted Focal Loss Adaptation</text>

            <rect x="15" y="172" width="220" height="52" rx="5" fill="#F8FAFC" stroke="#E2E8F0"/>
            <text x="125" y="192" font-family="Inter, sans-serif" font-size="9" font-weight="600" fill="#1E293B" text-anchor="middle">Global Average Pool + Dense</text>
            <text x="125" y="208" font-family="Inter, sans-serif" font-size="8" fill="#64748B" text-anchor="middle">Softmax Posterior Probability P(Defect)</text>
          </g>

          <line x1="495" y1="160" x2="535" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#ar4)"/>

          <!-- 3. Youden Index Threshold Shift -->
          <g transform="translate(540, 40)">
            <rect width="330" height="240" rx="8" fill="#FFFFFF" stroke="#D97706" stroke-width="1.5"/>
            <rect width="330" height="30" rx="8" fill="url(#r1)"/>
            <text x="165" y="20" font-family="Inter, sans-serif" font-size="10.5" font-weight="800" fill="#78350F" text-anchor="middle">3. OPERATING POINT OPTIMIZATION</text>

            <!-- ROC Curve Mini Diagram -->
            <rect x="15" y="42" width="145" height="180" rx="6" fill="#F8FAFC" stroke="#CBD5E1"/>
            <text x="87.5" y="60" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1E293B" text-anchor="middle">ROC Curve (0.9221)</text>
            <!-- Curve SVG -->
            <path d="M 30 195 L 30 75" stroke="#94A3B8" stroke-width="1.5"/>
            <path d="M 30 195 L 145 195" stroke="#94A3B8" stroke-width="1.5"/>
            <line x1="30" y1="195" x2="145" y2="75" stroke="#CBD5E1" stroke-dasharray="2 2"/>
            <path d="M 30 195 Q 35 90 145 75" fill="none" stroke="#D97706" stroke-width="2.5"/>
            <circle cx="48" cy="102" r="4" fill="#DC2626"/>
            <text x="65" y="98" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#DC2626">Optimal J</text>
            <text x="87.5" y="210" font-family="Inter, sans-serif" font-size="7.5" fill="#64748B" text-anchor="middle">False Positive Rate ➔</text>

            <!-- Outcome Stats -->
            <rect x="170" y="42" width="145" height="180" rx="6" fill="#ECFDF5" stroke="#34D399"/>
            <text x="242.5" y="64" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="#065F46" text-anchor="middle">METRIC GAINS</text>
            
            <rect x="180" y="75" width="125" height="42" rx="4" fill="#FFFFFF" stroke="#A7F3D0"/>
            <text x="242.5" y="92" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#059669" text-anchor="middle">-81.8%</text>
            <text x="242.5" y="106" font-family="Inter, sans-serif" font-size="7.5" fill="#047857" text-anchor="middle">False-Call Rejections</text>

            <rect x="180" y="125" width="125" height="42" rx="4" fill="#FFFFFF" stroke="#A7F3D0"/>
            <text x="242.5" y="142" font-family="Inter, sans-serif" font-size="12" font-weight="800" fill="#059669" text-anchor="middle">91.6%</text>
            <text x="242.5" y="156" font-family="Inter, sans-serif" font-size="7.5" fill="#047857" text-anchor="middle">Defect Sensitivity Kept</text>

            <text x="242.5" y="195" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#065F46" text-anchor="middle">F1: 89.1% · Bal Acc: 86.7%</text>
          </g>
        </svg>`
      }
    ]
  },

  'res-02': {
    badge: 'RESEARCH 02',
    category: 'Peer-Reviewed Research · ICKECS 2024',
    title: 'Brain Tumor Localization and Multimodal Segmentation in MRI Images',
    slides: [
      {
        title: 'Multimodal Feature Pyramid Network (FPN) Segmentation Architecture',
        metrics: [
          { label: 'Dice Score', value: '0.85', highlight: true },
          { label: 'Sensitivity', value: '92.0%' },
          { label: 'Specificity', value: '89.0%' }
        ],
        desc: 'Automated deep learning framework integrating multimodal MRI channels (T1, T2, FLAIR, and contrast-enhanced T1c) using feature fusion and hierarchical Feature Pyramid Networks for exact boundary delineation.',
        points: [
          { strong: 'Multimodal Fusion:', text: 'Leverages complementary tissue contrast characteristics from 4 distinct MRI pulse sequences.' },
          { strong: 'Feature Pyramid Network:', text: 'Combines low-level spatial detail with high-level semantic tumor context.' },
          { strong: 'Deep Supervision:', text: 'Multi-scale loss functions drive accurate sub-region localization (core, edema, active margin).' }
        ],
        svg: `<svg viewBox="0 0 900 320" class="carousel-diagram-svg" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="m1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#EEF2FF"/><stop offset="100%" stop-color="#C7D2FE"/></linearGradient>
            <linearGradient id="m2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#FDE68A"/></linearGradient>
            <marker id="ar5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 1 L 10 5 L 0 9 z" fill="#D97706"/></marker>
          </defs>
          <rect width="900" height="320" rx="10" fill="#FAFAFA"/>

          <!-- 1. Multimodal Scans -->
          <g transform="translate(30, 40)">
            <rect width="170" height="240" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <text x="85" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">1. MULTIMODAL MRI</text>

            <rect x="12" y="38" width="68" height="42" rx="4" fill="#1E293B"/>
            <text x="46" y="63" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#F8FAFC" text-anchor="middle">T1-w</text>

            <rect x="90" y="38" width="68" height="42" rx="4" fill="#1E293B"/>
            <text x="124" y="63" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#F8FAFC" text-anchor="middle">T2-w</text>

            <rect x="12" y="86" width="68" height="42" rx="4" fill="#1E293B"/>
            <text x="46" y="111" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#F8FAFC" text-anchor="middle">T1-CE</text>

            <rect x="90" y="86" width="68" height="42" rx="4" fill="#1E293B"/>
            <text x="124" y="111" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#F8FAFC" text-anchor="middle">FLAIR</text>

            <rect x="12" y="136" width="146" height="85" rx="5" fill="#F1F5F9" stroke="#CBD5E1"/>
            <text x="85" y="156" font-family="Inter, sans-serif" font-size="9" font-weight="700" fill="#1E293B" text-anchor="middle">Median Pre-Filter</text>
            <text x="85" y="172" font-family="Inter, sans-serif" font-size="8" fill="#475569" text-anchor="middle">Intensity Normalization</text>
            <text x="85" y="188" font-family="Inter, sans-serif" font-size="8" fill="#475569" text-anchor="middle">Co-Registration Alignment</text>
            <text x="85" y="204" font-family="Inter, sans-serif" font-size="7.5" font-weight="600" fill="#0F172A" text-anchor="middle">4 Channels Ingested</text>
          </g>

          <line x1="205" y1="160" x2="245" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#ar5)"/>

          <!-- 2. Feature Pyramid Network -->
          <g transform="translate(250, 40)">
            <rect width="360" height="240" rx="8" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5"/>
            <text x="180" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="700" fill="#374151" text-anchor="middle">2. FEATURE PYRAMID NETWORK (FPN)</text>

            <!-- Bottom-Up Encoder -->
            <polygon points="30,210 30,80 130,120 130,210" fill="url(#m1)" stroke="#6366F1" stroke-width="1.5"/>
            <text x="75" y="170" font-family="Inter, sans-serif" font-size="8.5" font-weight="700" fill="#312E81" text-anchor="middle">Bottom-Up</text>
            <text x="75" y="185" font-family="Inter, sans-serif" font-size="7.5" fill="#4338CA" text-anchor="middle">Encoder</text>

            <!-- Top-Down Decoder -->
            <polygon points="230,120 230,210 330,80 330,210" fill="url(#m2)" stroke="#F59E0B" stroke-width="1.5"/>
            <text x="285" y="170" font-family="Inter, sans-serif" font-size="8.5" font-weight="700" fill="#78350F" text-anchor="middle">Top-Down</text>
            <text x="285" y="185" font-family="Inter, sans-serif" font-size="7.5" fill="#92400E" text-anchor="middle">Decoder</text>

            <!-- Lateral Connections -->
            <line x1="130" y1="135" x2="230" y2="135" stroke="#D97706" stroke-width="2" stroke-dasharray="3 3"/>
            <line x1="130" y1="165" x2="230" y2="165" stroke="#D97706" stroke-width="2" stroke-dasharray="3 3"/>
            <line x1="130" y1="195" x2="230" y2="195" stroke="#D97706" stroke-width="2" stroke-dasharray="3 3"/>

            <rect x="145" y="145" width="70" height="40" rx="4" fill="#FFFFFF" stroke="#D1D5DB"/>
            <text x="180" y="162" font-family="Inter, sans-serif" font-size="7.5" font-weight="700" fill="#111827" text-anchor="middle">1x1 Conv</text>
            <text x="180" y="176" font-family="Inter, sans-serif" font-size="7" fill="#6B7280" text-anchor="middle">Lateral Links</text>
          </g>

          <line x1="615" y1="160" x2="655" y2="160" stroke="#D97706" stroke-width="2.5" marker-end="url(#ar5)"/>

          <!-- 3. Segmentation Mask Output -->
          <g transform="translate(660, 40)">
            <rect width="210" height="240" rx="8" fill="#ECFDF5" stroke="#10B981" stroke-width="1.5"/>
            <text x="105" y="24" font-family="Inter, sans-serif" font-size="10" font-weight="800" fill="#065F46" text-anchor="middle">3. TUMOR MASK PREDICTION</text>

            <rect x="25" y="45" width="160" height="90" rx="6" fill="#1E293B"/>
            <path d="M 70 85 Q 90 60 120 75 Q 145 95 130 115 Q 95 125 70 85 Z" fill="rgba(239, 68, 68, 0.7)" stroke="#EF4444" stroke-width="2"/>
            <circle cx="105" cy="95" r="14" fill="#F59E0B"/>
            <text x="105" y="128" font-family="Inter, sans-serif" font-size="7.5" fill="#E2E8F0" text-anchor="middle">Glioma Tumor Margin</text>

            <rect x="20" y="145" width="170" height="75" rx="5" fill="#FFFFFF" stroke="#A7F3D0"/>
            <text x="105" y="165" font-family="Inter, sans-serif" font-size="9" font-weight="800" fill="#065F46" text-anchor="middle">Dice Score: 0.85</text>
            <text x="105" y="180" font-family="Inter, sans-serif" font-size="8" fill="#047857" text-anchor="middle">Sensitivity: 92% · Specificity: 89%</text>
            <text x="105" y="196" font-family="Inter, sans-serif" font-size="7.5" font-weight="600" fill="#065F46" text-anchor="middle">Automated Volumetric Isolation</text>
          </g>
        </svg>`
      }
    ]
  }
};
