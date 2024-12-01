theorem_definition(Liouville) ↔
    x ∈ ℝ algebraic ∧ deg(x) = n
    → ∃k(x) > 0, ∀n ∈ ℕ,
    ∄{(p, q) ∈ ℤ × ℕ : gcd(p, q) = 1 ∧ |x − p/q| < k(x) / qⁿ⁺¹}
→

[polynomial_definition(P) ↔    ∃f(X) = aₙXⁿ + ... + a₀ ∈ ℤ[X], f(x) = 0 ∧ deg(f) = n
    f(X) irreducible over ℤ → ∀(p, q) ∈ ℤ × ℕ : gcd(p, q) = 1, f(p/q) ≠ 0]
→

[numerator_bound(N) ↔
    |f(p/q)| = |aₙpⁿ + ... + a₀qⁿ| ≥ 1, ∀(p, q) ∈ ℤ × ℕ]
→

[fraction_error(F) ↔
    ∀c ∈ ℝ : |c − x| < 1, |f'(c)| < M, ∃M > 0
    → |f(p/q)| ≤ M|x − p/q|qⁿ]
→

[contradiction(Contr) ↔
    Assume ∃∞ {(p, q) ∈ ℤ × ℕ : |x − p/q| < k(x) / qⁿ⁺¹}
    → ∃p, q : |x − p/q|qⁿ⁺¹ < 1/M, contradicting |f(p/q)| ≥ 1/qⁿ]
→

[conclusion(C) ↔
    x ∈ ℝ algebraic, deg(x) = n
    → x approximated by rationals to order ≤ n
    ∴ Proved.]
