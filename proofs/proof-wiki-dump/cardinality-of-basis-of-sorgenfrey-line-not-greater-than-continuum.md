theorem Sorgenfrey_Line_Basis_Cardinality() {
  let(T = ⟨ℝ,τ⟩) ∧
  let(𝔅 = {[x,y): x,y ∈ ℝ ∧ x < y}) ∧
  assert(card(𝔅) ≤ 𝔠) where(𝔠 = card(ℝ))
} ↔

proof Sorgenfrey_Line_Basis_Cardinality() {
  define(f: 𝔅 → ℝ×ℝ) →
  assert(∀I ∈ 𝔅: f(I) = ⟨min(I), sup(I)⟩) →
  assert(∀x,y ∈ ℝ: x < y ⇒ f([x,y)) = ⟨x,y⟩) →
  
  lemma Injection_Proof() {
    let(I₁,I₂ ∈ 𝔅) →
    assume(f(I₁) = f(I₂)) →
    assert(I₁ = [min(I₁),sup(I₁))) by(Definition_HalfOpenInterval) →
    assert([min(I₁),sup(I₁)) = [min(I₂),sup(I₂))) by(f(I₁) = f(I₂)) →
    assert([min(I₂),sup(I₂)) = I₂) by(Definition_HalfOpenInterval) →
    conclude(I₁ = I₂)
  } →
  
  apply(Injection_Proof()) →
  assert(f is_injection) →
  apply(Injection_Cardinal_Inequality) →
  assert(card(𝔅) ≤ card(ℝ×ℝ)) →
  apply(Cardinal_Product_Equal_Maximum) →
  assert(card(ℝ×ℝ) = max(𝔠,𝔠)) →
  assert(card(𝔅) ≤ 𝔠)
}