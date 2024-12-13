theorem Boolean_Prime_Ideal_Theorem() {
  assert(
    ∀S: BooleanLattice ∧
    ∀I: Ideal(S) ∧
    ∀F: Filter(S) ∧
    (I ∩ F = ∅) →
    ∃P: PrimeIdeal(S) | (I ⊆ P ∧ P ∩ F = ∅)
  )
} ↔

lemma Element_Extension() {
  assert(
    ∀B: BooleanLattice ∧
    ∀F: Filter(B) ∧
    ∀a,x ∈ B |
    (a ∉ F) →
    ((a ∨ x ∉ F) ∨ (a ∨ ¬x ∉ F))
  )
} →

proof Boolean_Prime_Ideal_Using_Choice() {
  setVar(T := {J: Ideal(S) | I ⊆ J ∧ J ∩ F = ∅}) →
  assert(T is ordered by ⊆) →
  
  forall(N: Chain(T)) {
    setVar(U := ∪N) →
    assert(U ∩ F = ∅ ∧ I ⊆ U) →
    assert(U is ideal) by {
      ∀x,y ∈ U →
      ∃A,B ∈ N: (x ∈ A ∧ y ∈ B) →
      ((A ⊆ B) ∨ (B ⊆ A)) →
      (x ∨ y ∈ U)
    }
  } →

  apply(Zorn's_Lemma(T)) →
  setVar(M := maximal(T)) →
  apply(Distributive_Lattice_Property(S)) →
  apply(Maximal_Ideal_Prime_In_Distributive()) →
  assert(M is prime ideal ∧ I ⊆ M ∧ M ∩ F = ∅)
} →

proof Boolean_Prime_Ideal_Using_Ultrafilter() {
  setVar(Q := {q: Ideal(S) | q ∩ F = ∅}) →
  setVar(Cx := {q ∈ Q | x ∈ q}) →
  setVar(ℬ := {Cx | x ∈ I} ∪ {Cx ∪ C¬x | x ∈ S}) →
  
  assert(ℬ has finite intersection property) →
  apply(Ultrafilter_Lemma()) →
  setVar(𝒰: Ultrafilter | ℬ ⊆ 𝒰) →
  setVar(P := {x ∈ S | Cx ∈ 𝒰}) →
  
  assert(I ⊆ P ∧ P ∩ F = ∅) →
  assert(P is prime ideal) by {
    assert(P is proper ideal) →
    ∀x ∈ S: (x ∈ P ∨ ¬x ∈ P) →
    apply(Proper_Ideal_Prime_Characterization())
  }
}