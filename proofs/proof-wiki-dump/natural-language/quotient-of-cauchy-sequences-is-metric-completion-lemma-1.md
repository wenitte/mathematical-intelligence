# 

Source: https://proofwiki.org/wiki/Quotient_of_Cauchy_Sequences_is_Metric_Completion/Lemma_1

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $d$ be the metric induced by $\struct {R, \norm {\, \cdot \,} }$.

Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
Let $\CC \,\big / \NN$ be the quotient ring of Cauchy sequences of $\CC$ by the maximal ideal $\NN$.

Let $\sim$ be the equivalence relation on $\CC$ defined by:

$\ds \sequence {x_n} \sim \sequence {y_n} \iff \lim_{n \mathop \to \infty} \map d {x_n, y_n} = 0$
Let $\tilde \CC = \CC  / \sim$ denote the set of equivalence classes under $\sim$.
For $\sequence {x_n} \in \CC$, let $\eqclass {x_n} {}$ denote the equivalence class containing $\sequence {x_n}$.

Then:

$\quad \CC \,\big / \NN = \tilde \CC$


Proof
Let $\sequence {x_n}$ and $\sequence {y_n}$ be Cauchy sequences in $\CC$.
Then:














\(\ds \sequence {x_n} + \NN = \sequence {y_n} + \NN\)

\(\leadstoandfrom\)







\(\ds \sequence {x_n} - \sequence {y_n} \in \NN\)





Cosets are Equal iff Product with Inverse in Subgroup














\(\ds \)

\(\leadstoandfrom\)







\(\ds \lim_{n \mathop \to \infty} x_n - y_n = 0_R\)





Definition of $\NN$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n - y_n} = 0\)





Definition of Convergent Sequence in Normed Division Ring














\(\ds \)

\(\leadstoandfrom\)







\(\ds \lim_{n \mathop \to \infty} \map d {x_n - y_n} = 0\)





Definition of Metric Induced by Norm on Division Ring














\(\ds \)

\(\leadstoandfrom\)







\(\ds \sequence {x_n} \sim \sequence {y_n}\)





Definition of Equivalence Relation $\sim$




Hence:

$\sequence {x_n}$ and $\sequence {y_n}$ belong to the same equivalence class in $\CC \,\big / \NN$ if and only if $\sequence {x_n}$ and $\sequence {y_n}$ belong to the same equivalence class in $\tilde \CC$.
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




