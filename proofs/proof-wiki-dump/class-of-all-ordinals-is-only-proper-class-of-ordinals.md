theorem Transitive_Class_Ordinals_Is_On() {
  assert(
    ∀A (isTransitiveClass(A) ∧ isProperClass(A) ∧ A ⊆ On) →
    A = On
  )
}

proof Transitive_Class_Ordinals_Is_On() {
  setVar(A: Class) →
  assume(isTransitiveClass(A) ∧ isProperClass(A) ∧ A ⊆ On) →
  
  byContradiction() {
    assume(∃α ∈ On: α ∉ A) →
    
    lemma TransitiveClassSubsetOrdinal() {
      assert(
        isTransitiveClass(A) ∧ α ∉ A →
        A ⊆ α
      )
    } →
    
    apply(TransitiveClassSubsetOrdinal()) →
    assert(A ⊆ α) →
    assert(isSet(α)) →
    assert(isSet(A)) →
    
    contradiction() {
      assert(isSet(A) ∧ isProperClass(A)) →
      assert(⊥)
    }
  } →
  
  assert(∀α ∈ On → α ∈ A) →
  assert(A = On)
}