theorem Partition_Congruence() {
  assert(
    ∀S,∘(isMonoid(S,∘) ∧ ¬isGroup(S,∘)) ∧
    ∀H⊆S(isSubgroup(H,∘)) ∧
    let N = {x∈S | ¬isInvertible(x)} ∧
    let R = equivalenceRelation({N,H}) ∧
    (isCancellable(∘) ∨ isCommutative(∘)) →
    (isCongruenceRelation(R,∘) ∧ 
     isIsomorphic(⟨S/R,∘_R⟩, ⟨ℤ₂,×₂⟩))
  )
}

proof Partition_Congruence() {
  setMonoid(S,∘,e) →
  setSubgroup(H,∘) →
  setVar(N = {x∈S | ¬isInvertible(x)}) →
  setVar(R = equivalenceRelation({N,H})) →

  lemma ClosureProperties() {
    assert(
      ∀h₁,h₂∈H(h₁∘h₂ ∈ H) ∧
      ∀h₁∈H,n₁∈N(h₁∘n₁ ∈ N) ∧
      ∀n₁∈N,h₁∈H(n₁∘h₁ ∈ N) ∧
      ∀n₁,n₂∈N(n₁∘n₂ ∈ N)
    )
  } →

  proof ClosureProperties() {
    assume(h₁,h₂∈H) → assert(h₁∘h₂∈H) →
    
    proofByContradiction(h₁∘n₁∈H) {
      assert(h₁⁻¹∈H) →
      assert(h₁⁻¹∘(h₁∘n₁) = n₁ ∈ H) →
      contradiction()
    } →

    proofByContradiction(n₁∘n₂∈H) {
      assert(∃h∈H: h∘(n₁∘n₂) = (n₁∘n₂)∘h = e) →
      if(isCancellable(∘)) {
        assert(e = n₂∘h∘n₁)
      } →
      if(isCommutative(∘)) {
        assert((n₂∘h)∘n₁ = n₁∘(n₂∘h) = e)
      } →
      contradiction()
    }
  } →

  lemma CongruenceRelation() {
    assert(
      ∀x₁,x₂,y₁,y₂∈S(
        (x₁Ry₁ ∧ x₂Ry₂) → ((x₁∘y₁)R(x₂∘y₂))
      )
    )
  } →

  lemma Isomorphism() {
    setMap(φ: S/R → ℤ₂) →
    assert(φ(N) = 0 ∧ φ(H) = 1) →
    assert(isBijective(φ)) →
    assert(
      φ(H∘_RH) = φ(H)×₂φ(H) ∧
      φ(H∘_RN) = φ(H)×₂φ(N) ∧
      φ(N∘_RH) = φ(N)×₂φ(H) ∧
      φ(N∘_RN) = φ(N)×₂φ(N)
    )
  } →

  apply(ClosureProperties()) →
  apply(CongruenceRelation()) →
  apply(Isomorphism()) →
  assert(isCongruenceRelation(R,∘) ∧ isIsomorphic(⟨S/R,∘_R⟩, ⟨ℤ₂,×₂⟩))
}