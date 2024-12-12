# 

Source: https://proofwiki.org/wiki/Existence_of_Upper_and_Lower_Numbers_of_Cut_whose_Difference_equal_Given_Rational

Theorem
Let $\alpha$ be a cut.
Let $r \in \Q_{>0}$ be a (strictly) positive rational number.

Then there exist rational numbers $p$ and $q$ such that:

$p \in \alpha, q \notin \alpha$
$q - p = r$
such that $q$ is not the smallest upper number of $\alpha$.


Proof
Let $s \in \alpha$ be a rational number.
For $n = 0, 1, 2, \ldots$ let $s_n = s + n r$.
Then there exists a unique integer $m$ such that:

$s_m \in \alpha$
and:

$s_{m + 1} \notin \alpha$

If $s_{m + 1}$ is not the smallest upper number of $\alpha$, take:

$p = s_m$
$q = s_{m + 1}$

If $s_{m + 1}$ is the smallest upper number of $\alpha$, take:

$p = s_m + \dfrac r 2$
$q = s_{m + 1} + \dfrac r 2$

The result follows.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.15$. Theorem




