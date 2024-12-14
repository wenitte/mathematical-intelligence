theorem DualOperatorCharacterization() {
  let(GF ∈ {ℝ, ℂ})
  let(X, Y: NormedVectorSpace(GF))
  let(X*, Y*: DualSpace(X), DualSpace(Y))
  let(X**, Y**: DualSpace(X*), DualSpace(Y*))
  let(T: BoundedLinearTransform(Y* → X*))
  let(ιX: EvaluationLinearTransform(X → X**))
  let(ιY: EvaluationLinearTransform(Y → Y**))

  assert(
    (1) T.isWeakStarContinuous() ↔
    (2) ∃S: BoundedLinearTransform(X → Y) where S* = T ↔
    (3) T*(ιX(X)) ⊆ ιY(Y)
  )
}

proof DualOperatorCharacterization() {
  # 1 implies 2
  section OneImpliesTwo() {
    assume(T.isWeakStarContinuous()) →
    apply(WeakStarContinuityCharacterization) →
    assert(∀x ∈ X, x^∧: (X*, w*) → GF is continuous) →
    apply(CompositeContinuousMapping) →
    assert(∀x ∈ X, ∃Sx ∈ Y: x^∧∘T = (Sx)^∧) →
    
    # Show S is linear
    assert(∀x,y ∈ X, ∀α,β ∈ GF:
      (S(αx + βy))^∧ = (αx + βy)^∧∘T = α(x^∧∘T) + β(y^∧∘T) = α(Sx)^∧ + β(Sy)^∧
    ) →
    
    # Show S is bounded
    assert(∀x ∈ X:
      ‖Sx‖Y = ‖(Sx)^∧‖Y** = ‖x^∧∘T‖Y** ≤ ‖x^∧‖X** ‖T‖B(Y*,X*) = ‖T‖B(Y*,X*) ‖x‖X
    ) →
    
    # Show S* = T
    assert(∀f ∈ Y*, ∀x ∈ X:
      f(Sx) = (Sx)^∧(f) = (x^∧∘T)(f) = x^∧(Tf) = (Tf)(x)
    ) →
    conclude(S* = T)
  }

  # 2 implies 3
  section TwoImpliesThree() {
    assume(∃S: BoundedLinearTransform(X → Y) where S* = T) →
    assert(S** = T*) →
    assert(∀x ∈ X, ∀f ∈ Y*:
      (T*(x^∧))(f) = (S**(x^∧))(f) = (x^∧∘S*)(f) = x^∧(S*f) = x^∧(f∘S) = f(Sx) = (Sx)^∧(f)
    ) →
    conclude(T*(ιX(x)) = ιY(Sx))
  }

  # 3 implies 1
  section ThreeImpliesOne() {
    assume(T*(ιX(X)) ⊆ ιY(Y)) →
    assert(∀x^∧ ∈ ιX(X), ∃y ∈ Y: x^∧∘T = y^∧) →
    apply(WeakStarContinuityCharacterization) →
    assert(∀x ∈ X: x^∧∘T: (Y*, w*) → GF is continuous) →
    apply(InitialTopologyContinuity) →
    conclude(T: (Y*, w*) → (X*, w*) is continuous)
  }
}