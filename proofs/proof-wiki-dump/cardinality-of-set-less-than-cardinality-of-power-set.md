theorem Cardinality_Less_Than_PowerSet() {
  assert(
    ∀X: Set ⇒ (card(X) < card(𝒫(X)))
  )
} ↔

proof Cardinality_Less_Than_PowerSet() {
  setVar(X: Set) →
  
  lemma No_Bijection() {
    assert(¬∃f: X → 𝒫(X) where Bijective(f))
  } →
  
  apply(No_Bijection()) →
  assert(X ≁ 𝒫(X)) →
  assert(card(X) ≠ card(𝒫(X))) as eq1 →
  
  lemma Singleton_Cardinality() {
    assert(card({x: x ∈ X where Singleton(x)}) = card(X))
  } →
  
  assert(∀x ∈ X ⇒ {x} ⊆ X) →
  assert(∀x ∈ X ⇒ {x} ∈ 𝒫(X)) →
  assert({{x}: x ∈ X} ⊆ 𝒫(X)) →
  
  lemma Subset_Cardinal_Inequality() {
    assert(A ⊆ B ⇒ card(A) ≤ card(B))
  } →
  
  apply(Singleton_Cardinality()) ∧
  apply(Subset_Cardinal_Inequality()) →
  assert(card(X) ≤ card(𝒫(X))) →
  
  combine(eq1) →
  assert(card(X) < card(𝒫(X)))
}