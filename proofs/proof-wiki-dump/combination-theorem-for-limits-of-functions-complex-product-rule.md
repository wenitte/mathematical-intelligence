theorem Complex_Product_Limit_Rule() {
  assert(
    ∀f,g: S → ℂ, c ∈ S, l,m ∈ ℂ ⇒
    (lim[z→c] f(z) = l ∧ lim[z→c] g(z) = m) →
    lim[z→c] (f(z)g(z)) = l·m
  )
} ↔

proof Complex_Product_Limit_Rule() {
  setVar(f,g: S → ℂ) →
  setVar(c ∈ S) →
  setVar(l,m ∈ ℂ) →
  
  assume(lim[z→c] f(z) = l ∧ lim[z→c] g(z) = m) →
  
  lemma Sequence_Construction() {
    assert(∃{zₙ} ⊆ S: 
      (∀n ∈ ℕ: zₙ ≠ c) ∧
      lim[n→∞] zₙ = c
    )
  } →
  
  apply(Complex_Function_Sequence_Limit_Theorem()) →
  assert(lim[n→∞] f(zₙ) = l) →
  assert(lim[n→∞] g(zₙ) = m) →
  
  apply(Complex_Sequence_Product_Rule()) →
  assert(lim[n→∞] (f(zₙ)g(zₙ)) = l·m) →
  
  apply(Complex_Function_Sequence_Limit_Theorem()) →
  assert(lim[z→c] (f(z)g(z)) = l·m)
}