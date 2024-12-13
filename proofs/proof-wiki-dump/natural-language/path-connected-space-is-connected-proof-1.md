# 

Source: https://proofwiki.org/wiki/Path-Connected_Space_is_Connected/Proof_1

Theorem
Let $T$ be a topological space which is path-connected.

Then $T$ is connected.


Proof
Suppose $X \mid Y$ is a separation of $T$.
As $X$ and $Y$ are non-empty, we can find $x \in X$ and $y \in Y$.
As $T$ is path-connected, there exists a path $f : \closedint 0 1 \to T$ with initial point $x$ and final point $y$.
Subset of Real Numbers is Interval iff Connected shows that $\closedint 0 1$ is connected.
Continuous Image of Connected Space is Connected shows that $\Img f$ is connected.
Connected Subspace Lie in One Component of Separation shows that either $\Img f \cap X = \O$, or $\Img f \cap Y = \O$.
As we have $x, y \in \Img f$, this is a contradiction.
It follows that there can be no separation of $T$, so $T$ is connected.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.): $3$: Connectedness and Compactness: $\S 24$: Connected Subspaces of the Real Line




