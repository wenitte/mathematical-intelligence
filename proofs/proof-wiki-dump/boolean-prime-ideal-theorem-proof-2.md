theorem Boolean_Prime_Ideal() {
  assert(
    ∀S: BooleanLattice ∧ ∀I: Ideal(S) ∧ ∀F: Filter(S) ∧ (I ∩ F = ∅) ⇒
    ∃P: PrimeIdeal(S) | (I ⊆ P ∧ P ∩ F = ∅)
  )
} ↔

proof Boolean_Prime_Ideal() {
  setVar(S: BooleanLattice) →
  setVar(I: Ideal(S)) →
  setVar(F: Filter(S)) →
  assert(I ∩ F = ∅) →
  
  define(Q = {q | q: Ideal(S) ∧ q ∩ F = ∅}) →
  define(∀x ∈ S: Cx = {q ∈ Q | x ∈ q}) →
  
  lemma Property1() {
    assert(∀x,y ∈ S: x ≤ y ⇒ Cy ⊆ Cx)
  } →
  
  lemma Property2() {
    assert(∀x,y ∈ S: Cx∨y = Cx ∩ Cy)
  } →
  
  define(𝔹 = {Cx | x ∈ I} ∪ {Cx ∪ C¬x | x ∈ S}) →
  
  lemma FiniteIntersectionProperty() {
    assert(
      ∀G ⊆fin 𝔹: ⋂G ≠ ∅
    )
  } →
  
  apply(UltrafilterLemma()) →
  obtain(𝔘: Ultrafilter(Q) | 𝔹 ⊆ 𝔘) →
  
  define(P = {x ∈ S | Cx ∈ 𝔘}) →
  
  assert(I ⊆ P) by {
    ∀x ∈ I: Cx ∈ 𝔹 ⊆ 𝔘 ⇒ x ∈ P
  } →
  
  assert(P ∩ F = ∅) by {
    ∀x ∈ F: Cx = ∅ ⇒ x ∉ P
  } →
  
  lemma P_IsIdeal() {
    assert(P ≠ ∅) →
    assert(∀x,y ∈ S: y ≤ x ∧ x ∈ P ⇒ y ∈ P) →
    assert(∀x,y ∈ P: x ∨ y ∈ P)
  } →
  
  lemma P_IsPrime() {
    assert(
      ∀x ∈ S: x ∈ P ∨ ¬x ∈ P
    )
  } →
  
  apply(P_IsIdeal()) →
  apply(P_IsPrime()) →
  return(P)
}