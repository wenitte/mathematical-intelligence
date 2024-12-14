theorem Cartesian_Product_Intersections() {
  let(I: IndexSet)
  let(S_i: IndexedFamily[I])
  let(T_i: IndexedFamily[I])
  assert(
    (∏_{i∈I} S_i) ∩ (∏_{i∈I} T_i) = ∏_{i∈I} (S_i ∩ T_i)
  )
} ↔

proof Cartesian_Product_Intersections() {
  let({x_i}_{i∈I}: Family) →
  
  lemma EquivalenceChain() {
    assert(
      {x_i}_{i∈I} ∈ ((∏_{i∈I} S_i) ∩ (∏_{i∈I} T_i))
      ↔
      ({x_i}_{i∈I} ∈ (∏_{i∈I} S_i)) ∧ ({x_i}_{i∈I} ∈ (∏_{i∈I} T_i))
    )
  } →

  lemma CartesianProductDef() {
    assert(
      ({x_i}_{i∈I} ∈ (∏_{i∈I} S_i)) ∧ ({x_i}_{i∈I} ∈ (∏_{i∈I} T_i))
      ↔
      ∀i∈I: (x_i ∈ S_i ∧ x_i ∈ T_i)
    )
  } →

  lemma IntersectionDef() {
    assert(
      ∀i∈I: (x_i ∈ S_i ∧ x_i ∈ T_i)
      ↔
      ∀i∈I: x_i ∈ (S_i ∩ T_i)
    )
  } →

  lemma CartesianProductDef2() {
    assert(
      ∀i∈I: x_i ∈ (S_i ∩ T_i)
      ↔
      {x_i}_{i∈I} ∈ ∏_{i∈I} (S_i ∩ T_i)
    )
  } →

  apply(SetEquality) →
  conclude()
}