theorem_definition(Brouwer_Fixed_Point_Theorem) ↔
    ∀g: D² → D² (Continuous(g) ∧ ∀x ∈ D² (g(x) ≠ x) → ⊥).
→

[assumption(Contradiction_Hypothesis) ↔
    ∃g: D² → D² (Continuous(g) ∧ ∀x ∈ D² (g(x) ≠ x))].
→

[construction(Extension_H) ↔
    ∃h: D² → S¹ (h(x) = point_on_ray(x, g(x)) ∧ h|S¹ = idS¹)].
→

[group_homomorphism(Induced_Map) ↔
    ∃π₁ (π₁(h) ∘ π₁(i) = π₁(idS¹))].
→

[group_properties(Fundamental_Group) ↔
    ∀π₁: Homomorphism (π₁(idS¹): ℤ → ℤ ∧ π₁(h): ℤ → 0 ∧ π₁(i): ℤ → 0)].
→

[contradiction(Identity_Contradiction) ↔
    π₁(h) ∘ π₁(i) = π₁(idS¹) → idℤ = 0].
→

[conclusion(C) ↔
    ∀g: D² → D² (Continuous(g) ∧ ∀x ∈ D² (g(x) ≠ x) → ⊥.
    ∴ Proved.].
