theorem CartesianProduct_Intervals_Convex() {
  assert(
    ∀n ∈ ℕ ∧ 
    ∀k ∈ {1,...,n} ∧ 
    let ℙk be real intervals →
    ℙ1 × ... × ℙn is convex
  )
} ↔

proof CartesianProduct_Intervals_Convex() {
  setVar(n: ℕ) →
  setVar(k: {1,...,n}) →
  setVar(x,y: ℙ1 × ... × ℙn) →
  assert(x = (x₁,...,xₙ)) →
  assert(y = (y₁,...,yₙ)) →
  assert(∀k: xₖ,yₖ ∈ ℙk) →
  setVar(t: [0,1]) →

  lemma Case_xk_leq_yk() {
    assume(xₖ ≤ yₖ) →
    assert(xₖ = txₖ + (1-t)xₖ) →
    assert(txₖ + (1-t)xₖ ≤ txₖ + (1-t)yₖ) ∧ {by 1-t ∈ [0,1]} →
    assert(txₖ + (1-t)yₖ ≤ tyₖ + (1-t)yₖ) →
    assert(tyₖ + (1-t)yₖ = yₖ) →
    conclude(txₖ + (1-t)yₖ ∈ ℙk) {by interval_definition}
  } →

  lemma Case_xk_geq_yk() {
    assume(xₖ ≥ yₖ) →
    assert(xₖ ≥ txₖ + (1-t)yₖ ≥ yₖ) →
    conclude(txₖ + (1-t)yₖ ∈ ℙk) {by interval_definition}
  } →

  apply(Case_xk_leq_yk(), Case_xk_geq_yk()) →
  assert(tx + (1-t)y ∈ ℙ1 × ... × ℙn) →
  conclude(ℙ1 × ... × ℙn is convex) {by convex_set_definition}
}