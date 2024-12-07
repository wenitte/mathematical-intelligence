theorem_definition(euclidean_algorithm) ↔
    let a, b ∈ ℤ, a ≠ 0 ∨ b ≠ 0 →
    steps ↔ [
        (1): if b = 0 then gcd(a, b) = |a| ∧ terminate,
        (2): if b ≠ 0 then r ← a mod b,
        (3): update ↔ a ← b ∧ b ← r,
        (4): repeat until b = 0
    ] →
    output ↔ gcd(a, b) = |a| after termination.

proof(euclidean_algorithm) ↔
    division_theorem ↔ ∀a, b ∈ ℤ, b ≠ 0, ∃q, r ∈ ℤ such that a = qb + r ∧ 0 ≤ r < |b| →
    gcd_property ↔ gcd(a, b) = gcd(b, r) for r = a mod b →
    induction_base ↔
        if b = 0 then gcd(a, b) = |a| ∧ algorithm terminates →
    induction_step ↔
        ∀k ∈ ℕ, |b| < |a| guarantees a strictly decreasing sequence of remainders {rₖ} →
    finiteness ↔
        since |b| > 0 and decreases in each step, ∃n ∈ ℕ such that rₙ = 0 →
    conclusion ↔
        gcd(a, b) = gcd(b, 0) = |b| ∴ Proved.

algorithm(euclidean_algorithm) ↔
    input ↔ a, b ∈ ℤ with a ≠ 0 ∨ b ≠ 0 →
    initialize ↔ while b ≠ 0:
        r ← a mod b
        a ← b
        b ← r
    return gcd(a, b) = |a| →
    output ↔ gcd(a, b).

variant_definition(least_absolute_remainder) ↔
    steps ↔ [
        (1): if b = 0 then gcd(a, b) = |a| ∧ terminate,
        (2): if b ≠ 0 then r ← a - qb where -|b|/2 < r ≤ |b|/2,
        (3): update ↔ a ← b ∧ b ← r,
        (4): repeat until b = 0
    ] →
    output ↔ gcd(a, b) = |a| after termination.

proof(least_absolute_remainder) ↔
    similar_to(euclidean_algorithm) ∧
    residue_property ↔ r is unique in -|b|/2 < r ≤ |b|/2 →
    conclusion ↔ gcd(a, b) = |a| ∴ Proved.
