# 

Source: https://proofwiki.org/wiki/P-Norm_is_Norm/Complex_Numbers


This page has been identified as a candidate for refactoring.In particular: It needs to be made clear that this result applies to finite sequences only, while the main result goes to infinite sequences.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.In particular: Some of the "obvious" facts about the properties of real and complex numbers are on $\mathsf{Pr} \infty \mathsf{fWiki}$ and could be (should be) linked to.
I would gladly do so, but I can't locate those theorems. Indeed, something as simple as "sum of non-negatives is non-negative" or "sum vanishes iff summands vanish" should be somewhere here, but whatever I throw at the search engine is ineffective.

A useful strategy is to put a redlink in place, and then it is clear to anyone doing maintenance that there's work to be done.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
The $p$-norm on the complex numbers is a norm.


Proof
Let $K \in \C^d$, where $d \in \N_{>0}$.


Norm Axiom $\text N 1$: Positive Definiteness
Suppose $\sequence {x_n}_{n \mathop \in \set {1, 2, \ldots, d} } \in K$.
By definition of $p$-norm:

$\ds \norm {\mathbf x}_p = \paren {\sum_{n \mathop = 0}^d \size {x_n}^p}^{1 / p}$
The complex modulus of $x_n$ is real and non-negative.
We have the results:

Sum of Non-Negative Reals is Non-Negative
Power of Positive Real Number is Positive
Zero Raised to Positive Power is Zero
Hence:

$\norm {\mathbf x}_p \ge 0$
Suppose that $\norm {\mathbf x}_p = 0$.
Then:














\(\ds \norm {\mathbf x}_p\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 0}^d \size {x_n}^p\)

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







\(\ds \sequence 0_{n \mathop \in \N, \, n \mathop \le d}\)









Thus Norm Axiom $\text N 1$: Positive Definiteness is satisfied.
$\Box$


Norm Axiom $\text N 2$: Positive Homogeneity
Suppose that $\lambda \in K$.














\(\ds \norm {\lambda \mathbf x}_p\)

\(=\)







\(\ds \paren {\sum_{n \mathop = 0}^d \size {\lambda x_n}^p}^{1 / p}\)




















\(\ds \)

\(=\)







\(\ds \paren {\size {\lambda}^p \sum_{n \mathop = 0}^d \size {x_n}^p}^{1 / p}\)




















\(\ds \)

\(=\)







\(\ds \size {\lambda} \paren {\sum_{n \mathop = 0}^d \size {x_n}^p}^{1 / p}\)




















\(\ds \)

\(=\)







\(\ds \size {\lambda} \norm {\mathbf x}_p\)









Thus Norm Axiom $\text N 2$: Positive Homogeneity is satisfied.
$\Box$


Norm Axiom $\text N 3$: Triangle Inequality
If $\mathbf x = \sequence 0$ and $\mathbf y = \sequence 0$, then by Norm Axiom $\text N 1$: Positive Definiteness we have equality.
If $\mathbf x + \mathbf y = \sequence 0$ and both $\bf x$ and $\bf y$ nonvanishing, then by Norm Axiom $\text N 1$: Positive Definiteness we get a strict inequality.
If $\mathbf x + \mathbf y \ne \sequence 0$, then consider p-norm raised to the power of $p$:














\(\ds \norm {\bf x + \bf y}_p^p\)

\(=\)







\(\ds \sum_{n \mathop = 0}^d \size {x_n + y_n} \size {x_n + y_n}^{p \mathop - 1}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 0}^d \size {x_n} \size {x_n + y_n}^{p \mathop - 1} + \sum_{n \mathop = 0}^d \size {y_n} \size {x_n + y_n}^{p \mathop - 1}\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(\le\)







\(\ds \sum_{n \mathop = 0}^d \size {x_n \paren{x_n + y_n}^{p \mathop - 1} } + \sum_{n \mathop = 0}^d \size {y_n \paren{ x_n + y_n}^{p \mathop - 1} }\)





Modulus of Product














\(\ds \)

\(\le\)







\(\ds \norm {\bf x}_p \norm {\paren{\mathbf x + \mathbf y}^{p \mathop - 1} }_q + \norm {\mathbf y}_p \norm {\paren{\mathbf x + \mathbf y}^{p \mathop - 1} }_q\)





Hölder's Inequality for Sums: $\dfrac 1 p + \dfrac 1 q = 1$














\(\ds \)

\(\le\)







\(\ds \norm {\bf x}_p \norm {\mathbf x + \mathbf y}_p^{p \mathop - 1} + \norm {\mathbf y}_p \norm {\mathbf x + \mathbf y}_p^{p \mathop - 1}\)





Transformation of $p$-Norm: $q \paren {p - 1} = p$








\(\ds \leadsto \ \ \)





\(\ds \norm {\mathbf x + \mathbf y}_p \norm {\mathbf x + \mathbf y}_p^{p \mathop - 1}\)

\(\le\)







\(\ds \norm {\mathbf x}_p \norm {\mathbf x + \mathbf y}_p^{p \mathop - 1} + \norm {\bf y}_p \norm {\bf x + \bf y}_p^{p \mathop - 1}\)














\(\ds \leadsto \ \ \)





\(\ds \norm {\bf x + \bf y}_p\)

\(\le\)







\(\ds \norm {\bf x}_p  + \norm {\bf y}_p\)





Division by $\norm {\bf x + \bf y}_p^{p \mathop - 1}$



Thus Norm Axiom $\text N 3$: Triangle Inequality is satisfied.
$\Box$

All norm axioms are seen to be satisfied.
Hence the result.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.2$: Normed and Banach spaces. Normed Spaces




