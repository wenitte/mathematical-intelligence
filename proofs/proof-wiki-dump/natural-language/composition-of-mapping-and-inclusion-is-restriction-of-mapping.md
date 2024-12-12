# 

Source: https://proofwiki.org/wiki/Composition_of_Mapping_and_Inclusion_is_Restriction_of_Mapping

Theorem
Let $S, T$ be sets.
Let $f: S \to T$ be a mapping.
Let $A \subseteq S$.

Then $f \circ i_A = f \restriction A$
where

$i_A$ denotes the inclusion mapping of $A$,
$f \restriction A$ denotes the restriction of $f$ to $A$.


Proof
By definition of inclusion mapping:

$i_A: A \to S$
By definitions of composition of mappings and restriction of mapping:

$f \circ i_A: A \to T$ and $f \restriction A: A \to T$
Let $a \in A$.
Thus














\(\ds \map {\paren {f \circ i_A} } a\)

\(=\)







\(\ds \map f {\map {i_A} a}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map f a\)





Definition of Inclusion Mapping














\(\ds \)

\(=\)







\(\ds \map {\paren {f \restriction A} } a\)





Definition of Restriction of Mapping



$\blacksquare$


Sources
Mizar article RELAT_1:65




