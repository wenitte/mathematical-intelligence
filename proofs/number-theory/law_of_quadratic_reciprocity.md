∀p∀q(p ≠ q ∧ p, q ∈ ℙ ∧ p, q odd →
LegendreSymbol(p, q) * LegendreSymbol(q, p) = (-1)^((p-1)(q-1)/4)).

LegendreSymbol(a, p) = 1 ↔ ∃x(x² ≡ a (mod p)).

LegendreSymbol(a, p) = -1 ↔ ¬∃x(x² ≡ a (mod p)) ∧ gcd(a, p) = 1.

LegendreSymbol(a, p) = 0 ↔ p | a.

a^((p-1)/2) ≡ LegendreSymbol(a, p) (mod p).

LegendreSymbol(p, q) = LegendreSymbol(q, p) * (-1)^((p-1)(q-1)/4).
