theorem Unitary_Operator_Characterization() {
  assert(
    let(H: HilbertSpace) ∧
    let(A: BoundedLinearOperator(H)) ∧
    (
      isUnitary(A) ↔
      (A* ∘ A = I ∧ A ∘ A* = I) ↔
      (isNormal(A) ∧ isIsometry(A))
    )
  )
}

proof Unitary_Operator_Characterization() {
  // (3) → (2)
  proof NormalIsometry_Implies_UnitaryEquations() {
    assume(isNormal(A) ∧ isIsometry(A)) →
    assert(∀x ∈ H: ⟨Ax,Ax⟩ = ⟨x,x⟩) →
    apply(Adjoint_Is_Involutive()) →
    assert(⟨Ax,(A*)x⟩ = ⟨x,x⟩) →
    apply(Adjoint_Definition()) →
    assert(∀x ∈ H: ⟨A*Ax,x⟩ = ⟨Ix,x⟩) →
    apply(Zero_Numerical_Range_Corollary()) →
    assert(A*A = I) →
    apply(isNormal(A)) →
    assert(AA* = I)
  }

  // (1) → (2)
  proof Unitary_Implies_UnitaryEquations() {
    assume(isUnitary(A)) →
    apply(NormalIsometry_Implies_UnitaryEquations()) →
    assert(A*A = I) →
    forall(y ∈ H) {
      exists(x ∈ H: Ax = y) →
      assert(x = A*Ax = A*y) →
      assert(AA*y = Ax = y)
    } →
    assert(AA* = I)
  }

  // (2) → (1)
  proof UnitaryEquations_Implies_Unitary() {
    assume(A*A = I ∧ AA* = I) →
    assert(isLinear(A)) →
    forall(x,y ∈ H) {
      assert(⟨A*Ax,y⟩ = ⟨x,y⟩) →
      apply(Adjoint_Definition()) →
      assert(⟨Ax,A**y⟩ = ⟨x,y⟩) →
      apply(Adjoint_Is_Involutive()) →
      assert(⟨Ax,Ay⟩ = ⟨x,y⟩)
    } →
    assert(isIsomorphism(A))
  }

  // (2) → (3)
  proof UnitaryEquations_Implies_NormalIsometry() {
    assume(A*A = I ∧ AA* = I) →
    assert(A*A = AA* → isNormal(A)) →
    apply(UnitaryEquations_Implies_Unitary()) →
    assert(isUnitary(A) → isSurjectiveIsometry(A)) →
    assert(isNormal(A) ∧ isIsometry(A))
  }
}