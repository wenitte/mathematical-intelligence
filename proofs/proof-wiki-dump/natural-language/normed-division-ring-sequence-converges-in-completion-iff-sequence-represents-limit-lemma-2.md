# 

Source: https://proofwiki.org/wiki/Normed_Division_Ring_Sequence_Converges_in_Completion_iff_Sequence_Represents_Limit/Lemma_2


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
where $\tuple {a, a, a, \ldots} + \NN$ is the left coset in $Q$ that contains the constant sequence $\sequence {a, a, a, \ldots} $.

Let $\sequence{x_n}$ be a sequence in $R$.
Let $y$ be the left coset in $Q$ that contains $\sequence{x_n}$.

For each $n \in \N$:

$\norm{\map \phi {x_n} - y}_Q = \ds \lim_{m \mathop \to \infty} \norm{x_n - x_m}_R$


Proof
Let $n \in \N$.
We have:

$\tuple {x_n, x_n, x_n, \ldots} \in \map \phi {x_n}$
$\sequence{x_m} \in y$
From Element of Group is in Unique Coset of Subgroup:

$\tuple {x_n, x_n, x_n, \ldots}  + \NN = \map \phi {x_n}$
$\sequence{x_m} + \NN = y$

Then:














\(\ds \sequence{x_n - x_m}_{m \in \N} + \NN\)

\(=\)







\(\ds \paren{\tuple {x_n, x_n, x_n, \ldots} - \sequence{x_m}_{m \in \N} } + \NN\)





Difference Rule for Cauchy Sequences in Normed Division Ring














\(\ds \)

\(=\)







\(\ds \paren{\tuple {x_n, x_n, x_n, \ldots} + \NN} - \paren{\sequence{x_m}_{m \in \N} + \NN}\)





Definition of Quotient Ring














\(\ds \)

\(=\)







\(\ds \map \phi {x_n} - y\)









From Element of Group is in its own Coset:

$\sequence{x_n - x_m}_{m \in \N} \in \map \phi {x_n} - y$

By definition of induced norm:

$\norm{\map \phi {x_n} - y}_Q = \ds \lim_{m \mathop \to \infty} \norm{x_n - x_m}_R$
$\blacksquare$





