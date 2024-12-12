# 

Source: https://proofwiki.org/wiki/Composition_of_Direct_Image_Mappings_of_Mappings

Theorem
Let $A, B, C$ be non-empty sets.
Let $f: A \to B$ and $g: B \to C$ be mappings.

Let:

$f^\to: \powerset A \to \powerset B$
and

$g^\to: \powerset B \to \powerset C$
be the direct image mappings of $f$ and $g$.

Then:

$\paren {g \circ f}^\to = g^\to \circ f^\to$


Proof 1
Let $S \subseteq A$ such that $S \ne \O$.

Then:














\(\ds \map {\paren {g^\to \circ f^\to} } S\)

\(=\)







\(\ds \map {g^\to} {\map {f^\to} S}\)




















\(\ds \)

\(=\)







\(\ds \set {\map g x: x \in \map {f^\to} S}\)




















\(\ds \)

\(=\)







\(\ds \set {\map g x: \exists y \in S: x = \map f y}\)




















\(\ds \)

\(=\)







\(\ds \set {\map g {\map f y}: y \in S}\)




















\(\ds \)

\(=\)







\(\ds \set {\map {\paren {g \circ f} } y: y \in S}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {g \circ f}^\to} S\)










Now we treat the case where $S = \O$:














\(\ds \map {\paren {g^\to \circ f^\to} } \O\)

\(=\)







\(\ds \O\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {g \circ f}^\to} \O\)









and the result is complete.
$\blacksquare$


Proof 2
We have that a mapping is a relation.
Hence Composition of Direct Image Mappings of Relations applies.
$\blacksquare$





