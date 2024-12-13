# 

Source: https://proofwiki.org/wiki/Rational_Sequence_Increasing_to_Real_Number

Theorem
Let $x \in \R$ be a real number.

Then there exists some increasing rational sequence that converges to $x$.


Proof
Let $\sequence {x_n}$ denote the sequence defined as:

$\forall n \in \N: x_n = \dfrac {\floor {n x} } n$
where $\floor {n x}$ denotes the floor of $n x$.

From Floor Function is Integer, $\floor {n x}$ is an integer.
Hence by definition of rational number, $\sequence {x_n}$ is a rational sequence.

From Real Number is between Floor Functions:

$n x - 1 < \floor {n x} \le n x$
Thus:

$\dfrac {n x - 1} n < \dfrac {\floor {n x} } n \le x$

Further:














\(\ds \lim_{n \mathop \to \infty} \frac {n x - 1} n\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {x - \frac 1 n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} x - \lim_{n \mathop \to \infty} \frac 1 n\)





Combined Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds x - 0\)





Quotient Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds x\)









From the Squeeze Theorem for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \frac {\floor {n x} } n = x$
From Peak Point Lemma, there is a monotone subsequence $\sequence {x_{n_k} }$ of $\sequence {x_n}$.

We have that $\sequence {x_n}$ is bounded above by $x$.
Hence $\sequence {x_{n_k} }$ is increasing.
From Limit of Subsequence equals Limit of Real Sequence, $\sequence {x_{n_k} }$ converges to $x$.
Hence the result.
$\blacksquare$





