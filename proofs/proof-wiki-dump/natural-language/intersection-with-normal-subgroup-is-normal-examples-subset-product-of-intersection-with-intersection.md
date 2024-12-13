# 

Source: https://proofwiki.org/wiki/Intersection_with_Normal_Subgroup_is_Normal/Examples/Subset_Product_of_Intersection_with_Intersection

Example of Use of Intersection with Normal Subgroup is Normal
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $H_1, H_2$ be subgroups of $G$.
Let:

$N_1 \lhd H_1$
$N_2 \lhd H_2$
where $\lhd$ denotes the relation of being a normal subgroup.

Then:

$\paren {H_1 \cap N_2} \paren {H_2 \cap N_1} \lhd \paren {H_1 \cap H_2}$


Proof
Consider arbitrary $x_h \in H_1 \cap H_2$.
By definition of set intersection, it follows that:

$x_h \in H_1 \land x_h \in H_2$

We aim to show that:

$x_h \paren {H_1 \cap N_2} \paren {H_2 \cap N_1} x_h^{-1} = \paren {H_1 \cap N_2} \paren {H_2 \cap N_1}$
thus demonstrating:

$\paren {H_1 \cap N_2} \paren {H_2 \cap N_1} \lhd \paren {H_1 \cap H_2}$
by the Normal Subgroup Test.

First note that from Intersection with Normal Subgroup is Normal:

$H_1 \cap N_2 \lhd H_1$
$H_2 \cap N_1 \lhd H_2$

We have:














\(\ds x_h \paren {H_1 \cap N_2} \paren {H_2 \cap N_1} x_h^{-1}\)

\(=\)







\(\ds x_h \circ \paren {H_1 \cap N_2} {x_h}^{-1} \circ x_h \paren {H_2 \cap N_1} x_h^{-1}\)




















\(\ds \)

\(=\)







\(\ds x_h \circ \paren {H_1 \cap N_2} \paren{ {x_h}^{-1} \circ x_h } \paren {H_2 \cap N_1} x_h^{-1}\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds x_h \paren {H_1 \cap N_2} e \paren {H_2 \cap N_1} x_h^{-1}\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds x_h \paren {H_1 \cap N_2} \paren {H_2 \cap N_1} x_h^{-1}\)





Definition of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {H_1 \cap N_2} x_h \paren {H_2 \cap N_1} x_h^{-1}\)





as $H_1 \cap N_2 \lhd H_1$














\(\ds \)

\(=\)







\(\ds \paren {H_1 \cap N_2} \paren {H_2 \cap N_1}\)





as $H_2 \cap N_1 \lhd H_2$



$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 46 \nu$




