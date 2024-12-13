# 

Source: https://proofwiki.org/wiki/Hausdorff_Space_is_Hereditarily_Compact_iff_Finite



Theorem
Let $\left({S, \tau}\right)$ be a Hausdorff space.
Then $\left({S, \tau}\right)$ is hereditarily compact if and only if $S$ is finite.


Proof
Necessary Condition
Let $\left({S, \tau}\right)$ be hereditarily compact.
That is, every subspace of $\left({S, \tau}\right)$ is compact.
Let $H \subseteq S$ be a subspace of $\left({S, \tau}\right)$.
From Compact Subspace of Hausdorff Space is Closed, $H$ is closed.
Thus for all $H \subseteq S$, we find that $H$ is closed in $S$.
It follows by definition of discrete topology that $\tau$ is discrete.
But since $S$ is compact and Discrete Space is Compact iff Finite, $S$ is also finite.
$\Box$


Sufficient Condition
Let $S$ be finite.
From $T_2$ (Hausdorff) Space is $T_1$ Space, $\left({S, \tau}\right)$ is a $T_1$ (Fréchet) space.
From Finite $T_1$ Space is Discrete, it follows that $\left({S, \tau}\right)$ has the discrete topology.
As $\left({S, \tau}\right)$ (and every subspace) is finite and discrete, and Discrete Space is Compact iff Finite, then $S$ (and every subspace) is compact.
Thus $\left({S, \tau}\right)$ is hereditarily compact.
$\blacksquare$


Also see
Indiscrete Space is Hereditarily Compact, an example of a non-Hausdorff, infinite, non-discrete hereditarily compact space.




