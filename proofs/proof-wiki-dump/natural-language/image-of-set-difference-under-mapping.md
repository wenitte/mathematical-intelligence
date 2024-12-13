# 

Source: https://proofwiki.org/wiki/Image_of_Set_Difference_under_Mapping



Theorem
Let $f: S \to T$ be a mapping.
The set difference of the images of two subsets of $S$ is a subset of the image of the set difference.

That is:
Let $S_1$ and $S_2$ be subsets of $S$.
Then:

$f \sqbrk {S_1} \setminus f \sqbrk {S_2} \subseteq f \sqbrk {S_1 \setminus S_2}$
where $\setminus$ denotes set difference.


Corollary 1
Let $f: S \to T$ be a mapping.
Let $S_1 \subseteq S_2 \subseteq S$.

Then:

$\relcomp {f \sqbrk {S_2} } {f \sqbrk {S_1} } \subseteq f \sqbrk {\relcomp {S_2} {S_1} }$
where $\complement$ (in this context) denotes relative complement.


Corollary 2
Let $f: S \to T$ be a mapping.
Let $X$ be a subset of $S$.

Then:

$\relcomp {\Img f} {f \sqbrk X} \subseteq f \sqbrk {\relcomp S X}$
where:

$\Img f$ denotes the image of $f$
$\complement_{\Img f}$ denotes the complement relative to $\Img f$.

This can be expressed in the language and notation of direct image mappings as:

$\forall X \in \powerset S: \relcomp {\Img f} {\map {f^\to} X} \subseteq \map {f^\to} {\relcomp S X}$
That is:

$\forall X \in \powerset S: \map {\paren {\complement_{\Img f} \circ f^\to} } X \subseteq \map {\paren {f^\to \circ \complement_S} } X$
where $\circ$ denotes composition of mappings.


Corollary 3
Let $f: S \to T$ be a surjection.
Let $A \subseteq S$ be a subset of $S$.
Then:

$T \setminus f \sqbrk A \subseteq f \sqbrk {S \setminus A}$
where $\setminus$ denotes set difference.


Proof 1
As $f$, being a mapping, is also a relation, we can apply Image of Set Difference under Relation:

$\RR \sqbrk {S_1} \setminus \RR \sqbrk {S_2} \subseteq \RR \sqbrk {S_1 \setminus S_2}$
$\blacksquare$


Proof 2













\(\ds y\)

\(\in\)







\(\ds f \sqbrk {S_1} \setminus f \sqbrk {S_2}\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in {S_1}: x \notin {S_2}: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f\)





Definition of Image of Subset under Mapping








\(\ds \leadsto \ \ \)

\(\ds \exists x \in {S_1} \setminus {S_2}: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds f\)





Definition of Set Difference








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds f \sqbrk {S_1 \setminus S_2}\)





Definition of Image of Subset under Mapping



$\blacksquare$


Also see
Difference of Images under Mapping not necessarily equal to Image of Difference: equality does not hold in general
Image of Set Difference under Injection: equality holds for an injection


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 2$: Functions: Exercise $2.2 \ \text{(h)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $4 \ \text{(i)}$




