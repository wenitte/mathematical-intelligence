theorem OpenInterval_No_Greatest_Element() {
  assert(
    let I = (0,1) ∧
    (I ⊂ ℝ) ∧
    (∀x ∈ I)(∃y ∈ I)(x < y)
  )
}

proof OpenInterval_No_Greatest_Element() {
  setVar(I: Set) →
  define(I := {x ∈ ℝ | 0 < x < 1}) →
  
  assumeContradiction(
    ∃x ∈ I: (∀y ∈ I)(y ≤ x)
  ) →
  
  lemma Mediant_Between() {
    assert(
      ∀x ∈ I → (x < (x + 1)/2 < 1)
    )
  } →
  
  let(m := (x + 1)/2) →
  assert(x < m < 1) by(Mediant_Between) →
  assert(m ∈ I) by(define(I)) →
  assert(x < m ∧ m ∈ I) →
  
  contradiction(
    (∀y ∈ I)(y ≤ x) ∧
    (∃m ∈ I)(x < m)
  ) →
  
  conclude(¬∃x ∈ I: (∀y ∈ I)(y ≤ x))
}