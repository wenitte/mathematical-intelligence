theorem Atomic_Electric_Field() {
  let(B: Matter, P: Point, r: Vector) →
  assert(P ∈ B) ∧
  assert(Position(P) = r) →
  assert(
    E_atomic(r) = (1/(4π*ε₀)) * ∫_all_space ((r - r')*ρ_atomic(r'))/(|r - r'|³) dV'
  )
  where(
    dV': InfinitesimalVolume,
    r': PositionVector,
    ρ_atomic(r'): AtomicChargeDensity,
    ε₀: VacuumPermittivity
  )
} ↔

proof Atomic_Electric_Field() {
  lemma Point_Charge_Field() {
    assert(
      E(r) = (1/(4π*ε₀)) * Σᵢ ((r - rᵢ)*qᵢ)/(|r - rᵢ|³)
    )
    where(
      rᵢ: PositionVectors,
      qᵢ: PointCharges
    )
  } →
  
  setVar(dV': InfinitesimalVolume) →
  assert(
    E_atomic(r') = (1/(4π*ε₀)) * ((r - r')*dq)/(|r - r'|³)
  ) →
  
  lemma Charge_Density_Definition() {
    assert(
      ρ_atomic(r') = dq/dV'
    )
  } →
  
  apply(Charge_Density_Definition()) →
  assert(
    E_atomic(r') = (1/(4π*ε₀)) * ((r - r')*ρ_atomic(r'))/(|r - r'|³) * dV'
  ) →
  
  integrate(over: "all_space") →
  assert(
    E_atomic(r) = (1/(4π*ε₀)) * ∫_all_space ((r - r')*ρ_atomic(r'))/(|r - r'|³) dV'
  )
}