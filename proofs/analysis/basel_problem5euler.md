((infinite_product(sin) ↔ (sin(πx) = πx * Π_{n=1}^∞ (1 - x^2 / n^2))) →

((rhs_expansion(R) ↔ (R = πx * (1 - x^2 / 4) * (1 - x^2 / 9) * (1 - x^2 / 16) * ...)) →
(rhs_rewrite(R_alt) ↔ (R = πx * (1 + 1/4 + 1/9 + 1/16 + ...) + πx^3 * (1/1.4 + 1/4.9 + ...) + ...))) →

((lhs_expansion(L) ↔ (L = πx - (πx)^3 / 3! + (πx)^5 / 5! - ...)) →

((coefficient_comparison(C) ↔ (compare coefficients of x^3 in R and L)) →
({ζ(2)} = {Σ_{n=1}^∞ (1 / n^2) : ζ(2) = π^2 / 6})))
