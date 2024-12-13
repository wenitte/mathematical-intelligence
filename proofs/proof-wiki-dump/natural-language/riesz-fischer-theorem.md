# 

Source: https://proofwiki.org/wiki/Riesz-Fischer_Theorem



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $p \in \R$, $p \ge 1$.

The Lebesgue $p$-space $\map {\LL^p} \mu$, endowed with the $p$-norm $\norm {\cdot}_p$, is a Banach space.


Corollary

This page has been identified as a candidate for refactoring.In particular: as usualUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $p \in \R$, $p \ge 1$.
If a sequence $\sequence {f_k}$ in $\map {\LL^p} \mu$ converges to $f$,
then there is a subsequence $\sequence {f_{k_j}}$ that converges pointwise a.e. to $f$.


Proof
From Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach, to prove $\map {\LL^p} \mu$ is complete, it suffices to prove that every absolutely summable sequence in $\map {\LL^p} \mu$ is summable.
Let $\sequence {f_n}$ be an absolutely summable sequence in $\map {\LL^p} \mu$
Define:

$\ds \sum_{k \mathop = 1}^\infty \norm {f_k}_p =: B < \infty$
Also define:

$\ds G_n := \sum_{k \mathop = 1}^n \size {f_k}$
and:

$\ds G = \sum_{k \mathop = 1}^\infty \size {f_k}$
It is clear that the conditions of the Monotone Convergence Theorem (Measure Theory) hold, so that:

$\ds \int_X G^p = \lim_{n \mathop \to \infty} \int_X G_n^p$
By observing that:














\(\ds \norm {G_n}_p\)

\(\le\)







\(\ds \sum_{k \mathop = 1}^n \norm {f_n}_p\)





Minkowski's Inequality/Lebesgue Spaces














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^\infty \norm {f_k}_p\)




















\(\ds \)

\(\le\)







\(\ds B\)





Definition of $B$














\(\ds \)

\(<\)







\(\ds \infty\)









we can also say that:

$\ds \int_X \size {G_n}^p \le B^p$
and therefore:

$\ds \lim_{n \mathop \to \infty} \int_X \size {G_n}^p \le B^p$
Therefore we have that:

$\ds \int_X G^p \le B^p < \infty$
This confirms:

$G \in \map {\LL^p} \mu$
In particular:

$G \in \map{\LL^p} \mu$
entails that:

$G < \infty$ a.e.
So $\sequence {f_k}$ is absolutely summable a.e..
By Absolutely Convergent Series is Convergent/Real Numbers:

$\ds F = \sum_{k \mathop = 1}^\infty f_k$
converges a.e.

Because $\size F \le G$:

$F \in \map {\LL^p} \mu$
It only remains to show that:

$\ds \sum_{k \mathop = 1}^n f_k \to F$ in $\norm {\cdot}_p$
which we can accomplish by Lebesgue's Dominated Convergence Theorem.


This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: extract the part of proof below into a page for a theorem: Dominated Pointwise Convergence implies Convergence in Lp as proved in StackExchangeYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Because $\ds \size {F - \sum_{k \mathop = 1}^n f_k}^p \le (2G)^p \in \map{\LL^1}\mu$, the theorem applies.
We infer:

$\ds \norm {F - \sum_{k \mathop = 1}^n f_k}_p^p = \int_X \size {F - \sum_{k \mathop = 1}^n f_k}^p \to 0$
Therefore by Definition of Lp Norm in $\map{\LL^p}\mu$ we have that $\ds \sum_{k \mathop = 1}^\infty f_k$ converges in $\map{\LL^p}\mu$.
This shows that $\sequence {f_k}$ is summable, as we were to prove.  
$\blacksquare$


Source of Name
This entry was named for Frigyes Riesz and Ernst Sigismund Fischer.


Historical Note
The Riesz-Fischer Theorem was proved jointly by Ernst Sigismund Fischer and Frigyes Riesz.
Fischer proved the result for $p = 2$, while Riesz (independently) proved it for all $p \ge 1$.


Sources
1999: Gerald B. Folland: Real Analysis: Modern Techniques and their Applications (2nd ed.): $6.1$ Theorem $6.6$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $12.7$




