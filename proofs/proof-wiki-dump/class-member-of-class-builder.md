theorem Class_Member_Builder() {
  assert(
    ∀A(class),x(set),P(formula) ⇒ 
    [A ∈ {x: P(x)} ↔ (∃x: x = A ∧ P(A))]
  )
}

proof Class_Member_Builder() {
  setVar(A: class) →
  setVar(x: set) →
  setVar(P: formula) →
  
  assert(A ∈ {x: P(x)}) →
  
  lemma Class_Definition_ZF() {
    assert(
      A ∈ {x: P(x)} ↔ (∃x ∈ {x: P(x)}: A = x)
    )
  } →
  
  apply(Class_Definition_ZF()) →
  
  lemma Bounded_Existential() {
    assert(
      (∃x ∈ {x: P(x)}: A = x) ↔ (∃x: x = A ∧ P(x))
    )
  } →
  
  apply(Bounded_Existential()) →
  
  lemma Substitutivity() {
    assert(
      (∃x: x = A ∧ P(x)) ↔ (∃x: x = A ∧ P(A))
    )
  } →
  
  apply(Substitutivity()) →
  assert((∃x: x = A ∧ P(A)))
}