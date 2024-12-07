theorem_definition(Friendship) ↔
    ∀T ⊆ 𝒫(U), 
    finite(T) ∧ T ≠ ∅ ∧
    F ⊆ T × T ∧ symmetric(F) ∧ irreflexive(F) ∧
    (∀u,v ∈ T, u ≠ v → |{w ∈ T | F(u,w) ∧ F(v,w)}| = 1) →
    ∃u ∈ T, ∀v ∈ T, u ≠ v → F(u,v) →

[definitions ↔
    symmetric(F) := ∀x,y ∈ T, F(x,y) → F(y,x) ∧
    irreflexive(F) := ∀x ∈ T, ¬F(x,x)]

∴ qed