theorem CompactConvexSetHomeomorphism() {
  require(n: ℕ_{>0}) ∧
  require(T ⊆ ℝ^n) ∧
  require(isCompact(T)) ∧
  require(isConvex(T)) ∧
  require(interior(T) ≠ ∅) →
  assert(∃ h: homeomorphism(T, C∂T))
} ↔

proof CompactConvexSetHomeomorphism() {
  setVar(x₀ ∈ interior(T)) →
  define(φ: C∂T → T) {
    φ([e,x,t]_R) = tx + (1-t)x₀
  } →

  lemma WellDefined() {
    assert(∀(e,x,t), (e',x',t') ∈ R →
      [(t=t'=0 ∧ e=e') ∨
       (t=t' ∈ (0,1) ∧ (e,x)=(e',x')) ∨
       (t=t'=1 ∧ x=x')] →
      tx + (1-t)x₀ = t'x' + (1-t')x₀)
  } →

  lemma Bijective() {
    assert(∀y ∈ T) {
      case(y = x₀) {
        assert(φ([e,x,0]_R) = x₀)
      } →
      case(y ≠ x₀) {
        apply(RayBoundaryIntersection()) →
        assert(∃!t>0: x₀ + t(y-x₀) ∈ ∂T) →
        assert(1/t ∈ (0,1]) →
        assert(∃!x ∈ ∂T: φ([e,x,1/t]_R) = y)
      }
    }
  } →

  lemma Continuous() {
    assert(∀X=[e,x,t]_R ∈ C∂T, ∀ε>0) {
      case(t = 0) {
        apply(CompactBoundedness()) →
        define(δ = ε/sup{‖z-x₀‖: z∈∂T}) →
        assert(∀z∈∂T, s∈[0,δ): ‖φ([e,z,s]_R) - x₀‖ < ε)
      } →
      case(t > 0) {
        define(δ = ε/2) →
        define(δ' = ε/(2sup{‖z-x₀‖: z∈∂T})) →
        assert(φ(B_δ(X)) ⊆ B_ε(φ(X)))
      }
    }
  } →

  apply(ContinuousBijectionTheorem()) →
  assert(φ: homeomorphism(C∂T, T))
}