# 

Source: https://proofwiki.org/wiki/Infimum_of_Set_of_Reciprocals_of_Positive_Integers

Theorem
Let $S$ be the subset of the set of real numbers defined as:

$S = \set {\dfrac 1 n: n \in \Z_{>0} }$
Then:

$\inf S = 0$
where $\inf S$ denotes the infimum of $S$.


Proof
We have that $\Z_{>0}$ contains only (strictly) positive integers.
So it follows from Reciprocal of Strictly Positive Real Number is Strictly Positive that $S$ contains only (strictly) positive real numbers.
Hence $0$ is a lower bound for $S$.

Aiming for a contradiction, suppose that $0$ is not the infimum of $S$.
Then $\exists h \in \R_{>0}$ such that $h$ is a lower bound for $S$.
Then:

$\forall n \in \Z_{>0}: \dfrac 1 n \ge h$
Hence from Reciprocal Function is Strictly Decreasing:

$\forall n \in \Z_{>0}: n \le \dfrac 1 h$
where $\dfrac 1 h \in \R$.
But from the Axiom of Archimedes:

$\exists n \in \Z_{>0}: n > \dfrac 1 h$
This is a contradiction.
It follows by Proof by Contradiction that no such $h > 0$ exists.
Hence $0$ is the infimum of $S$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 3$: Natural Numbers: $\S 3.4$: Example




