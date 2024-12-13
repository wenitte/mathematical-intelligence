theorem Function_Space_Basis() {
  define(R: Ring) ∧ define(Ring.unity = 1_R) ∧ define(Ring.zero = 0_R) ∧
  define(A: Set) ∧
  define(f_a: Function[A → R]) ∧
  assert(
    ∀a ∈ A, ∀x ∈ A ⇒ f_a(x) = {
      1_R if x = a,
      0_R if x ≠ a
    }
  ) ⇒
  assert(B = {f_a | a ∈ A}) ⇒
  assert(B is_basis_of FiniteSubmodule(R^A))
} ↔

proof Function_Space_Basis() {
  setVar(n: ℕ) →
  setVar(a_k: Sequence[A, n]) where distinct(a_k) →
  setVar(λ_k: Sequence[R, n]) →
  
  assert(
    ∑(k=1 to n)(λ_k·f_(a_k)) = function(x: A) {
      return λ_i if x = a_i for some i ∈ [1..n],
      return 0_R otherwise
    }
  ) →
  
  lemma Generator_Property() {
    assert(B generates FiniteSubmodule(R^A)) ∧
    assert(B is_linearly_independent)
  } →
  
  apply(Generator_Property()) →
  apply(Basis_Definition[generator ∧ linearly_independent → basis]) →
  assert(B is_basis_of FiniteSubmodule(R^A)) →
  
  corollary Standard_Basis() {
    assert(
      A = [1..n] ⇒ B = StandardBasis(R^n)
    )
  }
}