# 

Source: https://proofwiki.org/wiki/Image_of_Set_Difference_under_Mapping/Corollary_2

Theorem
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


Proof
From Image of Set Difference under Relation: Corollary 2 we have:

$\relcomp {\Img \RR} {\RR \sqbrk X} \subseteq \RR \sqbrk {\relcomp S X}$
where $\RR \subseteq S \times T$ is a relation on $S \times T$.

As $f$, being a mapping, is also a relation, it follows directly that:

$\relcomp {\Img f} {f \sqbrk X} \subseteq f \sqbrk {\relcomp S X}$
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.1 \ \text{(iv)}$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions: Exercise $7 \ \text {(c)}$




