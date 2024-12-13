# 

Source: https://proofwiki.org/wiki/Null_Sequences_form_Maximal_Left_and_Right_Ideal/Lemma_6

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
Then:

$\quad \forall \sequence {x_n} \in \NN, \sequence {y_n} \in \CC: \sequence {x_n} \sequence {y_n} \in \NN, \sequence {y_n} \sequence {x_n} \in \NN$


Proof
Let $\ds \lim_{n \mathop \to \infty} x_n = 0$
By the definition of the product on the ring of Cauchy sequences then:

$\sequence {x_n} \sequence {y_n} = \sequence {x_n y_n}$
$\sequence {y_n} \sequence {x_n} = \sequence {y_n x_n}$
By Product of Sequence Converges to Zero with Cauchy Sequence Converges to Zero:

$\ds \lim_{n \mathop \to \infty} x_n y_n = 0$
$\ds \lim_{n \mathop \to \infty} y_n x_n = 0$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




