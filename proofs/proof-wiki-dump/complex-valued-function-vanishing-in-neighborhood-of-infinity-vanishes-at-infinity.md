theorem Complex_Function_Vanishing() {
  assert(
    ∀X: LocallyCompactHausdorff ∧
    ∀f: X → ℂ ∧
    VanishesInNeighborhoodOfInfinity(f) ⇒
    VanishesAtInfinity(f)
  )
}

proof Complex_Function_Vanishing() {
  setVar(ε > 0) →
  lemma Neighborhood_Existence() {
    assert(
      VanishesInNeighborhoodOfInfinity(f) ⇒
      ∃F: Compact(F) ∧ F ⊆ X ∧
      ∀x ∈ (X \ F): f(x) = 0
    )
  } →
  apply(Neighborhood_Existence()) →
  assert(
    ∀x ∈ (X \ F): |f(x)| = 0
  ) →
  assert(
    ∀x ∈ (X \ F): |f(x)| < ε
  ) →
  conclude(
    ∀ε > 0: ∃F: Compact(F) ∧ F ⊆ X ∧
    ∀x ∈ (X \ F): |f(x)| < ε ⇒
    VanishesAtInfinity(f)
  )
}