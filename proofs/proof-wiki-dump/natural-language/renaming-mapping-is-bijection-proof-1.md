# 

Source: https://proofwiki.org/wiki/Renaming_Mapping_is_Bijection/Proof_1



Theorem
Let $f: S \to T$ be a mapping.
Let $r: S / \RR_f \to \Img f$ be the renaming mapping, defined as:

$r: S / \RR_f \to \Img f: \map r {\eqclass x {\RR_f} } = \map f x$
where:

$\RR_f$ is the equivalence induced by the mapping $f$
$S / \RR_f$ is the quotient set of $S$ determined by $\RR_f$
$\eqclass x {\RR_f}$ is the equivalence class of $x$ under $\RR_f$.

The renaming mapping is a bijection.


Proof
Proof of Injectivity
To show that $r: S / \RR_f \to \Img f$ is an injection:














\(\ds \map r {\eqclass x {\RR_f} }\)

\(=\)







\(\ds \map r {\eqclass y {\RR_f} }\)














\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds \map f y\)





Definition of Renaming Mapping








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\RR_f\)







\(\ds y\)





Definition of Equivalence Relation Induced by Mapping








\(\ds \leadsto \ \ \)





\(\ds \eqclass x {\RR_f}\)

\(=\)







\(\ds \eqclass y {\RR_f}\)





Definition of Equivalence Class




Thus $r: S / \RR_f \to \Img f$ is an injection.
$\Box$


Proof of Surjectivity
To show that $r: S / \RR_f \to \Img f$ is a surjection:
Note that for all mappings $f: S \to T$, $f: S \to \Img f$ is always a surjection from Surjection by Restriction of Codomain.

Thus by definition:

$\forall y \in \Img f: \exists x \in S: \map f x = y$
So:










\(\ds \forall x \in S: \exists \eqclass x {\RR_f}: \, \)



\(\ds x\)

\(\in\)







\(\ds \eqclass x {\RR_f}\)





Equivalence Class is not Empty








\(\ds \leadsto \ \ \)

\(\ds \forall y \in \Img f: \exists \eqclass x {\RR_f} \in S / \RR_f: \, \)



\(\ds \map f x\)

\(=\)







\(\ds y\)





Definition of Equivalence Relation Induced by Mapping








\(\ds \leadsto \ \ \)

\(\ds \forall y \in \Img f: \exists \eqclass x {\RR_f} \in S / \RR_f: \, \)



\(\ds \map r {\eqclass x {\RR_f} }\)

\(=\)







\(\ds y\)





Definition of Renaming Mapping




Thus $r: S / \RR_f \to \Img f$ is a surjection.
$\Box$

As $r: S / \RR_f \to \Img f$ is both an injection and a surjection, it is by definition a bijection.
$\blacksquare$





