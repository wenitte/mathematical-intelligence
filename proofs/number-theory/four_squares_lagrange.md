theorem_definition(Lagrange_4sq) ↔
    ∀n ∈ ℕ, ∃a, b, c, d ∈ ℤ : n = a² + b² + c² + d²
→

[lemma1(Euler_identity) ↔
    ∀a, b, c, d, w, x, y, z ∈ ℤ,
    (a² + b² + c² + d²)(w² + x² + y² + z²)
    = (aw + bx + cy + dz)²
    + (ax − bw − cz + dy)²
    + (ay + bz − cw − dx)²
    + (az − by + cx − dw)²]
→

[lemma2(Reduction_by_halving) ↔
    ∀m ∈ ℕ,
    if 2m = x² + y² for x, y ∈ ℤ,
    then m = (x−y/2)² + (x+y/2)² for integers x, y]
→

[lemma3(Odd_prime_multiple) ↔
    ∀p ∈ ℕ, p odd prime,
    ∃a, b, k ∈ ℤ : 0 < k < p,
    a² + b² + 1 = kp]
→

[base_case(B) ↔
    n = 2:
    2 = 1² + 1² + 0² + 0²]
→

[odd_prime_case(OPC) ↔
    ∀p ∈ ℕ, p prime:
    By Lemma3(Odd_prime_multiple),
    ∃m, a, b, c, d ∈ ℤ, 0 < m < p,
    such that mp = a² + b² + c² + d²]
→

[reduction_step(RS) ↔
    If m > 1,
    By Lemma1(Euler_identity) and Lemma2(Reduction_by_halving),
    ∃n ∈ ℕ, 0 < n < m,
    such that np = w² + x² + y² + z² for some w, x, y, z ∈ ℤ]
→

[iterative_reduction(IR) ↔
    Repeat reduction_step(RS) until m = 1:
    1p = a² + b² + c² + d²]
→

[generalization(G) ↔
    ∀n ∈ ℕ:
    If n is a product of primes, factorize n = p₁ᵏ¹p₂ᵏ²...pₖᵏⁿ,
    → Each pᵢ = aᵢ² + bᵢ² + cᵢ² + dᵢ²
    → Use Lemma1(Euler_identity) to express n as a sum of four squares]
→

[conclusion(C) ↔
    ∀n ∈ ℕ, ∃a, b, c, d ∈ ℤ : n = a² + b² + c² + d²
    ∴ Proved.]
