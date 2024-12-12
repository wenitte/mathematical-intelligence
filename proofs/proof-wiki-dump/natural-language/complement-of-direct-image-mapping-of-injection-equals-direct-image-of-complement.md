# 

Source: https://proofwiki.org/wiki/Complement_of_Direct_Image_Mapping_of_Injection_equals_Direct_Image_of_Complement

Theorem
Let $f: S \to T$ be an injection.
Let $f^\to: \powerset S \to \powerset T$ denote the direct image mapping of $f$.

Then:

$\forall A \in \powerset S: \map {\paren {\complement_{\Img f} \circ f^\to} } A = \map {\paren {f^\to \circ \complement_S} } A$
where $\circ$ denotes composition of mappings.


Proof
As $f$ is an injection, it is a fortiori a one-to-many relation.

From Image of Set Difference under Relation: Corollary 2:

$\forall A \in \powerset S: \map {\paren {\complement_{\Img \RR} \circ \RR^\to} } A = \map {\paren {\RR^\to \circ \complement_S} } A$
where $\RR \subseteq S \times T$ is a one-to-many relation on $S \times T$.

Substituting $f$ for $\RR$ gives the result:

$\forall A \in \powerset S: \map {\paren {\complement_{\Img f} \circ f^\to} } A = \map {\paren {f^\to \circ \complement_S} } A$
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $3$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $1$: Pairs, Relations, and Functions: Exercise $7 \ \text {(c)}$




