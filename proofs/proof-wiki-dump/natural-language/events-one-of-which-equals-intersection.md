# 

Source: https://proofwiki.org/wiki/Events_One_of_Which_equals_Intersection



Theorem
Let the probability space of an experiment $\EE$ be $\struct {\Omega, \Sigma, \Pr}$.
Let $A, B \in \Sigma$ be events of $\EE$, so that $A \subseteq \Omega$ and $B \subseteq \Omega$.
Let $A$ and $B$ be such that:

$A \cap B = A$
Then whenever $A$ occurs, it is always the case that $B$ occurs as well.


Proof
From Intersection with Subset is Subset:

$A \cap B = A \iff A \subseteq B$
Let $A$ occur.
Let $\omega$ be the outcome of $\EE$.
Let $\omega \in A$.
That is, by definition of occurrence of event, $A$ occurs.

Then by definition of subset:

$\omega \in B$
Thus by definition of occurrence of event, $B$ occurs.
Hence the result.
$\blacksquare$


Examples
Target of Concentric Circles
Let $T$ be a target which consists of $10$ concentric circles $C_1$ to $C_{10}$ whose radii are respectively $r_k$ for $k = 1, 2, \ldots, 10$.
Let $r_k < r_{k + 1}$ for all $k = 1, 2, \ldots, 9$.
That is, let $C_1$ be the innermost and $C_{10}$ be the outermost.
Let $A_k$ denote the event of hitting $T$ inside the circle of radius $r_k$.

Let $C$ denote the event:

$C = \ds \bigcap_{k \mathop = 5}^{10} A_k$

Then $C$ is the event of hitting $T$ inside circle $C_5$.


Sources
1968: A.A. Sveshnikov: Problems in Probability Theory, Mathematical Statistics and Theory of Random Functions (translated by Richard A. Silverman) ... (previous) ... (next): $\text I$: Random Events: $1$. Relations among Random Events: Problem $2$




