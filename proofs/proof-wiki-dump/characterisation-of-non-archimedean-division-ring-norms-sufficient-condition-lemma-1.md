theorem NonArchimedeanNormEquivalence() {
  let(R: DivisionRing, ||·||: Norm, 1_R: Unity)
  assert(
    ∀x,y ∈ R, y ≠ 0_R ⇒
    (||x + y|| ≤ max{||x||, ||y||} ↔ ||xy^{-1} + 1_R|| ≤ max{||xy^{-1}||, 1})
  )
}

proof NonArchimedeanNormEquivalence() {
  setVar(x,y: R, y ≠ 0_R) →
  
  lemma NormMultiplication() {
    assert(||x + y|| ≤ max{||x||, ||y||} ↔
           ||x + y|| · ||y^{-1}|| ≤ max{||x|| · ||y^{-1}||, ||y|| · ||y^{-1}||})
  } →

  lemma NormMultiplicativity() {
    assert(||x + y|| · ||y^{-1}|| ↔ ||(x + y)y^{-1}||)
    by(NormAxiom_N2)
  } →

  lemma Distributivity() {
    assert(||(x + y)y^{-1}|| ↔ ||xy^{-1} + yy^{-1}||)
    by(RingAxiom_D)
  } →

  lemma InverseProperty() {
    assert(||xy^{-1} + yy^{-1}|| ↔ ||xy^{-1} + 1_R||)
    by(InverseIdentity)
  } →

  lemma UnityNorm() {
    assert(||1_R|| = 1)
    by(NormOfUnity)
  } →

  chain(
    ||x + y|| ≤ max{||x||, ||y||} ↔
    ||x + y|| · ||y^{-1}|| ≤ max{||x|| · ||y^{-1}||, ||y|| · ||y^{-1}||} ↔
    ||(x + y)y^{-1}|| ≤ max{||xy^{-1}||, ||yy^{-1}||} ↔
    ||xy^{-1} + yy^{-1}|| ≤ max{||xy^{-1}||, ||yy^{-1}||} ↔
    ||xy^{-1} + 1_R|| ≤ max{||xy^{-1}||, 1}
  )
}