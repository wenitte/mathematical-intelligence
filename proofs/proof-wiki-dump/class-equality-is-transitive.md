theorem Class_Equality_Transitive() {
  assert(
    ∀A,B,C[Classes] ⇒ 
    ((A = B ∧ B = C) → A = C)
  )
} ↔

proof Class_Equality_Transitive() {
  setVar(A,B,C: Class) →
  lemma Class_Equality_Definition() {
    assert(
      ∀x((x ∈ A ↔ x ∈ B) ↔ (A = B))
    )
  } →
  
  setVar(x: Element) →
  assume((A = B ∧ B = C)) →
  assert((x ∈ A ↔ x ∈ B)) by Class_Equality_Definition() →
  assert((x ∈ B ↔ x ∈ C)) by Class_Equality_Definition() →
  
  lemma Biconditional_Transitivity() {
    assert(
      ∀p,q,r((p ↔ q ∧ q ↔ r) → (p ↔ r))
    )
  } →
  
  apply(Biconditional_Transitivity()) →
  assert((x ∈ A ↔ x ∈ C)) →
  
  apply(Universal_Generalization()) →
  assert(∀x(x ∈ A ↔ x ∈ C)) →
  assert(A = C) by Class_Equality_Definition()
}