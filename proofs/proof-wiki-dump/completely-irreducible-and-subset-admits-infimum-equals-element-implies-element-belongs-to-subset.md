theorem Irreducible_Element_In_Subset() {
  assert(
    ∀L(S, ⪯): OrderedSet ∧ 
    ∀x ∈ S ∧ 
    ∀X ⊆ S ∧
    isCompletelyIrreducible(x) ∧
    hasInfimum(X) ∧ 
    x = inf(X) ⇒
    x ∈ X
  )
} ↔

proof Irreducible_Element_In_Subset() {
  setVar(L: OrderedSet) →
  setVar(x: S) →
  setVar(X: P(S)) →
  
  contradiction() {
    assume(x ∉ X) →
    
    lemma CompletelyIrreducibleProperty() {
      assert(∃q ∈ S: 
        (x ≺ q) ∧
        (∀s ∈ S: x ≺ s ⇒ q ⪯ s) ∧
        (x⪰ = {x} ∪ q⪰)
      )
    } →
    
    lemma SubsetInUpperClosure() {
      assert(X ⊆ q⪰) →
      setVar(y: X) →
      assert(x ⪯ y) →
      assert(x ≺ y) →
      assert(q ⪯ y) →
      assert(y ∈ q⪰)
    } →
    
    apply(InfimumOfUpperClosure) {
      assert(inf(q⪰) = q)
    } →
    
    apply(InfimumOfSubset) {
      assert(q ⪯ x)
    } →
    
    assert(contradiction(x ≺ q ∧ q ⪯ x))
  }
}