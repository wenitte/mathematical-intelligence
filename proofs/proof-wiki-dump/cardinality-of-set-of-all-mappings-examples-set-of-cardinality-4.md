theorem Cardinality_Of_Mappings_Set4() {
  assert(
    ∀S: Set ⇒
    (card(S) = 4) →
    (∃T: Set ⇒ (T = {f | f: S → S} ∧ card(T) = 256))
  )
}

proof Cardinality_Of_Mappings_Set4() {
  setVar(S: Set) →
  assume(card(S) = 4) →
  setVar(T = {f | f: S → S}) →
  
  lemma Set_Of_All_Mappings() {
    assert(
      ∀X,Y: Set ⇒
      card({f | f: X → Y}) = card(Y)^card(X)
    )
  } →
  
  apply(Set_Of_All_Mappings(), {X ↦ S, Y ↦ S}) →
  assert(card(T) = card(S)^card(S)) →
  assert(card(T) = 4^4) →
  assert(4^4 = 256) →
  conclude(card(T) = 256)
}