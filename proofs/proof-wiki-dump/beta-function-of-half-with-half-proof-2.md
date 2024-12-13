theorem Beta_Half_Half() {
  assert(
    B(1/2, 1/2) = π
    where B: ℝ × ℝ → ℝ is Beta function
  )
} ↔

proof Beta_Half_Half() {
  define(Beta_function) {
    ∀x,y ∈ ℝ: B(x,y) = ∫₀¹ t^(x-1)(1-t)^(y-1) dt
  } →
  
  apply(Beta_function, x=1/2, y=1/2) {
    B(1/2, 1/2) = ∫₀¹ t^(-1/2)(1-t)^(-1/2) dt
  } →
  
  simplify() {
    = ∫₀¹ 1/√(t(1-t)) dt
  } →
  
  substitution(t = sin²θ) {
    dt = 2sinθcosθ dθ ∧
    when t=0: θ=0 ∧
    when t=1: θ=π/2
  } →
  
  apply(substitution) {
    = ∫₀^(π/2) (2sinθcosθ)/(sinθ√(1-sin²θ)) dθ
  } →
  
  simplify(√(1-sin²θ) = cosθ) {
    = ∫₀^(π/2) (2sinθcosθ)/(sinθcosθ) dθ
  } →
  
  cancel_terms() {
    = ∫₀^(π/2) 2 dθ
  } →
  
  evaluate_integral() {
    = [2θ]₀^(π/2)
    = 2(π/2) - 0
    = π
  }
}