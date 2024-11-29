∀X(Set(X) ∧ Denumerable(X) ↔ ∃f(Bijection(ℤ⁺, X)))

(Assume ¬Denumerable(ℚ)) →
(Define f: ℚ → ℤ × ℤ⁺ such that ∀q∈ℚ(f(q) = (m, n) ∧ q = m/n ∧ n > 0 ∧ gcd(m, n) = 1)) ∧
(∀q₁, q₂∈ℚ(f(q₁) = f(q₂) → q₁ = q₂)) ∧
(Image(f, ℚ) ⊆ ℤ × ℤ⁺ ∧ InfiniteSubset(Image(f, ℚ))) ∧
(Denumerable(ℤ × ℤ⁺) → Denumerable(Image(f, ℚ))) ∧
(Bijection(f, Image(f, ℚ)) → Denumerable(ℚ)) →
¬(¬Denumerable(ℚ)) →
Denumerable(ℚ).
