# 

Source: https://proofwiki.org/wiki/Inequality_Rule_for_Real_Sequences/Proof_1

Theorem
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $\R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent to the following limits:














\(\ds \lim_{n \mathop \to \infty} x_n\)

\(=\)







\(\ds l\)




















\(\ds \lim_{n \mathop \to \infty} y_n\)

\(=\)







\(\ds m\)










Let there exist $N \in \N$ such that:

$\forall n \ge N: x_n \le y_n$
Then:

$l \le m$


Proof
Suppose $l > m$.
Then:

$m = \dfrac m 2 + \dfrac m 2 < \dfrac {l + m} 2 < \dfrac l 2 + \dfrac l 2 = l$

Let $\epsilon = \dfrac {l - m} 2$.
Then:

$\epsilon > 0$
We are given that:

$\ds \lim_{n \mathop \to \infty} x_n = l$
By definition of the limit of a real sequence, we can find $N_1$ such that:

$\forall n \ge N_1: \size {x_n - l} < \epsilon$
where $\size {x_n - l}$ denotes the absolute value of $x_n - l$
Suppose $n \ge N_1$
If $x_n \ge l$ then $x_n > \dfrac {l + m} 2$
If $x_n < l$ then:














\(\ds \epsilon\)

\(>\)







\(\ds \size {x_n - l}\)





as $n > N_1$














\(\ds \)

\(=\)







\(\ds l - x_n\)





as $x_n < l$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {l - m} 2\)

\(>\)







\(\ds l - x_n\)





as $\epsilon = \dfrac {l - m} 2$








\(\ds \leadsto \ \ \)





\(\ds x_n\)

\(>\)







\(\ds \dfrac {l + m} 2\)





rearranging terms



In either case $x_n > \dfrac {l+m} 2$

We are also given that:

$\ds \lim_{n \mathop \to \infty} y_n = m$
Similarly we can find $N_2$ such that:

$\forall n > N_2: \size {y_n - m} < \epsilon$
Suppose $n \ge N_2$
If $y_n \le m$ then $y_n < \dfrac {l + m} 2$
If $y_n > m$ then:














\(\ds \epsilon\)

\(>\)







\(\ds \size {y_n - l}\)





as $n > N_2$














\(\ds \)

\(=\)







\(\ds y_n - m\)





as $y_n > m$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {l - m} 2\)

\(>\)







\(\ds y_n - m\)





as $\epsilon = \dfrac {l - m} 2$








\(\ds \leadsto \ \ \)





\(\ds \dfrac {l + m} 2\)

\(>\)







\(\ds y_n\)





rearranging terms



In either case $y_n < \dfrac {l + m} 2$

Let $N = \max \set {N_1, N_2}$.
Then if $n > N$, both the above inequalities will be true:

$n > N_1$
$n > N_2$

Thus $\forall n > N$:

$y_n < \dfrac {l + m} 2 < x_n$

It has been shown that:

$l > m \implies \forall n \in \N: \exists m \ge n: x_n > y_n$
Taking the contrapositive:

$\exists N \in \N: \forall n \ge N: x_n \le y_n \implies l \le m$
Hence the result.
$\blacksquare$


Also known as
The Inequality Rule for Real Sequences is also presented on $\mathsf{Pr} \infty \mathsf{fWiki}$ as:

Limits Preserve Inequalities
Inequality of Sequences Preserved in Limit




