theorem Composite_Relation_Isomorphisms() {
  let(S1, S2, S3: Structure)
  let(R1, R2, R3: Relation)
  let(φ: Isomorphism(S1,R1 → S2,R2))
  let(ψ: Isomorphism(S2,R2 → S3,R3))
  assert(
    ψ∘φ: Isomorphism(S1,R1 → S3,R3)
  )
} ↔

proof Composite_Relation_Isomorphisms() {
  lemma Bijection_Property() {
    assert(
      Isomorphism(A,B) → Bijection(A,B) ∧
      φ: Bijection(S1,S2) ∧ 
      ψ: Bijection(S2,S3) →
      ψ∘φ: Bijection(S1,S3)
    )
  } →
  
  assert(∀x ∈ S1: (ψ∘φ)(x) = ψ(φ(x))) →
  
  lemma Phi_Isomorphism() {
    assert(
      ∀x1,y1 ∈ S1: 
      x1 R1 y1 → φ(x1) R2 φ(y1)
    )
  } →
  
  lemma Psi_Isomorphism() {
    assert(
      ∀x2,y2 ∈ S2:
      x2 R2 y2 → ψ(x2) R3 ψ(y2)
    )
  } →
  
  substitute(x2 = φ(x1), y2 = φ(y1)) →
  assert(
    ∀x1,y1 ∈ S1:
    x1 R1 y1 → ψ(φ(x1)) R3 ψ(φ(y1))
  ) →
  
  lemma Inverse_Property() {
    assert(
      ∀x3,y3 ∈ S3:
      x3 R3 y3 → 
      φ⁻¹(ψ⁻¹(x3)) R1 φ⁻¹(ψ⁻¹(y3))
    )
  } →
  
  apply(Bijection_Property()) ∧
  apply(Forward_Preservation()) ∧
  apply(Inverse_Property()) →
  assert(ψ∘φ: Isomorphism(S1,R1 → S3,R3))
}