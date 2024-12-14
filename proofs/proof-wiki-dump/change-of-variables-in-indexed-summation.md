theorem Change_Of_Variables_In_Indexed_Summation() {
  assert(
    (A ∈ {ℕ,ℤ,ℚ,ℝ,ℂ}) ∧
    (a,b,c,d ∈ ℤ) ∧
    (f: [a,b] → A) ∧
    (g: [c,d] → [a,b] is bijective) →
    (∑(i=a to b) f(i) = ∑(i=c to d) f(g(i)))
  )
} ↔

proof Change_Of_Variables_In_Indexed_Summation() {
  assert(g: [c,d] → [a,b] is bijective) →
  apply(Cardinality_Of_Integer_Interval) →
  assert(|[a,b]| = b - a + 1) ∧
  assert(|[c,d]| = d - c + 1) →
  assert(b - a + 1 = d - c + 1) →
  assert(c - a = d - b) →
  
  lemma Translation_Map() {
    setVar(T: [a,b] → [c,d]) →
    assert(T(k) = k + (c-a)) →
    assert(T is bijective)
  } →
  
  apply(Indexed_Summation_Over_Translated_Interval) →
  assert(∑(i=c to d) f(g(i)) = ∑(i=a to b) f(g(i + c - a))) →
  
  apply(Translation_Map) →
  assert(∑(i=a to b) f(g(i + c - a)) = ∑(i=a to b) f(g(T(i)))) →
  
  lemma Composition_Bijective() {
    assert(g∘T is permutation on [a,b])
  } →
  
  apply(Indexed_Summation_Does_Not_Change_Under_Permutation) →
  assert(∑(i=a to b) f(g(T(i))) = ∑(i=a to b) f(i))
}