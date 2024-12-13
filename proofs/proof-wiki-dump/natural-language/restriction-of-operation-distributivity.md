# 

Source: https://proofwiki.org/wiki/Restriction_of_Operation_Distributivity

Theorem
Let $\struct {S, *, \circ}$ be an algebraic structure.
Let $T \subseteq S$.

If the operation $\circ$ is distributive over $*$ in $\struct {S, *, \circ}$, then it is also distributive over $*$ on a restriction $\struct {T, * \restriction_T, \circ \restriction_T}$.


Proof













\(\ds \)

\(\)







\(\ds T \subseteq S\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \forall a, b, c \in T: a, b, c \in S\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds a \circ_T \paren {b *_T c}\)




















\(\ds \)

\(=\)







\(\ds a \circ \paren {b * c}\)




















\(\ds \)

\(=\)







\(\ds \paren {a \circ b} * \paren {a \circ c}\)





as $\circ$ is distributive over $*$














\(\ds \)

\(=\)







\(\ds \paren {a \circ_T b} *_T \paren {a \circ_T c}\)










Similarly for $\paren {a *_T b} \circ_T c = \paren {a \circ_T c} *_T \paren {b \circ_T c}$.
$\blacksquare$





