theorem CStar_Algebra_Generated_By_Commutative_SelfAdjoint_Set_Is_Commutative() {
  assert(
    ∀A[C*-algebra] ∧ ∀S⊆A[self-adjoint] ∧
    (∀x,y∈S ⇒ xy=yx) ⇒
    C*(S)[is_commutative]
  )
} ↔

proof CStar_Algebra_Generated_By_Commutative_SelfAdjoint_Set_Is_Commutative() {
  setVar(C: subalgebra_generated_by(S)) →
  
  lemma Subalgebra_Generated_By_Commuting_Elements() {
    assert(
      (∀x,y∈S ⇒ xy=yx) ⇒ C[is_commutative]
    )
  } →

  lemma Explicit_Form_Generated_CStar() {
    assert(C*(S) = C⁻)
  } →

  lemma Closure_Commutative_Set() {
    assert(
      C[is_commutative] ⇒ C⁻[is_commutative]
    )
  } →

  apply(Subalgebra_Generated_By_Commuting_Elements()) →
  apply(Explicit_Form_Generated_CStar()) →
  apply(Closure_Commutative_Set()) →
  assert(C*(S)[is_commutative])
}