theorem Similar_Solid_Numbers_Mean_Proportionals() {
  assert(
    ∀m,n ∈ ℤ⁺ [IsSimilarSolid(m,n)] ⇒
    ∃x,y ∈ ℤ⁺ [
      IsGeometricSequence(m,x,y,n) ∧
      HasTriplicateRatio(m,n)
    ]
  )
} ↔

proof Similar_Solid_Numbers_Mean_Proportionals() {
  setVar(m,n: ℤ⁺) →
  assume(IsSimilarSolid(m,n)) →
  
  assert(∃a,b,c,d,e,f ∈ ℤ⁺ [
    m = a×b×c ∧
    n = d×e×f ∧
    a≤b≤c ∧ d≤e≤f ∧
    a/d = b/e = c/f
  ]) →
  
  let(r := a×e = b×d = b×f = c×e) →
  
  lemma ProveFirstMeanProp() {
    assert(
      (a×b)/r = (a×b)/(a×e) = b/e ∧
      r/(d×e) = (b×d)/(d×e) = b/e
    ) →
    conclude(IsGeometricSequence(a×b, r, d×e))
  } →
  
  lemma ProveSecondMeanProp() {
    assert(
      (a×b×c)/(r×c) = (a×b×c)/(c×b×d) = a/d ∧
      (r×c)/(r×f) = (c×b×d)/(f×b×d) = c/f ∧
      (f×b×d)/(d×e×f) = (b×d)/(d×e) = b/e
    ) →
    conclude(IsGeometricSequence(a×b×c, b×c×d, b×d×f, d×e×f))
  } →
  
  assert(
    IsGeometricSequence(m, b×c×d, b×d×f, n) ∧
    a/d = b/e = c/f ⇒ HasTriplicateRatio(m,n)
  ) →
  
  conclude(∃x,y ∈ ℤ⁺ [
    IsGeometricSequence(m,x,y,n) ∧
    HasTriplicateRatio(m,n)
  ])
}