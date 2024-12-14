theorem Geometric_Sequence_Conditions() {
  assert(
    ∀a,b,c ∈ ℤ ∧ 
    isGeometricSequence(⟨a,b,c⟩) ⇒
    (¬isCoprime(a,b) ∧ divides(a,b²))
  )
}

proof Geometric_Sequence_Conditions() {
  setVar(P: ⟨a,b,c⟩, geometric_sequence) →
  assert(isGeometricSequence(P) ⇔ (b/a = c/b)) →
  
  lemma No_Coprime_Proportional() {
    assert(
      isCoprime(a,b) ⇒ ¬∃c∈ℤ: b/a = c/b
    )
  } →
  
  apply(No_Coprime_Proportional()) →
  assert(¬isCoprime(a,b)) →
  
  lemma Geometric_Integer_Form() {
    assert(
      isGeometricSequence(P) ⇒
      ∃k,p,q∈ℤ: P = ⟨kp², kpq, kq²⟩
    )
  } →
  
  apply(Geometric_Integer_Form()) →
  setVar(k,p,q: ℤ) →
  assert(a = kp²) →
  assert(b = kpq) →
  assert(b² = k²p²q²) →
  assert(divides(kp², k²p²q²)) →
  assert(divides(a,b²))
}