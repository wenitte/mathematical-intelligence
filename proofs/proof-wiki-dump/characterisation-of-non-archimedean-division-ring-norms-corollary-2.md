theorem CharacterizationNonArchimedeanNorm() {
  assert(
    ∀R: DivisionRing, ∀norm: R → ℝ₊, ∀C ∈ ℝ ⇒
    (sup({norm(n·1_R) | n ∈ ℕ₊}) = C ∧ C < ∞) →
    (NonArchimedean(norm) ∧ C = 1)
  )
}

proof CharacterizationNonArchimedeanNorm() {
  byContradiction() {
    assume(C > 1) →
    bySupremumProperty() {
      assert(∃m ∈ ℕ₊: norm(m·1_R) > 1)
    } →
    setVar(x := m·1_R) →
    setVar(y := x⁻¹) →
    
    byNormOfInverse() {
      assert(norm(y) < 1)
    } →
    
    bySequencePowersLessThanOne() {
      assert(lim[n→∞](norm(y^n)) = 0)
    } →
    
    byReciprocalNullSequence() {
      assert(lim[n→∞](1/norm(y^n)) = ∞)
    } →
    
    forall(n ∈ ℕ₊) {
      assert(1/norm(y^n) = norm(y⁻¹)^n) byNormOfInverse() →
      assert(norm(y⁻¹)^n = norm(x^n)) byDefOf(y) →
      assert(norm(x^n) = norm((m·1_R)^n)) byDefOf(x) →
      assert(norm((m·1_R)^n) = norm(m^n·1_R)) byMultiplicativity()
    } →
    
    assert(lim[n→∞](norm(m^n·1_R)) = ∞) →
    assert(sup({norm(n·1_R) | n ∈ ℕ₊}) = ∞) →
    contradiction(C < ∞)
  } →
  
  assert(C ≤ 1) →
  assert(∀n ∈ ℕ₊: norm(n·1_R) ≤ 1) →
  
  byNonArchimedeanCharacterization() {
    assert(NonArchimedean(norm))
  } →
  
  byCorollary1() {
    assert(sup({norm(n·1_R) | n ∈ ℕ₊}) = 1)
  } →
  
  assert(C = 1)
}