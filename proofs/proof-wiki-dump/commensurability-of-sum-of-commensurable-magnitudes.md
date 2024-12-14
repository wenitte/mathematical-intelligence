theorem Commensurability_Sum() {
  assert(
    ∀A,B,C ∈ Magnitudes ⇒ 
    ((commensurable(A,B) → commensurable(A+B,A) ∧ commensurable(A+B,B)) ∧
    (commensurable(A+B,A) → commensurable(A,B)))
  )
} ↔

proof Commensurability_Sum() {
  // Part 1: If A,B commensurable → A+B commensurable with both
  setVar(AB,BC: Magnitudes) →
  assume(commensurable(AB,BC)) →
  ∃D ∈ Magnitudes: measures(D,AB) ∧ measures(D,BC) →
  assert(measures(D,AB+BC)) →
  setVar(AC: Magnitude = AB+BC) →
  apply(Definition_Commensurable) →
  assert(commensurable(AC,AB) ∧ commensurable(AC,BC)) →

  // Part 2: If A+B commensurable with A → A,B commensurable
  setVar(AC,AB: Magnitudes) →
  assume(commensurable(AC,AB)) →
  ∃D ∈ Magnitudes: measures(D,AC) ∧ measures(D,AB) →
  assert(BC = AC-AB) →
  assert(measures(D,BC)) →
  apply(Definition_Commensurable) →
  assert(commensurable(AB,BC))
}

lemma Definition_Commensurable() {
  assert(
    ∀X,Y ∈ Magnitudes ⇒
    (∃D ∈ Magnitudes: measures(D,X) ∧ measures(D,Y)) ↔ commensurable(X,Y)
  )
}