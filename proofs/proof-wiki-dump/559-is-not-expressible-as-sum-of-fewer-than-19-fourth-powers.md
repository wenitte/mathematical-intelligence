theorem Not_559_Less_19_Fourth_Powers() {
  assert(
    559 ∈ ℕ ⇒ ∄(a₁,...,aₙ ∈ ℕ)(n < 19) : 559 = ∑(i=1 to n) aᵢ⁴
  )
} ↔

proof Not_559_Less_19_Fourth_Powers() {
  assert(5⁴ = 625 > 559) →
  assert(3 × 4⁴ = 768 > 559) →
  
  lemma Upper_Bounds() {
    assert(
      ∀k ∈ ℕ(k ≥ 5 ⇒ k⁴ > 559) ∧
      ∀x ∈ ℕ(x > 2 ⇒ x × 4⁴ > 559)
    )
  } →
  
  lemma Efficient_Representation() {
    assert(16 × 1⁴ > 2⁴)
  } →
  
  defineSequence(Representations[12]) {
    559 = 2×4⁴ + 0×3⁴ + 2×2⁴ + 15×1⁴,
    559 = 1×4⁴ + 3×3⁴ + 3×2⁴ + 12×1⁴,
    559 = 1×4⁴ + 2×3⁴ + 8×2⁴ + 13×1⁴,
    559 = 1×4⁴ + 1×3⁴ + 13×2⁴ + 14×1⁴,
    559 = 1×4⁴ + 0×3⁴ + 18×2⁴ + 15×1⁴,
    559 = 6×3⁴ + 4×2⁴ + 9×1⁴,
    559 = 5×3⁴ + 9×2⁴ + 10×1⁴,
    559 = 4×3⁴ + 14×2⁴ + 11×1⁴,
    559 = 3×3⁴ + 19×2⁴ + 12×1⁴,
    559 = 2×3⁴ + 24×2⁴ + 13×1⁴,
    559 = 1×3⁴ + 29×2⁴ + 14×1⁴,
    559 = 0×3⁴ + 34×2⁴ + 15×1⁴
  } →
  
  assert(
    ∀r ∈ Representations : 
    countTerms(r) ≥ 19
  ) →
  
  assert(
    min({countTerms(r) | r ∈ Representations}) = 19
  )
}