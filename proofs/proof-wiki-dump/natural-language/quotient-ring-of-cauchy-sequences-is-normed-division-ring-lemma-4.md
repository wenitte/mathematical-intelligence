# 

Source: https://proofwiki.org/wiki/Quotient_Ring_of_Cauchy_Sequences_is_Normed_Division_Ring/Lemma_4

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.

Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
For all $\sequence {x_n} \in \CC$, let $\eqclass {x_n} {}$ denote the left coset $\sequence {x_n} + \NN$

Let $\norm {\, \cdot \,}_1: \CC \,\big / \NN \to \R_{\ge 0}$ be defined by:

$\ds \forall \eqclass {x_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n} {} }_1 = \lim_{n \mathop \to \infty} \norm {x_n}$

Then:

$\norm {\, \cdot \,}_1$ satisfies the Norm Axiom $\text N 3$: Triangle Inequality.
That is:

$\forall \eqclass {x_n} {}, \eqclass {y_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n} {} +  \eqclass {y_n} {} }_1 \le \norm {\eqclass {x_n} {} }_1 + \norm {\eqclass {y_n} {} }_1$


Proof
Let $\eqclass {x_n} {}, \eqclass {y_n} {} \in \CC \,\big / \NN$














\(\ds \norm {\eqclass {x_n} {} + \eqclass {y_n} {} } _1\)

\(=\)







\(\ds \norm {\eqclass {x_n + y_n} {} }_1\)





Addition on quotient ring














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n + y_n}\)





Definition of $\norm {\,\cdot\,}_1$



By Norm Axiom $\text N 3$: Triangle Inequality:

$\forall n: \norm {x_n + y_n} \le \norm {x_n} + \norm {y_n}$
So:














\(\ds \lim_{n \mathop \to \infty} \norm {x_n + y_n}\)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n} + \norm {y_n}\)





Inequality Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \norm {x_n} + \lim_{n \mathop \to \infty} \norm {y_n}\)





Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \norm {\eqclass {x_n} {} }_1 + \norm {\eqclass {y_n} {} } _1\)





Definition of $\norm {\,\cdot\,}_1$



$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.2$: Completions




