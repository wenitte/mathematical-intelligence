# 

Source: https://proofwiki.org/wiki/Null_Sequences_form_Maximal_Left_and_Right_Ideal/Lemma_8

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
Then:

There is no left ideal $\JJ$ of $\CC$ such that $\NN \subsetneq \JJ \subsetneq \CC$


Proof
Let $\JJ$ be a left ideal of $\CC$ such that $\NN \subsetneq \JJ \subseteq \CC$.
It will be shown that $\JJ$ = $\CC$, from which the result will follow.
Let $\sequence {x_n} \in \JJ \setminus \NN$
By Inverse Rule for Cauchy sequences then 

$\exists K \in \N: \sequence { \paren {x_{K + n} }^{-1} }_{n \mathop \in \N}$ is a Cauchy sequence.
Let $\sequence {y_n}$ be the sequence defined by:

$y_n = \begin {cases} 0 & : n \le K \\ \paren {x_n}^{-1} & : n > K \end {cases}$
By Cauchy Sequence with Finite Elements Prepended is Cauchy Sequence then $\sequence {y_n} \in \CC$
By the definition of a left ideal the product $\sequence {y_n} \sequence {x_n} = \sequence {y_n x_n} \in \JJ$
By the definition of $\sequence {y_n}$ then:

$y_n x_n = \begin {cases} 0 & : n \le K \\ 1 & : n > K \end {cases}$
Let $\mathcal 1 = \tuple {1, 1, 1, \dotsc}$ be the unity of $\CC$
Then $\mathcal 1 - \sequence {y_n} \sequence {x_n}$ is the sequence $\sequence {w_n}$ defined by

$w_n = \begin{cases} 1 & : n \le K \\ 0 & : n > K \end {cases}$
By Convergent Sequence with Finite Elements Prepended is Convergent Sequence then $\sequence {w_n}$ is convergent to 0.
So $\sequence {w_n} \in \NN \subsetneq \JJ$
Since $\sequence {y_n} \sequence {x_n}, \sequence {w_n} \in \JJ$ by the definition of a ring ideal then:

$\sequence {w_n} + \sequence {y_n} \sequence {x_n} = \mathcal 1 \in \JJ$
By the definition of a left ideal then:

$\forall \sequence {a_n} \in \CC, \sequence {a_n} \circ \mathcal 1 = \sequence {a_n} \in \JJ$
Hence $\JJ = \CC$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




