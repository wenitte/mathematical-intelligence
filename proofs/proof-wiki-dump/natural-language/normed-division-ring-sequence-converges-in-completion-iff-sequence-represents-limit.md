# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Sequence_Converges_in_Completion_iff_Sequence_Represents_Limit


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
Let $y \in Q$.

Then:

$\sequence{\map \phi {x_n}}$ converges to $y$ if and only if $\sequence{x_n} \in y$
Proof
Lemma 1
$\sequence{x_n}$ is a Cauchy sequence if and only if $\sequence{\map \phi {x_n}}$ is a Cauchy sequence
$\Box$

Lemma 2
For each $n \in \N$:

$\norm{\map \phi {x_n} - y}_Q = \ds \lim_{m \mathop \to \infty} \norm{x_n - x_m}_R$
$\Box$

Necessary Condition
Let $\sequence{\map \phi {x_n}}$ converge to $y$.
From Convergent Sequence in Normed Division Ring is Cauchy Sequence:

$\sequence{\map \phi {x_n}}$ is a Cauchy Sequence
From Lemma 1:

$\sequence{x_n}$ is a Cauchy Sequence

Let $y'$ be the left coset that contains $\sequence{x_n}$.
From sufficient condition:

$\ds \lim_{n \mathop \to \infty} \norm{\map \phi {x_n} }_Q = y'$
From Convergent Sequence in Metric Space has Unique Limit:

$y = y'$
$\Box$

Sufficient Condition
Let $\sequence{x_n} \in y$.
Then $\sequence{x_n}$ is a Cauchy Sequence by definition of $y$.

Let $\epsilon > 0$ be arbitrary.
By definition of a Cauchy sequence:

$\exists N \in \N: \forall n, m \ge N : \norm{x_n - x_m}_R < \dfrac \epsilon 2$

Let $n \ge N$ be arbitrary.
From Difference Rule for Cauchy Sequences in Normed Division Ring, the sequence $\sequence{x_n - x_m}_{m \in \N}$ is a Cauchy sequence.
Hence:

$\forall m \ge N : \norm{x_n - x_m}_R < \dfrac \epsilon 2$
From Norm Sequence of Cauchy Sequence has Limit:

$\ds \lim_{m \mathop \to \infty} \norm{x_n - x_m}_R$ exists
From Inequality Rule for Real Sequences:

$\ds \lim_{m \mathop \to \infty} \norm{x_n - x_m}_R \le \dfrac \epsilon 2 < \epsilon$
From Lemma 2:

$\norm{\map \phi {x_n} - y}_Q < \epsilon$
By definition of convergent sequence:

$\ds \lim_{n \mathop \to \infty} \norm{\map \phi {x_n} }_Q = y$
$\blacksquare$





