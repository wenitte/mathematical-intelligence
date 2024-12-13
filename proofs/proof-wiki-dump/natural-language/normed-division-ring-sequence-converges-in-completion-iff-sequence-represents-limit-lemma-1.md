# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Sequence_Converges_in_Completion_iff_Sequence_Represents_Limit/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {R, \norm{\,\cdot\,}_R}$ be a normed division ring.

Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
Let $Q = \CC  / \NN$ where $\CC  / \NN$ denotes a quotient ring.

Let $\norm {\, \cdot \,}_Q: Q \to \R_{\ge 0}$ be the norm on the quotient ring $Q$ defined by:

$\ds \forall \sequence {x_n} + \NN: \norm {\sequence {x_n} + \NN }_Q = \lim_{n \mathop \to \infty} \norm{x_n}_R$

Let $\phi: R \to Q$ be the mapping from $R$ to the quotient ring $Q$ defined by:

$\forall a \in R: \map \phi a = \tuple {a, a, a, \ldots} + \NN$
where $\sequence {a, a, a, \ldots} + \NN$ is the left coset in $Q$ that contains the constant sequence $\sequence {a, a, a, \ldots} $.
Let $\sequence{x_n}$ be a sequence in $R$.

Then:

$\sequence{x_n}$ is a Cauchy sequence if and only if $\sequence{\map \phi {x_n}}$ is a Cauchy sequence


Proof
From Embedding Division Ring into Quotient Ring of Cauchy Sequences:

the mapping $\phi: R \to Q$ is a distance-preserving monomorphism

We have














\(\ds \)

\(\)







\(\ds \sequence{x_n} \text{is a Cauchy sequence}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \forall \epsilon > 0 : \exists N \in \N : \forall m, n \ge N: \norm{x_n - x_m}_Q < \epsilon\)





Definition of Cauchy Sequence








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \forall \epsilon > 0 : \exists N \in \N : \forall m, n \ge N: \norm{\map \phi {x_n} - \map \phi {x_m} }_Q < \epsilon\)





Definition of Distance-Preserving Mapping








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \sequence{x_n} \text{is a Cauchy sequence}\)





Definition of Cauchy Sequence



$\blacksquare$





