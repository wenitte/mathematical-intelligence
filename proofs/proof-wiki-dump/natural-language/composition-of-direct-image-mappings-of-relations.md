# 

Source: https://proofwiki.org/wiki/Composition_of_Direct_Image_Mappings_of_Relations

Theorem
Let $A, B, C$ be non-empty sets.
Let $\RR_1 \subseteq A \times B, \RR_2 \subseteq B \times C$ be relations.

Let:

${\RR_1}^\to: \powerset A \to \powerset B$
and

${\RR_2}^\to: \powerset B \to \powerset C$
be the direct image mappings of $\RR_1$ and $\RR_2$.

Then:

$\paren {\RR_2 \circ \RR_1}^\to = {\RR_2}^\to \circ {\RR_1}^\to$


Proof
Let $S \subseteq A, S \ne \O$.

Then:














\(\ds \map {\paren { {\RR_2}^\to \circ {\RR_1}^\to} } S\)

\(=\)







\(\ds \map { {\RR_2}^\to} {\map { {\RR_1}^\to } S}\)




















\(\ds \)

\(=\)







\(\ds \set {\map {\RR_2} x: x \in \map { {\RR_1}^\to } S}\)




















\(\ds \)

\(=\)







\(\ds \set {\map {\RR_2} x: \exists y \in S: \tuple {x, y} \in \RR_1}\)




















\(\ds \)

\(=\)







\(\ds \set {\map {\RR_2} {\map {\RR_1} y}: y \in S}\)




















\(\ds \)

\(=\)







\(\ds \set {\map {\RR_2 \circ \RR_1} y: y \in S}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\RR_2 \circ \RR_1}^\to} S\)










Now we treat the case where $S = \O$:














\(\ds \map {\paren { {\RR_2}^\to \circ {\RR_1}^\to} } \O\)

\(=\)







\(\ds \O\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\RR_2 \circ \RR_1}^\to} \O\)









$\blacksquare$





