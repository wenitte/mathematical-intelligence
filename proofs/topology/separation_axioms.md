t0_definition(T0) ↔
    X topological space
    ∀x,y ∈ X, x ≠ y
    ∃U open, (x ∈ U ∧ y ∉ U) ∨ (y ∈ U ∧ x ∉ U)
→

[t1_definition(T1) ↔
    X topological space
    ∀x,y ∈ X, x ≠ y
    ∃U,V open
    x ∈ U ∧ y ∉ U
    y ∈ V ∧ x ∉ V]
→

[t2_definition(T2) ↔
    X topological space
    ∀x,y ∈ X, x ≠ y
    ∃U,V open
    x ∈ U ∧ y ∈ V
    U ∩ V = ∅]
→

[implications(I) ↔
    T2 → T1 → T0
    T2 ↔ Hausdorff]
