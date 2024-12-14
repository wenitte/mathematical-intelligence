theorem PadicSquareRoot_NecessaryCondition() {
  assert(
    ∀p ∈ ℙ\{2}, ∀a ∈ ℤ, ∀x ∈ ℤp → 
    (p ∤ a ∧ x² = a) →
    QuadraticResidue(a,p)
  )
} ↔

proof PadicSquareRoot_NecessaryCondition() {
  setVar(p: ℙ\{2}, a: ℤ, x: ℤp) →
  assume(p ∤ a ∧ x² = a) →
  
  define(F: ℤ[X]) {
    F(X) = X² - a
  } →
  
  define(F': ℤ[X]) {
    F'(X) = 2X
  } →
  
  assert(F(x) = 0) →
  
  lemma CharacterizationPadicRoot() {
    assert(
      ∃{aₙ}ₙ∈ℕ ∈ ℤ →
      (lim(n→∞)(aₙ) = a ∧
       ∀n ∈ ℕ: F(aₙ) ≡ 0 (mod p^(n+1)))
    )
  } →
  
  apply(CharacterizationPadicRoot()) →
  
  setVar(aₙ: sequence(ℤ)) →
  assert(a₀² - a ≡ 0 (mod p)) →
  assert(a₀² ≡ a (mod p)) →
  
  define(QuadraticResidue(a,p)) {
    ∃x ∈ ℤ: x² ≡ a (mod p)
  } →
  
  assert(QuadraticResidue(a,p))
}