theorem Bounded_Lattice_Has_Extrema() {
  assert(
    (L = ⟨S, ∨, ∧, ⪯⟩ is a bounded lattice) →
    (∃ bot,top ∈ S : 
      (bot = sup(∅) ∧ bot is smallest element in ⟨S, ⪯⟩) ∧
      (top = inf(∅) ∧ top is greatest element in ⟨S, ⪯⟩)
    )
  )
} ↔

proof Bounded_Lattice_Has_Extrema() {
  setVar(L: bounded_lattice) →
  assert(sup(∅) exists ∧ inf(∅) exists) by(definition_bounded_lattice) →
  
  lemma Supremum_Empty_Is_Smallest() {
    assert(
      ∀S,⪯: (bot = sup(∅) ↔ bot is smallest element in ⟨S, ⪯⟩)
    )
  } →
  
  lemma Infimum_Empty_Is_Greatest() {
    assert(
      ∀S,⪯: (top = inf(∅) ↔ top is greatest element in ⟨S, ⪯⟩)
    )
  } →
  
  apply(Supremum_Empty_Is_Smallest()) →
  apply(Infimum_Empty_Is_Greatest()) →
  
  assert(
    bot = sup(∅) ∧ bot is smallest element in ⟨S, ⪯⟩ ∧
    top = inf(∅) ∧ top is greatest element in ⟨S, ⪯⟩
  )
}