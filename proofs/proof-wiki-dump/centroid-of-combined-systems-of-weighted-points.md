theorem Centroid_Combined_Systems() {
  assert(
    ∀O', S, T, W_S, W_T [
      (O' ∈ ℝⁿ ∧ pos_vector(O') = 𝐥) ∧
      (S = {A₁,...,Aₙ} ∧ T = {B₁,...,Bₘ}) ∧
      (W_S: S → ℝ ∧ W_T: T → ℝ) ∧
      (H = centroid(S, W_S) ∧ H' = centroid(T, W_T))
    ] ⇒
    centroid(S ∪ T, W_S ∪ W_T) = 
    centroid({H, H'}, {Σⁿᵢ₌₁W_S(Aᵢ), Σᵐᵢ₌₁W_T(Bᵢ)})
  )
} ↔

proof Centroid_Combined_Systems() {
  setVar(
    pos_vectors_S = {𝐚₁,...,𝐚ₙ},
    pos_vectors_T = {𝐛₁,...,𝐛ₘ}
  ) →
  
  lemma Centroid_H() {
    assert(
      𝐎H = (Σⁿᵢ₌₁W_S(Aᵢ)𝐚ᵢ)/(Σⁿᵢ₌₁W_S(Aᵢ))
    )
  } →
  
  lemma Centroid_H_Prime() {
    assert(
      𝐎H' = (Σᵐᵢ₌₁W_T(Bᵢ)𝐛ᵢ)/(Σᵐᵢ₌₁W_T(Bᵢ))
    )
  } →
  
  setVar(
    𝐎G = centroid({H,H'}, {Σⁿᵢ₌₁W_S(Aᵢ), Σᵐᵢ₌₁W_T(Bᵢ)})
  ) →
  
  assert(
    𝐎G = ((Σⁿᵢ₌₁W_S(Aᵢ))𝐎H + (Σᵐᵢ₌₁W_T(Bᵢ))𝐎H')/
          (Σⁿᵢ₌₁W_S(Aᵢ) + Σᵐᵢ₌₁W_T(Bᵢ))
  ) →
  
  apply(Centroid_H(), Centroid_H_Prime()) →
  
  assert(
    𝐎G = (Σⁿᵢ₌₁W_S(Aᵢ)𝐚ᵢ + Σᵐᵢ₌₁W_T(Bᵢ)𝐛ᵢ)/
          (Σⁿᵢ₌₁W_S(Aᵢ) + Σᵐᵢ₌₁W_T(Bᵢ))
  ) →
  
  conclude(
    𝐎G = centroid(S ∪ T, W_S ∪ W_T)
  )
}