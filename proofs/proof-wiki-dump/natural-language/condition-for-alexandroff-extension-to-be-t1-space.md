# 

Source: https://proofwiki.org/wiki/Condition_for_Alexandroff_Extension_to_be_T1_Space



Theorem
Let $T = \struct {S, \tau}$ be a non-empty topological space.
Let $p$ be a new element not in $S$.
Let $S^* := S \cup \set p$.
Let $T^* = \struct {S^*, \tau^*}$ be the Alexandroff extension on $S$.

Then $T^*$ is a $T_1$ (Fréchet) space if and only if $T$ is a $T_1$ (Fréchet) space.


Proof
Necessary Condition
Let $T = \struct {S, \tau}$ be a $T_1$ space.
By definition, $T$ is a $T_1$ space if and only if all points of $S$ are closed in $T$.

We have that $S$ is open in $T$ by definition of a topology.
Thus by definition of the Alexandroff extension, $S$ is open in $T^*$.
So as $S = S^* \setminus \set p$ is open in $T^*$, it follows that $\set p$ is closed in $T^*$.
That is, $p$ is a closed point of $T^*$.

Now let $x \in S^*$ such that $x \ne p$.
As $T$ is a $T_1$ space, $\set x$ is closed in $T$.
From Finite Topological Space is Compact, $\set x$ is a compact subset of $T$.
Thus by definition of the Alexandroff extension, $S^* \setminus \set x$ is open in $T^*$.
Thus by definition $\set x$ is closed in $T^*$.
That is, $x$ is a closed point of $T^*$.

Thus it has been shown that all points in $T^*$ are closed points of $T^*$.
Thus by definition $T^*$ is a $T_1$ space.
$\Box$


Sufficient Condition
Let $T^*$ be a $T_1$ space.
By definition of $T$ is a subspace of $T^*$.
By $T_1$ Property is Hereditary, it follows that $T$ is a $T_1$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $34$. One Point Compactification Topology: $2$




