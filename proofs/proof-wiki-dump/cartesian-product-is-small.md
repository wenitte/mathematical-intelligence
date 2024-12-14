theorem CartesianProduct_Is_Small() {
  assert(
    ∀a,b ∈ Class: (MM(a) ∧ MM(b)) → MM(a × b)
  )
}

proof CartesianProduct_Is_Small() {
  setVar(a,b: Class) →
  assume(MM(a) ∧ MM(b)) →
  
  lemma Kuratowski_Formalization() {
    assert(
      a × b ⊆ 𝒫(𝒫(a ∪ b))
    )
  } →
  
  lemma Union_Is_Small() {
    assert(
      MM(a) ∧ MM(b) → MM(a ∪ b)
    )
  } →
  
  apply(Union_Is_Small()) →
  setVar(u := a ∪ b) →
  assert(MM(u)) →
  
  lemma Power_Axiom() {
    assert(
      ∀x: MM(x) → MM(𝒫(x))
    )
  } →
  
  apply(Power_Axiom(), u) →
  assert(MM(𝒫(u))) →
  apply(Power_Axiom(), 𝒫(u)) →
  assert(MM(𝒫(𝒫(u)))) →
  
  lemma Subset_Axiom() {
    assert(
      ∀x,y: (x ⊆ y ∧ MM(y)) → MM(x)
    )
  } →
  
  apply(Kuratowski_Formalization()) →
  apply(Subset_Axiom(), a × b, 𝒫(𝒫(u))) →
  assert(MM(a × b))
}