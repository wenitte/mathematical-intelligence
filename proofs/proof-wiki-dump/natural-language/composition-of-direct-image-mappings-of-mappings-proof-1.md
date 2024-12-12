# 

Source: https://proofwiki.org/wiki/Composition_of_Direct_Image_Mappings_of_Mappings/Proof_1

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


Proof
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


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Theorem $5.7$




