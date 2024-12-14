theorem CayleyRepresentation() {
  assert(
    ∀G(isFiniteGroup(G) → ∃n∈ℕ(∃H⊆Sn(G ≅ H)))
  )
} ↔

proof CayleyRepresentation() {
  setVar(G: Group) →
  setVar(S: Set = elementSet(G)) →
  setVar(θ: Mapping = leftRegularRepMap(G)) →
  
  lemma RegularRepsArePermutations() {
    assert(∀x∈G(λx ∈ Sym(S)))
  } →
  
  lemma CompositionProperty() {
    assert(∀x,y∈G(λx ∘ λy = λxy))
  } →
  
  assert(θ(x) = λx) →
  assert(∀x,y∈G(θ(x) ∘ θ(y) = θ(xy))) →
  
  lemma KernelIsIdentity() {
    setVar(x: Element ∈ ker(θ)) →
    assert(θ(x) = eS) →
    assert(λx = IG) →
    assert(λx(eG) = IG(eG)) →
    assert(x = eG) →
    assert(ker(θ) = {eG})
  } →
  
  apply(KernelTrivialIffMonomorphism()) →
  assert(isMonomorphism(θ)) →
  
  apply(MonomorphismImageIsomorphic()) →
  assert(G ≅ img(θ)) →
  assert(img(θ) ⊆ Sym(S))
}