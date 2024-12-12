# 

Source: https://proofwiki.org/wiki/Eventually_Constant_Sequence_Converges_to_Constant

Theorem
Let $\struct {R, \norm{\,\cdot\,}}$ be a normed division ring.
Let $\lambda \in R$.
Let $\sequence {x_n}$ be a sequence in $R$ such that:

$\exists N \in \R_{>0} : \forall n \ge N: x_n = \lambda$

Then:

$\ds \lim_{n \mathop \to \infty} x_n = \lambda$


Proof
Let $\sequence {y_n}$ be the subsequence of $\sequence {\norm {x_n} }$ defined as:

$\forall n: y_n = x_{N + n}$
The $\sequence {y_n}$ is the constant sequence $\tuple {\lambda, \lambda, \lambda, \dotsc}$.

Then:














\(\ds \lim_{n \mathop \to \infty} x_n\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} y_n\)





Limit of Subsequence equals Limit of Sequence in Normed Division Ring














\(\ds \)

\(=\)







\(\ds \lambda\)





Constant Sequence Converges to Constant in Normed Division Ring



$\blacksquare$





