# 

Source: https://proofwiki.org/wiki/Quotient_Ring_of_Cauchy_Sequences_is_Normed_Division_Ring/Lemma_3

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.

Let $\CC$ be the ring of Cauchy sequences over $R$.
Let $\NN$ be the set of null sequences.
For all $\sequence {x_n} \in \CC$, let $\eqclass {x_n} {}$ denote the left coset $\sequence {x_n} + \NN$.

Let $\norm {\, \cdot \,}_1: \CC \,\big / \NN \to \R_{\ge 0}$ be defined by:

$\ds \forall \eqclass {x_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n}{} }_1 = \lim_{n \mathop \to \infty} \norm {x_n}$

Then:

$\norm {\, \cdot \,}_1$ satisfies the Norm Axiom $\text N 2$: Multiplicativity.
That is:

$\forall \eqclass {x_n} {}, \eqclass {y_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n} {} \eqclass {y_n} {} }_1 = \norm {\eqclass {x_n} {} }_1 \times \norm {\eqclass {y_n} {} }_1$


Proof
Let $\eqclass {x_n} {}, \eqclass {y_n} {} \in \CC \,\big / \NN$














\(\ds \norm {\eqclass {x_n} {} \eqclass {y_n} {} }_1\)

\(=\)







\(\ds \norm {\eqclass {x_n y_n} {} }_1\)





Multiplication on quotient ring














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n y_n}\)





Definition of $\norm {\,\cdot\,}_1$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n} \norm {y_n}\)





Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n} \times \lim_{n \mathop \to \infty} \norm {y_n}\)





Product Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \norm {\eqclass {x_n} {} }_1 \times \norm {\eqclass {y_n} {} }_1\)





Definition of $\norm {\,\cdot\,}_1$



$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




