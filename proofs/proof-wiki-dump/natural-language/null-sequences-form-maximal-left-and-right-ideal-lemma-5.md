# 

Source: https://proofwiki.org/wiki/Null_Sequences_form_Maximal_Left_and_Right_Ideal/Lemma_5

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
Then:

$\forall \sequence {x_n}, \sequence {y_n} \in \NN: \sequence {x_n} + \paren {-\sequence {y_n} } \in \NN$


Proof
Let $\ds \lim_{n \mathop \to \infty} x_n = 0$ and $\ds \lim_{n \mathop \to \infty} y_n = 0$.
The sequence $\sequence {x_n} + \paren {-\sequence {y_n} } = \sequence {x_n - y_n}$.
From Difference Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} x_n - y_n = 0 - 0 = 0$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




