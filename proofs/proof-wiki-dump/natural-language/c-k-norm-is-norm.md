# 

Source: https://proofwiki.org/wiki/C%5Ek_Norm_is_Norm



Theorem
Let $I = \closedint a b$ be a closed real interval.
Let $\struct {\map {C^k} I, +, \, \cdot \,}_\R$ be the vector space of real-valued functions, k-times differentiable on $I$.
Let $x \in \map {C^k} I$ be a real-valued function of differentiability class $k$.
Let $\norm {\, \cdot \,}_{\map {C^k} I}$ be the $C^k$ norm on $I$.

Then $\norm {\, \cdot \,}_{\map {C^k} I}$ is a norm on $\struct {\map {C^k} I, +, \, \cdot \,}_\R$.


Proof
Positive definiteness
Let $x \in \map {C^k} I$.
Then:














\(\ds \norm x_{\map {C^k} I}\)

\(=\)







\(\ds \sum_{i \mathop = 0}^k \norm {x^{\paren i} }_\infty\)




















\(\ds \)

\(\ge\)







\(\ds \sum_{i \mathop = 0}^k 0\)





Supremum Norm is Norm, Norm Axiom $\text N 1$: Positive Definiteness














\(\ds \)

\(=\)







\(\ds 0\)









Suppose $\norm x_{\map {C^k} I} = 0$.
We have that the sum of non-negatives is zero if every element is zero.
Hence:

$\forall i \in \N : 0 \le i \le k : \norm {x^{\paren i} }_\infty = 0$
That is:

$\norm x_\infty = 0$
By Supremum Norm is Norm and Norm Axiom $\text N 1$: Positive Definiteness:

$\forall t \in I : \map x t = 0$


Positive homogeneity
Let $x \in \map {C^k} I$, $\alpha \in \R$.
Then:














\(\ds \norm {\alpha x}_{\map {C^k} I}\)

\(=\)







\(\ds \sum_{i \mathop = 0}^k \norm {\paren {\alpha x}^{\paren i} }_\infty\)





Definition of C^k Norm














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^k \norm {\alpha x^{\paren i} }_\infty\)





Definition of Pointwise Scalar Multiplication of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \size \alpha \sum_{i \mathop = 0}^k \norm {x^{\paren i} }_\infty\)





Supremum norm on continuous real-valued functions is a norm: positive homogeneity














\(\ds \)

\(=\)







\(\ds \size \alpha \norm x_{\map {C^k} I}\)





Definition of C^k Norm





Triangle inequality
Let $x, y \in \map {C^k} I$














\(\ds \norm {x + y}_{\map {C^k} I}\)

\(=\)







\(\ds \sum_{i \mathop = 0}^k \norm {\paren {x + y}^{\paren i} }_\infty\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^k \norm {x^{\paren i} + y^{\paren i} }_\infty\)





Definition of Pointwise Addition of Real-Valued Functions














\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 0}^k \norm {x^{\paren i} }_\infty + \sum_{i \mathop = 0}^k \norm {y^{\paren i} }_\infty\)





Supremum Norm is Norm, Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \norm x_{\map {C^k} I} + \norm y_{\map {C^k} I}\)





Definition of C^k Norm



$\blacksquare$


Also see
Definition:C^k Norm


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.2$: Normed and Banach spaces. Normed Spaces




