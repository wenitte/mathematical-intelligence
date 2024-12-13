theorem Cardinality_Of_Set_Of_Subsets() {
  let(S: Set, n: ℕ, m: ℕ) →
  assert(card(S) = n ∧ m ≤ n) →
  assert(
    card({T ⊆ S : card(T) = m}) = (n!/(m!(n-m)!))
  )
} ↔

proof Cardinality_Of_Set_Of_Subsets_1() {
  let(Nn: Set) → assert(Nn = {1,...,n}) →
  let(B: Function) → assert(∀X⊆Nn, ∀Y⊆S: B(X,Y) = {f: X→Y | f is bijective}) →
  let(𝕊: Set) → assert(𝕊 = {T ⊆ S : card(T) = m}) →
  let(s: ℕ) → assert(s = card(𝕊)) →
  let(β: Function) → assert(
    β: B(Nn,S) → 𝕊,
    ∀f∈B(Nn,S): β(f) = f(Nm)
  ) →

  lemma Bijection_Decomposition() {
    ∀Y∈𝕊: assert(
      ∃ΦY: β⁻¹(Y) → B(Nm,Y) × B(Nn-Nm,S-Y),
      ΦY is bijective
    )
  } →

  apply(Cardinality_Of_Bijections) →
  assert(∀Y∈𝕊: card(B(Nm,Y)) = m!) →
  assert(∀Y∈𝕊: card(B(Nn-Nm,S-Y)) = (n-m)!) →
  apply(Cardinality_Of_Cartesian_Product) →
  assert(∀Y∈𝕊: card(β⁻¹(Y)) = m!(n-m)!) →
  apply(Number_Of_Elements_In_Partition) →
  assert(card(B(Nn,S)) = m!(n-m)!s) →
  assert(card(B(Nn,S)) = n!) →
  conclude(s = n!/(m!(n-m)!))
}

proof Cardinality_Of_Set_Of_Subsets_2() {
  let(P: Function) → assert(P(n,m) = n!/(n-m)!) →
  assert(P(n,m) = card({π: subset(S,m) → subset(S,m) | π is permutation})) →
  assert(P(n,m) = (n choose m) × m!) →
  conclude((n choose m) = n!/(m!(n-m)!))
}

proof Cardinality_Of_Set_Of_Subsets_3() {
  let(Sn: Group) → assert(Sn = SymmetricGroup(Nn)) →
  let(Br: Set) → assert(Br = {S ⊆ Nn : card(S) = r}) →
  let(*: Function) → assert(*: Sn × Br → Br) →
  apply(Group_Action_Properties) →
  assert(∀U∈Br: card(Stab(U)) = r!(n-r)!) →
  apply(Orbit_Stabilizer_Theorem) →
  conclude(card(Br) = n!/(r!(n-r)!))
}

proof Cardinality_Of_Set_Of_Subsets_4() {
  let(P: Predicate) → 
  assert(P(n) ↔ ∀m≤n: (n choose m) = n!/(m!(n-m)!)) →
  
  base_case {
    assert(P(1)) →
    verify(
      (1 choose m) = 
      case(m=0: 1) ∧
      case(m=1: 1) ∧
      case(else: 0)
    )
  } →

  inductive_step {
    assume(P(k)) →
    assert((k+1 choose m) = (k choose m) + (k choose m-1)) →
    apply(Algebra) →
    verify((k+1 choose m) = (k+1)!/(m!(k+1-m)!))
  } →

  apply(Mathematical_Induction) →
  conclude(∀n∈ℕ: P(n))
}