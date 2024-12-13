theorem Canonical_Injection_Is_Monomorphism() {
  let(S[i]: AlgebraicStructure, i ∈ [1..n]) →
  let(∘[i]: Operation(S[i]), i ∈ [1..n]) →
  let(e[i]: Identity(S[i], ∘[i]), i ∈ [1..n]) →
  let(inj[j]: Function(S[j] → ∏[i=1..n] S[i])) →
  assert(
    ∀x ∈ S[j] ⇒ inj[j](x) = (e[1], e[2], ..., e[j-1], x, e[j+1], ..., e[n]) ∧
    inj[j] is_a Monomorphism
  )
} ↔

proof Canonical_Injection_Is_Monomorphism() {
  ref(Canonical_Injection_Is_Injection) →
  assert(inj[j] is_injective) →
  
  // Prove morphism property
  let(x, y ∈ S[j]) →
  assert(
    inj[j](x ∘[j] y) 
    = (e[1], e[2], ..., e[j-1], x ∘[j] y, e[j+1], ..., e[n])
  ) →
  assert(
    = (e[1] ∘[1] e[1], e[2] ∘[2] e[2], ..., e[j-1] ∘[j-1] e[j-1], 
       x ∘[j] y, 
       e[j+1] ∘[j+1] e[j+1], ..., e[n] ∘[n] e[n])
  ) →
  assert(
    = (e[1], e[2], ..., e[j-1], x, e[j+1], ..., e[n]) ∘ 
      (e[1], e[2], ..., e[j-1], y, e[j+1], ..., e[n])
  ) →
  assert(
    = inj[j](x) ∘ inj[j](y)
  ) →
  
  // Conclusion
  assert(inj[j] is_injective ∧ inj[j] is_homomorphism) →
  conclude(inj[j] is_a Monomorphism)
}