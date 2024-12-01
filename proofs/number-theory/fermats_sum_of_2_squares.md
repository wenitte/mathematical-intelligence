theorem_definition(Fermat_2sq) ↔
    ∀p ∈ ℕ, p is prime → (∃a, b ∈ ℤ : p = a² + b² ↔ p = 2 ∨ p ≡ 1 (mod 4))
→

[direction_1(D1) ↔
    Assume p = a² + b²:
    a², b² ≡ 0 or 1 (mod 4)
    → a² + b² ≡ 0, 1, or 2 (mod 4)
    Since p is prime and p ≠ 0 (mod 4),
    p ≠ 2 (mod 4) unless p = 2
    ∴ p = 2 ∨ p ≡ 1 (mod 4)]
→

[reciprocity_step(R) ↔
    Lemma 1: ∀p prime, p ≡ 1 (mod 4) → p | N = a² + b² for some (a, b) = 1]
→

[descent_step(D) ↔
    Lemma 2: If p | a² + b², where (a, b) = 1,
    then p = x² + y² for some (x, y) = 1]
→

[reciprocity_proof(RP) ↔
    Lemma 1 Proof:
    Let p ≡ 1 (mod 4). Consider x² ≡ −1 (mod p).
    If p = 2, x = 1 solves x² ≡ −1 (mod p)
    If p ≡ 1 (mod 4), 4 | φ(p), so ∃a : ordₚ(a) = 4
    → a² ≡ −1 (mod p) with x = a
    If p ≡ 3 (mod 4), x² ≡ −1 (mod p) implies ordₚ(x) = 2
    But φ(p) = p − 1 → ordₚ(x) | (p − 1, 4) = 2
    → x² ≡ 1 (mod p) → contradiction since p | 2
    ∴ Solutions exist if and only if p = 2 or p ≡ 1 (mod 4)]
→

[descent_proof(DP) ↔
    Lemma 2 Proof:
    Let N = a² + b², with (a, b) = 1 and p | N.
    Write N = pM with M = c² + d², (c, d) = 1
    By Euler’s identity:
    (a² + b²)(c² + d²) = (ac − bd)² + (ad + bc)²
    Iterate descent:
    Let p | N₁ = a₁² + b₁², (a₁, b₁) = 1, N₁ < N
    Continue until M = 1, yielding p = x² + y², (x, y) = 1]
→

[contradiction_step(CS) ↔
    If p ≡ 1 (mod 4) is not a sum of two squares,
    descent process creates an infinite decreasing sequence of primes
    → Contradiction since the smallest prime is 2, which is a sum of two squares]
→

[conclusion(C) ↔
    p = 2 or p ≡ 1 (mod 4) ↔ p = a² + b²
    ∴ Proved.]
