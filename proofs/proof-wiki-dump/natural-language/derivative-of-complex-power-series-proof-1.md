# 

Source: https://proofwiki.org/wiki/Derivative_of_Complex_Power_Series/Proof_1

Theorem
Let $\xi \in \C$ be a complex number.
Let $\sequence {a_n}$ be a sequence in $\C$.
Let $\ds \map f z = \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n$ be a power series in a complex variable $z \in \C$ about $\xi$.
Let $R$ be the radius of convergence of the series defining $\map f z$.
Let $\cmod {z - \xi} < R$.

Then $f$ is complex-differentiable and its derivative is:

$\ds \map {f'} z = \sum_{n \mathop = 1}^\infty n a_n \paren {z - \xi}^{n - 1}$


Proof
Define:

$\ds \map g z = \sum_{n \mathop = 1}^\infty n a_n \paren {z - \xi}^{n - 1}$
From Radius of Convergence of Derivative of Complex Power Series, it follows that $g$ has radius of convergence $R$. 
Fix an $\epsilon > 0$ satisfying $\epsilon < R - \cmod {z - \xi}$.
Define:

$\ds M = \paren {R - \epsilon - \cmod {z - \xi} }^{-2} \sum_{n \mathop = 2}^\infty \cmod {a_n} \paren {R - \epsilon}^n$
Suppose that $\cmod h \le R - \epsilon - \cmod {z - \xi}$.
Then, by the Binomial Theorem and the Triangle Inequality:














\(\ds \cmod {\dfrac {\map f {z + h} - \map f z} h - \map g z}\)

\(=\)







\(\ds \cmod {\dfrac 1 h \paren {\sum_{n \mathop = 0}^\infty a_n \paren {z + h - \xi}^n - \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n} - \sum_{n \mathop = 1}^\infty n  a_n \paren {z - \xi}^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\sum_{n \mathop = 0}^\infty a_n \sum_{k \mathop = 0}^n \binom n k \paren {z - \xi}^k h^{n - k - 1} - \sum_{n \mathop = 0}^\infty \dfrac {a_n} h \paren {z - \xi}^n - \sum_{n \mathop = 1}^\infty n a_n \paren {z - \xi}^{n - 1} }\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \cmod {\sum_{n \mathop = 1}^\infty a_n \paren {\sum_{k \mathop = 0}^n \binom n k \paren {z - \xi}^k h^{n - k - 1} - \dfrac 1 h \paren {z - \xi}^n - n \paren {z - \xi}^{n - 1} } }\)





Difference of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \cmod {\sum_{n \mathop = 2}^\infty a_n \sum_{k \mathop = 0}^{n - 2} \binom n k \paren {z - \xi}^k h^{n - k - 1} }\)





by algebraic manipulations














\(\ds \)

\(\le\)







\(\ds \cmod h \sum_{n \mathop = 2}^\infty \cmod {a_n} \sum_{k \mathop = 0}^{n - 2} \binom n k \cmod {z - \xi}^k \cmod h^{n-k-2}\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \cmod h \sum_{n \mathop = 2}^\infty \cmod {a_n} \sum_{k \mathop = 0}^{n - 2} \binom n k \cmod {z - \xi}^k \paren {R - \epsilon - \cmod {z - \xi} }^{n - k - 2}\)





by assumption














\(\ds \)

\(\le\)







\(\ds \cmod h \paren {R - \epsilon - \cmod {z - \xi} }^{-2} \sum_{n \mathop = 2}^\infty \cmod {a_n} \sum_{k \mathop = 0}^n \binom n k \cmod {z - \xi}^k \paren {R - \epsilon - \cmod {z - \xi} }^{n - k}\)




















\(\ds \)

\(=\)







\(\ds \cmod h \paren {R - \epsilon - \cmod {z - \xi} }^{-2} \sum_{n \mathop = 2}^\infty \cmod {a_n} \paren {R - \epsilon}^n\)





by the binomial theorem














\(\ds \)

\(=\)







\(\ds M \cmod h\)










Letting $h \to 0$ we see that $\map {f'} z$ exists and:

$\map {f'} z = \map g z$
as desired.
$\blacksquare$


Also see

This page has been identified as a candidate for refactoring of medium complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
The proof for real power series is identical.




