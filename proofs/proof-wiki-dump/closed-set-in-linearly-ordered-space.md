theorem Closed_Set_Linearly_Ordered_Space() {
  let(X: OrderedSpace, ≼: Order, τ: Topology) →
  let(C: Subset(X)) →
  assert(
    closed(C) ↔ 
    ∀S ⊆ C, S ≠ ∅ →
    (∀s ∈ X: (sup(S,X) = s ∨ inf(S,X) = s) → s ∈ C)
  )
}

proof Closed_Set_Linearly_Ordered_Space() {
  // Necessary Condition
  lemma Necessary() {
    assume(closed(C)) →
    let(S: Subset(C), S ≠ ∅) →
    let(b ∈ X\C) →
    
    assert(
      ¬upperBound(b,S) → ¬sup(S,b)
    ) ∧
    
    assume(upperBound(b,S)) →
    exists(U: OpenSet(X), b ∈ U ∧ U ∩ C = ∅) →
    assert(
      U = OpenInterval(a,q) ∨ U = UpRay(a)
    ) →
    assert(a ≺ b) →
    assert(UpRay(a) ∩ S = ∅) →
    assert(upperBound(a,S)) →
    conclude(¬sup(S,b))
  }

  // Sufficient Condition
  lemma Sufficient() {
    assume(
      ∀S ⊆ C, S ≠ ∅ →
      ∀s ∈ X\C: s ≠ sup(S,X) ∧ s ≠ inf(S,X)
    ) →
    let(p ∈ X\C) →
    
    case_1(upperBound(p,C)) {
      exists(a ∈ X: a ≺ p ∧ upperBound(a,C)) →
      assert(p ∉ adherentPoints(C))
    } →
    
    case_2(lowerBound(p,C)) {
      apply(similar_to_case_1)
    } →
    
    case_3(¬upperBound(p,C) ∧ ¬lowerBound(p,C)) {
      assert(C ∩ DownRay(p) ≠ ∅ ∧ C ∩ UpRay(p) ≠ ∅) →
      exists(a,b ∈ X: 
        a ≺ p ≺ b ∧
        upperBound(a, C ∩ DownRay(p)) ∧
        lowerBound(b, C ∩ UpRay(p))
      ) →
      assert(OpenInterval(a,b) ∩ C = ∅) →
      assert(p ∉ adherentPoints(C))
    }
  }

  apply(Necessary()) →
  apply(Sufficient()) →
  conclude(theorem)
}