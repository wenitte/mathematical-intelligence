# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Cauchy_Sequences/Quotient_Rule

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring with zero $0$.
Let $\sequence {x_n}$ and $\sequence {y_n}$ be Cauchy sequences in $R$.
Suppose $\sequence {y_n}$ does not converge to $0$.
Then:

$\exists K \in \N: \forall n > K : y_n \ne 0$
and the sequences:

$\sequence { {x_{K + n} } \paren {y_{K + n} }^{-1} }_{n \mathop \in \N}$ and $\sequence {\paren {y_{K + n} }^{-1} {x_{K + n} } }_{n \mathop \in \N}$ are well-defined and Cauchy sequences.


Proof
By the Inverse Rule for Normed Division Ring:

$\exists K \in \N : \forall n > K : y_n \ne 0$.
and the sequence:

$\sequence {\paren {x_{K + n} }^{-1} }_{n \mathop \in \N}$ is well-defined and a Cauchy sequence.
By Subsequence of Cauchy Sequence in Normed Division Ring is Cauchy Sequence, $\sequence {x_{K + n} }_{n \mathop \in \N}$ is a Cauchy sequence.
By Product Rule for Normed Division Ring Sequences:

the sequences $\sequence { {x_{K + n} } \paren {y_{K + n} }^{-1} }_{n \mathop \in \N}$ and $\sequence {\paren {y_{K + n} }^{-1} {x_{K + n} } }_{n \mathop \in \N}$ are Cauchy sequences.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




