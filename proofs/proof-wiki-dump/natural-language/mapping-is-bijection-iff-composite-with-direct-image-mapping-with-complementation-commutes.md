# 

Source: https://proofwiki.org/wiki/Mapping_is_Bijection_iff_Composite_with_Direct_Image_Mapping_with_Complementation_Commutes



Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Then:

$f$ is a bijection
if and only if:

$f^\to \circ \complement_S = \complement_T \circ f^\to$
where:

$f^\to: \powerset S \to \powerset T$ denotes the direct image mapping of $f$
$\complement_S: \powerset S \to \powerset S$ denotes the complement relative to $S$
$\complement_T: \powerset T \to \powerset T$ denotes the complement relative to $T$
$\powerset S$ and $\powerset T$ denote the power sets of $S$ and $T$ respectively.


Proof
Sufficient Condition
Let $f$ be a bijection.
Thus a fortiori $f$ is:

a surjection
a one-to-many relation

From One-to-Many Image of Set Difference: Corollary 2 we have:

$\forall X \in \powerset S: \map {\paren {f^\to \circ \complement_S} } X = \map {\paren {\complement_{\Img f} \circ f^\to} } X$

By definition of surjection:

$\Img f = T$
and so:

$\forall X \in \powerset S: \map {\paren {f^\to \circ \complement_S} } X = \map {\paren {\complement_T \circ f^\to} } X$
That is:

$f^\to \circ \complement_S = \complement_T \circ f^\to$
$\Box$


Necessary Condition
Let $f$ be a mapping such that:

$f^\to \circ \complement_S = \complement_T \circ f^\to$
We have that:














\(\ds \map {f^\to} S\)

\(=\)







\(\ds \map {f^\to} {\relcomp S \O}\)





Definition of Relative Complement














\(\ds \)

\(=\)







\(\ds \relcomp T {\map {f^\to} \O}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \relcomp T \O\)





Definition of Direct Image Mapping of Mapping: $\map {f^\to} \O = \O$














\(\ds \)

\(=\)







\(\ds T\)





Definition of Relative Complement



Hence, by definition, $f$ is a surjection.

Now consider $A, B \subseteq S$:














\(\ds \map {f^\to \circ \complement_S} {A \cap B}\)

\(=\)







\(\ds \map {f^\to} {\relcomp S {A \cap B} }\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {f^\to} {\relcomp S A \cup \relcomp S B}\)





De Morgan's Laws: Relative Complement of Intersection














\(\ds \)

\(=\)







\(\ds \map {f^\to} {\relcomp S A} \cup \map {f^\to} {\relcomp S B}\)





Image of Union under Mapping














\(\ds \)

\(=\)







\(\ds \map {f^\to \circ \complement_S} A \cup \map {f^\to \circ \complement_S} B\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\complement_T \circ f^\to} A \cup \map {\complement_T \circ f^\to} B\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \relcomp T {\map {f^\to} A} \cup \relcomp T {\map {f^\to} B}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \relcomp T {\map {f^\to} A \cap \map {f^\to} B}\)





De Morgan's Laws: Relative Complement of Intersection








\(\ds \leadsto \ \ \)





\(\ds \complement_T \circ \map {f^\to} {A \cap B}\)

\(=\)







\(\ds \relcomp T {\map {f^\to} A \cap \map {f^\to} B}\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \map {f^\to} {A \cap B}\)

\(=\)







\(\ds \map {f^\to} A \cap \map {f^\to} B\)





Relative Complement Mapping on Powerset is Bijection, and so Bijection iff Left and Right Cancellable



It follows from Image of Intersection under Injection that $f^\to$ is an injection.
Hence from Mapping is Injection iff Direct Image Mapping is Injection:

$f$ is an injection.

We have therefore that $f$ is both an injection and a surjection.
Hence, by definition, $f$ is a bijection.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $3$




