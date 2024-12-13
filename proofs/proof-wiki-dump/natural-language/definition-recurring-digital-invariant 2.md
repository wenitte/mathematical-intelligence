# 

Source: https://proofwiki.org/wiki/Definition:Recurring_Digital_Invariant



Definition
Let $k \in \Z_{>0}$ be a positive integer.
Let $f: \Z_{>0} \to \Z_{>0}$ be the mapping defined as:

$\forall m \in \Z_{>0}: \map f m = $ the sum of the $k$th powers of the digits of $n$.

Let $n_0 \in \Z_{>0}$ be a positive integer.
Consider the sequence:

$s_n = \begin{cases} n_0 & : n = 0 \\
\map f {s_{n - 1} } & : n > 0 \end{cases}$
If:

$\exists r \in \N_{>0}: s_r = n_0$
then the smallest of the terms $n_0, n_1, \ldots, n_r$ is a recurring digital invariant of order $k$.


Examples
2178
$2178$ is a $4$th order recurring digital invariant:








\(\ds 2178: \ \ \)





\(\ds 2^4 + 1^4 + 7^4 + 8^4\)

\(=\)







\(\ds 16 + 1 + 2401 + 4096\)

\(\ds = 6514\)












\(\ds 6514: \ \ \)





\(\ds 6^4 + 5^4 + 1^4 + 4^4\)

\(=\)







\(\ds 1296 + 625 + 1 + 256\)

\(\ds = 2178\)







$\blacksquare$


Also see
Definition:Cubic Recurring Digital Invariant


Sources
Weisstein, Eric W. "Recurring Digital Invariant." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/RecurringDigitalInvariant.html




