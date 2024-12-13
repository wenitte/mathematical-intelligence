theorem Babbage_Congruence() {
  assert(
    ∀p ∈ ℙ, ∀a,b ∈ ℤ ⇒ (binomCoeff(a*p, b*p) ≡ binomCoeff(a,b) (mod p²))
  )
} ↔

proof Babbage_Congruence() {
  setVar(p: ℙ, a: ℤ, b: ℤ) →
  
  lemma Lucas_Theorem() {
    assert(
      ∀a,b ∈ ℤ_≥0 ⇒ 
      binomCoeff(a*p, b*p) ≡ 
      binomCoeff(⌊a*p/p⌋, ⌊b*p/p⌋) * binomCoeff(a mod p, b mod p) (mod p)
    )
  } →

  defineInduction(P(k) := ∀b ∈ ℤ: binomCoeff(k*p, b*p) ≡ binomCoeff(k,b) (mod p²)) →
  
  // Base case
  assert(P(0)) {
    case(b = 0): binomCoeff(0,0) ≡ binomCoeff(0,0) (mod p²) →
    case(b ≠ 0): binomCoeff(0,b*p) = 0 = binomCoeff(0,b) (mod p²)
  } →

  // Inductive step
  assume(P(k)) →
  
  lemma Binomial_Prime() {
    assert(∀r ∈ ℤ, 0 < r < p ⇒ binomCoeff(p,r) ≡ 0 (mod p))
  } →
  
  lemma Chu_Vandermonde() {
    assert(
      binomCoeff((k+1)*p, b*p) = 
      ∑(r=0 to b*p)[binomCoeff(k*p, b*p-r) * binomCoeff(p,r)]
    )
  } →
  
  apply(P(k)) →
  apply(Chu_Vandermonde()) →
  assert(P(k+1) ∧ P(k-1)) →
  
  conclude(
    ∀k: P(k) ⇒ P(k+1) ∧ P(k-1)
  ) →
  
  byInduction(
    ∀a,b ∈ ℤ: binomCoeff(a*p, b*p) ≡ binomCoeff(a,b) (mod p²)
  )
}