# 

Source: https://proofwiki.org/wiki/Image_of_Element_under_Cartesian_Product_of_Subsets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ and $T$ be sets.
Let $A \subseteq S$ and $B \subseteq T$.
Let $\RR$ be the relation defined by the Cartesian product $A \times B$.

Then:

$\forall x \in A: \map \RR x = B$
Proof
We have:










\(\ds \forall x \in A: \, \)



\(\ds \map \RR s\)

\(=\)







\(\ds \set {t \in T: \tuple {s, t} \in \RR}\)





Definition of Image of Element under Relation














\(\ds \)

\(=\)







\(\ds \set {t \in T: \tuple {s, t} \in A \times B}\)





Definition of $\RR$














\(\ds \)

\(=\)







\(\ds \set {t \in T: s \in A, t \in B}\)





Definition of Cartesian Product














\(\ds \)

\(=\)







\(\ds \set {t \in T: t \in B}\)





as $s \in A$














\(\ds \)

\(=\)







\(\ds B\)





as $B \subseteq T$



$\blacksquare$





