# 

Source: https://proofwiki.org/wiki/Derivative_of_Constant_Multiple/Real/Corollary

Corollary to Derivative of Constant Multiple
Let $f$ be a real function which is differentiable on $\R$.
Let $c \in \R$ be a constant.

Then:

$\map {\dfrac {\d^n} {\d x^n} } {c \map f x} = c \map {\dfrac {\d^n} {\d x^n} } {\map f x}$


Proof

This page has been identified as a candidate for refactoring of basic complexity.In particular: Expand this into the formal $\mathsf{Pr} \infty \mathsf{fWiki}$ structure for induction proofs.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
By induction: the base case is for $n = 1$ and is proved in Derivative of Constant Multiple.
Now consider $\map {\dfrac {\d^{k + 1} } {\d x^{k + 1} } } {c \map f x}$, assuming the induction hypothesis $\map {\dfrac {\d^k} {\d x^k} } {c \map f x} = c \map {\dfrac {\d^k} {\d x^k} } {\map f x}$:














\(\ds \map {\dfrac {\d^{k + 1} } {\d x^{k + 1} } } {c \map f x}\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {\map {\dfrac {\d^k} {\d x^k} } {c \map f x} }\)





Definition of Higher Derivative














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d x} } {c \map {\dfrac {\d^k} {\d x^k} } {\map f x} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds c \map {\dfrac \d {\d x} } {\map {\dfrac {\d^k} {\d x^k} } {\map f x} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds c \map {\dfrac {\d^{k + 1} } {\d x^{k + 1} } } {\map f x}\)





Definition of Higher Derivative



Hence the result by induction.
$\blacksquare$





