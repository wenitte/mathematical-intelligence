theorem Complement_Boolean_Lattice_Unique() {
  assert(
    ∀S[BooleanLattice(S) → 
      ∀a ∈ S → ∃!b ∈ S[Complement(a,b)]]
  )
} ↔

proof Complement_Boolean_Lattice_Unique() {
  lemma BooleanLattice_Properties() {
    assert(
      BooleanLattice(S) ↔ 
      (DistributiveLattice(S) ∧ ComplementedLattice(S))
    )
  } →
  
  lemma ComplementedLattice_Properties() {
    assert(
      ComplementedLattice(S) → BoundedLattice(S)
    )
  } →
  
  apply(BooleanLattice_Properties()) →
  apply(ComplementedLattice_Properties()) →
  
  lemma Distributive_Complement_Unique() {
    assert(
      (DistributiveLattice(S) ∧ BoundedLattice(S)) → 
      ∀a ∈ S → AtMostOneComplement(a)
    )
  } →
  
  apply(Distributive_Complement_Unique()) →
  
  assert(
    ComplementedLattice(S) → 
    ∀a ∈ S → ∃b ∈ S[Complement(a,b)]
  ) →
  
  conclude(
    ∀a ∈ S → ∃!b ∈ S[Complement(a,b)]
  )
}