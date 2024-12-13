theorem Absolute_Value_Is_Convex() {
  assert(
    let f: ℝ → ℝ, where f(x) = |x| ⇒
    f is convex
  )
} ↔

proof Absolute_Value_Is_Convex() {
  setVar(x, y: ℝ) →
  setVar(α, β: ℝ_≥0, where α + β = 1) →
  
  assert(f(αx + βy) = |αx + βy|) by def(f) →
  
  assert(|αx + βy| ≤ |αx| + |βy|) by theorem(Triangle_Inequality) →
  
  assert(|αx| + |βy| = |α||x| + |β||y|) 
    by theorem(Absolute_Value_Multiplicative) →
  
  assert(|α||x| + |β||y| = α|x| + β|y|) 
    by def(Absolute_Value, where α,β ≥ 0) →
    
  assert(α|x| + β|y| = αf(x) + βf(y)) by def(f) →
  
  conclude(
    f(αx + βy) ≤ αf(x) + βf(y) ⇒
    f is convex by def(Convex_Function)
  )
}