# 

Source: https://proofwiki.org/wiki/Scalar_Product_with_Sum



Theorem
Let $\struct {G, +_G}$ be an abelian group whose identity is $e$.
Let $\struct {R, +_R, \times_R}$ be a ring whose zero is $0_R$.
Let $\struct {G, +_G, \circ}_R$ be an $R$-module.

Let $x \in G, \lambda \in R$.
Let $\sequence {x_m}$ be a sequence of elements of $G$.

Then:

$\ds \lambda \circ \paren {\sum_{k \mathop = 1}^m x_k} = \sum_{k \mathop = 1}^m \paren {\lambda \circ x_k}$


Proof
This follows by induction from Module Axiom $\text M 1$: Distributivity over Module Addition, as follows:

For all $m \in \N_{>0}$, let $\map P m$ be the proposition:

$\ds \lambda \circ \paren {\sum_{k \mathop = 1}^m x_k} = \sum_{k \mathop = 1}^m \paren {\lambda \circ x_k}$


Basis for the Induction
$\map P 1$ is true, as this just says:

$\lambda \circ x_1 = \lambda \circ x_1$
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P n$ is true, where $n \ge 1$, then it logically follows that $\map P {n + 1}$ is true.

So this is our induction hypothesis:

$\ds \lambda \circ \paren {\sum_{k \mathop = 1}^n x_k} = \sum_{k \mathop = 1}^n \paren {\lambda \circ x_k}$

Then we need to show:

$\ds \lambda \circ \paren {\sum_{k \mathop = 1}^{n + 1} x_k} = \sum_{k \mathop = 1}^{n + 1} \paren {\lambda \circ x_k}$


Induction Step
This is our induction step:














\(\ds \lambda \circ \paren {\sum_{k \mathop = 1}^{n + 1} x_k}\)

\(=\)







\(\ds \lambda \circ \paren {\sum_{k \mathop = 1}^n x_k + x_{n + 1} }\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \lambda \circ \paren {\sum_{k \mathop = 1}^n x_k} + \lambda \circ x_{n + 1}\)





Module Axiom $\text M 1$: Distributivity over Module Addition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\lambda \circ x_k} + \lambda \circ x_{n + 1}\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n + 1} \paren {\lambda \circ x_k}\)





Definition of Summation



So $\map P n \implies \map P {n + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall m \in \N_{>0}: \lambda \circ \paren {\sum_{k \mathop = 1}^m x_k} = \sum_{k \mathop = 1}^m \paren {\lambda \circ x_k}$
$\blacksquare$


Also see
Basic Results about Modules
Basic Results about Unitary Modules


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 26$. Vector Spaces and Modules: Theorem $26.2 \ (3)$




