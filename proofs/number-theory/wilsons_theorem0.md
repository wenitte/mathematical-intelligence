theorem_definition(Wilson) ↔ 
    ∀p prime, (p-1)! ≡ -1 (mod p) →

[polynomial_lemma ↔
    ∀f ∈ ℤ[X], deg(f) = d →
    |{a ∈ {0,...,p-1} : f(a) ≡ 0 (mod p)}| > d →
    ∀i, coefficient(f,i) ≡ 0 (mod p)] →

[construction ↔
    f(X) := X^(p-1) - 1 - ∏_{k=1}^{p-1} (X-k) ∧
    degree(f) < p-1 ∧
    leading_coefficient(f) = 1 - 1 = 0] →

[root_analysis ↔
    ∀a ∈ {1,...,p-1},
    f(a) = a^(p-1) - 1 - 0 ≡ 1 - 1 ≡ 0 (mod p) by Fermat_Little ∧
    |roots(f)| = p-1 > degree(f)] →

[coefficient_conclusion ↔
    all_coefficients_divisible_by_p →
    f(0) ≡ 0 (mod p) →
    -1 - (-1)^(p-1)·∏_{k=1}^{p-1} k ≡ 0 (mod p)] →

[final_steps ↔
    p odd → (-1)^p = 1 →
    -1 - (p-1)! ≡ 0 (mod p) →
    (p-1)! ≡ -1 (mod p)]

∴ Proved.