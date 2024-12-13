# 

Source: https://proofwiki.org/wiki/Rational_Cut_has_Smallest_Upper_Number

Theorem
Let $r \in \Q$ be rational.
Let $\alpha$ be the rational cut consisting of all rational numbers $p$ such that $p < r$.

Then $\alpha$ is indeed a cut, and has a smallest upper number that is $r$.


Proof
That $\alpha$ fulfils conditions $(1)$ and $(2)$ of the definition of a cut follows directly from that definition.
Then it is noted that if $p \in \alpha$ then from Mediant is Between:

$p < \dfrac {p + r} 2 < r$
and so $p$ cannot be the greatest element of $\alpha$.
Hence it is seen that $\alpha$ fulfils all conditions to be a cut.

Because it is not the case that $r < r$, it follows that $r \notin \alpha$.
Thus $r$ is an upper number of $\alpha$.
Aiming for a contradiction, suppose $q \in \Q$ is an upper number of $\alpha$ such that $q < r$.
But then by definition of a cut, $q \in \alpha$.
That is, $q$ is not an upper number of $\alpha$.
Hence by Proof by Contradiction it follows that there is no upper number of $\alpha$ which is smaller than $r$.
That is, $r$ is the smallest upper number of $\alpha$.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.6$. Theorem




