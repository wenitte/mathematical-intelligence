theorem Regular_Representation_Composition() {
  assert(
    ∀S: Semigroup,
    ∀x,y,z ∈ S ⇒
    let λₓ = leftRegularRep(x) ∧
    let λᵧ = leftRegularRep(y) ⇒
    λₓ ∘ λᵧ = λ_{x*y}
  )
} ↔

proof Regular_Representation_Composition() {
  setVar(S: Semigroup) →
  setVar(x,y,z ∈ S) →
  
  assert((λₓ ∘ λᵧ)(z)) →
  
  apply(CompositionDef) →
  assert(λₓ(λᵧ(z))) →
  
  apply(LeftRegularRepDef) →
  assert(λₓ(y*z)) →
  
  apply(LeftRegularRepDef) →
  assert(x*(y*z)) →
  
  lemma SemigroupAssociativity() {
    assert(∀a,b,c ∈ S ⇒ (a*b)*c = a*(b*c))
  } →
  
  apply(SemigroupAssociativity()) →
  assert((x*y)*z) →
  
  apply(LeftRegularRepDef) →
  assert(λ_{x*y}(z)) →
  
  conclude(λₓ ∘ λᵧ = λ_{x*y})
}