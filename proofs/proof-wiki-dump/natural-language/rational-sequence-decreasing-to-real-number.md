# 

Source: https://proofwiki.org/wiki/Rational_Sequence_Decreasing_to_Real_Number

Theorem
Let $x \in \R$ be a real number.

Then there exists some decreasing rational sequence that converges to $x$.


Proof
Let $\sequence {x_n}$ denote the sequence defined as:

$\forall n \in \N : x_n = \dfrac {\ceiling {n x} } n$
where $\ceiling {n x}$ denotes the ceiling of $n x$.

From Ceiling Function is Integer, $\ceiling {n x}$ is an integer.
Hence by definition of rational number, $\sequence {x_n}$ is a rational sequence.

From Real Number is between Ceiling Functions:

$n x < \ceiling {n x} \le n x + 1$
Thus:

$x < \dfrac {\ceiling {n x} } n \le \dfrac {n x + 1} n$

Further:














\(\ds \lim_{n \mathop \to \infty} \frac {nx + 1} n\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \paren {x + \frac 1 n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} x + \lim_{n \mathop \to \infty} \frac 1 n\)





Combined Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds x + 0\)





Quotient Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds x\)









Thus, from the Squeeze Theorem for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \frac {\ceiling {n x} } n = x$

From Peak Point Lemma, there is a monotone subsequence $\sequence {x_{n_k} }$ of $\sequence {x_n}$.
We have that $\sequence {x_n}$ is bounded below by $x$.
Hence $\sequence {x_{n_k} }$ is decreasing.
From Limit of Subsequence equals Limit of Real Sequence, $\sequence {x_{n_k} }$ converges to $x$.
Hence the result.
$\blacksquare$





