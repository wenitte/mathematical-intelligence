# 

Source: https://proofwiki.org/wiki/Ordering_Cycle_implies_Equality

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $x_1$, $x_2$, and $x_3$ be elements of $S$.
Suppose that














\(\ds x_1\)

\(\preceq\)







\(\ds x_2\)




















\(\ds x_2\)

\(\preceq\)







\(\ds x_3\)




















\(\ds x_3\)

\(\preceq\)







\(\ds x_1\)










Then $x_1 = x_2 = x_3$.


General Case
Let $\struct {S,\preceq}$ be an ordered set.
Let $x_0, x_1, \dots, x_n \in S$.
Suppose that for $k = 0, 1, \dots, n - 1: x_k \preceq x_{k + 1}$.
Suppose also that $x_n \preceq x_0$.

Then $x_0 = x_1 = \dots = x_n$.


Proof
Because $\preceq$ is an ordering, it is transitive and antisymmetric.
By transitivity, $x_1 \preceq x_3$.
Because $x_1 \preceq x_3$ and $x_3 \preceq x_1$, antisymmetry allows us to conclude that $x_1 = x_3$.
Because $x_1 = x_3$ and $x_1 \preceq x_2$, we must have $x_3 \preceq x_2$.
Because $x_3 \preceq x_2$ and $x_2 \preceq x_3$, antisymmetry allows us to conclude that $x_2 = x_3$.
Thus $x_1 = x_2 = x_3$.
$\blacksquare$





