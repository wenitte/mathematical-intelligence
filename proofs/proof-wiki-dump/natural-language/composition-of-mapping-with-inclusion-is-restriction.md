# 

Source: https://proofwiki.org/wiki/Composition_of_Mapping_with_Inclusion_is_Restriction


July 19, 2022:  It has been suggested that this page or section be merged into Composition of Mapping and Inclusion is Restriction of Mapping.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.


Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let $A \subseteq S$ be a subset of the domain of $S$.
Let $i_A: A \to S$ be the inclusion mapping from $A$ to $S$.

Then:

$f \circ i_A = f \restriction_A$
where $f \restriction_A$ denotes the restriction of $f$ to $A$.


Proof
Equality of Domains













\(\ds \Dom {f \circ i_A}\)

\(=\)







\(\ds \Dom {i_A}\)





Domain of Composite Relation














\(\ds \)

\(=\)







\(\ds A\)





Definition of $i_A$














\(\ds \)

\(=\)







\(\ds \Dom {f \restriction_A}\)





Definition of Restriction of Mapping



$\Box$


Equality of Codomains













\(\ds \Cdm {f \circ i_A}\)

\(=\)







\(\ds \Cdm f\)





Codomain of Composite Relation














\(\ds \)

\(=\)







\(\ds T\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \Cdm {f \restriction_A}\)





Definition of Restriction of Mapping



$\Box$


Equality of Graph
Let $x \in A$.














\(\ds \map {\paren {f \circ i_A} } x\)

\(=\)







\(\ds \map f {\map {i_A} x}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map f x\)





Definition of $i_A$














\(\ds \)

\(=\)







\(\ds \map {f \restriction_A} x\)





Definition of Restriction of Mapping



$\Box$

All three criteria are seen to be fulfilled.
The result follows from Equality of Mappings.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): Notation and Terminology




