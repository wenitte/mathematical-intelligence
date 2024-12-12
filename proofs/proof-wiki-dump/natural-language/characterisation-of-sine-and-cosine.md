# 

Source: https://proofwiki.org/wiki/Characterisation_of_Sine_and_Cosine


This page has been identified as a candidate for refactoring of advanced complexity.In particular: Transclude, or otherwise reference, the individual definitions.  Note that such is the nature of these, it may not be appropriate to put them into the house standard format for equivalence proofs.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\map s x: \R \to \R$, $\map c x: \R \to \R$ be differentiable real functions that satisfy:

$(1): \quad \map {s'} x = \map c x$
$(2): \quad \map {c'} x = -\map s x$
$(3): \quad \map s 0 = 0$
$(4): \quad \map c 0 = 1$
$(5): \quad \forall x: \map {s^2} x + \map {c^2} x = 1$
Then, for every $x \in \R$:

$\map s x = \map \sin x$
$\map c x = \map \cos x$


Proof
Define:

$\map h x = \paren {\map c x - \map \cos x}^2 + \paren {\map s x - \map \sin x}^2$
Then:














\(\ds \map h x\)

\(=\)







\(\ds \map {c^2} x - 2 \map c x \map \cos x + \map {\cos^2} x + \map {s^2} x - 2 \map s x \map \sin x + \map {\sin^2} x\)





Square of Difference














\(\ds \)

\(=\)







\(\ds 2 - 2 \paren {\map c x \map \cos x + \map s x \map \sin x}\)





Property $(5)$, Sum of Squares of Sine and Cosine




By taking $\map {h'} x$:














\(\ds \map {h'} x\)

\(=\)







\(\ds -2 \paren {\map c x \map \cos x + \map s x \map \sin x}'\)





Linear Combination of Derivatives, Derivative of Constant














\(\ds \)

\(=\)







\(\ds -2 \paren {\map c x \map {\cos'} x + \map {c'} x \map \cos x + \map s x \map {\sin'} x + \map {s'} x \map \sin x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -2 \paren {-\map c x \map \sin x - \map s x \map \cos x + \map s x \map \cos x + \map c x \map \sin x}\)





Properties $(1)$ and $(2)$, Derivative of Cosine Function, Derivative of Sine Function














\(\ds \)

\(=\)







\(\ds -2 \paren {\map c x \map \sin x - \map c x \map \sin x} - 2 \paren {\map s x \map \cos x - \map s x \map \cos x}\)




















\(\ds \)

\(=\)







\(\ds 0\)









By Zero Derivative implies Constant Function, $\map h x$ is a constant function:

$\map h x = k$

Also:














\(\ds \map h 0\)

\(=\)







\(\ds \paren {1 - 1}^2 + \paren {0 - 0}^2\)





Properties $(3)$ and $(4)$, Cosine of Zero is One, Sine of Zero is Zero














\(\ds \)

\(=\)







\(\ds 0\)









Since $\map h x$ is constant:

$\map h x = 0$
Therefore:

$\paren {\map c x - \map \cos x}^2 + \paren {\map s x - \map \sin x}^2 = 0$
for every $x \in \R$.
But since Square of Real Number is Non-Negative and Square of Non-Zero Real Number is Strictly Positive:

$\map c x - \map \cos x = 0$
$\map s x - \map \sin x = 0$
The result follows.
$\blacksquare$





