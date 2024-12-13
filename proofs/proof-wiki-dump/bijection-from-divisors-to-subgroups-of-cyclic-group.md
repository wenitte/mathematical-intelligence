theorem BijectionDivisorsToSubgroups() {
  assert(
    ∀G: CyclicGroup ∧ |G| = n ∧ G = ⟨a⟩ ∧
    ∀S = {m ∈ ℤ₊ : m|n} ∧
    ∀T = {H ≤ G : H is a subgroup of G} ∧
    ∀ϕ: S → T where ϕ(m) = ⟨aⁿ/ᵐ⟩ ⇒
    ϕ is bijective
  )
} ↔

proof BijectionDivisorsToSubgroups() {
  setVar(G: CyclicGroup) →
  setVar(n: ℤ₊) →
  assert(|G| = n) →
  assert(G = ⟨a⟩) →
  
  lemma FiniteCyclicSubgroupUniqueness() {
    assert(
      ∀m ∈ S ⇒ 
      ∃!H ≤ G where |H| = m ∧
      H = ⟨aⁿ/ᵐ⟩
    )
  } →
  
  apply(FiniteCyclicSubgroupUniqueness()) →
  
  assert(
    ∀m₁,m₂ ∈ S: m₁ ≠ m₂ ⇒ ϕ(m₁) ≠ ϕ(m₂)
  ) →
  
  assert(
    ∀H ∈ T: ∃m ∈ S where ϕ(m) = H
  ) →
  
  conclude(
    ϕ is injective ∧ ϕ is surjective ⇒
    ϕ is bijective
  )
}