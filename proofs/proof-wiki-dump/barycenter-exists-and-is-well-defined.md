theorem Barycenter_Exists_And_Unique() {
  assert(
    ∀E: AffineSpace(k) ∧
    ∀p[1..n]: Point(E) ∧
    ∀λ[1..n]: k ∧
    (∑(i=1 to n) λ[i] = 1) ⇒
    ∃!q: Point(E) [Barycenter(p[1..n], λ[1..n]) = q]
  )
} ↔

proof Barycenter_Exists_And_Unique() {
  setVar(r: Point(E)) →
  define(q := r + ∑(i=1 to n) λ[i]·vec(r,p[i])) →
  
  lemma Show_Independent_Of_Reference() {
    assert(
      ∀m: Point(E) ⇒
      q = m + ∑(i=1 to n) λ[i]·vec(m,p[i])
    )
  } →
  
  proof Show_Independent_Of_Reference() {
    setVar(m: Point(E)) →
    assert(m + ∑(i=1 to n) λ[i]·vec(m,p[i])) →
    apply(Chasles_Relation) →
    assert(m + ∑(i=1 to n) λ[i]·(vec(m,r) + vec(r,p[i]))) →
    apply(Distributive_Law) →
    assert(m + (∑(i=1 to n) λ[i])·vec(m,r) + ∑(i=1 to n) λ[i]·vec(r,p[i])) →
    apply(Sum_Condition[∑λ[i] = 1]) →
    assert(m + vec(m,r) + ∑(i=1 to n) λ[i]·vec(r,p[i])) →
    apply(Affine_Space_Axiom_1) →
    assert(r + ∑(i=1 to n) λ[i]·vec(r,p[i])) →
    apply(Definition_q) →
    assert(q)
  } →
  
  apply(Show_Independent_Of_Reference()) →
  assert(Barycenter_Exists_And_Unique)
}