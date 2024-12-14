theorem CompositionCommutativeCondition() {
  assert(
    ∀a,b,c,d ∈ ℝ, ∀x ∈ ℝ,
    let θ_{a,b}(x) = ax + b,
    let θ_{c,d}(x) = cx + d
    ⇒
    (θ_{c,d} ∘ θ_{a,b} = θ_{a,b} ∘ θ_{c,d}) ↔ (bc + d = ad + b)
  )
}

proof CompositionCommutativeCondition() {
  setVar(a,b,c,d,x: ℝ) →
  
  assert(θ_{c,d} ∘ θ_{a,b}(x) = θ_{c,d}(ax + b)) →
  assert(θ_{c,d} ∘ θ_{a,b}(x) = c(ax + b) + d) →
  assert(θ_{c,d} ∘ θ_{a,b}(x) = acx + bc + d) →
  assert(θ_{c,d} ∘ θ_{a,b} = θ_{ac,bc+d}) →

  assert(θ_{a,b} ∘ θ_{c,d}(x) = θ_{a,b}(cx + d)) →
  assert(θ_{a,b} ∘ θ_{c,d}(x) = a(cx + d) + b) →
  assert(θ_{a,b} ∘ θ_{c,d}(x) = acx + ad + b) →
  assert(θ_{a,b} ∘ θ_{c,d} = θ_{ac,ad+b}) →

  assert(θ_{ac,bc+d} = θ_{ac,ad+b}) →
  assert(bc + d = ad + b)
}