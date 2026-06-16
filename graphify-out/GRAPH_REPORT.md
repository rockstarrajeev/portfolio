# Graph Report - portfolio  (2026-06-04)

## Corpus Check
- 22 files · ~140,445 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 98 nodes · 113 edges · 17 communities (11 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]

## God Nodes (most connected - your core abstractions)
1. `Project State Graph & Memory` - 6 edges
2. `scripts` - 5 edges
3. `personalInfo` - 5 edges
4. `React + Vite` - 3 edges
5. `skillsData` - 2 edges
6. `techStack` - 2 edges
7. `experienceData` - 2 edges
8. `projectsData` - 2 edges
9. `certificationsData` - 2 edges
10. `private` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (17 total, 6 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.14
Nodes (14): devDependencies, autoprefixer, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, postcss (+6 more)

### Community 1 - "Community 1"
Cohesion: 0.18
Nodes (4): itemVariants, menuVariants, navLinks, languageColors

### Community 2 - "Community 2"
Cohesion: 0.20
Nodes (9): name, private, scripts, build, dev, lint, preview, type (+1 more)

### Community 3 - "Community 3"
Cohesion: 0.20
Nodes (10): dependencies, framer-motion, pdfjs-dist, react, react-dom, react-icons, react-intersection-observer, react-pdf (+2 more)

### Community 5 - "Community 5"
Cohesion: 0.29
Nodes (6): Active Task, Blocked, Completed Milestones, Decisions Log, Last Checkpoint, Project State Graph & Memory

### Community 6 - "Community 6"
Cohesion: 0.40
Nodes (3): certificationsData, educationData, githubRepos

### Community 10 - "Community 10"
Cohesion: 0.50
Nodes (3): Expanding the ESLint configuration, React Compiler, React + Vite

## Knowledge Gaps
- **47 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+42 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 0` to `Community 2`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Community 3` to `Community 2`?**
  _High betweenness centrality (0.054) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _47 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._