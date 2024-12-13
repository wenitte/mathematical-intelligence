theorem Addition_of_Cuts_is_Commutative() {
  assert(
    ∀α,β ∈ Cuts: α + β = β + α
  )
} ↔

proof Addition_of_Cuts_is_Commutative() {
  setVar(α: Cut, β: Cut) →
  define(α + β := {p + q | p ∈ α ∧ q ∈ β}) →
  define(β + α := {q + p | p ∈ α ∧ q ∈ β}) →
  
  lemma Rational_Addition_Commutative() {
    assert(∀p,q ∈ ℚ: p + q = q + p)
  } →

  apply(Rational_Addition_Commutative()) →
  
  assert(
    ∀p ∈ α, ∀q ∈ β: 
    p + q = q + p
  ) →
  
  assert(
    {p + q | p ∈ α ∧ q ∈ β} = {q + p | p ∈ α ∧ q ∈ β}
  ) →
  
  assert(α + β = β + α)
}