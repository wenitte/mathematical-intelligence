# 

Source: https://proofwiki.org/wiki/Condition_for_Alexandroff_Extension_to_be_T2_Space



Theorem
Let $T = \struct {S, \tau}$ be a non-empty topological space.
Let $p$ be a new element not in $S$.
Let $S^* := S \cup \set p$.
Let $T^* =\struct {S^*, \tau^*}$ be the Alexandroff extension on $S$.

Then $T^*$ is a $T_2$ (Hausdorff) space if and only if $T$ is a locally compact Hausdorff space.


Proof
Necessary Condition
Let $T = \struct {S, \tau}$ be a locally compact Hausdorff space.
Let $x, y \in S$.
Then as $T$ is Hausdorff, there exist two disjoint open sets $U, V \in \tau$ containing $x$ and $y$ respectively.
But by definition of the Alexandroff extension on $S$, $U$ and $V$ are also open sets of $T^*$.
That covers the case where both $x \ne p$ and $y \ne p$.

Without loss of generality, let $y = p$.
As $T$ is a locally compact Hausdorff space, $x$ has a compact neighborhood $N_x$.
By definition of neighborhood, there exists an open set $U$ of $T$ containing $x$.
By definition of the Alexandroff extension, $U$ is an open set of $T^*$.
By Compact Subspace of Hausdorff Space is Closed, $N_x$ is closed in $T$.
Let $V = S^* \setminus N_x$.
By definition of $V$, $x \notin V$ and $p \in V$.
By definition of the Alexandroff extension, $V$ is an open set of $T^*$.
By Intersection with Complement is Empty iff Subset:

$U \cup V = \O$
So we have two open sets $U, V$ of $T^*$ such that $x \in U, p \in V$ and $U \cup V = \O$.
Thus by definition $T^*$ is a $T_2$ space.
$\Box$


Sufficient Condition
Let $T^*$ be a $T_2$ space.
By definition of $T$ is a subspace of $T^*$.
By $T_2$ Property is Hereditary, it follows that $T$ is a $T_2$ space.

It remains to be shown that $T$ is also (weakly) locally compact.
Let $x \in S$.
As $T^*$ is a $T_2$ space, we can find.

an open set $U$ of $T^*$ containing $x$
and:

an open set $V$ of $T^*$ containing $p$
such that $U \cap V = \O$.
Then by definition of the Alexandroff extension, $S^* \setminus V$ is a compact (closed) neighborhood of $x$.
Thus by definition $S$ is a locally compact Hausdorff space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $34$. One Point Compactification Topology: $3$




