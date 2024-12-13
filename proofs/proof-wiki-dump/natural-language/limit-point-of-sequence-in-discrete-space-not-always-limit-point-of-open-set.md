# 

Source: https://proofwiki.org/wiki/Limit_Point_of_Sequence_in_Discrete_Space_not_always_Limit_Point_of_Open_Set



Theorem
Let $T = \struct {S, \tau}$ be a discrete topological space.
Let $U \in \tau$ be an open set of $T$.
Let $\sequence {x_n}$ be a sequence in $U$.
Let $x$ be the limit of $\sequence {x_n}$.

Then $x$ is not always a limit point of $U$.


Proof
Let $x \in S$.
By definition of discrete space:

$U = \set x$ is an open set of $T$.
Consider the sequence $\sequence {x_n}$ defined as:

$\forall n \in \N: x_n = x$
That is:

$\sequence {x_n} = \tuple {x, x, x, \ldots}$
Thus $x$ is the limit point of $\sequence {x_n}$.
But:

$U \setminus \set x = \O$
and so $x$ is not a limit point of $U$.
Hence the result.
$\blacksquare$


Also see
Point in Discrete Space is Adherent Point


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $1 \text { - } 3$. Discrete Topology: $3$




