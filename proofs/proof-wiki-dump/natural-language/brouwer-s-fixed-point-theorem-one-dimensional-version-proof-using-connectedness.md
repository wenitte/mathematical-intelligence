# 

Source: https://proofwiki.org/wiki/Brouwer%27s_Fixed_Point_Theorem/One-Dimensional_Version/Proof_Using_Connectedness

Theorem
Let $f: \closedint a b \to \closedint a b$ be a real function which is continuous on the closed interval $\closedint a b$.

Then:

$\exists \xi \in \closedint a b: \map f \xi = \xi$

That is, a continuous real function from a closed real interval to itself fixes some point of that interval.


Proof
By Subset of Real Numbers is Interval iff Connected, $\closedint a b$ is connected.
Aiming for a contradiction, suppose there is no fixed point.
Then $\map f a > a$ and $\map f b < b$.
Let:

$U = \set {x \in \closedint a b: \map f x > x}$
$V = \set {x \in \closedint a b: \map f x < x}$
Then $U$ and $V$ are open in $\closedint a b$.
Because $a \in U$ and $b\in V$, $U$ and $V$ are non-empty.
By assumption:

$U \cup V = \closedint a b$
Thus $\closedint a b$ is not connected, which is a contradiction.
Thus, by Proof by Contradiction, there exists at least one fixed point.
$\blacksquare$





