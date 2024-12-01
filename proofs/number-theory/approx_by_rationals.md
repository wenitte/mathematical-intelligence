approximation_definition(A) ↔
    x ∈ ℝ ∧ ∃k(x) > 0, ∀n ∈ ℕ,
    ∃∞ {(p, q) ∈ ℤ × ℕ : gcd(p, q) = 1 ∧ |x − p/q| < k(x) / qⁿ}
→

[dirichlet_principle(D) ↔
    ∀x ∈ ℝ, ∀Q ∈ ℕ,
    ∃(p, q) ∈ ℤ × ℕ : q ≤ Q ∧ |x − p/q| < 1 / q²]
→

[box_principle_proof(B) ↔
    Let F = {q ∈ ℕ : 0 ≤ q ≤ Q}, |F| = Q + 1
    Let P = {[qx] : q ∈ F}, P ⊆ [0, 1), |P| = Q + 1
    Partition [0, 1) into intervals Iₐ = [a/Q, (a+1)/Q) for a ∈ {0, ..., Q − 1}
    By Dirichlet’s Box Principle, ∃q₁, q₂ ∈ F, q₁ < q₂, {q₁x} ∈ Iₐ ∧ {q₂x} ∈ Iₐ
    → |{q₁x} − {q₂x}| < 1/Q]
→

[fraction_estimate(F) ↔
    ∃p ∈ ℤ, q = q₂ − q₁, 1 ≤ q ≤ Q, |(q₂ − q₁)x − p| < 1/Q
    → |x − p/q| < 1 / q², ∃∞ {(p, q) ∈ ℤ × ℕ}]
→

[irrational_case(I) ↔
    x ∉ ℚ → ∃∞ {(p, q) ∈ ℤ × ℕ : |x − p/q| < 1 / q²}]
