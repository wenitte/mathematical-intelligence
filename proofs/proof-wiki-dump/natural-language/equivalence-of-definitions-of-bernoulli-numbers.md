# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Bernoulli_Numbers



Theorem
The following definitions of the concept of Bernoulli Numbers are equivalent:

Generating Function
$\ds \frac x {e^x - 1} = \sum_{n \mathop = 0}^\infty \frac {B_n x^n} {n!}$
Recurrence Relation
$B_n = \begin {cases} 1 & : n = 0 \\ \ds - \sum_{k \mathop = 0}^{n - 1} \binom n k \frac {B_k} {n + 1 - k} & : n > 0 \end {cases}$

or equivalently:

$B_n = \begin {cases} 1 & : n = 0 \\ \ds - \frac 1 {n + 1} \sum_{k \mathop = 0}^{n - 1} \binom {n + 1} k B_k & : n > 0 \end {cases}$


Proof

This page has been identified as a candidate for refactoring of medium complexity.In particular: Move Sum of Bernoulli Numbers by Binomial Coefficients Vanishes proof here - more thorough - currently duplicativeUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
From the generating function definition:














\(\ds \frac x {e^x - 1}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {B_n x^n} {n!}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {B_n x^n} {n!} \paren {\sum_{k \mathop = 0}^\infty \frac {x^k} {k!} - 1}\)





Definition of Real Exponential Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {B_n x^n} {n!} \sum_{k \mathop = 0}^\infty \frac {x^{k + 1} } {\paren {k + 1}!}\)





$1 = \dfrac {x^0} {0!}$








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {B_n x^n} {n!} \sum_{k \mathop = 0}^\infty \frac {x^k} {\paren {k + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!} \sum_{k \mathop = 0}^n \binom n k \frac {B_k} {n - k + 1}\)





Cauchy Product, Product of Absolutely Convergent Series




Equating coefficients:
For $n = 0$:














\(\ds 1\)

\(=\)







\(\ds \sum_{k \mathop = 0}^0 \binom 0 k \frac {B_k} {0 - k + 1}\)




















\(\ds \)

\(=\)







\(\ds \binom 0 0 \frac {B_0} {0 - 0 + 1}\)




















\(\ds \)

\(=\)







\(\ds B_0\)





Binomial Coefficient with Zero




For $n > 0$:














\(\ds 0\)

\(=\)







\(\ds \frac 1 {n!} \sum_{k \mathop = 0}^n \binom n k \frac {B_k} {n - k + 1}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {n!} \paren {\sum_{k \mathop = 0}^{n - 1} \binom n k \frac {B_k} {n - k + 1} + \binom n n \frac {B_n} {n - n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{n - 1} \binom n k \frac {B_k} {n - k + 1} + B_n\)





Binomial Coefficient with Self and simplifying








\(\ds \leadsto \ \ \)





\(\ds B_n\)

\(=\)







\(\ds -\sum_{k \mathop = 0}^{n - 1} \binom n k \frac {B_k} {n - k + 1}\)










Hence the result:

$B_n = \begin{cases} 1 & : n = 0 \\
\ds - \sum_{k \mathop = 0}^{n-1} \binom n k \frac {B_k} {n - k + 1} & : n > 0
\end{cases}$
$\blacksquare$





