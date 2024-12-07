theorem_definition(Bertrand_Postulate) ↔ 
∀n ∈ ℕ, n > 1 → ∃p ∈ ℙ (n < p ≤ 2n). ↔

proof(Bertrand_Postulate) ↔ 
assume(n ∈ ℕ ∧ n > 1) →
define S = {p ∈ ℙ | n < p ≤ 2n} →
¬∃p ∈ S ↔ ∀p ∈ ℙ, (p ≤ n ∨ p > 2n) →
define C(2n, n) = (2n)! / ((n!)²) →
C(2n, n) > 4ⁿ / (2n + 1) →
∀p ∈ ℙ, define vₚ(k!) = ∑_{j=1}^∞ ⌊k / pʲ⌋ →
vₚ(C(2n, n)) = vₚ((2n)!) - 2vₚ(n!) →
∀p ∈ (n, 2n], vₚ(C(2n, n)) ≥ 1 →
¬∃p ∈ S → C(2n, n) ≤ 2ⁿ →
contradiction: C(2n, n) > 4ⁿ / (2n + 1) →
∃p ∈ S →
proven(Bertrand_Postulate)