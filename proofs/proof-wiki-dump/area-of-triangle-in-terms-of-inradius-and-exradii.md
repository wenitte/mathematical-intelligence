theorem TriangleArea_InradiusExradii() {
  assert(
    ∀triangle(ABC) ∧ 
    let(sides: {a,b,c}) ∧
    let(vertices: {A,B,C}) ∧
    let(r: inradius) ∧
    let(ρₐ,ρᵦ,ρ_c: exradii) ⇒
    area(ABC) = √(r·ρₐ·ρᵦ·ρ_c)
  )
}

proof TriangleArea_InradiusExradii() {
  let(𝒜: area(ABC)) →
  let(s: semiperimeter) →
  
  assert(𝒜 = ρₐ(s-a)) by(AreaByExradius) →
  assert(𝒜 = ρᵦ(s-b)) by(AreaByExradius) →
  assert(𝒜 = ρ_c(s-c)) by(AreaByExradius) →
  assert(𝒜 = r·s) by(AreaByInradius) →
  
  apply(multiplication) {
    𝒜⁴ = ρₐ(s-a)·ρᵦ(s-b)·ρ_c(s-c)·r·s
  } →
  
  apply(rearrange) {
    𝒜⁴ = s(s-a)(s-b)(s-c)·r·ρₐ·ρᵦ·ρ_c
  } →
  
  apply(HeronFormula) {
    𝒜⁴ = 𝒜²·r·ρₐ·ρᵦ·ρ_c
  } →
  
  apply(cancelation) {
    𝒜² = r·ρₐ·ρᵦ·ρ_c
  } →
  
  apply(squareRoot) {
    𝒜 = √(r·ρₐ·ρᵦ·ρ_c)
  }
}