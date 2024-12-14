theorem Class_Extensional() {
  assert(
    ∀A [A is a class] →
    A = {x : x ∈ A}
  )
}

proof Class_Extensional() {
  setVar(A: Class) →
  setVar(x: Element) →

  lemma Characterization_Class_Membership() {
    assert(
      x ∈ {x : x ∈ A} ↔ x ∈ A
    )
  } →

  apply(Characterization_Class_Membership()) →

  lemma Universal_Generalization() {
    assert(
      ∀x (x ∈ A ↔ x ∈ {x : x ∈ A})
    )
  } →

  apply(Definition_Class_Equality) →
  assert(
    ∀x (x ∈ A ↔ x ∈ {x : x ∈ A}) →
    A = {x : x ∈ A}
  )
}