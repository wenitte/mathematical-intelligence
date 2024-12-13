# 

Source: https://proofwiki.org/wiki/Proper_Subtower_is_Initial_Segment

Theorem
Let $\struct {T_1, \preccurlyeq}$ be a proper subtower of $\struct {T_2, \preccurlyeq}$.
Then $\struct {T_1, \preccurlyeq}$ is an initial segment of $\struct {T_2, \preccurlyeq}$.


This article, or a section of it, needs explaining.In particular: What sort of object is $\struct {T_2, \preccurlyeq}$ -- an ordered set, a totally ordered set, a well-ordered set, an ordinal, what?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Define the set:

$Y = \set {y \in T_1: S_y \text { is an initial segment of } \struct {T_2, \preccurlyeq} }$.
Then:














\(\ds \map {S_x} {T_1}\)

\(=\)







\(\ds \set {b \in T_1, x \in T_1: b \prec x}\)





Definition of Initial Segment














\(\ds \)

\(=\)







\(\ds \set {b \in T_2, x \in T_2: b \prec x}\)





Definition of Proper Subtower in Set, as $T_1 \subseteq T_2$














\(\ds \)

\(=\)







\(\ds \map {S_x} {T_2}\)





Definition of Initial Segment



By Induction on Well-Ordered Set, $Y = T_1$.
That is, $\struct {T_1, \preccurlyeq}$ is an initial segment in $\struct {T_2, \preccurlyeq}$.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): Supplementary Exercises $1.7$




