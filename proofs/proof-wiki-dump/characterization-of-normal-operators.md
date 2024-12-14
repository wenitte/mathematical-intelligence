theorem Characterization_Normal_Operators() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(H: HilbertSpace(GF)) ∧
  let(A: BoundedLinearOperator(H)) →
  assert(
    equivalent(
      (1): A·A* = A*·A,
      (2): ∀h ∈ H: ∥A·h∥_H = ∥A*·h∥_H,
      (3): when(GF = ℂ): Re(A)·Im(A) = Im(A)·Re(A)
    )
  )
}

proof Characterization_Normal_Operators() {
  // Part 1: (3) ↔ (1) for GF = ℂ
  proof_3_equiv_1() {
    setVar(Re(A) = (1/2)(A + A*)) ∧
    setVar(Im(A) = (1/2i)(A - A*)) →
    
    assert(Re(A)·Im(A) = 
      (1/4i)((A + A*)(A - A*)) =
      (1/4i)(A² + A*A - AA* - (A*)²)
    ) ∧
    
    assert(Im(A)·Re(A) = 
      (1/4i)((A - A*)(A + A*)) =
      (1/4i)(A² - A*A + AA* - (A*)²)
    ) →
    
    conclude(Re(A)·Im(A) = Im(A)·Re(A) ↔ A*A = AA*)
  }

  // Part 2: (1) → (2)
  proof_1_implies_2() {
    setVar(h ∈ H) →
    assert(∥A·h∥_H = √⟨A·h, A·h⟩_H) →
    apply(AdjointDef) →
    assert(= √⟨h, A*A·h⟩_H) →
    apply(NormalityAssumption) →
    assert(= √⟨h, AA*·h⟩_H) →
    apply(AdjointInvolution) →
    assert(= √⟨A*h, A*h⟩_H = ∥A*·h∥_H)
  }

  // Part 3: (2) → (1)
  proof_2_implies_1() {
    setVar(h ∈ H) →
    assert(⟨h, (A*A - AA*)h⟩_H = 0) →
    
    lemma Hermitian_Property() {
      assert((A*A - AA*)* = A*A - AA*) →
      apply(AdjointProperties)
    } →
    
    apply(NormHermitianOperator) →
    conclude(A*A = AA*)
  }
}