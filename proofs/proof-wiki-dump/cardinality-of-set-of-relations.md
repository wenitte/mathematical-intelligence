theorem Cardinality_Of_Relations() {
  assert(
    ∀S,T: Set ∧ isFinite(S) ∧ isFinite(T) ∧
    card(S) = n ∧ card(T) = m ∧
    ℛ = {R | R ⊆ (S × T)}
    ⇒ card(ℛ) = 2^(n*m)
  )
} ↔

proof Cardinality_Of_Relations() {
  setVar(S,T: Set) →
  setVar(n,m: ℕ) →
  assert(ℛ = {R | R ⊆ (S × T)}) →
  
  lemma Cartesian_Product_Cardinality() {
    assert(card(S × T) = n*m)
  } →
  
  lemma Power_Set_Cardinality() {
    assert(∀A: Set ⇒ card(𝒫(A)) = 2^(card(A)))
  } →
  
  assert(ℛ = 𝒫(S × T)) →
  apply(Cartesian_Product_Cardinality()) →
  assert(card(S × T) = n*m) →
  apply(Power_Set_Cardinality()) →
  assert(card(𝒫(S × T)) = 2^(card(S × T))) →
  assert(card(𝒫(S × T)) = 2^(n*m)) →
  assert(card(ℛ) = 2^(n*m))
}