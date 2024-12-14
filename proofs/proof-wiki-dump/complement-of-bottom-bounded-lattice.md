theorem CompBottomBoundedLattice() {
  assert(
    ∀L=(S,∨,∧,⪯):BoundedLattice ⇒
    ∃!c∈S:(c complement_of ⊥) ∧ (c = ⊤)
  )
} ↔

proof CompBottomBoundedLattice() {
  setVar(L=(S,∨,∧,⪯):BoundedLattice) →
  
  lemma BottomIdentity() {
    assert(∀x∈S: ⊥∨x = x)
  } →
  
  lemma TopIdentity() {
    assert(∀x∈S: ⊤∧x = x)
  } →
  
  assume(∃a∈S: a complement_of ⊥) →
  assert(⊥∨a = ⊤) →
  apply(BottomIdentity()) →
  assert(a = ⊤) →
  
  verify(⊥∧⊤ = ⊥) →
  apply(TopIdentity()) →
  
  conclude(
    (⊤ complement_of ⊥) ∧
    ∀x∈S:(x complement_of ⊥) ⇒ x = ⊤
  )
}