# 

Source: https://proofwiki.org/wiki/Composition_of_Inflationary_Mappings_is_Inflationary

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $f, g: S \to S$ be inflationary mappings.

Then $f \circ g$, the composition of $f$ and $g$, is also inflationary.


Proof
Let $x \in S$.




\(\text {(1)}: \quad\)









\(\ds x\)

\(\preceq\)







\(\ds \map g x\)





$g$ is inflationary




\(\text {(2)}: \quad\)









\(\ds \map g x\)

\(\preceq\)







\(\ds \map f {\map g x}\)





$f$ is inflationary














\(\ds x\)

\(\preceq\)







\(\ds \map f {\map g x}\)





$(1)$ and $(2)$ and $\preceq$ is an ordering and hence transitive








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\preceq\)







\(\ds \map {\paren {f \circ g} } x\)





Definition of Composition of Mappings



Since this holds for all $x \in S$, $f \circ g$ is inflationary.
$\blacksquare$





