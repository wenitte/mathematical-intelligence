theorem BanachAlgebraWithUnity() {
  let(𝔽 ∈ {ℝ, ℂ})
  let((X, ‖·‖): NonTrivialBanachAlgebra(𝔽))
  let(1ₓ: IdentityElement(X))
  assert(
    ∃‖·‖': Norm(X) ⇒
    (1): ‖·‖' ≡ ‖·‖ ∧
    (2): (X, ‖·‖') is BanachAlgebra ∧
    (3): ‖1ₓ‖' = 1
  )
}

proof BanachAlgebraWithUnity() {
  define(‖·‖': X → [0,∞], a ↦ sup{‖ab‖: ‖b‖ ≤ 1}) →
  
  // Prove norm properties
  lemma NormWellDefined() {
    ∀a,b ∈ X: ‖b‖ ≤ 1 ⇒ ‖ab‖ ≤ ‖a‖‖b‖ ≤ ‖a‖ →
    assert(‖a‖' ∈ [0,∞])
  } →

  lemma PositiveDefinite() {
    assert(‖0‖' = 0) →
    assume(‖a‖' = 0 for a ∈ X) →
    assert(∀b: ‖b‖ ≤ 1 ⇒ ab = 0) →
    apply(b = 1ₓ/‖1ₓ‖) →
    conclude(a = 0)
  } →

  lemma Homogeneous() {
    ∀λ ∈ 𝔽, a ∈ X:
    ‖λa‖' = sup{‖λab‖: ‖b‖ ≤ 1} =
    |λ|sup{‖ab‖: ‖b‖ ≤ 1} =
    |λ|‖a‖'
  } →

  lemma Triangle() {
    ∀x,y ∈ X:
    ∀b: ‖b‖ ≤ 1 ⇒
    ‖(x+y)b‖ ≤ ‖xb‖ + ‖yb‖ ≤ ‖x‖' + ‖y‖'
  } →

  // Prove norm equivalence
  lemma NormEquivalence() {
    ∀a ∈ X:
    assert(‖a‖' ≤ ‖a‖) →
    assert(‖a‖/‖1ₓ‖ ≤ ‖a‖' ≤ ‖a‖)
  } →

  // Prove Banach algebra properties
  lemma BanachAlgebraProperties() {
    assert((X,‖·‖') is BanachSpace) →
    ∀x,y ∈ X:
    case(x = 0 ∨ y = 0): ‖xy‖' ≤ ‖x‖'‖y‖' →
    case(x,y ≠ 0):
      ∀b: ‖b‖ ≤ 1 ⇒
      ‖(xy)b‖ = ‖x(yb)‖ = ‖yb‖‖x(yb/‖yb‖)‖ ≤ ‖x‖'‖y‖'
  } →

  // Prove unity norm
  lemma UnityNorm() {
    assert(‖1ₓ‖' = sup{‖b‖: ‖b‖ ≤ 1} = 1)
  } →

  conclude()
}