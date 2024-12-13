# 

Source: https://proofwiki.org/wiki/Series_of_Power_over_Factorial_Converges


It has been suggested that this page or section be merged into Radius of Convergence of Power Series over Factorial.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: extract "alternatively" proof into its own pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
The series $\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$ converges for all real values of $x$.


Proof
If $x = 0$ the result is trivially true as:

$\forall n \ge 1: \dfrac {0^n} {n!} = 0$
If $x \ne 0$ we have:

$\size {\dfrac {\paren {\dfrac {x^{n + 1} } {\paren {n + 1}!} } } {\paren {\dfrac {x^n} {n!} } } } = \dfrac {\size x} {n + 1} \to 0$
as $n \to \infty$.
This follows from the results:

Sequence of Powers of Reciprocals is Null Sequence, where $\dfrac 1 n \to 0$ as $n \to \infty$
The Squeeze Theorem for Real Sequences, as $\dfrac 1 {n + 1} < \dfrac 1 n$
The Multiple Rule for Real Sequences, putting $\lambda = \size x$.
Hence by the Ratio Test: $\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$ converges.
$\blacksquare$

Alternatively, the Comparison Test could be used but this is more cumbersome in this instance.
Another alternative is to view this as an example of Radius of Convergence of Power Series over Factorial setting $\xi = 0$.


Also see
Equivalence of Definitions of Exponential Function, where it is shown that this series converges to the exponential function.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 6.19$




