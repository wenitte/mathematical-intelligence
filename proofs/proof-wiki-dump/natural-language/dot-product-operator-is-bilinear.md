# 

Source: https://proofwiki.org/wiki/Dot_Product_Operator_is_Bilinear


This page has been identified as a candidate for refactoring of medium complexity.In particular: This result is valid for the general vector space, not just real Euclidean space which is what this isUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\mathbf u, \mathbf v, \mathbf w$ be vectors in the real Euclidean space $\R^n$.
Let $c$ be a real scalar.

Then:

$\paren {c \mathbf u + \mathbf v} \cdot \mathbf w = c \paren {\mathbf u \cdot \mathbf w} + \paren {\mathbf v \cdot \mathbf w}$


Proof













\(\ds \paren {c \mathbf u + \mathbf v} \cdot \mathbf w\)

\(=\)







\(\ds c \sum_{i \mathop = 1}^n \paren {u_i + v_i} w_i\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {c u_i + v_i} w_i\)





Real Multiplication Distributes over Real Addition














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {c u_i w_i + v_i w_i}\)





Real Multiplication Distributes over Real Addition














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n c u_i w_i + \sum_{i \mathop = 1}^n v_i w_i\)





Real Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds c \sum_{i \mathop = 1}^n u_i w_i + \sum_{i \mathop = 1}^n v_i w_i\)





Real Multiplication Distributes over Real Addition














\(\ds \)

\(=\)







\(\ds c \paren {\mathbf u \cdot \mathbf w} + \mathbf v \cdot \mathbf w\)





Definition of Dot Product



$\blacksquare$





