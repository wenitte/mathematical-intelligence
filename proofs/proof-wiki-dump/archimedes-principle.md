theorem Archimedes_Principle() {
  assert(
    ∀V[compact_body, piecewise_smooth_boundary] ∧
    ∀F[incompressible_fluid] ∧
    (V immersed_in F) ⇒
    ∃F_buoyant[force] : F_buoyant = weight(displaced_fluid(F, V))
  )
} ↔

proof Archimedes_Principle() {
  setVar(V: compact_body) →
  setVar(S = ∂V: boundary) →
  
  lemma Gauss_Theorem() {
    assert(
      ∀F[smooth_vector_field] ⇒
      ∮_S F·dS = ∫_V ∇·F dV
    )
  } →
  
  setVar(p = -ρgz + p_0) →
  setVar(F = -p·k) →
  
  assert(∇·F = ρg) →
  
  apply(Gauss_Theorem()) →
  assert(
    ∮_S F·dS = ∫_V ∇·F dV
  ) →
  
  assert(
    ∫_V ∇·F dV = ρg ∫_V dV
  ) →
  
  assert(
    ρg ∫_V dV = ρgV
  ) →
  
  assert(
    ρgV = weight(displaced_fluid(F, V))
  ) →
  
  conclude(
    F_buoyant = weight(displaced_fluid(F, V))
  )
}