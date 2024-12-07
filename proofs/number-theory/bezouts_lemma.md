theorem_definition(bezout) ↔
∀a, b ∈ ℤ, ∃s, t ∈ ℤ, gcd(a, b) = sa + tb ∧ ∀c ∈ ℤ, c = na + mb ↔ c = k·gcd(a, b) for k ∈ ℤ →
assume(a ≠ 0 ∨ b ≠ 0) →
define(J) ↔ {na + mb : n, m ∈ ℤ} ∧ define(S) ↔ {x ∈ J : x > 0} →
well_ordering ↔ ∃d ∈ S, d = min(S) →
d_properties ↔ d = sa + tb for some s, t ∈ ℤ ∧ d > 0 →
divisor_proof ↔ a = dq + r where 0 ≤ r < d ∧ r = a − dq = (1 − sq)a − tq·b ∈ J →
r > 0 → r ∈ S contradicts minimality of d → r = 0 → d ∣ a ∧ d ∣ b →
gcd_maximality ↔ assume(e = gcd(a, b)) → e ∣ a ∧ e ∣ b → e ∣ d → e ≤ d ∧ d ∣ a ∧ d ∣ b → d ≤ e → d = e →
linear_combinations ↔ ∀c ∈ ℤ, c = na + mb → d ∣ c ∧ ∀k ∈ ℤ, k·gcd(a, b) = (sk)a + (tk)b for some sk, tk ∈ ℤ →
gcd(a, b) = sa + tb for s, t ∈ ℤ ∧ c ∈ ℤ is a multiple of gcd(a, b).
∴ Proved.