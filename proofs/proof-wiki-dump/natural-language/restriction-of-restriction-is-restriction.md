# 

Source: https://proofwiki.org/wiki/Restriction_of_Restriction_is_Restriction


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\RR$ be a relation on $S \times T$.
Let $X \subseteq S$, $Y \subseteq T$.
Let $W \subseteq X$, $V \subseteq Y$.

Then:

$\paren{\RR {\restriction_{X \times Y} } } {\restriction_{W \times V} } = \RR {\restriction_{W \times V} }$

That is, the restriction of $\RR {\restriction_{X \times Y} }$ to $W \times V$ is the restriction of $\RR$ to $W \times V$


Proof
From Cartesian Product of Subsets:

$W \times V \subseteq X \times Y$
We have:














\(\ds \paren{\RR {\restriction_{X \times Y} } } {\restriction_{W \times V} }\)

\(=\)







\(\ds \RR {\restriction_{X \times Y} } \cap W \times V\)





Definition of Restriction of Relation














\(\ds \)

\(=\)







\(\ds \paren {\RR \cap X \times Y} \cap W \times V\)





Definition of Restriction of Relation














\(\ds \)

\(=\)







\(\ds \RR \cap \paren{X \times Y \cap W \times V}\)





Intersection is Associative














\(\ds \)

\(=\)







\(\ds \RR \cap W \times V\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \RR {\restriction_{W \times V} }\)





Definition of Restriction of Relation



$\blacksquare$





