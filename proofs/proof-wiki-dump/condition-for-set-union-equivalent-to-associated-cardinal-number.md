theorem Set_Union_Cardinal_Equivalence() {
  let(S, T: Set)
  let(|S|, |T|: CardinalNumber)
  assert(
    (S ∪ T ∼ |S ∪ T|) ↔ (S ∼ |S| ∧ T ∼ |T|)
  )
}

proof Set_Union_Cardinal_Equivalence() {
  // Necessary Condition
  assume(S ∪ T ∼ |S ∪ T|) →
  exists(f: Bijection(S ∪ T → |S ∪ T|)) →
  assert(S ∼ f(S)) →
  assert(f(S) ⊆ |S ∪ T|) →
  lemma Cardinal_Is_Ordinal() {
    assert(|S ∪ T| ∈ Ordinals)
  } →
  apply(Set_Equivalent_To_Cardinal) →
  assert(S ∼ |S|) →
  assert(T ∼ |T|) →

  // Sufficient Condition
  assume(S ∼ |S| ∧ T ∼ |T|) →
  exists(f: Bijection(S → |S|)) →
  exists(g: Bijection(T → |T|)) →
  
  define(F: S ∪ T → |S| + |T|) {
    F(x) = case(x) {
      x ∈ S: f(x)
      x ∉ S: |S| + g(x)
    }
  } →

  // Injection proof
  forall(x, y ∈ S ∪ T) {
    case(x, y ∈ S) {
      F(x) = F(y) →
      f(x) = f(y) →
      assert(x = y)
    } →
    case(x ∈ S ∧ y ∈ T) {
      assert(¬(f(x) = |S| + g(y)))
    } →
    case(x, y ∈ T) {
      |S| + g(x) = |S| + g(y) →
      apply(Ordinal_Addition_Left_Cancellable) →
      g(x) = g(y) →
      assert(x = y)
    }
  } →
  
  assert(F: Injection(S ∪ T → |S| + |T|)) →
  apply(Set_Equivalent_To_Cardinal) →
  assert(S ∪ T ∼ |S ∪ T|)
}