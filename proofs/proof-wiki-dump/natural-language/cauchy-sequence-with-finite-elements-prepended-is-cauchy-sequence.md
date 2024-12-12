# 

Source: https://proofwiki.org/wiki/Cauchy_Sequence_with_Finite_Elements_Prepended_is_Cauchy_Sequence

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\sequence {x_n}$ be a sequence in $R$.
Let $N \in \N$
Let $\sequence {y_n}$ be the sequence defined by:

$\forall n, y_n = x_{N + n}$
Let $\sequence {y_n}$ be a Cauchy sequence in $R$.
Then:

$\sequence {x_n}$ is a Cauchy sequence in $R$.


Proof
Given $\epsilon > 0$:
By the definition of a Cauchy sequence then:

$\exists N': \forall n, m > N', \norm {y_n - y_m} < \epsilon$
Hence $\forall n, m > \paren {N' + N}$:














\(\ds \norm {x_n - x_m }\)

\(=\)







\(\ds \norm {y_{n - N} - y_{m - N} }\)





$n, m > N$














\(\ds \)

\(<\)







\(\ds \epsilon\)





$n - N, m - N > N'$



The result follows.
$\blacksquare$


Sources




