theorem CStarAlgebraEmbedding() {
  let(A: CStar_Algebra, MA: MultiplierAlgebra(A)) →
  let(φ: A → MA, φ(a) = (La, Ra)) →
  assert(
    φ[A] ∈ CStarSubalgebra(MA)
  )
}

proof CStarAlgebraEmbedding() {
  // Show φ is linear isometry
  lemma LinearityOfPhi() {
    ∀a,b ∈ A, λ ∈ ℂ ⇒
    assert(La+λb = La + λLb) ∧
    assert(Ra+λb = Ra + λRb) →
    assert(φ(a + λb) = φ(a) + λφ(b))
  } →

  lemma IsometryOfPhi() {
    ∀a ∈ A ⇒
    assert(‖φ(a)‖_MA = ‖(La, Ra)‖_MA) →
    assert(‖φ(a)‖_MA = ‖La‖_MA) →
    assert(‖φ(a)‖_MA = ‖a‖)
  } →

  // Show φ is algebra homomorphism
  lemma AlgebraHomomorphism() {
    ∀a,b,c ∈ A ⇒
    assert(Lab(c) = a(bc) = La(Lb(c))) →
    assert(Lab = LaLb) ∧
    assert(Rab = RbRa) →
    assert(φ(ab) = (Lab, Rab)) →
    assert(φ(ab) = (LaLb, RbRa)) →
    assert(φ(ab) = φ(a)φ(b))
  } →

  // Show φ is *-algebra homomorphism
  lemma StarAlgebraHomomorphism() {
    ∀a,b ∈ A ⇒
    assert(La* = Ra*) ∧
    assert(Ra* = La*) →
    assert(φ(a)* = (La, Ra)* = (Ra*, La*)) →
    assert(φ(a)* = (La*, Ra*) = φ(a*))
  } →

  // Final conclusion
  apply(LinearityOfPhi()) →
  apply(IsometryOfPhi()) →
  apply(AlgebraHomomorphism()) →
  apply(StarAlgebraHomomorphism()) →
  assert(φ[A] ∈ StarSubalgebra(MA)) →
  assert(φ[A] ∈ ClosedSet(MA)) →
  conclude(φ[A] ∈ CStarSubalgebra(MA))
}