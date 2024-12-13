theorem Abelian_Prime_Power_Product() {
  assert(
    ∀G: Group, ∃p: Prime, ∃n: ℕ ⇒ 
    (isAbelian(G) ∧ |G| = p^n) →
    ∃H₁,...,Hₖ: Subgroup ⇒ 
    (G ≅ H₁ × ... × Hₖ ∧ ∀i ∈ {1,...,k}: isCyclic(Hᵢ) ∧ |Hᵢ| = p^mᵢ)
  )
} ↔

proof Abelian_Prime_Power_Product() {
  setVar(G: Group) →
  setVar(p: Prime) →
  setVar(n: ℕ) →
  
  lemma Lagrange() {
    assert(
      ∀H ≤ G ⇒ |H| | |G|
    )
  } →
  
  lemma Base_Theorem() {
    assert(
      ∃K ≤ G ⇒ (G = ⟨a⟩ × K)
    )
  } →
  
  apply(Base_Theorem()) →
  assert(|K| = p^m for some m < n) →
  assert(⟨a⟩ is cyclic of prime-power order) →
  apply(induction on |G|) →
  assert(K satisfies induction hypothesis) →
  assert(G ≅ ⟨a⟩ × H₁ × ... × Hₖ where Hᵢ are cyclic of prime-power order)
}