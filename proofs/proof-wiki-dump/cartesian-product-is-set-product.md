theorem Cartesian_Product_Is_Set_Product() {
  assert(
    ∀S,T: Set ∧ 
    let(S×T: CartesianProduct(S,T)) ∧
    let(pr₁: S×T → S) ∧ 
    let(pr₂: S×T → T) ⇒
    IsSetProduct(⟨S×T, pr₁, pr₂⟩)
  )
} ↔

proof Cartesian_Product_Is_Set_Product() {
  setVar(X: Set) →
  setVar(f₁: X → S) →
  setVar(f₂: X → T) →
  
  define(h: X → S×T) {
    ∀x ∈ X: h(x) = ⟨f₁(x), f₂(x)⟩
  } →
  
  assert(
    ∀x ∈ X: (
      (pr₁ ∘ h)(x) = pr₁(⟨f₁(x), f₂(x)⟩) = f₁(x) ∧
      (pr₂ ∘ h)(x) = pr₂(⟨f₁(x), f₂(x)⟩) = f₂(x)
    )
  ) →
  
  assert(pr₁ ∘ h = f₁ ∧ pr₂ ∘ h = f₂) →
  
  lemma Uniqueness() {
    assume(∃k: X → S×T | pr₁ ∘ k = f₁ ∧ pr₂ ∘ k = f₂) →
    setVar(x ∈ X) →
    let(k(x) = ⟨s,t⟩) →
    assert(
      f₁(x) = (pr₁ ∘ k)(x) = pr₁(⟨s,t⟩) = s ∧
      f₂(x) = (pr₂ ∘ k)(x) = pr₂(⟨s,t⟩) = t
    ) →
    assert(k(x) = ⟨s,t⟩ = ⟨f₁(x), f₂(x)⟩ = h(x)) →
    conclude(k = h)
  } →
  
  apply(Uniqueness()) →
  assert(IsSetProduct(⟨S×T, pr₁, pr₂⟩))
}