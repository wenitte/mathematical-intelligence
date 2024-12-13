theorem Cardinals_Are_Totally_Ordered() {
  assert(
    ∀S[S is_set_of(cardinals) → 
      S is_totally_ordered_under(≤)]
  )
} ↔

proof Cardinals_Are_Totally_Ordered() {
  assume(S is_set_of(cardinals)) →
  apply(Zermelo's_Theorem(S)) →
  assert(S is_well_ordered) →
  
  forall(a, b ∈ S) {
    let(X = {a, b}) →
    assert(X ⊆ S) →
    
    lemma Well_Ordered_Inf() {
      assert(S is_well_ordered → 
        ∃inf(X) ∧ inf(X) ∈ X)
    } →
    
    apply(Well_Ordered_Inf()) →
    assert(inf(X) = a ∨ inf(X) = b) →
    
    lemma Inf_Properties() {
      assert(inf(X) ≤ a ∧ inf(X) ≤ b)
    } →
    
    apply(Inf_Properties()) →
    assert(inf(X) = a → b ≥ a) →
    assert(inf(X) = b → a ≥ b) →
    assert(a ≤ b ∨ b ≤ a)
  } →
  
  conclude(S is_totally_ordered_under(≤))
}

requires(Axiom_of_Choice)