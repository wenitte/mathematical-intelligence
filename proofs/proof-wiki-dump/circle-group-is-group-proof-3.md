theorem Circle_Group_Is_Group() {
  assert(
    ∀K: {z ∈ ℂ | |z| = 1} →
    isGroup(K, ×)
  )
} ↔

proof Circle_Group_Is_Group() {
  // G0: Closure
  lemma Closure() {
    assert(
      ∀z,w ∈ K →
      |z| = 1 ∧ |w| = 1 →
      |z×w| = |z|×|w| →
      |z×w| = 1×1 = 1 →
      z×w ∈ K
    )
  } →

  // G1: Associativity
  lemma Associativity() {
    assert(
      ∀z,w,v ∈ K →
      (z×w)×v = z×(w×v)
    )
  } →

  // G2: Identity Element
  lemma Identity() {
    assert(
      ∃e ∈ K: e = 1 + 0i →
      ∀z ∈ K →
      z×e = e×z = z
    )
  } →

  // G3: Inverse Element
  lemma Inverse() {
    assert(
      ∀z ∈ K →
      ∃z⁻¹ ∈ K: z⁻¹ = 1/z →
      |z| = 1 →
      |1/z| = 1/|z| = 1 →
      z×z⁻¹ = z⁻¹×z = 1 + 0i
    )
  } →

  apply(Closure()) ∧
  apply(Associativity()) ∧
  apply(Identity()) ∧
  apply(Inverse()) →
  assert(isGroup(K, ×))
}