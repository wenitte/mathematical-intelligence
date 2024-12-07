theorem_definition(Morley) ↔
    ∀a,b,c ∈ ℝ, ∀A,B,C,P,Q,T ∈ PO,
    a > 0 ∧ b > 0 ∧ c > 0 ∧
    a + b + c = π/3 ∧
    A ≠ B ∧ A ≠ C ∧ B ≠ C ∧ B ≠ P ∧ B ≠ Q ∧ A ≠ T ∧ C ≠ T ∧
    angle(b) = ∠(B⃗C,B⃗P) ∧
    angle(b) = ∠(B⃗P,B⃗Q) ∧
    angle(b) = ∠(B⃗Q,B⃗A) ∧
    angle(c) = ∠(C⃗P,C⃗B) ∧
    angle(c) = ∠(C⃗T,C⃗P) ∧
    angle(a) = ∠(A⃗B,A⃗Q) ∧
    angle(a) = ∠(A⃗Q,A⃗T) ∧
    angle(a) = ∠(A⃗T,A⃗C) →
    equilateral(P,Q,T)