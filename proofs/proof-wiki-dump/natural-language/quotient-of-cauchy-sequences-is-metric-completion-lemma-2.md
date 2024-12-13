# 

Source: https://proofwiki.org/wiki/Quotient_of_Cauchy_Sequences_is_Metric_Completion/Lemma_2

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $d$ be the metric induced by $\struct {R, \norm {\, \cdot \,} }$.

Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
Let $\CC \,\big / \NN$ be the quotient ring of Cauchy sequences of $\CC$ by the maximal ideal $\NN$.
Let $\norm {\, \cdot \,}: \CC \,\big / \NN \to \R_{\ge 0}$ be the norm on the quotient ring $\CC \,\big / \NN$ defined by:

$\ds \forall \sequence {x_n} + \NN: \norm {\sequence {x_n} + \NN} = \lim_{n \mathop \to \infty} \norm {x_n}$
Let $d'$ be the metric induced by $\struct {\CC \,\big / \NN, \norm {\, \cdot \,} }$

Let $\sim$ be the equivalence relation on $\CC$ defined by:

$\ds \sequence {x_n} \sim \sequence {y_n} \iff \lim_{n \mathop \to \infty} \map d {x_n, y_n} = 0$
Let $\tilde {\CC} = \CC  / \sim$ denote the set of equivalence classes under $\sim$.
For $\sequence {x_n} \in \CC$, let $\eqclass {x_n} {}$ denote the equivalence class containing $\sequence {x_n}$.
Let $\tilde d: \tilde {\CC} \times \tilde {\CC} \to \R_{\ge 0}$ be the metric defined by:

$\map {\tilde d} {\eqclass {x_n} {}, \eqclass {y_n} {} } = \lim_{n \mathop \to \infty} \map d {x_n, y_n}$

Then:

$\quad d' = \tilde d$


Proof
By Lemma 1 of Quotient of Cauchy Sequences is Metric Completion we have that:

$\CC \,\big / \NN = \tilde {\CC}$
Let $\eqclass {x_n} {}$ and $\eqclass {x_n} {}$ be equivalence classes in $\CC \,\big / \NN = \tilde {\CC}$.
Then:














\(\ds \map {d'} {\eqclass {x_n}{}, \eqclass {x_n}{} }\)

\(=\)







\(\ds \norm {\eqclass {x_n}{} - \eqclass {x_n}{} }\)





Definition of $d'$














\(\ds \)

\(=\)







\(\ds \norm {\eqclass {x_n - y_n}{} }\)





Definition of Quotient Ring Addition














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n - y_n}\)





Definition of Norm on Division Ring: $\norm {\,\cdot\,}$ on $\CC \,\big / \NN$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map d {x_n, y_n}\)





Definition of Metric Induced by Norm on Division Ring: by the norm $\norm {\,\cdot\,}$ on $R$














\(\ds \)

\(=\)







\(\ds \map {\tilde d} {\eqclass {x_n}{}, \eqclass {x_n}{} }\)





Definition of $\tilde d$



The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




