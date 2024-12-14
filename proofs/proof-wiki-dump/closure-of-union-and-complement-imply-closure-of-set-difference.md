theorem Closure_Set_Difference() {
  assert(
    ∀R(isSetSystem(R, U) ∧
    (∀A,B ∈ R ⇒ (A ∪ B) ∈ R) ∧
    (∀A ∈ R ⇒ (∁A) ∈ R)) ⇒
    (∀A,B ∈ R ⇒ (A \ B) ∈ R)
  )
}

proof Closure_Set_Difference() {
  setVar(R: SetSystem(U)) →
  setVar(A,B: Set ∈ R) →
  
  assert(A \ B = A ∩ (∁B)) →
  
  lemma DeMorgans() {
    assert(
      ∀X,Y(X ∩ (∁Y) = ∁(∁X ∪ Y))
    )
  } →
  
  apply(DeMorgans()) →
  assert(A \ B = ∁(∁A ∪ B)) →
  
  assert(∁A ∈ R) by closure_complement →
  assert((∁A ∪ B) ∈ R) by closure_union →
  assert(∁(∁A ∪ B) ∈ R) by closure_complement →
  
  conclude(A \ B ∈ R)
}