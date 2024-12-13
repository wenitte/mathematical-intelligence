# 

Source: https://proofwiki.org/wiki/Restriction_of_Associative_Operation_is_Associative

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $T \subseteq S$.
Let $\circ_T$ denote the restriction of $\circ$ to $T$.
Let the operation $\circ$ be associative on $\struct {S, \circ}$.

Then $\circ_T$ is associative on $\struct {T, \circ_T}$.


Proof













\(\ds T\)

\(\subseteq\)







\(\ds S\)














\(\ds \leadsto \ \ \)

\(\ds \forall a, b, c \in T: \, \)



\(\ds a, b, c\)

\(\in\)







\(\ds S\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds a \mathop {\circ_T} \paren {b \mathop {\circ_T} c}\)

\(=\)







\(\ds a \circ \paren {b \circ c}\)





Definition of Restriction of Operation














\(\ds \)

\(=\)







\(\ds \paren {a \circ b} \circ c\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {a \mathop {\circ_T} b} \mathop {\circ_T} c\)





Definition of Restriction of Operation



$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.1$. Subsets closed to an operation
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Subgroups
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups




