# 

Source: https://proofwiki.org/wiki/Quotient_Ring_of_Cauchy_Sequences_is_Normed_Division_Ring



Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.

Let $\CC$ be the ring of Cauchy sequences over $R$
Let $\NN$ be the set of null sequences.
For all $\sequence {x_n} \in \CC$, let $\eqclass {x_n} {}$ denote the left coset $\sequence {x_n} + \NN$

Let $\norm {\, \cdot \,}_1: \CC \,\big / \NN \to \R_{\ge 0}$ be defined by:

$\ds \forall \eqclass {x_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n} {} }_1 = \lim_{n \mathop \to \infty} \norm {x_n}$

Then:

$\struct {\CC \,\big / \NN, \norm {\, \cdot \,}_1 }$ is a normed division ring.


Corollary
Let $\struct {R, \norm {\, \cdot \,} }$ be a valued field.

Then $\struct {\CC \,\big / \NN, \norm {\, \cdot \,}_1 }$ is a valued field.


Proof
By Quotient Ring of Cauchy Sequences is Division Ring then $\CC \,\big / \NN$ is a  division ring.
It remains to be proved that:

$\norm {\, \cdot \,}_1$ is well-defined
$\norm {\, \cdot \,}_1$ satisfies the norm axioms.


Lemma 1
$\norm {\, \cdot \,}_1$ is well-defined.
That is, 

$(1): \quad \ds \forall \eqclass {x_n}{}: \lim_{n \mathop \to \infty} \norm{x_n}$ exists
$(2): \quad \ds \forall \eqclass {x_n}{}, \eqclass {y_n}{} \in \CC \,\big / \NN: \eqclass {x_n}{} = \eqclass {y_n}{} \implies \lim_{n \mathop \to \infty} \norm{x_n} = \lim_{n \mathop \to \infty} \norm{y_n}$
$\Box$


Lemma 2
$\norm {\, \cdot \,}_1$ satisfies Norm Axiom $\text N 1$: Positive Definiteness
That is:

$\forall \eqclass {x_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n} {} }_1 = 0 \iff \eqclass {x_n} {} = \eqclass {0_R} {} $
$\Box$


Lemma 3
$\norm {\, \cdot \,}_1$ satisfies the Norm Axiom $\text N 2$: Multiplicativity.
That is:

$\forall \eqclass {x_n} {}, \eqclass {y_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n} {} \eqclass {y_n} {} }_1 = \norm {\eqclass {x_n} {} }_1 \times \norm {\eqclass {y_n} {} }_1$
$\Box$


Lemma 4
$\norm {\, \cdot \,}_1$ satisfies the Norm Axiom $\text N 3$: Triangle Inequality.
That is:

$\forall \eqclass {x_n} {}, \eqclass {y_n} {} \in \CC \,\big / \NN: \norm {\eqclass {x_n} {} +  \eqclass {y_n} {} }_1 \le \norm {\eqclass {x_n} {} }_1 + \norm {\eqclass {y_n} {} }_1$
$\Box$

The result follows.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.2$: Completions: Definition $3.2.11$, Problems $81$, $82$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.3$: Construction of the completion of a normed field: Theorem $1.21$




