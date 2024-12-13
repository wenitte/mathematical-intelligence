# 

Source: https://proofwiki.org/wiki/Quotient_Ring_of_Cauchy_Sequences_is_Normed_Division_Ring/Lemma_1

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.

Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
For all $\sequence {x_n} \in \CC$, let $\eqclass {x_n}{}$ denote the left coset $\sequence {x_n} + \NN$

Let $\norm {\, \cdot \,}_1: \CC \, \big / \NN \to \R_{\ge 0}$ be defined by:

$\ds \forall \eqclass {x_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n}{} }_1 = \lim_{n \mathop \to \infty} \norm {x_n}$

Then:

$\norm {\, \cdot \,}_1$ is well-defined.
That is, 

$(1): \quad \ds \forall \eqclass {x_n}{}: \lim_{n \mathop \to \infty} \norm{x_n}$ exists
$(2): \quad \ds \forall \eqclass {x_n}{}, \eqclass {y_n}{} \in \CC \,\big / \NN: \eqclass {x_n}{} = \eqclass {y_n}{} \implies \lim_{n \mathop \to \infty} \norm{x_n} = \lim_{n \mathop \to \infty} \norm{y_n}$


Proof
By Norm Sequence of Cauchy Sequence has Limit then:

for each $\eqclass {x_n}{}$ the $\ds \lim_{n \mathop \to \infty} \norm{x_n}$ exists.
Suppose $\eqclass {x_n}{} = \eqclass {y_n}{}$.
By Left Cosets are Equal iff Difference in Subgroup then:

$\sequence {x_n} - \sequence {y_n} =  \sequence {x_n - y_n} \in \NN$
By Equivalent Cauchy Sequences have Equal Limits of Norm Sequences then:

$\ds \lim_{n \mathop \to \infty} \norm{x_n} = \lim_{n \mathop \to \infty} \norm{y_n}$
Hence:

$\ds \norm {\eqclass {x_n}{} }_1 = \lim_{n \mathop \to \infty} \norm{x_n} = \lim_{n \mathop \to \infty} \norm{y_n} =  \norm {\eqclass {x_n}{} }_1$
The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




