theorem_definition(Wilson) ↔
    ∀p prime, (p-1)! ≡ -1 (mod p) →

[primitive_root_setup ↔
    ∃g primitive root mod p →
    {1, g, g², ..., g^(p-2)} ≡ {1, 2, ..., p-1} (mod p)] →

[factorial_expression ↔
    (p-1)! ≡ 1·g·g²·...·g^(p-2) ≡ g^(1+2+...+(p-2)) (mod p)] →

[arithmetic_progression ↔
    sum := 1 + 2 + ... + (p-2) ∧
    terms := p-2 ∧
    first := 1 ∧
    last := p-2 →
    sum = (p-2)((p-2)+1)/2 = (p-2)(p-1)/2] →

[exponential_form ↔
    (p-1)! ≡ g^((p-2)(p-1)/2) (mod p)] →

[odd_prime_analysis ↔
    p = 2k+1 for k ∈ ℕ ∧
    k < 2k = p-1 →
    g^k ≢ 1 (mod p) ∧
    g^(2k) ≡ g^(p-1) ≡ 1 (mod p) by Fermat_Little ∧
    (g^k)² ≡ g^(2k) ≡ 1 (mod p) →
    g^k ≡ ±1 (mod p) ∧
    g^k ≡ -1 (mod p)] →

[final_computation ↔
    (p-1)! ≡ g^((p-2)(p-1)/2) ≡ g^((2k-1)k) ≡ (g^k)^(2k-1) ≡ (-1)^(2k-1) ≡ -1 (mod p)]

∴ Proved.