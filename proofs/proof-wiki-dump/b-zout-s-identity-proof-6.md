theorem Bezout_Identity() {
  assert(
    ∀a,b ∈ ℤ: (a ≠ 0 ∨ b ≠ 0) →
    ∃x,y ∈ ℤ: ax + by = gcd(a,b) ∧
    ∀z ∈ ℤ⁺: (∃m,n ∈ ℤ: am + bn = z) → z ≥ gcd(a,b)
  )
} ↔

proof Bezout_Identity() {
  setVar(a,b: ℤ) →
  assume(a ≠ 0 ∨ b ≠ 0) →
  
  lemma Integers_Euclidean() {
    assert(
      ℤ is_EuclideanDomain ∧
      ∀x ∈ ℤ: ν(x) = |x|
    )
  } →
  
  apply(Integers_Euclidean()) →
  apply(Bezout_Identity_EuclideanDomain(
    domain = ℤ,
    ν = |x|,
    a = a,
    b = b
  )) →
  
  assert(∃x,y ∈ ℤ: ax + by = gcd(a,b)) →
  assert(∀z ∈ ℤ⁺: (∃m,n ∈ ℤ: am + bn = z) → z ≥ gcd(a,b))
}