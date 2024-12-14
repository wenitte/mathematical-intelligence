theorem Central_Field_Is_Field_Of_Functional() {
  let(y: Vector[N]) →
  let(J: Functional) →
  assert(
    J[y] = ∫[a→b] F(x, y, y') dx ∧
    y'(x) = ψ(x, y) is_central_field
  ) →
  prove(is_field_of_functional(y'(x), J))
} ↔

proof Central_Field_Is_Field_Of_Functional() {
  define(g: Function) →
  assert(
    g(x,y) = ∫[c→(x,y)] F(x, ŷ, ŷ') dx
    where ŷ is_extremal_of(J) connecting(c, (x,y))
  ) →
  
  define(p: Momentum) →
  assert(p(x,y,y') = ∂g/∂y(x,y)) →
  
  lemma Geodetic_Distance() {
    assert(g is_geodetic_distance) →
    assert(∂g/∂y independent_of(y')) →
    conclude(∂g/∂y(x,y) = p(x,y,z(x,y)))
  } →
  
  apply(Hamilton_Jacobi_Equation) →
  assert(
    ∂g/∂x + H(x,y,∂g/∂y(x,y)) = 0
  ) →
  
  derive_system(
    ∂g/∂x + H(x,y,p(x,y,z(x,y))) = 0 ∧
    z(x,y) = y'(x)
  ) →
  
  differentiate_wrt(y) →
  derive_system(
    ∂p/∂x = -∂H/∂y ∧
    z(x,y) = y'(x)
  ) →
  
  apply(Euler_Canonical_Equations) →
  conclude(field_directions_match_functional(y'(x), J))
}