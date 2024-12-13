theorem Axiom_of_Choice_Finite_Sets() {
  assert(
    ∀S[S is_set ∧ S ≠ ∅ ∧ (∀x ∈ S → x is_finite ∧ x ≠ ∅)] →
    ∃f[f is_function ∧ domain(f) = S ∧ (∀A ∈ S → f(A) ∈ A)]
  )
} ↔

proof Axiom_of_Choice_Finite_Sets_From_Ordering() {
  setVar(S: set) →
  assert(∃U[U = ⋃S]) by Axiom_of_Union() →
  setVar(U: set, U = ⋃S) →
  assert(∃≤[≤ is_total_ordering on U]) by Ordering_Principle() →
  assert(∀A ∈ S → A ⊆ U) →
  lemma Min_Exists() {
    assert(∀A ∈ S → A is_finite ∧ A ≠ ∅) →
    assert(∀A ∈ S → ∃min[min = min(A)])
  } by Finite_NonEmpty_Has_Min() →
  defineFunction(f: S → U) {
    ∀A ∈ S → f(A) = min(A)
  } →
  assert(f is_choice_function) 
} ↔

proof Axiom_of_Choice_Finite_Sets_From_Hall() {
  assume(S is_pairwise_disjoint) →
  lemma Marriage_Condition() {
    assert(∀F[F ⊆ S ∧ F is_finite → |F| ≤ |⋃F|]) {
      setVar(F: set, F ⊆ S ∧ F is_finite) →
      assert(∃f_F[f_F is_choice_function on F]) by Principle_of_Finite_Choice() →
      assert(f_F is_injection) by Pairwise_Disjoint_Property() →
      assert(|F| ≤ |⋃F|)
    }
  } →
  assert(∃f[f is_choice_function on S]) by Halls_Marriage_Theorem()
}