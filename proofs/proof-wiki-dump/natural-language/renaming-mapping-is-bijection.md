# 

Source: https://proofwiki.org/wiki/Renaming_Mapping_is_Bijection



Theorem
Let $f: S \to T$ be a mapping.
Let $r: S / \RR_f \to \Img f$ be the renaming mapping, defined as:

$r: S / \RR_f \to \Img f: \map r {\eqclass x {\RR_f} } = \map f x$
where:

$\RR_f$ is the equivalence induced by the mapping $f$
$S / \RR_f$ is the quotient set of $S$ determined by $\RR_f$
$\eqclass x {\RR_f}$ is the equivalence class of $x$ under $\RR_f$.

The renaming mapping is a bijection.


Proof 1
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


Proof 2
From Renaming Mapping is Well-Defined, $r: S / \RR_f \to \Img f$ is a well-defined mapping.
By definition, $\RR_f$ is the equivalence relation induced by the mapping $f$.
Hence by definition:

$\tuple {s_1, s_2} \in \RR_f \iff \map f {s_1} = \map f {s_2}$
From Condition for Mapping from Quotient Set to be Injection, this is precisely the condition required for $r$ to be an injection.
Next it is noted that the codomain of $r$ is $\Img f$.
Then from Restriction of Mapping to Image is Surjection, we have that $f_{\restriction \Img f}$ is a surjection.
Hence from Condition for Mapping from Quotient Set to be Surjection it follows that $r$ is also a surjection.
Thus $r$ is shown to be both an injection and a surjection, and so by definition is a bijection.
$\blacksquare$


Different approaches
Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts considers the case where $r$ is an injection, but does not stress its bijective aspects from this particular perspective:

This type of factorization of mappings ... is particularly useful when the set of inverse images $\map {\alpha^{-1} } {a'}$ coincides with $\overline S$; for, in this case, the mapping $\overline a$ is 1-1. Thus if $\overline a \overline \alpha = \overline b \overline \alpha$, then $a \alpha = b \alpha$ and $a \sim b$. Hence $\overline a = \overline b$. Thus we obtain here a factorization $\alpha = \nu \overline \alpha$ where $\overline \alpha$ is 1-1 onto $T$ and $\nu$ is the natural mapping.

Note that in the above, Jacobson uses:

$\alpha$ for $f$
$a'$ for the image of a representative element $a$ of $S$ under $\alpha$
$\overline S$ for $S / \RR_f$
$\nu$ for the quotient mapping $q_{\RR_f}: S \to S / \RR_f$
$\overline a$ and $\overline b$ for representative elements of $\overline S$
$\overline \alpha$ for the renaming mapping $r$.

T.S. Blyth: Set Theory and Abstract Algebra takes the approach of deducing the existence of the mapping $r$, and then determining under which conditions it is either injective or surjective.
From there, the surjective restriction of $r$ is taken, and $\RR$ is then identified with the equivalence induced by $f$.
Hence the bijective nature of $r$ is deduced rather than constructed.


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 3$: Equivalence relations
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Factoring Functions
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 7$: Relations: Exercise $2$




