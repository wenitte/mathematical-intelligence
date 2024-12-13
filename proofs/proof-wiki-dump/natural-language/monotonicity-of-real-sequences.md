# 

Source: https://proofwiki.org/wiki/Monotonicity_of_Real_Sequences


This page has been identified as a candidate for refactoring of basic complexity.In particular: There are 4 proofs here -- demonstrate them all, on separate pages, and transclude them all into this.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\mathbb D$ be a subset of $\N$.
Let $\sequence {a_n}: \mathbb D \to \R$ be a real sequence.
Let $\mathbb X$ be a real interval such that $\mathbb D \subseteq \mathbb X$.
Let $f: \mathbb X \to \R, x \mapsto \map f x$ be a differentiable real function.

Suppose that for every $n \in \mathbb D$:

$\map f n = a_n$

Then:

If $\forall x \in \mathbb X: D_x \map f x \ge 0$, $\sequence {a_n}$ is increasing
If $\forall x \in \mathbb X: D_x \map f x >  0$, $\sequence {a_n}$ is strictly increasing
If $\forall x \in \mathbb X: D_x \map f x \le 0$, $\sequence {a_n}$ is decreasing
If $\forall x \in \mathbb X: D_x \map f x < 0$, $\sequence {a_n}$ is strictly decreasing
where $D_x$ denotes differentiation with respect to $x$.


Proof
Consider the case where $D_x \map f x \ge 0$
Let $n \in \N$ be in the domain of $\sequence {a_n}$.
From Derivative of Monotone Function, the sign of $D_x f$ is indicative of the monotonicity of $f$.
Because Differentiable Function is Continuous and Continuous Real Function is Darboux Integrable, $D_x f$ is integrable.
Hence:














\(\ds \map f {n + 1} - \map f n\)

\(=\)







\(\ds \int_n^{n + 1} D_x \map f x \rd x \ge 0\)





Fundamental Theorem of Calculus














\(\ds \)

\(\ge\)







\(\ds 0\)





Relative Sizes of Definite Integrals








\(\ds \leadsto \ \ \)





\(\ds \map f {n + 1}\)

\(\ge\)







\(\ds \map f n\)










Then:










\(\ds \forall n \in \mathbb D: \, \)



\(\ds \map f n\)

\(=\)







\(\ds a_n\)





by hypothesis








\(\ds \leadsto \ \ \)

\(\ds \forall n \in \mathbb D: \, \)



\(\ds a_{n + 1}\)

\(\ge\)







\(\ds a_n\)





as $n \in \mathbb D$ was arbitrary




Hence the result, by the definition of monotone.
The proofs of the other cases are similar.
$\blacksquare$


Also see
Restriction of Monotone Function is Monotone




