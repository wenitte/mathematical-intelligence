theorem Buridans_Ass_Paradox() {
  assert(
    ∀c ∈ Choices ∧ ∀p₁,p₂ ∈ Preferences →
    (p₁ = p₂) → ¬∃decision(c)
  )
}

proof Buridans_Ass_Resolution() {
  lemma Perfect_Equality_Impossible() {
    assert(
      ∀s ∈ RealWorld_Systems →
      ¬∃(x,y ∈ s): perfect_equality(x,y)
    )
  } →

  lemma Alternative_Choice_Methods() {
    assert(
      ∀c ∈ Choices →
      ∃m ∈ Methods: random_choice(m) →
      decision_possible(c)
    )
  } →

  apply(Perfect_Equality_Impossible()) →
  assert(paradox_premise_invalid) ∧

  apply(Alternative_Choice_Methods()) →
  assert(∃solution_even_if_equal) →

  conclude(
    paradox_type(falsidical) ∧
    ∃decision_method: ∀c ∈ Choices →
    decision_possible(c)
  )
}

corollary Historical_Note() {
  assert(
    origin(Aristotle) ∧
    attribution(Jean_Buridan) ∧
    ¬∃(proof ∈ Buridan_Writings)
  )
}