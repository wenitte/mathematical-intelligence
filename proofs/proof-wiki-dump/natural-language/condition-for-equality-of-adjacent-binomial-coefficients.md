# 

Source: https://proofwiki.org/wiki/Condition_for_Equality_of_Adjacent_Binomial_Coefficients



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $\dbinom n k$ denote a binomial coefficient for $k \in \Z$.

Then:

$\dbinom n k = \dbinom n {k + 1}$
if and only if:

$n$ is an odd integer
$k = \dfrac {n - 1} 2$


Proof
Sufficient Condition
Let $n$ be odd and $k = \dfrac {n - 1} 2$.
Let $n = 2 m + 1$ for some $m \in \Z_{\ge 0}$.

We have:














\(\ds k\)

\(=\)







\(\ds \dfrac {n - 1} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2 m + 1} - 1} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 m} 2\)




















\(\ds \)

\(=\)







\(\ds m\)










Hence:














\(\ds \dbinom n k\)

\(=\)







\(\ds \dbinom {2 m + 1} m\)




















\(\ds \)

\(=\)







\(\ds \dbinom {2 m + 1} {\paren {2 m + 1} - m}\)





Symmetry Rule for Binomial Coefficients














\(\ds \)

\(=\)







\(\ds \dbinom {2 m + 1} {m + 1}\)




















\(\ds \)

\(=\)







\(\ds \dbinom n {k + 1}\)









$\Box$


Necessary Condition
Let $n$ and $k$ be such that:

$\dbinom n k = \dbinom n {k + 1}$
From Condition for Increasing Binomial Coefficients, it is not the case that:

$0 \le k < \dfrac {n - 1} 2$
as under such a condition we would have:

$\dbinom n k = \dbinom n {k + 1}$
So:

$k \ge \dfrac {n - 1} 2$
By the Symmetry Rule for Binomial Coefficients, we also have that:

$\dfrac {n - 1} 2 < k \le n \iff \dbinom n k > \dbinom n {k + 1}$
and so for $\dbinom n k = \dbinom n {k + 1}$ it is not the case that $\dfrac {n - 1} 2 < k \le n$.
So:

$k \le \dfrac {n - 1} 2$
Hence that means:

$k = \dfrac {n - 1} 2$
which means:

$n = 2 k + 1$
and so $n$ is odd.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem: Problems $1.2$: $1 \ \text{(b)}$




