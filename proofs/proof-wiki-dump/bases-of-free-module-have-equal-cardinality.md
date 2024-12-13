theorem Bases_Equal_Cardinality() {
  let(R: CommutativeRing, hasUnity(R)) ∧
  let(M: Module, isFree(M, R)) ∧
  let(B: Set, C: Set) ∧
  assert(isBasis(B, M) ∧ isBasis(C, M)) →
  assert(|B| = |C|)
} ↔

proof Bases_Equal_Cardinality() {
  lemma Basis_Is_Generator() {
    assert(∀X: Set → (isBasis(X, M) → isGenerator(X, M)))
  } →

  lemma Basis_Generator_Injection() {
    assert(∀X,Y: Set → (isGenerator(X, M) ∧ isBasis(Y, M) → 
      ∃f: Function → isInjective(f, X, Y)))
  } →

  apply(Basis_Is_Generator()) →
  apply(Basis_Generator_Injection()) →
  
  exists(f: Function, g: Function) ∧
  assert(isInjective(f, B, C) ∧ isInjective(g, C, B)) →
  
  apply(Cantor_Bernstein_Schroeder_Theorem(B, C, f, g)) →
  assert(|B| = |C|)
}