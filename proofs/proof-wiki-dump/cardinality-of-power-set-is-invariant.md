theorem Cardinality_PowerSet_Invariant() {
  assert(
    ∀X,Y ∈ Set ∧
    card(X) = card(Y) ⇒
    card(𝒫(X)) = card(𝒫(Y))
  )
} ↔

proof Cardinality_PowerSet_Invariant() {
  setVar(X,Y: Set) →
  assert(card(X) = card(Y)) →
  assert(X ∼ Y) by def(cardinality) →
  
  lemma Exists_Bijection() {
    assert(∃f: X → Y | f is_bijective)
  } →
  
  let(f: X → Y | f is_bijective) →
  assert(f is_injection ∧ f is_surjection) by def(bijection) →
  
  lemma Direct_Image_Injection() {
    assert(f is_injection ⇒ f→: 𝒫(X) → 𝒫(Y) is_injection)
  } →
  
  lemma Direct_Image_Surjection() {
    assert(f is_surjection ⇒ f→: 𝒫(X) → 𝒫(Y) is_surjection)
  } →
  
  apply(Direct_Image_Injection()) →
  apply(Direct_Image_Surjection()) →
  assert(f→: 𝒫(X) → 𝒫(Y) is_bijection) by def(bijection) →
  assert(𝒫(X) ∼ 𝒫(Y)) by def(set_equivalence) →
  assert(card(𝒫(X)) = card(𝒫(Y))) by def(cardinality)
}