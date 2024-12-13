# 

Source: https://proofwiki.org/wiki/Quasigroup_is_not_necessarily_B-Algebra

Theorem
Let $\struct {S, \circ}$ be a quasigroup.
Then $\struct {S, \circ}$ is not necessarily a $B$-algebra.


Proof
Proof by Counterexample
From Group is Quasigroup we take an arbitrary small group.
Consider the Cayley table of the group of order $3$:

$\begin{array}{c|cccccc}
 & 0 & 1 & 2 \\

\hline
0 & 0 & 1 & 2 \\
1 & 1 & 2 & 0 \\
2 & 2 & 0 & 1 \\
\end{array}$
By inspection we see that $B$-Algebra Axiom $(\text A 2)$ does not hold as $1 \circ 1 \ne 0$.
$\blacksquare$


Also see
$B$-Algebra is Quasigroup




