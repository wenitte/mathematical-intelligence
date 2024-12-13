theorem Banach_Tarski() {
  assert(
    ∃ D³: SetOf(ℝ³) ∧ isUnitBall(D³) →
    ∃ B₁,B₂: SetOf(ℝ³) ∧ isUnitBall(B₁) ∧ isUnitBall(B₂) ∧ 
    isEquidecomposable(D³, B₁ ∪ B₂)
  )
} ↔

lemma Relation_Approx() {
  assert(
    ∀X,Y: SetOf(ℝ³) →
    (X ≈ Y) ↔ 
    ∃m: ℕ, ∃X₁...Xₘ,Y₁...Yₘ: SetOf(ℝ³) →
    (X = ∪ᵢX_i) ∧ (Y = ∪ᵢY_i) ∧
    ∀i∈[1,m]: isCongruent(X_i, Y_i)
  )
} →

lemma Equiv_Relation() {
  assert(
    ∀X,Y,Z: SetOf(ℝ³) →
    isReflexive(≈) ∧ isSymmetric(≈) ∧ isTransitive(≈)
  )
} →

proof Banach_Tarski() {
  let U: UnitBall(ℝ³) →
  let S²: Sphere(U) →
  
  // Hausdorff Paradox partition
  assert(S² = A ∪ B ∪ C ∪ Q) ∧
  disjoint(A,B,C) ∧
  congruent(A,B,C) ∧
  congruent(B∪C, A) →

  // Define bar operation
  let bar(T: SetOf(S²)) = {
    x ∈ U | ∃t∈T, s∈(0,1]: x = (1-s)c + st
  } →

  let X = bar(A) ∪ bar(Q) ∪ {c} →
  let Y = U \ X →

  apply(Lemma_3) →
  assert(X ≈ U) →
  
  // Rotation argument
  ∃α: Rotation(U) →
  assert(Q ∩ α(Q) = ∅) →
  ∃S⊆C: bar(S) ≈ bar(Q) →
  
  assert(bar(A) ∪ bar(Q) ∪ {c} ≈ bar(B) ∪ bar(S) ∪ {p}) →
  apply(Lemma_3) →
  assert(Y ≈ U) →
  
  conclude(U ≈ X ∪ Y)
}