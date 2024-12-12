# 

Source: https://proofwiki.org/wiki/Completion_of_Normed_Division_Ring

Theorem
Let $\struct {R, \norm {\, \cdot \,}_R }$ be a normed division ring.
Let $\CC$ be the ring of Cauchy sequences over $R$.
Let $\NN$ be the set of null sequences.
Let $Q = \CC  / \NN$ where $\CC  / \NN$ denotes a quotient ring.
Let $\norm {\, \cdot \,}_Q: Q \to \R_{\ge 0}$ be the norm on the quotient ring $Q$ defined by:

$\ds \forall \sequence {x_n} + \NN: \norm {\sequence {x_n} + \NN }_Q = \lim_{n \mathop \to \infty} \norm{x_n}_R$

Then:

$\struct {Q, \norm {\, \cdot \,}_Q}$ is a normed division ring completion of $\struct {R, \norm {\, \cdot \,}_R }$


Proof
From Quotient Ring of Cauchy Sequences is Normed Division Ring:

$\struct {Q, \norm {\, \cdot \,}_Q}$ is a normed division ring.
Let $d_R$ be the metric induced by $\struct {R, \norm {\, \cdot \,}_R }$.
Let $d_Q$ be the metric induced by $\struct {Q, \norm {\, \cdot \,}_Q}$.
From Quotient of Cauchy Sequences is Metric Completion, $\struct {Q, d_Q}$ is the metric completion of $\struct {R, d_R}$.
Let $\phi: R \to Q$ be the mapping from $R$ to the quotient ring $Q$ defined by:

$\forall a \in R: \map \phi a = \tuple {a, a, a, \ldots} + \NN$
where $\sequence {a, a, a, \ldots} + \NN$ is the left coset in $Q$ that contains the constant sequence $\sequence {a, a, a, \ldots} $.
From Quotient of Cauchy Sequences is Metric Completion, $\map \phi R$ is a dense subset of $\struct {Q, d_Q }$.
From Embedding Division Ring into Quotient Ring of Cauchy Sequences, $\phi$ is a distance-preserving ring monomorphism.
By the definition of a normed division ring completion, $\struct {Q, \norm {\, \cdot \,}_Q }$ is a normed division ring completion of $\struct {R, \norm {\, \cdot \,}_R }$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




