# 

Source: https://proofwiki.org/wiki/Renaming_Mapping_is_Well-Defined



Theorem
Let $f: S \to T$ be a mapping.
Let $r: S / \RR_f \to \Img f$ be the renaming mapping,  defined as:

$r: S / \RR_f \to \Img f: \map r {\eqclass x {\RR_f} } = \map f x$
where:

$\RR_f$ is the equivalence induced by the mapping $f$
$S / \RR_f$ is the quotient set of $S$ determined by $\RR_f$
$\eqclass x {\RR_f}$ is the equivalence class of $x$ under $\RR_f$.

The renaming mapping is always well-defined.


Proof 1
By Relation Induced by Mapping is Equivalence Relation, we have that $\RR_f$ is an equivalence relation.
To determine whether $r$ is well-defined, we have to determine whether $r: S / \RR_f \to \Img f$ actually defines a mapping at all.
Consider a typical element $\eqclass x {\RR_f}$ of $S / \RR_f$.
Suppose we were to choose another name for the class $\eqclass x {\RR_f}$.
Assume that $\eqclass x {\RR_f}$ is not a singleton.
For example, let us choose $y \in \eqclass x {\RR_f}, y \ne x$ such that: 

$\eqclass x {\RR_f} = \eqclass y {\RR_f}$
then:

$\map r {\eqclass x {\RR_f} } = \map r {\eqclass y {\RR_f} }$

Hence from the definition, we have:














\(\ds y\)

\(\in\)







\(\ds \eqclass x {\RR_f}\)














\(\ds \leadsto \ \ \)





\(\ds \map f y\)

\(=\)







\(\ds \map f x\)




















\(\ds \)

\(=\)







\(\ds \map r {\eqclass x {\RR_f} }\)




















\(\ds \)

\(=\)







\(\ds \map r {\eqclass y {\RR_f} }\)









Thus $r$ is well-defined.
$\blacksquare$


Proof 2
From Condition for Mapping from Quotient Set to be Well-Defined:

there exists a mapping $\phi: S / \RR \to T$ such that $\phi \circ q_\RR = f$
if and only if:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \map f x = \map f y$

But by definition of the equivalence induced by the mapping $f$:

$\forall x, y \in S: \tuple {x, y} \in \RR_f \implies \map f x = \map f y$
The result follows directly.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 7$: Relations: Exercise $2$




