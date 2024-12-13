theorem Arctangent_Arcsine_Relation() {
  assert(
    ∀x ∈ ℝ ⇒ arctan(x) = arcsin(x/√(1 + x²))
  )
} ↔

proof Arctangent_Arcsine_Direct() {
  setVar(θ: ℝ) →
  assert(θ = arctan(x)) →
  assert(x = tan(θ)) →
  
  chain_equality() {
    arcsin(x/√(1 + x²)) →
    arcsin(tan(θ)/√(1 + tan²(θ))) →
    arcsin(tan(θ)/√(sec²(θ))) →
    arcsin(sin(θ)/(cos(θ) * (1/cos(θ)))) →
    arcsin(sin(θ)) →
    θ →
    arctan(x)
  }
} ↔

proof Arctangent_Arcsine_Hypergeometric() {
  lemma PfaffTransformation() {
    assert(
      F(a,b;c;x) = (1-x)^(-a) * F(a,c-b;c;x/(x-1))
    )
  } →
  
  chain_equality() {
    arctan(x) →
    x * F(1/2,1;3/2;-x²) →
    x * (1-(-x²))^(-1/2) * F(1/2,3/2-1;3/2;(-x²)/((-x²)-1)) →
    (x/√(1+x²)) * F(1/2,1/2;3/2;x²/(1+x²)) →
    arcsin(x/√(1+x²))
  }
}