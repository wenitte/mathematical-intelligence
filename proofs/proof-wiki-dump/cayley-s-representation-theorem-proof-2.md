theorem CayleyRepresentation() {
  assert(
    ∀G(isFiniteGroup(G) → ∃n∈ℤ(∃H⊆Sₙ(G ≅ H)))
  )
} ↔

proof CayleyRepresentation() {
  setVar(G: FiniteGroup) →
  let(eₐ: identity(G)) →
  let(S: SymmetricGroup(elements(G))) →
  let(eₛ: identity(S)) →
  
  define(λₓ: G → S) {
    ∀x∈G(λₓ = leftRegularRepresentation(x))
  } →
  
  lemma RegularRepsArePermutations() {
    assert(∀x∈G(λₓ ∈ S))
  } →
  
  define(θ: G → S) {
    ∀x∈G(θ(x) = λₓ)
  } →
  
  lemma CompositionProperty() {
    assert(∀x,y∈G(λₓ ∘ λᵧ = λₓᵧ))
  } →
  
  assert(∀x,y∈G(θ(x) ∘ θ(y) = θ(xy))) →
  assert(isHomomorphism(θ)) →
  
  proof KernelIsTrivial() {
    setVar(x: G) →
    assert(x ∈ ker(θ) ↔ θ(x) = eₛ) →
    assert(θ(x) = eₛ ↔ λₓ = Iₐ) →
    assert(λₓ(eₐ) = Iₐ(eₐ)) →
    assert(x = eₐ) →
    conclude(ker(θ) = {eₐ})
  } →
  
  lemma KernelTrivialImpliesMonomorphism() {
    assert(ker(θ) = {eₐ} → isMonomorphism(θ))
  } →
  
  lemma MonomorphismImpliesIsomorphicImage() {
    assert(isMonomorphism(θ) → G ≅ img(θ))
  } →
  
  assert(img(θ) ⊆ S) →
  conclude(∃H⊆S(G ≅ H))
}