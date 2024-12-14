theorem Closure_Operator_From_Closed_Sets() {
  let(S: Set)
  let(𝒞: Subset(𝒫(S)))
  assert(∀𝒦 ∈ 𝒫(𝒞) ⇒ ⋂𝒦 ∈ 𝒞) ∧
  assert(⋂∅ = S) ∧
  define(cl: 𝒫(S) → 𝒞) {
    cl(T) = ⋂{C ∈ 𝒞: T ⊆ C}
  }
  assert(isClosureOperator(cl) ∧ closedSets(cl) = 𝒞)
}

proof Closure_Operator_From_Closed_Sets() {
  section Inflationary() {
    let(T ⊆ S) →
    apply(Set_Intersection_Preserves_Subsets) →
    assert(T ⊆ cl(T)) →
    assert(∀T ⊆ S ⇒ T ⊆ cl(T))
  } →

  section Increasing() {
    let(T ⊆ U ⊆ S) →
    let(𝒯 = {C ∈ 𝒞: T ⊆ C}) →
    let(𝒰 = {C ∈ 𝒞: U ⊆ C}) →
    apply(Subset_Relation_Transitive) →
    assert(𝒰 ⊆ 𝒯) →
    apply(Intersection_Is_Decreasing) →
    assert(⋂𝒯 ⊆ ⋂𝒰) →
    conclude(cl(T) ⊆ cl(U))
  } →

  section Idempotent() {
    let(T ⊆ S) →
    assert(cl(T) ∈ 𝒞) →
    assert(cl(cl(T)) ⊆ cl(T)) →
    apply(Inflationary) →
    assert(cl(T) ⊆ cl(cl(T))) →
    conclude(cl(cl(T)) = cl(T))
  } →

  section Closed_Sets_Equivalence() {
    section Forward() {
      let(C ∈ 𝒞) →
      apply(Inflationary) →
      assert(C ⊆ cl(C)) →
      assert(cl(C) ⊆ C) →
      conclude(cl(C) = C)
    } →
    
    section Backward() {
      let(cl(C) = C) →
      apply(Closed_Under_Intersections) →
      conclude(C ∈ 𝒞)
    }
  }
}