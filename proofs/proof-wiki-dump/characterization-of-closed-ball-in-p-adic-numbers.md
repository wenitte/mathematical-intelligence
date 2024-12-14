theorem PadicClosedBallCharacterization() {
  assume(p: Prime) ∧
  assume(Qp: PadicNumbers) ∧
  assume(Zp: PadicIntegers) ∧
  assume(x,y: Qp) ∧
  assume(n: ℤ) ∧
  assert(
    B⁻_p^(-n)(y) := {z ∈ Qp | ||z-y||_p ≤ p^(-n)} ∧
    [
      (x ∈ B⁻_p^(-n)(y)) ↔
      (||x-y||_p ≤ p^(-n)) ↔
      (B⁻_p^(-n)(x) = B⁻_p^(-n)(y)) ↔
      (x-y ∈ p^n·Zp) ↔
      (x + p^n·Zp = y + p^n·Zp)
    ]
  )
}

proof PadicClosedBallCharacterization() {
  lemma NonArchimedean() {
    assert(||·||_p is_nonArchimedean_norm)
  } →

  # 1 ↔ 2
  prove_equiv(1,2) {
    apply(def: ClosedBall_PadicNumbers)
  } →

  # 1 ↔ 3
  prove_equiv(1,3) {
    apply(NonArchimedean()) →
    apply(theorem: Centers_ClosedBalls_NonArchimedean) →
    apply(theorem: Center_Element_PadicClosedBall)
  } →

  # 2 ↔ 4
  prove_equiv(2,4) {
    assert(||x-y||_p ≤ p^(-n)) →
    assert(||x-y||_p ≤ ||p^n||_p) by(def: PadicNorm_Integers) →
    assert(||x-y||_p/||p^n||_p ≤ 1) by(algebraic_manipulation) →
    assert(||p^(-n)(x-y)||_p ≤ 1) by(theorem: Norm_Quotient_DivisionRing) →
    assert(p^(-n)(x-y) ∈ Zp) by(def: PadicIntegers) →
    assert(x-y ∈ p^n·Zp) by(algebraic_manipulation)
  } →

  # 3 ↔ 5
  prove_equiv(3,5) {
    apply(theorem: ClosedBalls_PadicNumbers) →
    assert(B⁻_p^(-n)(x) = x + p^n·Zp) →
    assert(B⁻_p^(-n)(y) = y + p^n·Zp) →
    conclude(B⁻_p^(-n)(x) = B⁻_p^(-n)(y) ↔ x + p^n·Zp = y + p^n·Zp)
  }
}