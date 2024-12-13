theorem Binary_Operation_Subset() {
  assert(
    ∀S,∀T,∀∘ [
      (S is_set) ∧
      (∘ is_binary_operation_on S) ∧
      (T ⊆ S) ∧
      (∘_T = restriction_of(∘, T))
      ⇒ (∘_T is_binary_operation_on T)
    ]
  )
}

proof Binary_Operation_Subset() {
  setVar(𝕌: universal_set) →
  setVar(S: set) →
  setVar(∘: S×S → 𝕌) →
  setVar(T: set) →
  assert(T ⊆ S) →
  
  lemma Pair_Elements() {
    setVar(a,b: elements) →
    assert((a,b) ∈ T×T) →
    assert(a ∈ T ∧ b ∈ T) by_def(ordered_pair, cartesian_product)
  } →
  
  lemma Subset_Elements() {
    apply(Pair_Elements()) →
    assert(T ⊆ S) →
    assert(a ∈ S ∧ b ∈ S) by_def(subset)
  } →
  
  lemma In_Domain() {
    apply(Subset_Elements()) →
    assert((a,b) ∈ S×S) by_def(cartesian_product)
  } →
  
  lemma Operation_Result() {
    apply(In_Domain()) →
    assert(∘ is_binary_operation_on S) →
    assert(∘(a,b) ∈ 𝕌)
  } →
  
  lemma Restriction_Equal() {
    assert(∘_T(a,b) = ∘(a,b)) by_def(restriction)
  } →
  
  apply(Operation_Result()) →
  apply(Restriction_Equal()) →
  assert(∘_T(a,b) ∈ 𝕌) →
  assert(∀x,y ∈ T: ∘_T(x,y) ∈ 𝕌) by_generalization →
  assert(∘_T is_binary_operation_on T) by_def(binary_operation)
}