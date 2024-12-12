# 

Source: https://proofwiki.org/wiki/General_Distributivity_Theorem/Lemma_1



Lemma
Let $\struct {R, \circ, *}$ be a ringoid.
Then for every sequence $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ of elements of $R$, and for every $b \in R$:

$\ds \paren {\sum_{j \mathop = 1}^n a_j} * b = \sum_{j \mathop = 1}^n \paren {a_j * b}$
where:

$\ds \sum_{j \mathop = 1}^n a_j$ is the composite $a_1 \circ a_2 \circ \cdots \circ a_n$
$n$ is a strictly positive integer: $n \in \Z_{> 0}$.


Proof
The proof proceeds by the Principle of Mathematical Induction.

Recall that as $\struct {R, \circ, *}$ is a ringoid, $*$ is distributive over $\circ$:

$\forall a, b, c \in S: \paren {a \circ b} * c = \paren {a * c} \circ \paren {b * c}$

For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\ds \paren {\sum_{j \mathop = 1}^n a_j} * b = \sum_{j \mathop = 1}^n \paren {a_j * b}$


Basis for the Induction
$P(1)$ is true, as this just says:

$a_1 * b = a_1 * b$

$P(2)$ is the case:














\(\ds \paren {\sum_{j \mathop = 1}^2 a_j} * b\)

\(=\)







\(\ds \paren {a_1 \circ a_2} * b\)





Definition of Composite (Abstract Algebra)














\(\ds \)

\(=\)







\(\ds \paren {a_1 * b} \circ \paren {a_2 * b}\)





$*$ is distributive over $\circ$ as $\struct {R, \circ, *}$ is a ringoid














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^2 \paren {a_j * b}\)





Definition of Composite (Abstract Algebra)




This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \paren {\sum_{j \mathop = 1}^k a_j} * b = \sum_{j \mathop = 1}^k \paren {a_j * b}$

Then we need to show:

$\ds \paren {\sum_{j \mathop = 1}^{k + 1} a_j} * b = \sum_{j \mathop = 1}^{k + 1} \paren {a_j * b}$


Induction Step
This is our induction step:














\(\ds \paren {\sum_{j \mathop = 1}^{k + 1} a_j} * b\)

\(=\)







\(\ds \paren {\paren {\sum_{j \mathop = 1}^k a_j} \circ a_{k + 1} } * b\)





Definition of Composite (Abstract Algebra)














\(\ds \)

\(=\)







\(\ds \paren {\paren {\sum_{j \mathop = 1}^k a_j} * b} \circ \paren {a_{k + 1} * b}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {\sum_{j \mathop = 1}^k \paren {a_j * b} } \circ \paren {a_{k + 1} * b}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{k + 1} \paren {a_j * b}\)





Associativity of $\circ$ in $\struct {R, \circ, *}$




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{> 0}: \paren {\sum_{j \mathop = 1}^k a_j} * b = \sum_{j \mathop = 1}^k \paren {a_j * b}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.8$




