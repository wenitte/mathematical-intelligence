theorem Bijection_Total_Order_Isomorphism() {
  assert(
    ∀S,T: Set, ∀≤: TotalOrder(S), ∀f: S → T,
    (Bijective(f) ∧
     R := {(f(x), f(y)) | x,y ∈ S ∧ x ≤ y}) →
    IsOrderIsomorphism(f, (S,≤), (T,R))
  )
}

proof Bijection_Total_Order_Isomorphism() {
  setVar(S,T: Set) →
  setVar(≤: TotalOrder(S)) →
  setVar(f: S → T) →
  assert(Bijective(f)) →
  setVar(R := {(f(x), f(y)) | x,y ∈ S ∧ x ≤ y}) →
  
  lemma R_Is_Total_Order() {
    assert(IsTotalOrder(R)) →
    apply(Bijection_Reflects_Total_Order())
  } →
  
  assert(Surjective(f)) →
  
  lemma Forward_Preservation() {
    setVar(x,y: S) →
    assume(x ≤ y) →
    assert(f(x) R f(y)) →
    apply(R_Definition)
  } →
  
  lemma Backward_Preservation() {
    setVar(a,b: T) →
    assume(a R b) →
    assert(∃x,y ∈ S: f(x)=a ∧ f(y)=b ∧ x ≤ y) →
    apply(R_Definition)
  } →
  
  assert(IsOrderIsomorphism(f, (S,≤), (T,R))) →
  apply(OrderIsomorphism_Definition) →
  conclude()
}