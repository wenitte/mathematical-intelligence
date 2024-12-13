theorem Symmetric_Operator_Adjoint_Extension() {
  assume(H: HilbertSpace) ∧
  assume(T: LinearOperator(D_T → H)) ∧
  assume(T_star: Adjoint(T)) ∧
  assume(symmetric: ∀x,y ∈ D_T ⇒ ⟨Tx,y⟩ = ⟨x,Ty⟩) ∧
  assume(dense: Dense(D_T, H))
  assert(
    (D_T ⊆ D_T_star) ∧ 
    (∀x ∈ D_T ⇒ Tx = T_star(x))
  )
} ↔

proof Symmetric_Operator_Adjoint_Extension() {
  setVar(y: H) →
  define(f_y: LinearFunctional(D_T → F)) {
    ∀x ∈ D_T ⇒ f_y(x) = ⟨Tx,y⟩
  } →
  
  lemma Functional_Is_Bounded() {
    assume(y ∈ D_T) →
    assert(∀x ∈ D_T ⇒ ⟨Tx,y⟩ = ⟨x,Ty⟩) by(symmetric) →
    assert(|f_y(x)| = |⟨x,Ty⟩|) →
    assert(|⟨x,Ty⟩| ≤ ‖Ty‖‖x‖) by(CBS_Inequality) →
    conclude(Bounded(f_y))
  } →

  apply(Functional_Is_Bounded()) →
  assert(D_T ⊆ D_T_star) →

  lemma Operator_Equality() {
    assume(x,y ∈ D_T) →
    assert(⟨Tx,y⟩ = ⟨x,Ty⟩) by(symmetric) ∧
    assert(⟨Tx,y⟩ = ⟨x,T_star(y)⟩) by(adjoint_def) →
    assert(⟨x,Ty - T_star(y)⟩ = 0)
  } →

  lemma Norm_Zero() {
    assume(y ∈ D_T) →
    setSequence(x_n: D_T, limit: Ty - T_star(y)) →
    assert(∀n ∈ ℕ ⇒ ⟨x_n,Ty - T_star(y)⟩ = 0) →
    assert(‖Ty - T_star(y)‖² = 0) by(inner_product_continuity)
  } →

  apply(Norm_Zero()) →
  conclude(∀y ∈ D_T ⇒ Ty = T_star(y))
}