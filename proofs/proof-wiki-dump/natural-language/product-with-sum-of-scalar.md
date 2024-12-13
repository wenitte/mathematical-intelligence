# 

Source: https://proofwiki.org/wiki/Product_with_Sum_of_Scalar



Theorem
Let $\struct {G, +_G}$ be an abelian group whose identity is $e$.
Let $\struct {R, +_R, \times_R}$ be a ring whose zero is $0_R$.
Let $\struct {G, +_G, \circ}_R$ be an $R$-module.

Let $x \in G, \lambda \in R$.
Let $\sequence {\lambda_m}$ be a sequence of elements of $R$, that is scalars.

Then:

$\ds \paren {\sum_{k \mathop = 1}^m \lambda_k} \circ x = \sum_{k \mathop = 1}^m \paren {\lambda_k \circ x}$


Proof
This follows by induction from Module Axiom $\text M 2$: Distributivity over Scalar Addition, as follows.

For all $m \in \N_{>0}$, let $\map P m$ be the proposition:

$\ds \paren {\sum_{k \mathop = 1}^m \lambda_k} \circ x = \sum_{k \mathop = 1}^m \paren {\lambda_k \circ x}$


Basis for the Induction













\(\ds \paren {\sum_{k \mathop = 1}^1 \lambda_1} \circ x\)

\(=\)







\(\ds \lambda_1 \circ x\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^1 \paren {\lambda_1 \circ x}\)









Hence $\map P 1$ is true.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P n$ is true, where $n \ge 1$, then $\map P {n + 1}$ is true.

So this is our induction hypothesis:

$\ds \paren {\sum_{k \mathop = 1}^n \lambda_k} \circ x = \sum_{k \mathop = 1}^n \paren {\lambda_k \circ x}$

Then we need to show:

$\ds \paren {\sum_{k \mathop = 1}^{n + 1} \lambda_k} \circ x = \sum_{k \mathop = 1}^{n + 1} \paren {\lambda_k \circ x}$


Induction Step
This is our induction step:














\(\ds \paren {\sum_{k \mathop = 1}^{n + 1} \lambda_k} \circ x\)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n \lambda_k + \lambda_{n + 1} } \circ x\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n \lambda_k \circ x} + \lambda_{n + 1} \circ x\)





Module Axiom $\text M 2$: Distributivity over Scalar Addition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\lambda_k \circ x} + \lambda_{n + 1} \circ x\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{n + 1} \paren {\lambda_k \circ x}\)









So $\map P n \implies \map P {n + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall m \in \N_{>0}: \paren {\sum_{k \mathop = 1}^m \lambda_k} \circ x = \sum_{k \mathop = 1}^m \paren {\lambda_k \circ x}$
$\blacksquare$


Also see
Basic Results about Modules
Basic Results about Unitary Modules


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 26$. Vector Spaces and Modules: Theorem $26.2 \ (4)$




