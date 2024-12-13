theorem Cyclic_Group_Order_4() {
  let S = {1, 2, 3, 4}
  let (S, ∘) = AlgebraicStructure(
    cayleyTable: [
      [2, 3, 4, 1],
      [2, 3, 4, 1],
      [3, 4, 1, 2],
      [4, 1, 2, 3],
      [1, 2, 3, 4]
    ]
  )
  assert(
    isGroup(S, ∘) ∧ 
    isCyclicGroup(S, ∘) ∧
    |S| = 4
  )
} ↔

proof Cyclic_Group_Order_4() {
  let S' = {0, 1, 2, 3}
  let φ: S → S' = Bijection(
    map: {
      2 ↦ 0,
      3 ↦ 1,
      4 ↦ 2,
      1 ↦ 3
    }
  ) →

  lemma GroupIsomorphism() {
    assert(
      ∀a,b ∈ S: φ(a ∘ b) = (φ(a) +₄ φ(b))
    )
  } →

  let C₄ = CyclicGroup(
    order: 4,
    cayleyTable: [
      [0, 1, 2, 3],
      [0, 1, 2, 3],
      [1, 2, 3, 0],
      [2, 3, 0, 1],
      [3, 0, 1, 2]
    ]
  ) →

  apply(GroupIsomorphism()) →
  assert(
    (S, ∘) ≅ C₄ ∧
    isCyclicGroup(C₄) ∧
    |C₄| = 4
  ) →
  conclude(
    isGroup(S, ∘) ∧
    isCyclicGroup(S, ∘) ∧
    |S| = 4
  )
}