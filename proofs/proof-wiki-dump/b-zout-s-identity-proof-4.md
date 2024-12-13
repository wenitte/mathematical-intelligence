theorem Bezout_Identity() {
  assert(
    ∀a,b ∈ ℤ: (a ≠ 0 ∨ b ≠ 0) →
    ∃x,y ∈ ℤ: ax + by = gcd(a,b) ∧
    gcd(a,b) = min({z ∈ ℤ⁺: ∃m,n ∈ ℤ: z = ma + nb})
  )
} ↔

proof Bezout_Identity() {
  setVar(a,b: ℤ) →
  assume(a ≠ 0 ∨ b ≠ 0) →
  
  define(J = {x ∈ ℤ: ∃m,n ∈ ℤ: x = ma + nb}) →
  
  lemma J_is_Ideal() {
    let(α = m₁a + n₁b, β = m₂a + n₂b, c ∈ ℤ) →
    assert(α + β = (m₁ + m₂)a + (n₁ + n₂)b ∈ J) ∧
    assert(cα = (cm₁)a + (cn₁)b ∈ J)
  } →
  
  assert(a = 1a + 0b ∈ J ∧ b = 0a + 1b ∈ J) →
  assert(J ≠ {0}) →
  
  apply(Principal_Ideal_Theorem) →
  assert(∃x₀ > 0: J = x₀ℤ) →
  
  assert(a ∈ J ∧ J = x₀ℤ → x₀|a) →
  assert(b ∈ J ∧ J = x₀ℤ → x₀|b) →
  assert(x₀ ∈ D(a,b)) →
  
  assert(∃r,s ∈ ℤ: x₀ = ra + sb) →
  
  lemma GCD_Properties() {
    let(x₁ ∈ D(a,b)) →
    assert(x₁|a ∧ x₁|b) →
    assert(x₁|(ra + sb)) →
    assert(x₁|x₀) →
    assert(|x₁| ≤ |x₀| = x₀)
  } →
  
  conclude(x₀ = max(D(a,b)) = gcd(a,b) = ra + sb)
}