theorem AtomsSingletons() {
  assert(
    ∀S: ∀L(L = ⟨𝒫(S), ⊆⟩) → 
    (Atoms(L) ↔ {x ∈ 𝒫(S) | ∃a ∈ S: x = {a}})
  )
} ↔

proof AtomsSingletons() {
  setVar(S: Set) →
  setVar(L: Lattice = ⟨𝒫(S), ⊆⟩) →
  
  lemma EmptyBottom() {
    assert(⊥(L) = ∅)
  } →
  
  lemma NonSingletonNotAtom() {
    assert(
      ∀T ⊆ S: (|T| > 1) →
      ∃a ∈ T: ({a} ⊂ T ∧ {a} ≠ ∅) →
      ¬IsAtom(T, L)
    )
  } →
  
  lemma SingletonIsAtom() {
    assert(
      ∀a ∈ S: (
        ∀B ⊆ {a}: (B ≠ {a} → B = ∅) →
        IsAtom({a}, L)
      )
    )
  } →
  
  apply(EmptyBottom()) →
  apply(NonSingletonNotAtom()) →
  apply(SingletonIsAtom()) →
  
  assert(
    ∀x ∈ 𝒫(S): (
      IsAtom(x, L) ↔ ∃a ∈ S: x = {a}
    )
  )
}