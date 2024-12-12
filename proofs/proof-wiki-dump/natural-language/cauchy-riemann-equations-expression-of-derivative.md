# 

Source: https://proofwiki.org/wiki/Cauchy-Riemann_Equations/Expression_of_Derivative

Theorem
Let $D \subseteq \C$ be an open subset of the set of complex numbers $\C$.
Let $f: D \to \C$ be a complex function on $D$.

Let $u, v: \set {\tuple {x, y} \in \R^2: x + i y = z \in D} \to \R$ be two real-valued functions defined as:














\(\ds \map u {x, y}\)

\(=\)







\(\ds \map \Re {\map f z}\)




















\(\ds \map v {x, y}\)

\(=\)







\(\ds \map \Im {\map f z}\)









where:

$\map \Re {\map f z}$ denotes the real part of $\map f z$
$\map \Im {\map f z}$ denotes the imaginary part of $\map f z$.

Then $f$ is complex-differentiable in $D$ if and only if:

$u$ and $v$ are differentiable in their entire domain
and:

The following two equations, known as the Cauchy-Riemann equations, hold for the partial derivatives of $u$ and $v$:



\(\text {(1)}: \quad\)









\(\ds \dfrac {\partial u} {\partial x}\)

\(=\)







\(\ds \dfrac {\partial v} {\partial y}\)










\(\text {(2)}: \quad\)









\(\ds \dfrac {\partial u} {\partial y}\)

\(=\)







\(\ds -\dfrac {\partial v} {\partial x}\)










If the conditions are true, then for all $z \in D$:

$\map {f'} z = \map {\dfrac {\partial f} {\partial x} } z = -i \map {\dfrac {\partial f} {\partial y} } z$

This page has been identified as a candidate for refactoring.In particular: Extract "Cauchy-Riemann Equations" into a definition pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Proof
Let $z = x + i y$.
Then:














\(\ds \map {\dfrac {\partial f} {\partial x} } z\)

\(=\)







\(\ds \map {\dfrac {\partial u} {\partial x} } {x, y} + i \map {\dfrac {\partial v} {\partial x} } {x, y}\)




















\(\ds \)

\(=\)







\(\ds \map \Re {\map {f'} z} + i \, \map \Im {\map {f'} z}\)





from the last part of the proof for sufficient condition














\(\ds \)

\(=\)







\(\ds \map {f'} z\)









Similarly:














\(\ds -i \map {\dfrac {\partial f} {\partial y} } z\)

\(=\)







\(\ds -i \paren {\map {\dfrac {\partial u} {\partial y} } {x, y} + i \map {\dfrac {\partial v} {\partial y} } {x, y} }\)




















\(\ds \)

\(=\)







\(\ds -i \paren {-\map \Im {\map {f'} z} + i \map \Re {\map {f'} z} }\)





from the last part of the proof for sufficient condition














\(\ds \)

\(=\)







\(\ds \map {f'} z\)









$\blacksquare$



This page has been identified as a candidate for refactoring of medium complexity.In particular: rather than reference "the last part of etc." make it so that the last part is a separate result referenced from everywhere it is neededUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 1.3$




