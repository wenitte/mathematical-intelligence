theorem CartesianProduct_IsSetProduct() {
  let(I: Set, {Sᵢ}ᵢ∈I: FamilyOfSets) →
  let(∀i∈I, prᵢ: (∏ⱼ∈I Sⱼ) → Sᵢ) →
  assert(
    ⟨∏ⱼ∈I Sⱼ, {prᵢ}ᵢ∈I⟩ isSetProduct
  )
}

proof CartesianProduct_IsSetProduct() {
  let(i ∈ I) →
  let(X: Set) →
  let({fᵢ: X → Sᵢ}ᵢ∈I: FamilyOfMappings) →
  
  define(h: X → ∏ⱼ∈I Sⱼ) {
    ∀x∈X: h(x) = {fᵢ(x)}ᵢ∈I
  } →
  
  assert(∀x∈X, ∀i∈I: (prᵢ ∘ h)(x) = prᵢ({fᵢ(x)}ᵢ∈I) = fᵢ(x)) →
  conclude(prᵢ ∘ h = fᵢ) →
  
  lemma Uniqueness() {
    let(k: X → ∏ⱼ∈I Sⱼ) →
    assume(∀i∈I: prᵢ ∘ k = fᵢ) →
    let(x ∈ X) →
    let(k(x) = {sⱼ}ⱼ∈I ∈ ∏ⱼ∈I Sⱼ) →
    
    assert(fᵢ(x) = (prᵢ ∘ k)(x) = prᵢ({sⱼ}ⱼ∈I) = sᵢ) →
    conclude(k(x) = {sⱼ}ⱼ∈I = {fᵢ(x)}ᵢ∈I = h(x)) →
    conclude(k = h)
  } →
  
  apply(Uniqueness()) →
  conclude(h isUnique) →
  conclude(⟨∏ⱼ∈I Sⱼ, {prᵢ}ᵢ∈I⟩ isSetProduct)
}