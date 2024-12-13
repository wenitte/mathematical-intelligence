theorem AdjointDenselyDefinedOperatorReverseExtension() {
  let(H: HilbertSpace(ℂ)) →
  let((D_T,T): DenselyDefinedLinearOperator(H)) →
  let((D_S,S): DenselyDefinedLinearOperator(H)) →
  assert(
    (D_S,S) extends (D_T,T) →
    let((D_T*,T*): AdjointOperator(D_T,T)) →
    let((D_S*,S*): AdjointOperator(D_S,S)) →
    (D_T*,T*) extends (D_S*,S*)
  )
} ↔

proof AdjointDenselyDefinedOperatorReverseExtension() {
  setVar(y: H) →
  define(f_y_T: D_T → ℂ, x ↦ ⟨Tx,y⟩) →
  define(f_y_S: D_S → ℂ, x ↦ ⟨Sx,y⟩) →
  
  lemma DomainInclusion() {
    assert(y ∈ D_S* → y ∈ D_T*) ↔
    proof {
      assume(y ∈ D_S*) →
      assert(f_y_S is BoundedLinearFunctional) →
      assert(∀x ∈ D_T: Sx = Tx) →
      assert(∀x ∈ D_T: f_y_S(x) = f_y_T(x)) →
      assert(f_y_T is BoundedLinearFunctional) →
      conclude(y ∈ D_T*)
    }
  } →

  lemma OperatorEquality() {
    assert(∀y ∈ D_S*: S*y = T*y) ↔
    proof {
      assume(y ∈ D_S*) →
      assert(∀x ∈ D_S: ⟨Sx,y⟩ = ⟨x,S*y⟩) →
      assert(∀x ∈ D_T: ⟨Tx,y⟩ = ⟨Sx,y⟩ = ⟨x,S*y⟩) →
      assert(∀x ∈ D_T: ⟨Tx,y⟩ = ⟨x,T*y⟩) →
      assert(S*y is unique) →
      conclude(S*y = T*y)
    }
  } →

  apply(DomainInclusion()) →
  apply(OperatorEquality()) →
  conclude((D_T*,T*) extends (D_S*,S*))
}