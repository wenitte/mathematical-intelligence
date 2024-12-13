# 

Source: https://proofwiki.org/wiki/Restriction_of_Composition_is_Composition_of_Restriction

Theorem
Let $X, Y, Z$ be sets.
Let $f: X \to Y$ and $g: Y \to Z$ be mappings.
Let $S \subseteq X$.

Then:

$\paren {g \circ f} \restriction S = g \circ \paren {f \restriction S}$


Proof
By definitions of composition of mappings and restriction of mapping:

$\paren {g \circ f} \restriction S: S \to Z$ and $g \circ \paren {f \restriction S}: S \to Z$
Let $s \in S$.
By definition of restriction of mapping:

$\map {\paren {\paren {g \circ f} \restriction S} } s = \map {\paren {g \circ f} } s$
Thus














\(\ds \map {\paren {g \circ \paren {f \restriction S} } } s\)

\(=\)







\(\ds \map g {\map {\paren {f \restriction S} } s}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map g {\map f s}\)





Definition of Restriction of Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren {\paren {g \circ f} \restriction S} } s\)





Definition of Composition of Mappings



$\blacksquare$


Sources
Mizar article RELAT_1:83




