# 

Source: https://proofwiki.org/wiki/Group_Induced_by_B-Algebra_Induced_by_Group

Theorem
Let $\struct {S, \circ}$ be a group.
Let $\struct {S, *}$ be the $B$-algebra described on Group Induces $B$-Algebra.
Let $\struct {S, \circ'}$ be the group described on $B$-Algebra Induces Group.

Then $\struct {S, \circ'} = \struct {S, \circ}$.


Proof
Let $a, b \in S$.
It is required to show that:

$a \circ' b = a \circ b$

To achieve this, recall that $\circ'$ is defined on $B$-Algebra Induces Group to satisfy:

$a \circ' b = a * \paren {e * b}$
which, by the definition of $*$ on Group Induces $B$-Algebra comes down to:














\(\ds a \circ' b\)

\(=\)







\(\ds a \circ \paren {e \circ b^{-1} }^{-1}\)




















\(\ds \)

\(=\)







\(\ds a \circ \paren {b^{-1} }^{-1}\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds a \circ b\)





Inverse of Group Inverse




Hence the result.
$\blacksquare$


Also see
$B$-Algebra Induced by Group Induced by $B$-Algebra




