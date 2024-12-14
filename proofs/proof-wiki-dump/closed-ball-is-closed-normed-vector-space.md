theorem Closed_Ball_Is_Closed() {
  assert(
    ∀M(M = ⟨X, ∥·∥⟩ ∧ isNormedVectorSpace(M)) ∧
    ∀x ∈ X ∧
    ∀ε ∈ ℝ>0 ∧
    let Bε⁻(x) := {y ∈ X : ∥x - y∥ ≤ ε} →
    isClosed(Bε⁻(x))
  )
} ↔

proof Closed_Ball_Is_Closed() {
  setVar(M: NormedVectorSpace, x: X, ε: ℝ>0) →
  strategy(proveComplementIsOpen) →
  assert(isClosed(Bε⁻(x)) ↔ isOpen(X \ Bε⁻(x))) →
  
  ∀y ∈ X \ Bε⁻(x) → {
    assert(∥x - y∥ > ε) →
    setVar(δ := ∥x - y∥ - ε) →
    assert(δ > 0) →
    assert(∥x - y∥ - δ = ε) →
    
    ∀z ∈ Bδ(y) → {
      lemma ReverseTriangleInequality() {
        assert(∥x - z∥ ≥ ∥x - y∥ - ∥y - z∥)
      } →
      apply(ReverseTriangleInequality()) →
      assert(∥x - z∥ ≥ ∥x - y∥ - ∥y - z∥) →
      assert(∥y - z∥ < δ) →
      assert(∥x - z∥ > ∥x - y∥ - δ = ε) →
      assert(z ∉ Bε⁻(x))
    } →
    
    assert(Bδ(y) ⊆ X \ Bε⁻(x)) →
    assert(isOpenNeighborhood(Bδ(y), y))
  } →
  
  assert(isOpen(X \ Bε⁻(x))) →
  assert(isClosed(Bε⁻(x)))
}