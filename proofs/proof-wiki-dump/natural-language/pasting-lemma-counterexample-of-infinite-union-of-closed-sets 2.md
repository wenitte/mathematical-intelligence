# 

Source: https://proofwiki.org/wiki/Pasting_Lemma/Counterexample_of_Infinite_Union_of_Closed_Sets

Theorem
Let $T = \struct {X, \tau}$ and $S = \struct {Y, \sigma}$ be topological spaces.
Let $I$ be an infinite indexing set.
For all $i \in I$, let $C_i$ be closed in $T$.
Let $f: X \to Y$ be a mapping such that the restriction $f \restriction_{C_i}$ is continuous for all $i$.

Then it does not necessarily hold that $f$ is continuous on $C = \ds \bigcup_{i \mathop \in I}C_i$.
That is, it is not necessarily the case that $f \restriction_C$ is continuous.


Proof
Let $f : \closedint {-1} 1 \to \R$ be the function on the closed interval $\closedint {-1} 1$ defined by:

$\map f x  = \begin{cases}
1 & : x \ge 0 \\
-1 & : x < 0 
\end{cases}$

The function $f$ is discontinuous at $0$.

The function $f$ restricted to the closed intervals:

$\closedint {-1} {-\dfrac 1 2}, \closedint {-1} {-\dfrac 1 3}, \ldots, \closedint {-1} {-\dfrac 1 n}, \ldots, \closedint 0 1$
are constant functions.
From Constant Function is Continuous, the function $f$ restricted to the closed intervals:

$\closedint {-1} {-\dfrac 1 2}, \closedint {-1} {-\dfrac 1 3}, \ldots, \closedint {-1} {-\dfrac 1 n}, \ldots, \closedint 0 1$
are continuous.

We have:

$\closedint {-1} 1 = \paren {\ds \bigcup_{n \mathop \in \N_{>1} } \closedint {-1} {- \dfrac 1 n} } \cup \closedint 0 1$
The result follows.

$\blacksquare$





