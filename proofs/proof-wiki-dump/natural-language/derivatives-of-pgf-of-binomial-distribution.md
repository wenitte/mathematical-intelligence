# 

Source: https://proofwiki.org/wiki/Derivatives_of_PGF_of_Binomial_Distribution

Theorem
Let $X$ be a discrete random variable with the binomial distribution with parameters $n$ and $p$.
Then the derivatives of the PGF of $X$ with respect to $s$ are:

$\dfrac {\d^k} {\d s^k} \map {\Pi_X} s = \begin {cases}
n^{\underline k} p^k \paren {q + p s}^{n-k} & : k \le n \\
0 & : k > n
\end {cases}$
where:

$n^{\underline k}$ is the falling factorial
$q = 1 - p$


Proof
The Probability Generating Function of Binomial Distribution is:

$\map {\Pi_X} s = \paren {q + p s}^n$
where $q = 1 - p$.

From Derivatives of Function of $a x + b$:

$\map {\dfrac {\d^k} {\d s^k} } {\map f {q + p s} } = p^k \dfrac {\d^k} {\d z^k} \paren {\map f z}$
where $z = q + p s$.
Here we have that $\map f z = z^n$.

From Nth Derivative of Mth Power:

$\dfrac {\d^k} {\d z^k}  z^n = \begin {cases}
n^{\underline k} z^{n - k} & : k \le n \\
0 & : k > n
\end {cases}$

So putting it together:

$\dfrac {\d^k} {\d s^k} \map {\Pi_X} s = \begin {cases}
n^{\underline k} p^k \paren {q + p s}^{n - k} & : k \le n \\
0 & : k > n
\end {cases}$
$\blacksquare$





