theorem Automorphism_Group_C3() {
  assert(
    ∃G[G = C₃] ∧
    ∃Aut(C₃)[Aut(C₃) = {φ,θ}] ∧
    [∀x ∈ C₃ → φ(x) = x] ∧
    [θ(0₃) = 0₃ ∧ θ(1₃) = 2₃ ∧ θ(2₃) = 1₃] ∧
    |Aut(C₃)| = 2
  )
} ↔

proof Automorphism_Group_C3() {
  setVar(C₃: Group) →
  assert(|C₃| = 3) →
  
  lemma Prime_Group_Automorphism() {
    assert(
      ∀G[|G| = p ∧ isPrime(p) → |Aut(G)| = p-1]
    )
  } →
  
  assert(3 isPrime) →
  apply(Prime_Group_Automorphism()) →
  assert(|Aut(C₃)| = 3-1 = 2) →
  
  lemma Unique_Group_Order_Two() {
    assert(
      ∀G[|G| = 2 → G ≅ C₂]
    )
  } →
  
  assert(|Aut(C₃)| = 2) →
  apply(Unique_Group_Order_Two()) →
  assert(Aut(C₃) ≅ C₂) →
  assert(∃φ,θ[Aut(C₃) = {φ,θ}]) →
  verify(CayleyTable(Aut(C₃))) →
  conclude()
}