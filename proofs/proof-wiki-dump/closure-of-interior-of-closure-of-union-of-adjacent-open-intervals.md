theorem Adjacent_Intervals_Closure() {
  assert(
    ∀a,b,c ∈ ℝ ∧ (a < b < c) ∧
    let A = (a,b) ∪ (b,c) →
    (A^{-∘-} = A^{∘-} = A^- = [a,c])
  )
} ↔

proof Adjacent_Intervals_Closure() {
  setVar(a,b,c: ℝ) →
  assume(a < b < c) →
  let A = (a,b) ∪ (b,c) →
  
  lemma Interior_Union() {
    assert(A^∘ = A)
  } →

  lemma Closure_Union() {
    assert(A^- = [a,c])
  } →

  step1: {
    assert(A^{∘-} = A^-) by(Interior_Union()) →
    assert(A^{∘-} = [a,c]) by(Closure_Union())
  } →

  step2: {
    assert(A^{-∘} = (a,c)) by(Interior_Properties()) →
    assert(A^{-∘-} = [a,c]) by(Closure_Open_Ball())
  } →

  conclude(
    A^{-∘-} = A^{∘-} = A^- = [a,c]
  )
}