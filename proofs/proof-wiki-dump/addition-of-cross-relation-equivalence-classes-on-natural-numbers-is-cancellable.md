theorem CrossRelation_Equivalence_Cancellable() {
  let(ℕ: Semigroup, +: Operation)
  let((ℕ × ℕ, ⊕): DirectProduct(ℕ, +))
  let(⊠: CrossRelation(ℕ × ℕ))
  assert(
    ∀a,b,c₁,d₁,c₂,d₂ ∈ ℕ ⇒
    (([a,b]⊠ ⊕ [c₁,d₁]⊠ = [a,b]⊠ ⊕ [c₂,d₂]⊠) → ([c₁,d₁]⊠ = [c₂,d₂]⊠)) ∧
    (([c₁,d₁]⊠ ⊕ [a,b]⊠ = [c₂,d₂]⊠ ⊕ [a,b]⊠) → ([c₁,d₁]⊠ = [c₂,d₂]⊠))
  )
} ↔

proof CrossRelation_Equivalence_Cancellable() {
  setVar(a,b,c₁,d₁,c₂,d₂: ℕ) →
  assume([a,b]⊠ ⊕ [c₁,d₁]⊠ = [a,b]⊠ ⊕ [c₂,d₂]⊠) →
  
  lemma Addition_Property() {
    assert([b,a]⊠ ⊕ ([a,b]⊠ ⊕ [c₁,d₁]⊠) = [b,a]⊠ ⊕ ([a,b]⊠ ⊕ [c₂,d₂]⊠))
  } →
  
  apply(Addition_Associative()) →
  assert(([b,a]⊠ ⊕ [a,b]⊠) ⊕ [c₁,d₁]⊠ = ([b,a]⊠ ⊕ [a,b]⊠) ⊕ [c₂,d₂]⊠) →
  
  lemma Identity_Element() {
    assert([b,a]⊠ ⊕ [a,b]⊠ = [a+b,a+b]⊠)
  } →
  
  apply(Identity_Element()) →
  assert([a+b,a+b]⊠ ⊕ [c₁,d₁]⊠ = [a+b,a+b]⊠ ⊕ [c₂,d₂]⊠) →
  
  apply(Identity_Addition_CrossRelation()) →
  assert([c₁,d₁]⊠ = [c₂,d₂]⊠)
}