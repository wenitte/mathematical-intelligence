theorem AdditiveGroupsIsomorphism() {
  assert(
    ∀n ∈ ℤ₊ ∧ 
    let G₁ = ⟨nℤ, +⟩ ∧
    let G₂ = ⟨ℤ, +⟩ 
    ⇒ G₁ ≅ G₂
  )
} ↔

proof AdditiveGroupsIsomorphism() {
  setVar(n: ℤ₊) →
  setGroup(G₁: ⟨nℤ, +⟩) →
  setGroup(G₂: ⟨ℤ, +⟩) →
  
  lemma InfiniteCyclicIsomorphicToIntegers() {
    assert(∀H(H is infinite cyclic group ⇒ H ≅ ⟨ℤ, +⟩))
  } →
  
  lemma IntegerMultiplesAreCyclic() {
    assert(∀n ∈ ℤ₊ ⇒ ⟨nℤ, +⟩ is infinite cyclic)
  } →
  
  lemma InfiniteCyclicUnique() {
    assert(∀G,H(G,H are infinite cyclic ⇒ G ≅ H))
  } →
  
  apply(IntegerMultiplesAreCyclic()) →
  apply(InfiniteCyclicIsomorphicToIntegers()) →
  apply(InfiniteCyclicUnique()) →
  
  assert(G₁ ≅ G₂)
}