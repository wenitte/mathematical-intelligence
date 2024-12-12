# 

Source: https://proofwiki.org/wiki/B-Algebra_Induced_by_Group_Induced_by_B-Algebra

Theorem
Let $\struct {S, *}$ be a $B$-algebra.
Let $\struct {S, \circ}$ be the group described on $B$-Algebra Induces Group.
Let $\struct {S, *'}$ be the $B$-algebra described on Group Induces $B$-Algebra.

Then $\struct {S, *'} = \struct {S, *}$.


Proof
Let $a, b \in S$.
It is required to show that:

$a *' b = a * b$

To achieve this, recall that $*'$ is defined on Group Induces $B$-Algebra to satisfy:

$a *' b = a \circ b^{-1}$
which, by the definition of $\circ$ on $B$-Algebra Induces Group comes down to:














\(\ds a *' b\)

\(=\)







\(\ds a * \paren {0 * b^{-1} }\)




















\(\ds \)

\(=\)







\(\ds a * \paren {0 * \paren {0 * b} }\)





$B$-Algebra Induces Group














\(\ds \)

\(=\)







\(\ds a * b\)





Identity: $0 * \paren {0 * x} = x$




Hence the result.
$\blacksquare$


Also see
Group Induced by $B$-Algebra Induced by Group




