# 

Source: https://proofwiki.org/wiki/Composition_of_Relations_Preserves_Subsets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $A, B, S, T$ be relations as subsets of Cartesian products.
Let $A \subseteq B$ and $S \subset T$.

Then:

$A \circ S \subseteq B \circ T$
Proof
We have:










\(\ds \forall \tuple{x, y}: \, \)



\(\ds \tuple{x, y} \in A \circ S\)

\(\leadsto\)







\(\ds \exists z : \tuple{x, z} \in S, \tuple{z, y} \in A\)





Definition of Composite Relation














\(\ds \)

\(\leadsto\)







\(\ds \exists z : \tuple{x, z} \in T, \tuple{z, y} \in B\)





Definition of Subset














\(\ds \)

\(\leadsto\)







\(\ds \tuple{x, y} \in B \circ T\)





Definition of Composite Relation



By definition of subset:

$A \circ S \subseteq B \circ T$
$\blacksquare$





