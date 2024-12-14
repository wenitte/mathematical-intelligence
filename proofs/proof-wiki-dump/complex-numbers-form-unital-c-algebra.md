theorem Complex_Numbers_CStarAlgebra() {
  assert(
    let C: NormedAlgebra ∧
    let conjugate: C → C ⇒
    isUnitalCStarAlgebra(tuple(C, conjugate))
  )
} ↔

proof Complex_Numbers_CStarAlgebra() {
  apply(Complex_Plane_Is_Banach_Space) →
  assert(isBanachSpace(C)) →
  assert(|1| = 1) ∧
  assert(isNormedAlgebra(C)) →
  assert(isUnitalBanachAlgebra(C)) →
  
  lemma CStar1() {
    assert(
      ∀z ∈ C ⇒ conjugate(conjugate(z)) = z
    )
  } →
  
  lemma CStar2() {
    assert(
      ∀z,w ∈ C ⇒ conjugate(z + w) = conjugate(z) + conjugate(w)
    )
  } →
  
  lemma CStar3() {
    assert(
      ∀z,w ∈ C ⇒ (
        conjugate(z*w) = conjugate(z)*conjugate(w) ∧
        conjugate(z*w) = conjugate(w)*conjugate(z)
      )
    )
  } →
  
  lemma CStar4() {
    assert(
      ∀α,z ∈ C ⇒ conjugate(α*z) = conjugate(α)*conjugate(z)
    )
  } →
  
  lemma CStar5() {
    assert(
      ∀z ∈ C ⇒ (
        z*conjugate(z) = |z|² ∧
        |z*conjugate(z)| = |z|²
      )
    )
  } →
  
  apply(CStar1, CStar2, CStar3, CStar4, CStar5) →
  assert(isUnitalBanachStarAlgebra(tuple(C, conjugate))) ∧
  assert(satisfiesCStarIdentity(tuple(C, conjugate))) →
  assert(isUnitalCStarAlgebra(tuple(C, conjugate)))
}