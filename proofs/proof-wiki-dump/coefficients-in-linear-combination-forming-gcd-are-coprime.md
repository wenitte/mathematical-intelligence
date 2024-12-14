theorem Coprimal_GCD_Coefficients() {
  assert(
    ∀a,b,x,y ∈ ℤ : 
    (ax + by = gcd{a,b}) →
    (x ⊥ y)
  )
} ↔

proof Coprimal_GCD_Coefficients() {
  setVar(a,b,x,y: ℤ) →
  setVar(d: ℤ = gcd{a,b}) →
  
  assert(d|a ∧ d|b) →
  assert(∃m,n ∈ ℤ : m = a/d ∧ n = b/d) →
  
  lemma Division_By_GCD() {
    assert(
      (ax + by = d) →
      ((a/d)x + (b/d)y = d/d) →
      (mx + ny = 1)
    )
  } →
  
  apply(Division_By_GCD()) →
  
  lemma Integer_Combination_Coprime() {
    assert(
      ∀m,n,x,y ∈ ℤ :
      (mx + ny = 1) →
      (x ⊥ y)
    )
  } →
  
  apply(Integer_Combination_Coprime()) →
  assert(x ⊥ y)
}