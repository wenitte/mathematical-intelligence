# 

Source: https://proofwiki.org/wiki/Quotient_of_Cauchy_Sequences_is_Metric_Completion



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $d$ be the metric induced by $\struct {R, \norm {\, \cdot \,} }$.

Let $\CC$ be the ring of Cauchy sequences over $R$.
Let $\NN$ be the set of null sequences in $R$.
Let $\CC \,\big / \NN$ be the quotient ring of Cauchy sequences of $\CC$ by the maximal ideal $\NN$.
Let $\norm {\, \cdot \,}: \CC \,\big / \NN \to \R_{\ge 0}$ be the norm on the quotient ring $\CC \,\big / \NN$ defined by:

$\ds \forall \sequence {x_n} + \NN: \norm {\sequence {x_n} + \NN} = \lim_{n \mathop \to \infty} \norm{x_n}$
Let $d'$ be the metric induced by $\struct {\CC \,\big / \NN, \norm {\, \cdot \,} }$

Let $\phi: R \to \CC \,\big / \NN$ be the mapping from $R$ to the quotient ring $\CC \,\big / \NN$ defined by:

$\forall a \in R: \map \phi a = \sequence {a, a, a, \ldots} + \NN$
where $\sequence {a, a, a, \ldots} + \NN$ is the left coset in $\CC \, \big / \NN$ that contains the constant sequence $\sequence {a, a, a, \ldots}$.

Then:

$\struct {\CC \,\big / \NN, d'}$ is the metric completion of $\struct {R,d}$
and:

$\map \phi R$ is a dense subset of $\CC \,\big / \NN$


Proof
By the definition of the metric induced by a norm then:

a sequence $\sequence {x_n}$ is a Cauchy sequence in $\struct {R, \norm {\, \cdot \,} }$ if and only if $\sequence {x_n}$ is a Cauchy sequence in $\struct {R, d}$.
So $\CC$ is the set of Cauchy sequences in $\struct {R, d}$.

Let $\sim$ be the equivalence relation on $\CC$ defined by:

$\ds \sequence {x_n} \sim \sequence {y_n} \iff \lim_{n \mathop \to \infty} \map d {x_n, y_n} = 0$
Let $\tilde {\CC} = \CC  / \sim$ denote the set of equivalence classes under $\sim$.
For $\sequence {x_n} \in \CC$, let $\eqclass {x_n} {}$ denote the equivalence class containing $\sequence {x_n}$.


Lemma 1
$\quad \CC \,\big / \NN = \tilde \CC$
$\Box$

Let $\tilde d: \tilde {\CC} \times \tilde {\CC} \to \R_{\ge 0}$ be the metric defined by:

$\ds \map {\tilde d} {\eqclass {x_n} {}, \eqclass {y_n} {} } = \lim_{n \mathop \to \infty} \map d {x_n, y_n}$
By Completion of a Metric Space then:

$\struct {\tilde {\CC}, \tilde d}$ is the metric completion of $\struct {R, d}$.


Lemma 2
$\quad d' = \tilde d$
$\Box$

Let $\tilde \phi: R \to \tilde {\CC}$ be the mapping defined by:

$\map {\tilde \phi} a = \eqclass {a, a, a, \dotsc} {}$
where $\eqclass {a, a, a, \dotsc} {}$ denotes the equivalence class containing the constant sequence $\sequence {a, a, a, \dotsc}$.
By Completion of a Metric Space then:

$\map {\tilde \phi} R$ is a dense subset of $\tilde {\CC}$.

By Lemma 1 then:

$\forall \sequence {x_n} \in \CC: \sequence {x_n} + \NN = \eqclass {x_n} {}$
In particular:

$\forall a \in R: \sequence {a, a, a, \dotsc} + \NN = \eqclass {a, a, a, \dotsc} {}$
That is:

$\forall a \in R: \map \phi a = \map {\tilde \phi} a$
Hence $\phi = \tilde \phi$.
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.2$: Completions: Proposition $3.2.12$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.3$: Construction of the completion of a normed field: Theorem $1.22$




