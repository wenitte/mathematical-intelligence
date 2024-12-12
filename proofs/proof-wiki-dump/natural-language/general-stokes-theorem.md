# 

Source: https://proofwiki.org/wiki/General_Stokes%27_Theorem


This page has been identified as a candidate for refactoring of basic complexity.In particular: Separate out the special case into its own subpageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\omega$ be a smooth $\paren {n - 1}$-form with compact support on a smooth $n$-dimensional oriented manifold $X$.
Let the boundary of $X$ be $\partial X$.

Then:

$\ds \int_{\partial X} \omega = \int_X \rd \omega$
where $\d \omega$ is the exterior derivative of $\omega$.


Proof
Special Case
Let there exist a chart:

$x = \tuple {x_1, \ldots, x_n}: V \subseteq X \to \R^n$
such that:

$\map \supp \omega \subseteq V$
where:

$\map \supp \omega = \overline {\set {p \in M : \map \omega p \ne 0} }$

This article, or a section of it, needs explaining.In particular: Yes very good but what *is* it?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We may suppose that $V$ is relatively compact.
Thus, by composing $x$ with a translation, we may suppose that:

$\ds \map x V \subseteq \mathbb H^n = \set {\tuple {x_1, \ldots, x_n} \in \R^n : x_1 < 0}$
We have, in the coordinates $x$:

$\ds \omega = \sum_{i \mathop = 1}^n f_i \rd x_1 \wedge \cdots \wedge \hat {\d x}_i \wedge \cdots \wedge \d x_n$
The forms:

$\hat {\d x}_i := \d x_1 \wedge \cdots \wedge \hat {\d x}_i \wedge \cdots \wedge \d x_n$
vanish on the tangent space to $\mathbb H^n$ for $i > 1$
Hence we have:

$(1): \quad \ds \int_{\partial \mathbb H^n} \omega = \int_{\partial \mathbb H^n} f_1 \hat {\d x}_1$

This article, or a section of it, needs explaining.In particular: Clarification needed of what $\hat {\d x}_i$ means.  The inclusion of $\hat {\d x}_i$ within that long $\wedge$ expression looks wrong to me.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This article, or a section of it, needs explaining.In particular: What does $\wedge$ mean in this context?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Moreover:














\(\ds \d \omega\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \rd f_i \wedge \hat {\d x}_i\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \frac {\partial f} {\partial x_i} \d x_i \wedge \hat {\d x}_i\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^n \frac {\partial f} {\partial x_i} } \rd x_1 \wedge \cdots \wedge \d x_n\)









so that:

$\ds \int_{\mathbb H^n} \rd \omega = \sum_{i \mathop = 1}^n \int_{\mathbb H^n} \frac {\partial f_i} {\partial x_i} \rd x_1 \wedge \cdots \wedge \d x_n$

Let $i > 1$.
Then:














\(\ds \int_{\mathbb H^n} \frac {\partial f_i} {\partial x_i} \rd x_1 \wedge \cdots \wedge \d x_n\)

\(=\)







\(\ds \int \cdots \int \paren {\int_{-\infty}^\infty \frac {\partial f_i} {\partial x_i} } \hat {\d x}_i\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds 0\)










Let $i = 1$.
Then:














\(\ds \int_{\mathbb H^n} \frac {\partial f_1} {\partial x_1} \d x_1 \wedge \cdots \wedge \d x_n\)

\(=\)







\(\ds \int \cdots \int \paren {\int_{-\infty}^0 \frac {\partial f_i} {\partial x_i} } \hat {\d x}_i\)





Fubini's Theorem














\(\ds \)

\(=\)







\(\ds \int_{\partial \mathbb H^n} f_1 \hat {\d x}_1\)









So:

$\ds \int_{\mathbb H^n} \rd \omega = \int_{\partial \mathbb H^n} f_1 \, \hat {\d x}_1$
Together with $(1)$, this establishes the result.
$\Box$


General Case
Let $\omega$ be a smooth $\paren {n - 1}$-form with compact support on a smooth $n$-dimensional oriented manifold $X$.
Choose a finite family of relatively compact charts $V_1, \ldots, V_k$ on $X$ such that:

$\ds \map \supp \omega \subseteq \bigcup_{i \mathop = 1}^k V_i$
Choose a partition of unity:

$\chi_1, \ldots, \chi_k$
with $\chi_1 + \cdots + \chi_k = 1$ subordinate to the cover $\set {V_1, \ldots, V_k}$.
Put:

$\omega_i = \chi_i \omega$
Then we have:














\(\ds \omega\)

\(=\)







\(\ds \paren {\chi_1 + \cdots + \chi_k} \omega\)




















\(\ds \)

\(=\)







\(\ds \omega_1 + \cdots + \omega_k\)









Moreover, $\map \supp {\omega_i} \subset V_i$ by definition.


This needs considerable tedious hard slog to complete it.In particular: Explain why the integral is well-defined given that the manifold is oriented and has compact supportTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let the boundary of $X$ be $\partial X$.
Therefore, by the special case above, Stokes' theorem holds for each $\omega_i$.
Hence we have:

$\ds \int_X \rd \omega = \sum^k_{i \mathop = 1} \int_x \rd \omega_i = \sum^k_{i \mathop = 1} \int_{\partial X} \omega_i = \int_{\partial X} \omega$
$\blacksquare$


Also see
Implications of Stokes' Theorem


Source of Name
This entry was named for George Gabriel Stokes.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Stokes's theorem (G.G. Stokes, 1854)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Stokes's theorem (G.G. Stokes, 1854)




