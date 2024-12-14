theorem Closure_Of_Intersection_Subset() {
  let(T: TopologicalSpace) →
  let(I: IndexingSet) →
  let(H: Family[I → P(T)]) →
  assert(
    cl(⋂[i∈I] H[i]) ⊆ ⋂[i∈I] cl(H[i])
  )
} ↔

proof Closure_Of_Intersection_Subset() {
  lemma Closed_Sets_Intersection() {
    ∀S ⊆ P(T): (∀s ∈ S: isClosed(s)) → isClosed(⋂S)
  } →
  
  assert(∀i ∈ I: isClosed(cl(H[i]))) →
  apply(Closed_Sets_Intersection()) →
  assert(isClosed(⋂[i∈I] cl(H[i]))) ∧
  
  assert(⋂[i∈I] H[i] ⊆ ⋂[i∈I] cl(H[i])) →
  
  lemma Closure_Properties() {
    ∀A,B ⊆ T: (A ⊆ B ∧ isClosed(B)) → cl(A) ⊆ B
  } →
  
  apply(Closure_Properties()) →
  assert(cl(⋂[i∈I] H[i]) ⊆ ⋂[i∈I] cl(H[i]))
}