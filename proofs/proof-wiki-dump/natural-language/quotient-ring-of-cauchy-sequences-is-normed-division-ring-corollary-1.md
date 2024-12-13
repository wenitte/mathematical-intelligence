# 

Source: https://proofwiki.org/wiki/Quotient_Ring_of_Cauchy_Sequences_is_Normed_Division_Ring/Corollary_1

Theorem
Let $\struct {F, \norm {\, \cdot \,} }$ be a valued field.

Let $\CC$ be the ring of Cauchy sequences over $F$
Let $\NN$ be the set of null sequences.
For all $\sequence {x_n} \in \CC$, let $\eqclass {x_n} {}$ denote the left coset $\sequence {x_n} + \NN$

Let $\norm {\, \cdot \,}_1: \CC \,\big / \NN \to \R_{\ge 0}$ be defined by:

$\ds \forall \eqclass {x_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n} {} }_1 = \lim_{n \mathop \to \infty} \norm {x_n}$

Then $\struct {\CC \,\big / \NN, \norm {\, \cdot \,}_1 }$ is a valued field.


Proof
By Quotient Ring of Cauchy Sequences is Normed Division Ring then $\CC \,\big / \NN$ is a normed division ring.
By Corollary to Quotient Ring of Cauchy Sequences is Normed Division Ring then $\CC \,\big / \NN$ is a field.
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.3$: Construction of the completion of a normed field, Theorem $1.21$




