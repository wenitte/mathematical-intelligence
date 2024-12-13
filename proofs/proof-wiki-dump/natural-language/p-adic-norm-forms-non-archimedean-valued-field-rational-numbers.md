# 

Source: https://proofwiki.org/wiki/P-adic_Norm_forms_Non-Archimedean_Valued_Field/Rational_Numbers


This page has been identified as a candidate for refactoring of medium complexity.In particular: Looks like multiple results bundled up into one page. Needs to be separated out so as to make it clear what is used to prove what.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
The $p$-adic norm $\norm{\,\cdot\,}_p$ forms a non-Archimedean norm on the rational numbers $\Q$.

The rational numbers $\struct{\Q, \norm{\,\cdot\,}_p}$ with the $p$-adic norm is a valued field with a non-Archimedean norm.


Proof
First we note that the $p$-adic norm is a norm.
Let $\nu_p$ denote the $p$-adic valuation on the rational numbers.

Recall the definition of the $p$-adic norm:

$\forall q \in \Q: \norm q_p := \begin{cases}
  0 & : q = 0 \\
  p^{-\map {\nu_p} q} & : q \ne 0
\end{cases}$

We must show the following holds for all $x, y \in \Q$:

$\norm {x + y}_p \le \max \set {\norm x_p, \norm y_p}$

If $x = 0$ or $y = 0$, or $x + y = 0$, the result is trivial, as follows:
Let $x = 0$.
Then:














\(\ds x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \norm x_p\)

\(=\)







\(\ds 0\)





Definition of $p$-adic Norm








\(\ds \leadsto \ \ \)





\(\ds \max \set {\norm x_p, \norm y_p}\)

\(=\)







\(\ds \norm y_p\)





as $\norm y_p \ge 0 = \norm x_p$ from Non-Archimedean Norm Axiom $\text N 1$: Positive Definiteness














\(\ds \)

\(=\)







\(\ds \norm {x + y}_p\)









and so $\norm {x + y}_p \le \max \left( \norm x_p, \norm y_p \right)$
The same argument holds for $y = 0$.

Let $x + y = 0$.














\(\ds x + y\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \norm {x + y}_p\)

\(=\)







\(\ds 0\)





Definition of $p$-adic Norm














\(\ds \)

\(\le\)







\(\ds \max \set {\norm x_p, \norm y_p}\)





as $\norm x_p \ge 0$ and $\norm y_p \ge 0$ from Non-Archimedean Norm Axiom $\text N 1$: Positive Definiteness




Let $x, y, x + y \in \Q_{\ne 0}$.
From $p$-adic Valuation is Valuation:

$\map {\nu_p} {x + y} \ge \min \set {\map {\nu_p} x, \map {\nu_p} y}$
Then:














\(\ds \norm {x + y}_p\)

\(=\)







\(\ds p^{-\map {\nu_p} {x + y} }\)





Definition of $p$-adic Norm














\(\ds \)

\(\le\)







\(\ds \max \set {p^{- \map {\nu_p} x}, p^{-\map {\nu_p} y} }\)




















\(\ds \)

\(=\)







\(\ds \max \set {\norm x_p, \norm y_p}\)





Definition of $p$-adic Norm



$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 2.1$: Absolute Values on a Field: Proposition $2.1.5$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$: Proposition $1.26$




