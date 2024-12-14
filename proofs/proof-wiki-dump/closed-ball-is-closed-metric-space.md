theorem Closed_Ball_Is_Closed() {
  let M = (A, d: MetricSpace)
  let x ∈ A
  let ε ∈ ℝ₊
  let B⁻_ε(x) = ClosedBall(x, ε, M)
  assert(
    IsClosed(B⁻_ε(x), M)
  )
} ↔

proof Closed_Ball_Is_Closed() {
  strategy(ShowComplementIsOpen) →
  let AC = A \ B⁻_ε(x) →
  
  ∀a ∈ AC {
    assert(d(x,a) > ε) →
    setVar(δ := d(x,a) - ε) →
    assert(δ > 0) →
    assert(d(x,a) - δ = ε) →
    
    ∀b ∈ B_δ(a) {
      lemma ReverseTriangleInequality() {
        assert(d(x,b) ≥ d(x,a) - d(a,b))
      } →
      
      assert(
        d(x,b) ≥ d(x,a) - d(a,b) →
        d(x,b) > d(x,a) - δ →
        d(x,b) = ε
      ) →
      
      assert(b ∉ B⁻_ε(x))
    } →
    
    assert(B_δ(a) ⊆ AC)
  } →
  
  assert(IsOpen(AC, M)) →
  apply(ClosedSetDefinition) →
  assert(IsClosed(B⁻_ε(x), M))
}