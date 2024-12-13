theorem Bezouts_Identity() {
  assert(
    ∀a,b ∈ ℤ ∧ ¬(a=0 ∧ b=0) →
    ∃x,y ∈ ℤ: ax + by = gcd(a,b) ∧
    ∀z ∈ ℤ⁺: (∃m,n ∈ ℤ: z = am + bn) → z ≥ gcd(a,b)
  )
} ↔

proof Bezouts_Identity() {
  setVar(a,b: ℤ) →
  assume(¬(a=0 ∧ b=0)) →
  
  lemma Euclidean_Division() {
    assert(
      ∀q₁,r₁ ∈ ℤ: a = bq₁ + r₁ ∧
      ∀q₂,r₂ ∈ ℤ: b = r₁q₂ + r₂ ∧
      ...
      ∀qₙ,rₙ ∈ ℤ: rₙ₋₂ = rₙ₋₁qₙ + rₙ ∧
      rₙ = gcd(a,b)
    )
  } →

  apply(Euclidean_Division()) →
  
  let(x₁ = 1) →
  let(y₁ = -q₁) →
  assert(r₁ = ax₁ + by₁) →
  
  iterateBackwards(Euclidean_Division()) →
  
  ∃x,y ∈ ℤ: gcd(a,b) = ax + by →
  
  lemma Minimal_Property() {
    assert(
      ∀z ∈ ℤ⁺: (∃m,n ∈ ℤ: z = am + bn) → 
      z ≥ gcd(a,b)
    )
  } →
  
  apply(Minimal_Property()) →
  conclude()
}