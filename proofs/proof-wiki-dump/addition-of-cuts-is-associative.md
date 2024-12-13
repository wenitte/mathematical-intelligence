theorem Addition_Cuts_Associative() {
  assert(
    ∀α,β,γ ∈ Cuts ⇒
    (α + β) + γ = α + (β + γ)
  )
} ↔

proof Addition_Cuts_Associative() {
  setVar(α: Cut, β: Cut, γ: Cut) →
  
  lemma Left_Side_Form() {
    assert(
      (α + β) + γ = {(p + q) + r | p ∈ α ∧ q ∈ β ∧ r ∈ γ}
    )
  } →

  lemma Right_Side_Form() {
    assert(
      α + (β + γ) = {p + (q + r) | p ∈ α ∧ q ∈ β ∧ r ∈ γ}
    )
  } →

  lemma Rational_Associative() {
    assert(
      ∀p,q,r ∈ ℚ ⇒ (p + q) + r = p + (q + r)
    )
  } →

  apply(Left_Side_Form()) →
  apply(Right_Side_Form()) →
  apply(Rational_Associative()) →
  
  assert(
    {(p + q) + r | p ∈ α ∧ q ∈ β ∧ r ∈ γ} = 
    {p + (q + r) | p ∈ α ∧ q ∈ β ∧ r ∈ γ}
  ) →
  
  conclude((α + β) + γ = α + (β + γ))
}