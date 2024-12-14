theorem Well_Orderable_Injection_Subclass() {
  assert(
    ∀B[isWellOrderable(B) ∧
    ∃A,C,f[C ⊆ B ∧ isInjection(f: A → C)]] ⇒
    isWellOrderable(A)
  )
} ↔

proof Well_Orderable_Injection_Subclass() {
  setVar(B: Class, A: Class, C: Class, f: Function) →
  assert(∃ℜ[isWellOrdering(ℜ, B)]) →
  setVar(F: Function, F = f) →
  define(⪯: Relation, ∀x,y ∈ A[x ⪯ y ↔ ⟨F(x),F(y)⟩ ∈ ℜ]) →
  
  lemma Image_Well_Ordered() {
    assert(isWellOrdered(Im(F), ℜ))
  } →
  
  assert(isWellOrdering(ℜ, B) → 
    [isReflexive(ℜ, B) ∧ 
     isTransitive(ℜ, B) ∧ 
     isAntisymmetric(ℜ, B) ∧ 
     isTotal(ℜ, B)]) →
  
  proof_reflexive() {
    assert(∀a ∈ A[⟨F(a),F(a)⟩ ∈ ℜ]) →
    assert(∀a ∈ A[a ⪯ a]) →
    assert(isReflexive(⪯, A))
  } →
  
  proof_transitive() {
    assert(∀a,b,c ∈ A[
      (a ⪯ b ∧ b ⪯ c) →
      (⟨F(a),F(b)⟩ ∈ ℜ ∧ ⟨F(b),F(c)⟩ ∈ ℜ) →
      ⟨F(a),F(c)⟩ ∈ ℜ →
      a ⪯ c
    ]) →
    assert(isTransitive(⪯, A))
  } →
  
  proof_antisymmetric() {
    assert(∀a,b ∈ A[
      (a ⪯ b ∧ b ⪯ a) →
      (⟨F(a),F(b)⟩ ∈ ℜ ∧ ⟨F(b),F(a)⟩ ∈ ℜ) →
      F(a) = F(b) →
      a = b
    ]) →
    assert(isAntisymmetric(⪯, A))
  } →
  
  proof_total() {
    assert(∀a,b ∈ A[
      (⟨F(a),F(b)⟩ ∈ ℜ ∨ ⟨F(b),F(a)⟩ ∈ ℜ) →
      (a ⪯ b ∨ b ⪯ a)
    ]) →
    assert(isTotal(⪯, A))
  } →
  
  proof_well_ordering() {
    assert(∀S ⊆ A[S ≠ ∅ → 
      ∃S'[S' = {F(x) | x ∈ S} ∧ S' ⊆ B] →
      ∃m[m ∈ S' ∧ ∀y ∈ S'[⟨m,y⟩ ∈ ℜ]] →
      ∃b ∈ S[F(b) = m ∧ ∀x ∈ S[b ⪯ x]]
    ]) →
    assert(isWellOrdering(⪯, A))
  } →
  
  assert(isWellOrderable(A))
}