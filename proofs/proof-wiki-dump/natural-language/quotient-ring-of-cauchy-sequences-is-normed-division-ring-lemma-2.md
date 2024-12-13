# 

Source: https://proofwiki.org/wiki/Quotient_Ring_of_Cauchy_Sequences_is_Normed_Division_Ring/Lemma_2

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.

Let $\CC$ be the ring of Cauchy sequences over $R$.
Let $\NN$ be the set of null sequences.
For all $\sequence {x_n} \in \CC$, let $\eqclass {x_n} {}$ denote the left coset $\sequence {x_n} + \NN$.

Let $\norm {\, \cdot \,}_1: \CC \,\big / \NN \to \R_{\ge 0}$ be defined by:

$\ds \forall \eqclass {x_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n}{} }_1 = \lim_{n \mathop \to \infty} \norm{x_n}$

Then:

$\norm {\, \cdot \,}_1$ satisfies Norm Axiom $\text N 1$: Positive Definiteness
That is:

$\forall \eqclass {x_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n} {} }_1 = 0 \iff \eqclass {x_n} {} = \eqclass {0_R} {} $


Proof
By Quotient Ring of Cauchy Sequences is Division Ring the zero of $\CC \,\big / \NN$ is $\eqclass {0_R} {}$.














\(\ds \norm {\eqclass {0_R} {} }_1 = 0\)

\(\leadstoandfrom\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n} = 0\)





Definition of $\norm {\,\cdot\,}_1$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \sequence {x_n} \in \NN\)





Definition of $\NN$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \eqclass {x_n} {} = \eqclass {0_R} {}\)





Left Cosets are Equal iff Product with Inverse in Subgroup



The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




