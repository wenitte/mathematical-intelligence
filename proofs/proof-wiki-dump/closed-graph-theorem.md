theorem Closed_Graph() {
  assert(
    let X, Y be BanachSpace ∧
    let T: X → Y be LinearTransformation ∧
    let G_T ⊆ X × Y be Graph(T) ∧
    isClosed(G_T, X × Y) →
    isBounded(T)
  )
}

proof Closed_Graph() {
  setVar(‖·‖_G_T: Norm = restrict(‖·‖_{X × Y}, G_T)) →
  
  lemma L1() {
    assert(isBanachSpace(G_T, ‖·‖_G_T)) via ClosedSubspaceBanach
  } →

  define(π_X: G_T → X, (x,y) ↦ x) →
  assert(∀(x,y) ∈ G_T ↔ y = T(x)) →
  assert(isBijective(π_X)) →
  define(π_X^{-1}: X → G_T, x ↦ (x,T(x))) →
  
  lemma L2() {
    assert(isBoundedLinear(π_X)) via ProjectionBounded
  } →

  apply(BanachIsomorphismTheorem, {
    input: isBijective(π_X) ∧ isBoundedLinear(π_X),
    output: isBoundedLinear(π_X^{-1})
  }) →

  assert(∃C > 0: ∀x ∈ X: ‖π_X^{-1}(x)‖_G_T ≤ C‖x‖_X) →
  assert(∀x ∈ X: ‖(x,T(x))‖_{X × Y} ≤ C‖x‖_X) →
  assert(∀x ∈ X: max{‖x‖_X, ‖T(x)‖_Y} ≤ C‖x‖_X) →
  assert(∀x ∈ X: ‖T(x)‖_Y ≤ max{‖x‖_X, ‖T(x)‖_Y}) →
  assert(∀x ∈ X: ‖T(x)‖_Y ≤ C‖x‖_X) →
  conclude(isBounded(T))
}