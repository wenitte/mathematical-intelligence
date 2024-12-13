theorem Argument_Power_Rule() {
  assert(
    ∀z ∈ ℂ, ∀n ∈ ℕ_{>0} ⇒ arg(z^n) = n⋅arg(z)
  )
}

proof Argument_Power_Rule() {
  setVar(z: ℂ) →
  induction(n: ℕ_{>0}) {
    baseCase(n = 1) {
      assert(arg(z^1) = 1⋅arg(z))
    } →
    
    inductiveStep() {
      assume(arg(z^k) = k⋅arg(z)) →
      assert(arg(z^{k+1}) = arg(z⋅z^k)) →
      
      lemma Argument_Product_Rule() {
        assert(∀a,b ∈ ℂ ⇒ arg(a⋅b) = arg(a) + arg(b))
      } →
      
      apply(Argument_Product_Rule()) →
      assert(arg(z⋅z^k) = arg(z) + arg(z^k)) →
      assert(arg(z) + arg(z^k) = arg(z) + k⋅arg(z)) →
      assert(arg(z) + k⋅arg(z) = (k+1)⋅arg(z)) →
      conclude(arg(z^{k+1}) = (k+1)⋅arg(z))
    }
  }
}