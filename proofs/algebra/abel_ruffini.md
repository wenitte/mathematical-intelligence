theorem_definition(Abel_Ruffini) ↔
    ∀n ≥ 5, the general polynomial of degree n has no solution in radicals
    ↔ the Galois group of the polynomial is not solvable
→

[polynomial_definition(P) ↔
    Let f(x) = (x - y₁)(x - y₂)...(x - yₙ),
    where {y₁, ..., yₙ} are roots of f(x)
    → y₁, ..., yₙ are independent transcendental elements over Q]
→

[elementary_symmetric_functions(E) ↔
    Coefficients of f(x) are elementary symmetric functions of y₁, ..., yₙ
    ∀σ ∈ Sₙ, σ permutes {y₁, ..., yₙ}
    → σ leaves f(x) invariant]
→

[galois_group_definition(G) ↔
    G(E/Q) = Aut(E/Q), where E is the splitting field of f(x)
    |G(E/Q)| = n!
    → G(E/Q) ≅ Sₙ]
→

[symmetry_and_solubility(S) ↔
    Composition series of Sₙ: Sₙ ≥ Aₙ > {e}
    ∀n ≥ 5, Aₙ is simple and non-abelian
    → Sₙ is not solvable]
→

[generalization(Gen) ↔
    ∀n ≥ 5, Galois group of the general polynomial of degree n is Sₙ
    → No solution in radicals exists for n ≥ 5]
→

[specific_case(SC) ↔
    Specific polynomials may have solvable Galois groups
    e.g., x⁵ - 1 has an abelian Galois group and is solvable]
→

[conclusion(C) ↔
    General polynomials of degree n ≥ 5 are not solvable in radicals
    ∴ Proved.]
