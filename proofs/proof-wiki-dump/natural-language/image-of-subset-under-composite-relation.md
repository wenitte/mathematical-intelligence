# 

Source: https://proofwiki.org/wiki/Image_of_Subset_under_Composite_Relation


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\RR_1 \subseteq S_1 \times T_1$ and $\RR_2 \subseteq S_2 \times T_2$ be relations.
Let $\RR_2 \circ \RR_1 \subseteq S_1 \times T_2$ be the composition of $\RR_1$ and $\RR_2$.
Let $A \subseteq S_1$.

Then:

$\RR_2 \sqbrk {\RR_1 \sqbrk A \cap S_2} = \paren{\RR_2 \circ \RR_1} \sqbrk A$


Proof
We have:










\(\ds \forall z \in T_2: \, \)



\(\ds z \in \RR_2 \sqbrk {\RR_1 \sqbrk A \cap S_2}\)

\(\leadstoandfrom\)







\(\ds \exists y \in \RR_1 \sqbrk A \cap S_2 : \tuple{y, z} \in R_2\)





Definition of Image of Subset under Relation














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists y \in T_1 \cap S_2 : \exists x \in A : \tuple{x,y} \in R_1 : \tuple{y, z} \in R_2\)





Definition of Image of Subset under Relation














\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists x \in A : \exists y \in T_1 \cap S_2 : \tuple{x,y} \in R_1 : \tuple{y, z} \in R_2\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \exists x \in A : \tuple{x,z} \in R_2 \circ R_1\)





Definition of Composite Relation














\(\ds \)

\(\leadstoandfrom\)







\(\ds z \in \paren{R_2 \circ R_1} \sqbrk A\)





Definition of Image of Subset under Relation



$\blacksquare$

Also see
Image of Element under Composite Relation
Image of Subset under Composite Relation with Common Codomain and Domain
Image of Element under Composite Relation with Common Codomain and Domain




