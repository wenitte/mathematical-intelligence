theorem_definition(Minkowski_Theorem) ↔
    ∀C ⊆ ℝᵈ, symmetric(C) ∧ convex(C) ∧ bounded(C) ∧ vol(C) > 2ᵈ →
    ∃z ∈ ℤᵈ \ {0}, z ∈ C 
    →

proof(Minkowski_Theorem) ↔
    ∀C ⊆ ℝᵈ, symmetric(C) ∧ convex(C) ∧ bounded(C) ∧ vol(C) > 2ᵈ →
    ∃C′ = ½·C = {½x : x ∈ C} ∧ vol(C′) > 1 ∧
    claim(∃v ∈ ℤᵈ\{0}, v ∈ C′ - C′) ∧
    (∀x ∈ C′ ∧ ∀v ∈ C′, -x ∈ C′ by symmetry ∧ 
    ½v = -½(-x) + ½(x + v) ∈ C′ by convexity) ∧
    
    proof_method_1(Minkowski) ↔
    (contradiction((C′ - C′) ∩ ℤᵈ = {0}) →
    (∀u, v ∈ ℤᵈ, u ≠ v → disjoint(C′ + u, C′ + v)) ∧
    ∃D = diameter(C′), ⋃ᵢ₌₋ₙᵗᵒᵗₙ(C′ + i) ⊆ [-N + D, N + D] ∧
    (2N + 1)ᵈvol(C′) ≤ 2ᵈ(N + D)ᵈ →
    1 < vol(C′) ≤ ((2N + D)/(2N + 1))ᵈ →
    contradiction as N → ∞) ∧

    proof_method_2(Blichfeldt) ↔
    (∀A ⊆ ℝᵈ, measurable(A) ∧ vol(A) > k →
    ∃f(x) = Σy∈ℤᵈ1_{A+x}(y) ∧
    ∫[0,1]ᵈ f(x)dx = Σy∈ℤᵈ ∫[0,1]ᵈ 1_{A+x}(y)dx =
    Σy∈ℤᵈ ∫[0,1]ᵈ 1_A(y - x)dx =
    Σy∈ℤᵈ ∫[-y,-y+1]ᵈ 1_A(t)dt =
    ∫ℝᵈ 1_A(t)dt = vol(A) > k →
    max_x f(x) ≥ k + 1)
    →

conclusion(Minkowski_Theorem) ↔
    ∀C ⊆ ℝᵈ, symmetric(C) ∧ convex(C) ∧ bounded(C) ∧ vol(C) > 2ᵈ →
    ∃z ∈ ℤᵈ \ {0}, z ∈ C
    ∴ Proved.
