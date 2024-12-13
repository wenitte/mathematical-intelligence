# 

Source: https://proofwiki.org/wiki/P-Norm_is_Norm/P-Sequence_Space



Theorem
The $p$-norm on the $p$-sequence space is a vector space norm.


Proof

This page has been identified as a candidate for refactoring of advanced complexity.In particular: This should be presented in the context of a general Banach space.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Norm Axiom $\text N 1$: Positive Definiteness
Let $x \in \ell^p$ with $1 \le p < \infty$.
By definition of $p$-norm:

$\ds \norm {\mathbf x}_p = \paren {\sum_{n \mathop = 0}^\infty \size {x_n}^p}^{1/p}$
The complex modulus of $x_n$ is real and non-negative.
We have the results:

Sum of Non-Negative Reals is Non-Negative
Power of Positive Real Number is Positive
Zero Raised to Positive Power is Zero
Hence, $\norm {\mathbf x}_p \ge 0$.
Suppose $\norm {\mathbf x}_p = 0$.
Then:














\(\ds \norm {\mathbf x}_p\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 0}^\infty \size {x_n}^p\)

\(=\)







\(\ds 0\)





raising to power $p > 0$








\(\ds \leadsto \ \ \)





\(\ds \size {x_n}\)

\(=\)







\(\ds 0\)





Sum of Non-Negatives vanishes iff Summands vanish








\(\ds \leadsto \ \ \)





\(\ds x_n\)

\(=\)







\(\ds 0\)





Complex Modulus equals Zero iff Zero








\(\ds \leadsto \ \ \)





\(\ds \bf x\)

\(=\)







\(\ds \sequence 0_{n \mathop \in \N}\)









Thus Norm Axiom $\text N 1$: Positive Definiteness is satisfied.
$\Box$


Norm Axiom $\text N 2$: Positive Homogeneity
Suppose $\alpha \in \set {\R, \C}$.














\(\ds \norm {\alpha \cdot \mathbf x}_p\)

\(=\)







\(\ds \paren {\sum_{n \mathop = 0}^\infty \size {\alpha x_n}^p }^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{n \mathop = 0}^\infty \size \alpha^p \size {x_n}^p }^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds \size {\alpha} \paren {\sum_{n \mathop = 0}^\infty \size {x_n}^p }^{\frac 1 p}\)




















\(\ds \)

\(=\)







\(\ds \size {\alpha} \norm {\mathbf x}_p\)









Thus Norm Axiom $\text N 2$: Positive Homogeneity is satisfied.
$\Box$


Norm Axiom $\text N 3$: Triangle Inequality
From P-Norm is Norm/Complex Numbers we have that:

$\ds \paren {\sum_{n \mathop = 0}^d \size {x_n + y_n}^p}^{\frac 1 p} \le \paren {\sum_{n \mathop = 0}^d \size {x_n}^p }^{\frac 1 p} + \paren {\sum_{n \mathop = 0}^d \size {y_n}^p }^{\frac 1 p}$
$\map f z = z^{\frac 1 p}$ is a continuous function for $z \ge 0$ and $p > 0$.
For $\mathbf x \in \ell^p$, changing $d$ is equivalent to changing $z$ in the interval $0 \le z < \infty$. 
Take the composite limit $d \to \infty$.
Then:

$\norm {\mathbf x + \mathbf  y}_p \le \norm {\mathbf x}_p + \norm {\mathbf y}_p$
Thus Norm Axiom $\text N 3$: Triangle Inequality is satisfied.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




