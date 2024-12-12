# 

Source: https://proofwiki.org/wiki/Events_One_of_Which_equals_Union



Theorem
Let the probability space of an experiment $\EE$ be $\struct {\Omega, \Sigma, \Pr}$.
Let $A, B \in \Sigma$ be events of $\EE$, so that $A \subseteq \Omega$ and $B \subseteq \Omega$.
Let $A$ and $B$ be such that:

$A \cup B = A$
Then whenever $B$ occurs, it is always the case that $A$ occurs as well.


Proof
From Union with Superset is Superset:

$A \cup B = A \iff B \subseteq A$
Let $B$ occur.
Let $\omega$ be the outcome of $\EE$.
Let $\omega \in B$.
That is, by definition of occurrence of event, $B$ occurs.

Then by definition of subset:

$\omega \in A$
Thus by definition of occurrence of event, $A$ occurs.
Hence the result.
$\blacksquare$


Examples
Target of Concentric Circles
Let $T$ be a target which consists of $10$ concentric circles $C_1$ to $C_{10}$ whose radii are respectively $r_k$ for $k = 1, 2, \ldots, 10$.
Let $r_k < r_{k + 1}$ for all $k = 1, 2, \ldots, 9$.
That is, let $C_1$ be the innermost and $C_{10}$ be the outermost.
Let $A_k$ denote the event of hitting $T$ inside the circle of radius $r_k$.

Let $B$ denote the event:

$B = \displaystyle \bigcup_{k \mathop = 1}^6 A_k$

Then $B$ is the event of hitting $T$ inside circle $C_6$.


Sources
1968: A.A. Sveshnikov: Problems in Probability Theory, Mathematical Statistics and Theory of Random Functions (translated by Richard A. Silverman) ... (previous) ... (next): $\text I$: Random Events: $1$. Relations among Random Events: Example $1.1$




