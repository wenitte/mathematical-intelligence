theorem Boolean_Prime_Ideal_Extension() {
  let(B: BooleanLattice) →
  let(I: Ideal[B]) →
  assert(IsProper(I)) →
  assert(
    ∃P: Ideal[B] ⇒ (IsPrime(P) ∧ I ⊆ P)
  )
} ↔

proof Boolean_Prime_Ideal_Extension() {
  setVar(B: BooleanLattice) →
  setVar(I: Ideal[B]) →
  
  lemma UltrafilterLemma() {
    assert(
      ∀F: Filter[B] ⇒ 
      ∃U: Ultrafilter[B] ⇒ (F ⊆ U)
    )
  } →
  
  define(D: Filter[B]) {
    assert(D = {x ∈ B | ∀y ∈ I: x ∧ y = 0})
  } →
  
  apply(UltrafilterLemma(D)) →
  obtain(U: Ultrafilter[B]) →
  assert(D ⊆ U) →
  
  define(P: Ideal[B]) {
    assert(P = {x ∈ B | ¬x ∈ U})
  } →
  
  assert(IsPrime(P)) →
  assert(I ⊆ P) →
  conclude()
}