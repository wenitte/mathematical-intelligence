theorem Chu_Vandermonde_Falling_Factorial() {
  assert(
    ∀r,s ∈ ℝ, ∀n ∈ ℤ≥0 ⇒
    ∑(k=0 to n) (ⁿCₖ × r↓ᵏ × s↓ⁿ⁻ᵏ) = (r + s)↓ⁿ
  )
} ↔

proof Chu_Vandermonde_Falling_Factorial() {
  setVar(r,s: ℝ, n: ℤ≥0) →
  
  lemma Expand_Terms() {
    assert(
      ∑(k=0 to n) (ⁿCₖ × r↓ᵏ × s↓ⁿ⁻ᵏ) =
      ∑(k=0 to n) ((n!/(k!(n-k)!)) × (r!/(r-k)!) × (s!/(s-(n-k))!))
    )
  } →
  
  lemma Convert_To_Binomial() {
    assert(
      ∑(k=0 to n) ((n!/(k!(n-k)!)) × (r!/(r-k)!) × (s!/(s-(n-k))!)) =
      n! × ∑(k=0 to n) (ʳCₖ × ˢCₙ₋ₖ)
    )
  } →
  
  lemma Apply_Chu_Vandermonde() {
    assert(
      n! × ∑(k=0 to n) (ʳCₖ × ˢCₙ₋ₖ) =
      n! × (ʳ⁺ˢCₙ)
    )
  } →
  
  lemma Expand_Final_Binomial() {
    assert(
      n! × (ʳ⁺ˢCₙ) =
      n! × ((r+s)!/(n!×(r+s-n)!))
    )
  } →
  
  conclude(
    n! × ((r+s)!/(n!×(r+s-n)!)) = (r + s)↓ⁿ
  )
}