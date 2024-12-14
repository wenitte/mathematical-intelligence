theorem Cayley_Hamilton() {
  requires(
    A: CommutativeRing(unity: true),
    N: Matrix(n × n, elements ∈ A),
    I_n: Matrix(n × n, type: unit),
    p_N(x): det(x·I_n - N)
  )
  assert(
    p_N(N) = 0_Matrix ↔
    N^n + b_(n-1)·N^(n-1) + ... + b_1·N + b_0 = 0_Matrix
    where ∀i: b_i = coefficients(p_N(x))
  )
} ↔

proof Cayley_Hamilton() {
  setVar(φ: N) →
  
  lemma ModuleVersion() {
    reference("Cayley-Hamilton_Theorem_Finitely_Generated_Modules") →
    assert(p_N(x) = det(x·I_n - N) = 0)
  } →
  
  letIdeal(a: generated_by(entries(N))) →
  
  apply(ModuleVersion()) →
  conclude(p_N(N) = 0_Matrix)
}