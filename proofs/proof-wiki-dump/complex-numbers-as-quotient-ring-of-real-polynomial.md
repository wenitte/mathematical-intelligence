theorem Complex_Numbers_Quotient_Ring() {
  let(ℂ: set[Complex]) ∧
  let(P[x]: set[RealPolynomial]) ∧
  let(I = {Q(x)(x² + 1) | Q(x) ∈ P[x]}) ∧
  let(D = P[x]/I) →
  assert(
    ⟨ℂ, +, ×⟩ ≅ ⟨D, +, ×⟩
  )
} ↔

proof Complex_Numbers_Quotient_Ring() {
  lemma Division_Algorithm() {
    assert(∀d ∈ D → ∃(a,b ∈ ℝ)[d = [a + bx]₍ₓ²₊₁₎])
  } →
  
  define(φ: D → ℂ, φ([a + bx]₍ₓ²₊₁₎) = a + bi) →
  
  // Surjectivity
  assert(∀z ∈ ℂ → ∃d ∈ D[φ(d) = z]) →
  
  // Injectivity
  setVar(a,b,c,d: ℝ) →
  assert(
    φ([a + bx]₍ₓ²₊₁₎) = φ([c + dx]₍ₓ²₊₁₎) →
    a + bi = c + di →
    (a = c ∧ b = d) →
    [a + bx]₍ₓ²₊₁₎ = [c + dx]₍ₓ²₊₁₎
  ) →
  
  // Homomorphism for addition
  assert(
    φ([a + bx]₍ₓ²₊₁₎ + [c + dx]₍ₓ²₊₁₎) =
    φ([(a + c) + (b + d)x]₍ₓ²₊₁₎) =
    (a + c) + (b + d)i =
    (a + bi) + (c + di) =
    φ([a + bx]₍ₓ²₊₁₎) + φ([c + dx]₍ₓ²₊₁₎)
  ) →
  
  // Homomorphism for multiplication
  assert(
    φ([a + bx]₍ₓ²₊₁₎ × [c + dx]₍ₓ²₊₁₎) =
    φ([(ac - bd) + (ad + bc)x]₍ₓ²₊₁₎) =
    (ac - bd) + (ad + bc)i =
    (a + bi) × (c + di) =
    φ([a + bx]₍ₓ²₊₁₎) × φ([c + dx]₍ₓ²₊₁₎)
  ) →
  
  conclude(φ: bijective_ring_homomorphism) →
  conclude(⟨ℂ, +, ×⟩ ≅ ⟨D, +, ×⟩)
}