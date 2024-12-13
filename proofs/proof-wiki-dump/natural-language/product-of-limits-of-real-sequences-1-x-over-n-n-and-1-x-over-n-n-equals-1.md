# 

Source: https://proofwiki.org/wiki/Product_of_Limits_of_Real_Sequences_(1_%2B_x_over_n)%5En_and_(1_-_x_over_n)%5En_equals_1

Theorem
Let $\sequence {a_n}$ be the sequence defined as:

$a_n = \paren {1 + \dfrac x n}^n$
Let $\sequence {b_n}$ be the sequence defined as:

$b_n = \paren {1 - \dfrac x n}^n$

Then the product of the limits of $\sequence {a_n}$ and $\sequence {b_n}$ equals $1$


Proof
From Real Sequence $\paren {1 + \dfrac x n}^n$ is Convergent, $\sequence {a_n}$ is convergent.
Setting $x \to -x$, it follows that $\sequence {\paren {1 + \dfrac {\paren {-x} } n}^n} = \sequence {b_n}$ is also convergent.
Then:














\(\ds \paren {1 - \dfrac x n}^n \paren {1 - \dfrac x n}^n\)

\(=\)







\(\ds \paren {\paren {1 - \dfrac x n} \paren {1 - \dfrac x n} }^n\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - \dfrac {x^2} {n^2} }^n\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \paren {\paren {1 - \dfrac {x^2} {n^2} }^{n^2} }^{1/n}\)









From Real Sequence $\paren {1 + \dfrac x n}^n$ is Convergent, $\sequence {\paren {1 - \dfrac {x^2} {n^2} }^{n^2} }$ is convergent to a positive limit.
It follows that:

$\exists a, b \in \R_{>0}: a < \paren {1 - \dfrac {x^2} {n^2} }^{n^2} < b$
for sufficiently large $n$.

Hence:

$a^{1/n} < \paren {1 - \dfrac x n}^n \paren {1 - \dfrac x n}^n < b^{1/n}$
The result follows from Limit of Root of Positive Real Number and the Squeeze Theorem for Real Sequences.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.7 \ (6)$




