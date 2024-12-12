# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Sequences/Normed_Division_Ring/Quotient_Rule

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with zero: $0$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be sequences in $R$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be convergent in the norm $\norm {\, \cdot \,}$ to the following limits:

$\ds \lim_{n \mathop \to \infty} x_n = l$
$\ds \lim_{n \mathop \to \infty} y_n = m$

Suppose $m \ne 0$.
Then:

$\exists k \in \N : \forall n \in \N: y_{k + n} \ne 0$
and the sequences:

$\sequence {x_{k + n} \ {y_{k + n} }^{-1} }$ and $\sequence { {y_{k + n} }^{-1} \ x_{k + n} }$ are well-defined and convergent with:
$\ds \lim_{n \mathop \to \infty} x_{k + n} \ {y_{k + n} }^{-1} = l m^{-1}$
$\ds \lim_{n \mathop \to \infty} {y_{k + n} }^{-1} \ x_{k + n} = m^{-1} l$


Proof
From Inverse Rule for Sequences in Normed Division Ring:

$\exists k \in \N : \forall n \in \N : y_{k + n} \ne 0$
and the sequence:

$\sequence { {y_{k + n} }^{-1} }$
is well-defined and convergent with:

$\ds \lim_{n \mathop \to \infty} {y_{k + n} }^{-1} = m^{-1}$
From Limit of Subsequence equals Limit of Sequence, $\sequence {x_{k + n} }$ is convergent with:

$\ds \lim_{n \mathop \to \infty} x_{k + n} = l$
From Product Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} x_{k + n} \ {y_{k + n} }^{-1} = l m^{-1}$
$\ds \lim_{n \mathop \to \infty} {y_{k + n} }^{-1} \ x_{k + n} = m^{-1} l$
$\blacksquare$





