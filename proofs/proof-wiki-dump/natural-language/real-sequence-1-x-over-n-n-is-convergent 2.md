# 

Source: https://proofwiki.org/wiki/Real_Sequence_(1_%2B_x_over_n)%5En_is_Convergent

Theorem
The sequence $\sequence {s_n}$ defined as:

$s_n = \paren {1 + \dfrac x n}^n$
is convergent.


Proof
From Cauchy's Mean Theorem:

$(1): \quad \ds \paren {\prod_{k \mathop = 1}^n a_k}^{1/n} \le \frac 1 n \paren {\sum_{k \mathop = 1}^n a_k}$
for $r_1, r_2, \ldots, r_n$.
Setting:

$a_1 = a_2 = \ldots = a_{n - 1} := 1 + \dfrac x {n - 1}$
and:

$a_n = 1$
Substituting for $a_1, a_2, \ldots, a_n$ into $(1)$ gives:














\(\ds \paren {1 + \dfrac x {n - 1} }^{\frac {n - 1} n}\)

\(\le\)







\(\ds \dfrac {\paren {n - 1} \paren {1 + \frac x {n - 1} } + 1} n\)




















\(\ds \)

\(=\)







\(\ds 1 + \dfrac x n\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \dfrac x {n - 1} }^{n - 1}\)

\(\le\)







\(\ds \paren {1 + \dfrac x n}^n\)









The above is valid only if $a_1, a_2, \ldots, a_n$ are positive.
Hence we have shown that $\sequence {s_n}$ is increasing when:

$1 + \dfrac x {n - 1} \ge 0$
that is, when:

$n \ge 1 - x$
From Equivalence of Definitions of Real Exponential Function: Limit of Sequence implies Power Series Expansion, we have:

$(2): \quad \paren {1 + \dfrac x n}^n \le 1 + \size x + \dfrac {\size x^2} {2!} + \dotsb + \dfrac {\size x^n} {n!}$
Since there exists $N$ such that:

$\forall n > N: \dfrac {\size x^n} {n!} \le \paren {\dfrac 1 2}^n$
it follows from $(2)$ that:














\(\ds \paren {1 + \dfrac x n}^n\)

\(\le\)







\(\ds 1 + \size x + \dfrac {\size x^2} {2!} + \dotsb + \dfrac {\size x^N} {N!} + \paren {\dfrac 1 2}^{N + 1} + \dotsb + \paren {\dfrac 1 2}^n\)




















\(\ds \)

\(\le\)







\(\ds C + \dfrac {1 + \paren {\frac 1 2}^{n + 1} } {1 + \frac 1 2}\)





where $C$ is some constant














\(\ds \)

\(<\)







\(\ds C + 2\)









Hence we have that $\sequence {s_n}$ is strictly increasing and bounded above.
So by the Monotone Convergence Theorem (Real Analysis), $\sequence {s_n}$ is convergent.
As $1 + \dfrac x n$ is positive when $n$ is large enough, it follows that the limit of $\sequence {s_n}$ is positive.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.7 \ (5)$




