# 

Source: https://proofwiki.org/wiki/Equality_of_Integers_to_the_Power_of_Each_Other



Theorem
$2$ and $4$ are the only pair of positive integers $m, n$ such that $m \ne n$ such that:

$m^n = n^m$

Thus:
$2^4 = 4^2 = 16$


Proof 1
We have:














\(\ds n^m\)

\(=\)







\(\ds m^n\)














\(\ds \leadsto \ \ \)





\(\ds m \log_n n\)

\(=\)







\(\ds n \log_n m\)














\(\ds \leadsto \ \ \)





\(\ds m\)

\(=\)







\(\ds n \log_n m\)










Without loss of generality, let $m > n$.
We have that $m, n \in \N$.
Hence:

$\log_n m \in \N \implies m = n^k$
where $k \in \N_{>1}$ by hypothesis.
Hence:

$n^k = k n$
For $n \ne 0$ the solution reads 

$n = k^\frac 1 {k - 1}$
Define $t = k - 1$.
We have:














\(\ds \lim_{k \mathop \to 1} n\)

\(=\)







\(\ds e\)




















\(\ds \lim_{k \mathop \to \infty} n\)

\(=\)







\(\ds 1\)









To check for intermediate maximum consider the first derivative:

$\dfrac {\d n} {\d k} = \dfrac {k^{\frac 1 {k - 1} } } {k - 1} \paren {\dfrac 1 k - \dfrac {\ln k} {k - 1} }$
Our desired solution constrains the prefactor to be positive.
The term in brackets vanishes only for $k = 1$.
Hence for $k > 1$:

there is no extremum
$\map n k$ is monotonically decreasing
$1 < n < e$.
Hence the only natural number solution is $n = 2$.
The only $k$ that satisfies this is $k = 2$.
Therefore:

$n = 2$
$m = 2^2 = 4$
$\blacksquare$


Proof 2
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


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $16$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16$




