locally_compact_definition(L) ↔
    X topological space
    ∀x ∈ X, ∀U open, x ∈ U
    ∃K ⊆ U compact
    x ∈ int(K)
→

[one_point_compactification(O) ↔
    X locally compact Hausdorff
    X* = X ∪ {∞}
    τ* = τ ∪ {X* \ K : K ⊆ X compact}
    → (X*,τ*) compact Hausdorff]
→

[regular_neighborhood(R) ↔
    X locally compact
    x ∈ X
    ∃U open, ∃K compact
    x ∈ U ⊆ cl(U) ⊆ K]
→

[compact_closed(C) ↔
    X locally compact Hausdorff
    K ⊆ X compact
    → K closed]
