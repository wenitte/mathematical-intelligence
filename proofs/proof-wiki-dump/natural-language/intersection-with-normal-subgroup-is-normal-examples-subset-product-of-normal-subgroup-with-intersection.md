# 

Source: https://proofwiki.org/wiki/Intersection_with_Normal_Subgroup_is_Normal/Examples/Subset_Product_of_Normal_Subgroup_with_Intersection

Example of Use of Intersection with Normal Subgroup is Normal
Let $\struct G$ be a group whose identity is $e$.
Let $H_1, H_2$ be subgroups of $G$.
Let:

$N_1 \lhd H_1$
$N_2 \lhd H_2$
where $\lhd$ denotes the relation of being a normal subgroup.

Then:

$N_1 \paren {H_1 \cap N_2} \lhd N_1 \paren {H_1 \cap H_2}$


Proof
Consider arbitrary $x_n \in N_1, x_h \in H_1 \cap H_2$.
Thus:

$x_n x_h \in N_1 \paren {H_1 \cap H_2}$
Note that as $x_h \in H_1 \cap H_2$ it follows that $x_h \in H_1$.

We aim to show that:

$x_n x_h N_1 \paren {H_1 \cap N_2} \paren {x_n x_h}^{-1} \subseteq N_1 \paren {H_1 \cap H_2}$
thus demonstrating $N_1 \paren {H_1 \cap N_2} \lhd N_1 \paren {H_1 \cap H_2}$ by the Normal Subgroup Test.

We have:














\(\ds x_n x_h N_1 \paren {H_1 \cap N_2} \paren {x_n x_h}^{-1}\)

\(=\)







\(\ds x_n x_h N_1 \paren {H_1 \cap N_2} {x_h}^{-1} {x_n}^{-1}\)





Inverse of Group Product














\(\ds \)

\(=\)







\(\ds x_n x_h N_1 {x_h}^{-1} x_h \paren {H_1 \cap N_2} {x_h}^{-1} {x_n}^{-1}\)




















\(\ds \)

\(=\)







\(\ds x_n N_1 x_h \paren {H_1 \cap N_2} {x_h}^{-1} {x_n}^{-1}\)





as $N_1 \lhd H_1$














\(\ds \)

\(=\)







\(\ds x_n N_1 \paren {H_1 \cap N_2} {x_n}^{-1}\)





$H_1 \cap N_2$ is normal in $H_1$ from Intersection with Normal Subgroup is Normal














\(\ds \)

\(=\)







\(\ds N_1 \paren {H_1 \cap N_2} {x_n}^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {H_1 \cap N_2} N_1 {x_n}^{-1}\)





Subset Product of Subgroups














\(\ds \)

\(=\)







\(\ds \paren {H_1 \cap N_2} N_1\)




















\(\ds \)

\(=\)







\(\ds N_1 \paren {H_1 \cap N_2}\)





Subset Product of Subgroups



$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 46 \nu$




