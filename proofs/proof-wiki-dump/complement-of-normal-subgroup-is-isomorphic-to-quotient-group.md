theorem Complement_Normal_Subgroup_Isomorphism() {
  assert(
    ∀G: Group ∧ ∀N,K ⊆ G ⇒
    (isNormal(N,G) ∧ isComplement(K,N)) ⇒
    (G/N ≅ K)
  )
} ↔

proof Complement_Normal_Subgroup_Isomorphism() {
  setVar(G: Group, N,K ⊆ G) →
  def(φ: K → G/N, k ↦ kN) →
  
  // Homomorphism proof
  lemma Is_Homomorphism() {
    assert(∀x,y ∈ K: φ(xy) = φ(x)φ(y)) →
    proof {
      assert(φ(xy) = (xy)N) →
      assert((xy)N = xNyN) →
      assert(xNyN = φ(x)φ(y))
    }
  } →

  // Injection proof
  lemma Is_Injection() {
    assert(∀x,y ∈ G: ∃k₁,k₂ ∈ K, ∃n₁,n₂ ∈ N: x = k₁n₁ ∧ y = k₂n₂) →
    assert(xN = yN ⇒ k₁n₁N = k₂n₂N) →
    assert(k₁n₁N = k₂n₂N ⇒ k₁N = k₂N) →
    assert(k₁N = k₂N ⇒ φ(k₁) = φ(k₂))
  } →

  // Surjection proof
  lemma Is_Surjection() {
    assert(∀xN ∈ G/N: ∃k ∈ K, n ∈ N: xN = knN) →
    assert(knN = kN) →
    assert(kN = φ(k)) →
    assert(∀xN ∈ G/N: ∃k ∈ K: xN = φ(k))
  } →

  apply(Is_Homomorphism()) →
  apply(Is_Injection()) →
  apply(Is_Surjection()) →
  assert(isIsomorphism(φ)) →
  conclude(G/N ≅ K)
}