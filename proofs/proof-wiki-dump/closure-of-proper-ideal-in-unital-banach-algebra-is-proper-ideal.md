theorem Closure_Proper_Ideal_Banach_Algebra() {
  assert(
    ∀A: BanachAlgebra(ℂ) ∧
    ∀I: Ideal(A) ∧
    isProper(I) ⇒
    isProper(closure(I)) ∧ isIdeal(closure(I))
  )
} ↔

proof Closure_Proper_Ideal_Banach_Algebra() {
  setVar(A: BanachAlgebra(ℂ)) →
  setVar(I: Ideal(A)) →
  assert(isProper(I)) →

  lemma Closure_Is_Subspace() {
    assert(isSubspace(closure(I), A))
  } →

  setVar(x ∈ closure(I)) →
  setVar(y ∈ A) →
  
  assert(∃{xₙ}ₙ∈ℕ ∈ I: xₙ → x) →
  assert(∀n ∈ ℕ: xₙy ∈ I) by idealProperty(I) →
  
  lemma Product_Sequence_Convergence() {
    assert(xₙy → xy)
  } →
  
  assert(xy ∈ closure(I)) by closureDefinition() →
  assert(isIdeal(closure(I))) →
  
  setVar(G = units(A)) →
  
  lemma Units_Intersection() {
    assert(I ∩ G = ∅) by idealUnitProperty()
  } →
  
  lemma Units_Open() {
    assert(isOpen(G))
  } →
  
  assert(closure(I) ∩ G = ∅) by openSetDisjointClosure() →
  assert(isProper(closure(I))) by idealUnitProperty()
}