# 

Source: https://proofwiki.org/wiki/Derivatives_of_PGF_of_Discrete_Uniform_Distribution

Theorem
Let $X$ be a discrete random variable with the discrete uniform distribution with parameter $n$.
Then the derivatives of the PGF of $X$ with respect to $s$ are:

$\quad\dfrac {\d^m} {\d s^m} \map {\Pi_X} s = \begin{cases}
\ds \dfrac 1 n \sum_{k \mathop = m}^n k^{\underline m} s^{k - m} & : m \le n \\
0 & : k > n
\end{cases}$
where $k^{\underline m}$ is the falling factorial.


Proof
The Probability Generating Function of Discrete Uniform Distribution is:

$\map {\Pi_X} s = \dfrac {s \paren {1 - s^n} } {n \paren {1 - s} } = \dfrac 1 n \ds \sum_{k \mathop = 1}^n s^k$

From Nth Derivative of Mth Power:
$\quad\dfrac {\d^k} {\d s^k} s^n = \begin {cases}
n^{\underline k} s^{n - k} & : k \le n \\
0 & : k > n
\end {cases}$

The result follows.
$\blacksquare$





