theorem Regular_Representation_Composition() {
  assert(
    ∀S: Semigroup, ∀x,y,z ∈ S ⇒
    (λx ∘ ρy = ρy ∘ λx)
  )
} ↔

proof Regular_Representation_Composition() {
  setVar(S: Semigroup) →
  setVar(x,y,z: S) →
  
  assert((λx ∘ ρy)(z)) →
  
  assert(λx(ρy(z))) by(
    composition_definition
  ) →
  
  assert(λx(z * y)) by(
    right_regular_rep_definition
  ) →
  
  assert(x * (z * y)) by(
    left_regular_rep_definition
  ) →
  
  assert((x * z) * y) by(
    semigroup_associativity
  ) →
  
  assert(ρy(x * z)) by(
    right_regular_rep_definition
  ) →
  
  assert(ρy(λx(z))) by(
    left_regular_rep_definition
  ) →
  
  assert((ρy ∘ λx)(z)) by(
    composition_definition
  ) →
  
  conclude((λx ∘ ρy)(z) = (ρy ∘ λx)(z)) →
  conclude(λx ∘ ρy = ρy ∘ λx)
}