# 

Source: https://proofwiki.org/wiki/General_Distributivity_Theorem/Lemma_2



Lemma
Let $\struct {R, \circ, *}$ be a ringoid.
Then for every sequence $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ of elements of $R$, and for every $b \in R$:

$\ds b * \paren {\sum_{j \mathop = 1}^n a_j} = \sum_{j \mathop = 1}^n \paren {b * a_j}$
where:

$\ds \sum_{j \mathop = 1}^n a_j$ is the summation $a_1 \circ a_2 \circ \cdots \circ a_n$
$n$ is a strictly positive integer: $n \in \Z_{> 0}$.


Proof
The proof proceeds by the Principle of Mathematical Induction.

Recall that as $\struct {R, \circ, *}$ is a ringoid, $*$ is distributive over $\circ$:

$\forall a, b, c \in R: a * \paren {b \circ c} = \paren {a * b} \circ \paren {a * c}$

For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\ds b * \paren {\sum_{j \mathop = 1}^n a_j} = \sum_{j \mathop = 1}^n \paren {b * a_j}$

We have that $\struct {R, \circ, *}$ is a ringoid, and so:

$\forall a, b, c \in R: a * \paren {b \circ c} = \paren {a * b} \circ \paren {a * c}$


Basis for the Induction
$\map P 1$ is true, as this just says:

$b * a_1 = b * a_1$

$\map P 2$ is the case:














\(\ds b * \paren {\sum_{j \mathop = 1}^2 a_j}\)

\(=\)







\(\ds b * \paren {a_1 \circ a_2}\)





Definition of Composite














\(\ds \)

\(=\)







\(\ds \paren {b * a_1} \circ \paren {b * a_2}\)





$*$ is distributive over $\circ$ as $\paren {R, \circ, *}$ is a ringoid














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^2 \paren {b * a_j}\)





Definition of Composite




This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds b * \paren {\sum_{j \mathop = 1}^k a_j} = \sum_{j \mathop = 1}^k \paren {b * a_j}$

Then we need to show:

$\ds b * \paren {\sum_{j \mathop = 1}^{k + 1} a_j} = \sum_{j \mathop = 1}^{k + 1} \paren {b * a_j}$


Induction Step
This is our induction step:














\(\ds b * \paren {\sum_{j \mathop = 1}^{k + 1} a_j}\)

\(=\)







\(\ds b * \paren {\paren {\sum_{j \mathop = 1}^k a_j} \circ a_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {b * \paren {\sum_{j \mathop = 1}^k a_j} } \circ \paren {b * a_{k + 1} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {\sum_{j \mathop = 1}^k \paren {a_j * b} } \circ \paren {b * a_{k + 1} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{k + 1} \paren {b * a_j}\)





Associativity of $\circ$ in $\paren {R, \circ, *}$




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{> 0}: b * \paren {\sum_{j \mathop = 1}^k a_j} = \sum_{j \mathop = 1}^k \paren {b * a_j}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.8$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $2$: Integers and natural numbers: $\S 2.1$: The integers: Exercise $2$




