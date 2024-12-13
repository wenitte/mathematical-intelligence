# 

Source: https://proofwiki.org/wiki/Prime_Decomposition_of_Highly_Composite_Number

Theorem
Let $n$ be a highly composite number.
Let the prime decomposition of $n$ be expressed as:

$n = \ds \prod_{k \mathop \in \N} {p_k}^{r_k}$
where $p_k$ denotes the $k$th prime.
Then the sequence $\sequence {r_k}$ is decreasing.

That is:

$\forall k \in \N: r_k \ge r_{k + 1}$


Proof
Let $n = \ds \prod_{k \mathop \in \N} {p_k}^{r_k}$ be highly composite.
By definition of divisor count function:

$\map {\sigma_0} n = \ds \prod_{k \mathop \in \N} \paren {r_k + 1}$
Aiming for a contradiction, suppose $r_{l + 1} > r_l$ for some $l \in \N$.
Consider $m \in \Z$ whose prime decomposition of $n$ is expressed as:

$m = \ds \prod_{k \mathop \in \N} {p_k}^{s_k}$
where:

$\forall j < l: s_j = r_j$
$\forall j > l + 1: s_j = r_j$
$s_l = r_{l + 1}$
$s_{l + 1} = r_l$
We have that:














\(\ds \map {\sigma_0} m\)

\(=\)







\(\ds \prod_{k \mathop \in \N} \paren {s_k + 1}\)





Definition of Divisor Count Function














\(\ds \)

\(=\)







\(\ds \prod_{k \mathop \in \N} \paren {r_k + 1}\)





as all the $s$s are the same as all the $r$s, but in a different order














\(\ds \)

\(=\)







\(\ds \map {\sigma_0} n\)





Definition of Divisor Count Function



Thus:

$\map {\sigma_0} m = \map {\sigma_0} n$

Now we have that:

$r_l < r_{l + 1}$
and so:

$s_l > s_{l + 1}$
and so:














\(\ds \frac { {p_l}^{r_l} {p_{l + 1} }^{r_{l + 1} } } { {p_l}^{s_l} {p_{l + 1} }^{s_{l + 1} } }\)

\(=\)







\(\ds \frac { {p_l}^{r_l} {p_{l + 1} }^{r_{l + 1} } } { {p_l}^{r_{l + 1} } {p_{l + 1} }^{r_l} }\)




















\(\ds \)

\(=\)







\(\ds \frac { {p_l}^c} { {p_{l + 1}^c} }\)





where $c = r_{l + 1} - r_l$




Then:

$p_{l + 1} > p_l$
and so:

${p_{l + 1} }^c > {p_l}^c$
from which it follows that:

$m < n$
while:

$\map {\sigma_0} m = \map {\sigma_0} n$
But $n$ is highly composite.
This means that if $\map {\sigma_0} m = \map {\sigma_0} n$, then $n \le m$.
This is contradicted by $n > m$.
Thus by Proof by Contradiction:

$\forall k \in \N: r_k \ge r_{k + 1}$
$\blacksquare$


Sources
Dec. 1991: Steven Ratering: An Interesting Subset of the Highly Composite Numbers (Math. Mag. Vol. 64, no. 5: pp. 343 – 346)  www.jstor.org/stable/2690653




