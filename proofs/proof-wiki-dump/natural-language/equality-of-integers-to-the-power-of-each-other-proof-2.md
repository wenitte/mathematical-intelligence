# 

Source: https://proofwiki.org/wiki/Equality_of_Integers_to_the_Power_of_Each_Other/Proof_2

Theorem
$2$ and $4$ are the only pair of positive integers $m, n$ such that $m \ne n$ such that:

$m^n = n^m$

Thus:
$2^4 = 4^2 = 16$


Proof
Without loss of generality suppose $m > n$.
Write $m = n + x$, where $x$ is an integer.
Then:














\(\ds m^n\)

\(=\)







\(\ds n^m\)




















\(\ds \paren {n + x}^n\)

\(=\)







\(\ds n^{n + x}\)




















\(\ds \paren {1 + \frac x n}^n\)

\(=\)







\(\ds n^x\)





dividing both sides by $n^n$



From Real Sequence $\paren {1 + \dfrac x n}^n$ is Convergent:

$\paren {1 + \dfrac x n}^n$ is increasing and has limit $e^x$.
Hence:

$n^x < e^x$
This forces $n = 2$.
We have:

$m^2 = 2^m$
showing that $m$ is a power of $2$.
Write $m = 2^k$. 
Then:

$2^{2 k} = 2^{2^k}$
giving:

$k = 2^{k - 1}$
By Bernoulli's Inequality:

$2^{k - 1} \ge 1 + k - 1 = k$
where equality holds if and only if $k - 1 = 0$ or $k - 1 = 1$.
We can skip Bernoulli's Inequality by induction on $k$ for $k > 2$.
Either way, this gives:

$k = 1$ or $2$
$m = 2$ or $4$.
We reject $m = 2$ since $n = 2$.
Hence $2^4 = 4^2$ is the only solution.
$\blacksquare$





