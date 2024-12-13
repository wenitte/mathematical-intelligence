theorem BuraliForti_Paradox() {
  assert(
    ∀O(O = {x | x is an ordinal}) ⇒
    ∃ord(O)(ord(O) ∈ Ordinals ∧ ord(O) ∉ O)
  )
} ↔

proof BuraliForti_Paradox() {
  setVar(O: Set) →
  assume(O = {x | x is an ordinal}) →
  
  lemma Ordinal_Properties() {
    assert(
      ∀α,β ∈ Ordinals ⇒ 
      (α < β ∨ α = β ∨ β < α)
    )
  } →
  
  assert(ord(O) ∈ Ordinals) →
  assert(∀α ∈ O ⇒ α < ord(O)) →
  
  lemma Contradiction() {
    assume(ord(O) ∈ O) →
    assert(ord(O) < ord(O)) →
    apply(Ordinal_Properties()) →
    assert(¬(α < α)) →
    assert(⊥)
  } →
  
  apply(Contradiction()) →
  assert(ord(O) ∉ O) →
  assert(O ≠ {x | x is an ordinal}) →
  conclude(¬∃O(O = {x | x is an ordinal}))
}