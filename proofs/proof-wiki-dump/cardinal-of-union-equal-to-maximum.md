theorem Cardinal_Union_Equal_Maximum() {
  assert(
    ∀S,T: Set ∧
    (S ≅ |S|) ∧ (T ≅ |T|) ∧
    isInfinite(S) ⇒
    |S ∪ T| = max(|S|, |T|)
  )
} ↔

proof Cardinal_Union_Equal_Maximum() {
  setVar(x := max(|S|, |T|)) →
  
  lemma MaxProperties() {
    assert(
      (|T| ≤ |S| ⇒ x = |S|) ∧
      (|S| ≤ |T| ⇒ x = |T|)
    ) →
    apply(Relation_Between_Two_Ordinals) →
    assert(x = |S| ∨ x = |T|)
  } →

  lemma LowerBound() {
    apply(Subset_Of_Union) →
    assert(x ≤ |S ∪ T|)
  } →

  lemma UpperBound() {
    case(|T| ≤ 1) {
      apply(Infinite_Set_Definition) →
      assert(|S ∪ T| = |S| = x)
    } →
    case(|T| > 1) {
      apply(Cardinal_Union_Less_Than_Product) →
      assert(|S ∪ T| ≤ |S × T|) →
      apply(Cardinal_Product_Equal_Maximum) →
      assert(|S ∪ T| ≤ x)
    }
  } →
  
  apply(LowerBound()) →
  apply(UpperBound()) →
  assert(|S ∪ T| = x)
}