# 

Source: https://proofwiki.org/wiki/Rational_Numbers_are_not_Connected

Theorem
The set of rational numbers $\Q$ is not a connected topological space.


Proof
Let $\alpha \in \R$ be an irrational number.
By definition, $\alpha \notin \Q$.
Consider the sets:

$S := \Q \cap \left({-\infty \,.\,.\, \alpha}\right)$
$T := \Q \cap \left({\alpha \,.\,.\, \infty}\right)$
Let $x \in S$.
Let $B_\epsilon \left({x}\right)$ be the open $\epsilon$-ball of $x$ in $\Q$.
Then:

$\forall x \in S: \exists \epsilon \in \R_{>0}: B_\epsilon \left({x}\right) \subseteq S$
by setting $\epsilon = \alpha - x$.
Similarly:

$\forall x \in T: \exists \epsilon \in \R_{>0}: B_\epsilon \left({x}\right) \subseteq T$
by setting $\epsilon = x - \alpha$.
Thus $S$ and $T$ are open sets of $\Q$.

Then:

$S \cup T = \Q$
$S \cap T = \O$
$S, T \ne \O$
So $S$ and $T$ fulfil the conditions for $S \mid T$ to be a separation of $\Q$.

Hence the result by definition of connected topological space.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.2$: Connectedness: Example $6.2.9$




