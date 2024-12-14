theorem Linear_Function_Composition() {
  assert(
    ∀a,b,c,d ∈ ℝ ∧
    ∀x ∈ ℝ ∧
    let θ_{a,b}: ℝ → ℝ ∧
    θ_{a,b}(x) = ax + b ∧
    θ_{c,d}(x) = cx + d ⇒
    θ_{c,d} ∘ θ_{a,b} = θ_{ac,bc+d}
  )
} ↔

proof Linear_Function_Composition() {
  setVar(a,b,c,d: ℝ) →
  setVar(x: ℝ) →
  assert(∀x: (θ_{c,d} ∘ θ_{a,b})(x) = θ_{c,d}(θ_{a,b}(x))) →
  assert(θ_{a,b}(x) = ax + b) →
  assert(θ_{c,d}(θ_{a,b}(x)) = θ_{c,d}(ax + b)) →
  assert(θ_{c,d}(ax + b) = c(ax + b) + d) →
  assert(c(ax + b) + d = (ac)x + (bc + d)) →
  assert((ac)x + (bc + d) = θ_{ac,bc+d}(x)) →
  conclude(θ_{c,d} ∘ θ_{a,b} = θ_{ac,bc+d})
}