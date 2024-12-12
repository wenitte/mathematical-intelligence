# 

Source: https://proofwiki.org/wiki/Friedrichs%27_Inequality


This article needs to be linked to other articles.In particular: throughout; particularly CategoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This page has been identified as a candidate for refactoring of medium complexity.In particular: Separate pages, transcluded, for the two partsUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $G \subset \R^n$ be bounded domain.

Then for any $u \in \map {W^{1, 2}_0} G$:

$\norm u_{\map {L^2} G} \le \map {\operatorname {diam} } G \norm {\nabla u}_{\map {L^2} G}$
where:

$\map {\operatorname {diam} } G := \sup \limits_{x, y \mathop \in G} \size {x - y}$


Proof
Smooth functions with compact support

This article, or a section of it, needs explaining.In particular: In several places in the below, this construct was seen: $\vert \nabla u (x_1, \dots, x_{m - 1}, t\vert^2$ where it appears that the close of the round bracket parenthesis "$)$" was been omitted. It has been assmued in the corrected version that it should be this: $\vert\nabla u (x_1,\dots,x_{m-1},t)\vert^2$ but it is not obvious and may require someone knowledgeable to check this out.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $u \in \map {C_0^\infty} G$.
Put $\map u x = 0$ if $x = \tuple {x_1, x_2, \ldots, x_n} \notin G$.
Then:

$u \in \map {C_0^\infty} {\R^n}$
Denote by $a,b$ the extremes of the last coordinate: $a = \inf \limits_{x \mathop \in G} x_n$ and $b = \sup \limits_{y \mathop \in G} x_n$
Then for any $x$:

$\ds \size {\map u {x_1, x_2, \ldots, x_n} }^2 = \size {\int \limits_a^{x_n} \frac {\partial u} {\partial x_n} \tuple {x_1, x_2, \ldots, x_{n - 1}, t} \rd t}^2$
By Cauchy-Bunyakovsky-Schwarz Inequality:














\(\ds \size {\int \limits_a^{x_n} \map {\frac {\partial u} {\partial x_n} } {x_1, \ldots, x_{n - 1}, t} \rd t}^2\)

\(\le\)







\(\ds \int \limits_a^{x_n} 1^2 \rd t \int \limits_a^{x_n} \size {\map {\frac {\partial u} {\partial x_n} } {x_1, \ldots, x_{n - 1}, t} }^2 \rd t\)




















\(\ds \)

\(\le\)







\(\ds \map {\operatorname {diam} } G \int \limits_a^b \size {\map {\nabla u} {x_1, \ldots, x_{m - 1}, t} }^2 \rd t\)










Integrating this we get:

$\ds \norm u_{\map {L^2} G} \le \map {\operatorname {diam} } G \int \limits_G \paren {\int \limits_a^b \size {\map {\nabla u} {x_1, \ldots, x_{m - 1}, t} }^2 \rd t} \rd x$

By Fubini's Theorem:














\(\ds \int \limits_G \paren {\int \limits_a^b \size {\map {\nabla u} {x_1, \ldots, x_{m - 1}, t} }^2 \rd t} \rd x\)

\(=\)







\(\ds \int \limits_a^b \rd x_m \int \limits_{\mathbb R^n} \size {\map {\nabla u} {x_1, \ldots, x_{n - 1}, x_m} }^2 \rd x\)




















\(\ds \)

\(\le\)







\(\ds \map {\operatorname {diam}^2} G \norm {\nabla u}^2_{\map {L^2} G}\)









$\blacksquare$


General case
Let now $u \in \map {W^{1, 2}_0} G$.
There exists a sequence $\ds \sequence {u_n}_{n \mathop = 1}^\infty \subset \map {C_0^\infty} G$ such that:

$\norm {u - u_n}_{\map {W^{1, 2} } G} \to 0$
as $n \to \infty$.
Then:

$\norm {u - u_n}_{\map {L^2} G} \to 0$
and:

$\norm {\nabla u - \nabla u_n}_{\map {L^2} G} \to 0$

As $\size {\, \norm {u - u_n} \,} \le \norm {u - u_n}$, it follows that:

$\norm {u_n}_{\map {L^2} G} \to \norm u_{\map {L^2} G}$
and:

$\norm {\nabla u_n}_{\map {L^2} G} \to \norm {\nabla u}_{\map {L^2} G}$
Since the inequality is correct for all $u_n$, it is also correct for $u$.
$\blacksquare$


Source of Name
This entry was named for Kurt Otto Friedrichs.





