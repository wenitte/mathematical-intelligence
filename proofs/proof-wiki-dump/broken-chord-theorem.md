theorem BrokenChordTheorem() {
  assert(
    ∀A,C ∈ Circle ∧
    ∃M ∈ Circle [arc(AM) = arc(MC)] ∧
    ∃B ∈ minorArc(AM) ∧
    ∃D [MD ⊥ BC] →
    AB + BD = DC
  )
} ↔

proof BrokenChordTheorem() {
  setVar(E: Point[BC]) →
  assert(BD = DE) →

  lemma TriangleCongruence_MDB_MDE() {
    assert(
      MD ⊥ BC ∧
      BD = DE ∧
      MD common →
      △MDB ≅ △MDE
    )
  } →

  lemma EqualArcs() {
    assert(
      arc(AM) = arc(MC) →
      arc(AB) = arc(HC)
    )
  } →

  lemma AngleEquality() {
    assert(
      ∠MBC = ∠MEB = α ∧
      ∠MCB = β ∧
      ∠CMH = γ ∧
      α = β + γ ∧
      ∠CME = γ
    )
  } →

  lemma TriangleCongruence_MCE_MCH() {
    assert(
      MC common ∧
      ∠MCH = ∠MCB ∧
      ∠CME = ∠CMH →
      △MCE ≅ △MCH
    )
  } →

  apply(TriangleCongruence_MCE_MCH()) →
  assert(HC = EC) →
  apply(EqualArcs()) →
  assert(AB = HC) →
  assert(AB = EC) →
  assert(AB + BD = DE + EC) →
  assert(AB + BD = DC)
}

// Note: This is just one of the proofs converted. The other proofs could be similarly structured as alternate proof blocks with the same theorem.