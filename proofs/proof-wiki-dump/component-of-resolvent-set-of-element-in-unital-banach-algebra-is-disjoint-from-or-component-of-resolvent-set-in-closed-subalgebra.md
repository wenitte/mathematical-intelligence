theorem ComponentOfResolventSet() {
  let(A: unitalBanachalgebra(ℂ), B: closedSubalgebra(A)) →
  let(x ∈ B) →
  let(ρₐ(x): resolventSet(x,A), ρᵦ(x): resolventSet(x,B)) →
  let(U: component(ρₐ(x))) →
  assert(
    (U = component(ρᵦ(x))) ∨ (U ∩ ρᵦ(x) = ∅)
  )
} ↔

proof ComponentOfResolventSet() {
  lemma L1() {
    assert(ρᵦ(x) isOpen(ℂ))
  } →
  lemma L2() {
    assert(ℂ isLocallyConnected())
  } →
  apply(OpenSubsetLocallyConnected()) →
  assert(ρᵦ(x) isLocallyConnected()) →
  apply(ComponentLocallyConnectedIsOpen()) →
  assert(U isOpen(ρᵦ(x))) →
  assert(U isOpen(ℂ)) →
  
  let(V = U ∩ σᵦ(x)) →
  assert(V isClosed(U)) →
  
  lemma BoundaryProperties() {
    assert(clᵤ(V) = cl(V) ∩ U) ∧
    assert(intᵤ(V) = int(V)) ∧
    assert(∂ᵤV = (cl(V) ∩ U) \ int(V))
  } →
  
  assert(cl(V) ⊆ σᵦ(x)) →
  assert(cl(V) ∩ U ⊆ σᵦ(x) ∩ U) →
  assert(int(V) = int(σᵦ(x)) ∩ U) →
  assert(∂ᵤV ⊆ ∂(σᵦ(x))) →
  
  apply(BoundarySpectrumSubalgebra()) →
  assert(∂(σᵦ(x)) ⊆ ∂(σₐ(x))) →
  assert(∂(σₐ(x)) ⊆ σₐ(x)) →
  assert(σₐ(x) ⊆ ℂ\U) →
  
  assert(∂ᵤV ⊆ ℂ\U) ∧ assert(∂ᵤV ⊆ U) →
  assert(∂ᵤV = ∅) →
  
  apply(ConnectedSpaceProperSubset()) →
  assert((V = ∅) ∨ (V = U)) →
  
  case(V = ∅) {
    assert(U ∩ ρᵦ(x) = ∅)
  } →
  
  case(V = U) {
    assert(U ⊆ ρᵦ(x)) →
    byContradiction() {
      assume(¬(U = component(ρᵦ(x)))) →
      let(S: component(ρᵦ(x)), U ⊊ S) →
      assert(S isConnected(ρₐ(x))) →
      assert(false)
    } →
    assert(U = component(ρᵦ(x)))
  }
}