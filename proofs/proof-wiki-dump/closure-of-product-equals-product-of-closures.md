theorem Closure_Product_Equals_Product_Closures() {
  let(I: Set)
  let({X_i}_{i∈I}: Family[TopologicalSpace])
  let({A_i}_{i∈I}: Family[Set])
  assume(∀i∈I → A_i ⊆ X_i)
  let(X = ∏_{i∈I} X_i)
  assert(
    ∏_{i∈I} closure(A_i) = closure(∏_{i∈I} A_i)
  )
} ↔

proof Closure_Product_Equals_Product_Closures() {
  // First inclusion: ∏_{i∈I} closure(A_i) ⊆ closure(∏_{i∈I} A_i)
  let({x_i}_{i∈I} ∈ ∏_{i∈I} closure(A_i)) →
  assert(∀i∈I → x_i ∈ closure(A_i)) →
  let(U: OpenSet[X]) →
  assume(U contains {x_i}_{i∈I}) →
  assert(∀i∈I → ∃y_i ∈ U_i ∩ A_i) →
  construct({y_i}_{i∈I} ∈ U ∩ ∏_{i∈I} A_i) →
  conclude({x_i}_{i∈I} ∈ closure(∏_{i∈I} A_i)) →

  // Second inclusion: closure(∏_{i∈I} A_i) ⊆ ∏_{i∈I} closure(A_i)
  let({x_i}_{i∈I} ∈ closure(∏_{i∈I} A_i)) →
  forAll(j∈I) {
    let(V_j: OpenSet[X_j]) →
    assume(x_j ∈ V_j) →
    assert(π_j^{-1}(V_j) isOpen in ∏_{i∈I} X_i) →
    exists({y_i}_{i∈I} ∈ ∏_{i∈I} A_i) →
    assert(y_j ∈ V_j ∩ A_j) →
    conclude(x_j ∈ closure(A_j))
  } →
  conclude({x_i}_{i∈I} ∈ ∏_{i∈I} closure(A_i))
}