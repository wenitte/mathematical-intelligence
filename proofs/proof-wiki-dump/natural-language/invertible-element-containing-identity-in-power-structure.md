# 

Source: https://proofwiki.org/wiki/Invertible_Element_containing_Identity_in_Power_Structure

Theorem
Let $\struct {S, \circ}$ be a magma.
Let identity element $e \in S$ be an identity element of $\struct {S, \circ}$.
Let $\struct {\powerset S, \circ_\PP}$ be the power structure of $\struct {S, \circ}$.

Let $X \subseteq S$ such that:

$e \in X$
$X$ is invertible for $\circ_PP$.

Then $X = \set e$.


Proof
Let $X \subseteq S$ be invertible for $\circ_PP$ and such that $e \in X$.
From Identity Element for Power Structure, $\struct {\powerset S, \circ_\PP}$ has an identity element $J = \set e$.
We have:




\(\text {(1)}: \quad\)





\(\ds \exists Y \in \powerset S: \, \)



\(\ds X \circ_\PP Y\)

\(=\)







\(\ds J\)





Definition of Invertible Element: here $Y$ is the inverse of $X$








\(\ds \leadsto \ \ \)





\(\ds \set {x \circ y: x \in X, y \in Y}\)

\(=\)







\(\ds \set e\)





Definition of Operation Induced on Power Set, Definition of $J$








\(\ds \leadsto \ \ \)

\(\ds \forall y \in Y: \, \)



\(\ds e \circ y\)

\(=\)







\(\ds e\)





applying the above to $e$ as an element of $X$








\(\ds \leadsto \ \ \)

\(\ds \forall y \in Y: \, \)



\(\ds y\)

\(=\)







\(\ds e\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds Y\)

\(=\)







\(\ds \set e\)














\(\ds \leadsto \ \ \)





\(\ds X \circ_\PP \set e\)

\(=\)







\(\ds \set e\)





substituting for $Y$ and $J$ in $(1)$








\(\ds \leadsto \ \ \)

\(\ds \forall x \in X: \, \)



\(\ds x\)

\(=\)







\(\ds e\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds X\)

\(=\)







\(\ds \set e\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.7 \ \text {(a)}$




