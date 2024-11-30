((polyhedron(P) ↔ (vertices(P) ≠ ∅ ∧ edges(P) ≠ ∅ ∧ faces(P) ≠ ∅ ∧
incidence(P) ⊆ vertices(P) × edges(P) × faces(P))) ∧
(∀e ∈ edges(P) ∃v1, v2 ∈ vertices(P) (v1 ≠ v2 ∧ (v1, e) ∈ incidence(P) ∧ (v2, e) ∈ incidence(P))) ∧
(∀f ∈ faces(P) ∃e1, e2, e3 ∈ edges(P) ((e1 ≠ e2 ∧ e2 ≠ e3 ∧ e1 ≠ e3) ∧
((e1, f) ∈ incidence(P) ∧ (e2, f) ∈ incidence(P) ∧ (e3, f) ∈ incidence(P))))) →

((euler_formula(P) ↔ (vertices(P) - edges(P) + faces(P) = 2)) ∧
(∀P (polyhedron(P) → euler_formula(P)))) →

((let convex_polyhedron(P) = (∀v1, v2 ∈ vertices(P) (v1 ≠ v2 → line_segment(v1, v2) ∈ P))) ∧
(convex_polyhedron(P) → polyhedron(P))) →

((let topological_property(P) = ∃Q (polyhedron(Q) ∧ homeomorphic(P, Q) ∧ Q is a sphere)) ∧
(topological_property(P) → euler_formula(P)))
