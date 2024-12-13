# 

Source: https://proofwiki.org/wiki/Limit_of_Intersection_of_Closed_Intervals_from_Zero_to_Positive_Integer_Reciprocal

Theorem
For all (strictly) positive integers $n \in \Z_{>0}$, let $A_n$ be the closed real interval:

$A_n = \closedint 0 {\dfrac 1 n}$
Let $A \subseteq \R$ be the subset of the real numbers defined as:

$A = \ds \lim_{n \mathop \to \infty} \bigcap A_n$
Then:

$A = \set 0$


Proof
First it is noted that:

$\forall x \in \R_{<0}: x \notin A$
and that by definition of closed real interval:

$\forall n \in \Z_{>0}: 0 \in A_n$
and so by definition of intersection:

$0 \in A$

It remains to demonstrate that:

$\forall x \in \R_{>0}: x \notin A$
Aiming for a contradiction, suppose $\exists x \in \R_{>0}: x \in A$.
By the Axiom of Archimedes:

$\exists N \in \Z: N > \dfrac 1 x$
and so from Reciprocal Function is Strictly Decreasing:

$\exists N \in \Z: \dfrac 1 N < x$
Thus:

$x \notin A_N$
and so by definition of intersection:

$x \notin A$
This contradicts our supposition that $x \in A$.
Hence the only element of $A$ is $0$, and so:

$A = \set 0$
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $1$: Sets and Logic: Exercise $10$




