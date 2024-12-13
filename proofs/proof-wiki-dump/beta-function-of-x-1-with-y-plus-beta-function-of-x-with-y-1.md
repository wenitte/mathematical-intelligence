theorem Beta_Function_Sum() {
  assert(
    ∀x,y ∈ ℝ ⇒ 
    β(x+1,y) + β(x,y+1) = β(x,y)
  )
} ↔

proof Beta_Function_Sum() {
  setVar(x,y: ℝ) →
  
  lemma BetaDefinition() {
    assert(
      β(x,y) = ∫₀¹ t^(x-1) (1-t)^(y-1) dt
    )
  } →

  apply(BetaDefinition()) →
  assert(
    β(x+1,y) + β(x,y+1) = 
    ∫₀¹ t^x (1-t)^(y-1) dt + ∫₀¹ t^(x-1) (1-t)^y dt
  ) →

  assert(
    = ∫₀¹ [t^x (1-t)^(y-1) + t^(x-1) (1-t)^y] dt
  ) →

  assert(
    = ∫₀¹ t^(x-1) (1-t)^(y-1) [t + (1-t)] dt
  ) →

  assert(
    = ∫₀¹ t^(x-1) (1-t)^(y-1) dt
  ) →

  apply(BetaDefinition()) →
  assert(
    = β(x,y)
  )
}