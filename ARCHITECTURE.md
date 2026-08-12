# ParkSmart Architecture Alignment

ParkSmart has been structurally reorganized to follow the major architectural
conventions of `addis_park_luxe_1786460388844` without forcing a technology
migration from the existing HTML/CSS/JavaScript implementation.

## Target structure

```text
ParkSmart/
├── docs/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── scripts/
│   ├── styles/
│   │   ├── base/
│   │   ├── components/
│   │   ├── layout/
│   │   └── pages/
│   ├── utils/
│   └── README.md
├── server/
├── mobile/
├── index.html
├── README.md
├── ARCHITECTURE.md
├── CHANGELOG.md
├── LICENSE
└── .hintrc
```

## Alignment decisions

1. The old `client/` container was removed.
2. Frontend source is now grouped under `src/`.
3. Reusable UI fragments are under `src/components/`.
4. Pages are under `src/pages/`, with the landing page promoted to the root
   `index.html`, matching the reference project's entry-point convention.
5. CSS remains modular under `src/styles/` with the existing base,
   components, layout, and pages separation.
6. JavaScript modules are grouped under `src/scripts/`.
7. Frontend assets are grouped under `src/assets/`.
8. `docs/`, `server/`, and `mobile/` remain top-level concerns.
9. The embedded `.git/` directory was intentionally excluded from the
   distributable ZIP; Git history should remain in the actual repository.

This is an architectural reorganization, not a React/TypeScript conversion.
The next modernization step can be performed separately if ParkSmart is to
adopt the same React/Vite component architecture as the reference project.
