theorem Auxiliary_Approximating_Relation_Quasi_Interpolation() {
  assert(
    ∀L(complete_lattice(L) ∧ L = ⟨S,∨,∧,⪯⟩) ∧
    ∀x,z ∈ S ∧
    ∀R(auxiliary_approximating_relation(R,S)) →
    (⟨x,z⟩ ∈ R ∧ x ≠ z) →
    ∃y ∈ S(x ⪯ y ∧ ⟨y,z⟩ ∈ R ∧ x ≠ y)
  )
} ↔

proof Auxiliary_Approximating_Relation_Quasi_Interpolation() {
  setVar(L: complete_lattice) →
  setVar(x,z: S) →
  setVar(R: auxiliary_approximating_relation) →
  
  assume(⟨x,z⟩ ∈ R ∧ x ≠ z) →
  
  lemma Auxiliary_Relation_Definition() {
    assert(⟨x,z⟩ ∈ R → x ⪯ z)
  } →
  apply(Auxiliary_Relation_Definition()) →
  
  lemma Strict_Precedence_Definition() {
    assert(x ⪯ z ∧ x ≠ z → x ≺ z)
  } →
  apply(Strict_Precedence_Definition()) →
  
  lemma Antisymmetry_Property() {
    assert(x ≺ z → z ⊀ x)
  } →
  apply(Antisymmetry_Property()) →
  
  lemma Not_Preceding_Implication() {
    assert(z ⊀ x → z ⪯̸ x)
  } →
  apply(Not_Preceding_Implication()) →
  
  lemma Not_Preceding_Approximating_Relation() {
    assert(z ⪯̸ x → ∃u ∈ S(⟨u,z⟩ ∈ R ∧ u ⪯̸ x))
  } →
  apply(Not_Preceding_Approximating_Relation()) →
  
  setVar(y: S = x ∨ u) →
  
  lemma Join_Succeeds_Operands() {
    assert(x ⪯ (x ∨ u))
  } →
  apply(Join_Succeeds_Operands()) →
  
  lemma Auxiliary_Relation_Preservation() {
    assert(⟨u,z⟩ ∈ R → ⟨x ∨ u,z⟩ ∈ R)
  } →
  apply(Auxiliary_Relation_Preservation()) →
  
  lemma Join_Not_Equal() {
    assert(u ⪯̸ x → x ≠ (x ∨ u))
  } →
  apply(Join_Not_Equal()) →
  
  conclude(x ⪯ y ∧ ⟨y,z⟩ ∈ R ∧ x ≠ y)
}