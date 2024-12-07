theorem_definition(Wilson) ↔
    ∀p prime, (p-1)! ≡ -1 (mod p) →

[inverse_properties ↔
    ∀a ∈ {1,...,p-1}, 
    ∃!a* ∈ {1,...,p-1}, aa* ≡ 1 (mod p) ∧
    (a*)* = a ∧
    a = a* ↔ a² ≡ 1 (mod p)] →

[self_inverse_analysis ↔
    a² ≡ 1 (mod p) →
    a ≡ ±1 (mod p) →
    a ∈ {1, p-1}] →

[pairing_strategy ↔
    (p-1)! = (1 × (p-1)) × ∏_{pairs} (a × a*) ∧
    a × a* ≡ 1 (mod p) for all pairs ∧
    1 and p-1 are unpaired] →

[final_computation ↔
    (p-1)! ≡ 1 × (p-1) × ∏_{pairs} 1 ≡ -1 (mod p)] →

[example_p11 ↔
    10! = 1 × 2 × 3 × 4 × 5 × 6 × 7 × 8 × 9 × 10 →
    pairs_rewrite ↔ 1 × (2×6) × (3×4) × (5×9) × (7×8) × 10 →
    mod_11_compute ↔ 1 × 1 × 1 × 1 × 1 × 10 ≡ -1 (mod 11)]

∴ Proved.