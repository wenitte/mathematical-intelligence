theorem AdjointIsLinear() {
  assert(
    ∀H,K[HilbertSpace(H) ∧ HilbertSpace(K) ∧ (BaseField ∈ {ℝ,ℂ})] ∧
    ∀A,B ∈ B(H,K)[BoundedLinearTransform(A) ∧ BoundedLinearTransform(B)] ⇒
    [∀λ ∈ BaseField: ((λA)* = λ̄A*) ∧ ((A+B)* = A* + B*)]
  )
} ↔

proof AdjointIsLinear() {
  setVar(H,K: HilbertSpace) →
  setVar(⟨·,·⟩_H: InnerProduct(H)) →
  setVar(⟨·,·⟩_K: InnerProduct(K)) →
  
  lemma Property1() {
    setVar(λ: BaseField, h: H, k: K) →
    assert(⟨(λA)h,k⟩_K) →
    assert(λ⟨Ah,k⟩_K) by InnerProductProp2 →
    assert(λ⟨h,A*k⟩_H) by AdjointDef →
    assert(⟨h,(λ̄A*)k⟩_H) by InnerProductProps12 →
    apply(AdjointUniqueness) →
    conclude((λA)* = λ̄A*)
  } →

  lemma Property2() {
    setVar(h: H, k: K) →
    assert(⟨(A+B)h,k⟩_K) →
    assert(⟨Ah,k⟩_K + ⟨Bh,k⟩_K) by InnerProductProp3 →
    assert(⟨h,A*k⟩_H + ⟨h,B*k⟩_H) by AdjointDef →
    assert(⟨h,(A*+B*)k⟩_H) by InnerProductProps13 →
    apply(AdjointUniqueness) →
    conclude((A+B)* = A* + B*)
  } →

  apply(Property1) →
  apply(Property2) →
  conclude(AdjointIsLinear)
}