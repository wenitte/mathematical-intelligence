# 

Source: https://proofwiki.org/wiki/Bertrand%27s_Theorem/Non-Perturbative_Proof


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $U: \R_{>0} \to \R$ be analytic for $r > 0$.
Let $M > 0$ be a nonvanishing angular momentum such that a stable circular orbit exists.
Suppose that every orbit sufficiently close to the circular orbit is closed.

Then $U$ is either $k r^2$ or $-\dfrac k r$ (for $k > 0$) up to an additive constant.


Proof
Preliminary Lemma
For simplicity we set $m = 1$, so that the effective potential becomes:

$U_M = U + \dfrac {M^2} {2 r^2}$

This article, or a section of it, needs explaining.In particular: What is $m$ in this context?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Consider the apsidial angle:

$\ds \Phi = \sqrt 2 \int_{r_\min}^{r_\max} \frac {M \rd r} {r^2 \sqrt {E - U_M} }$
where:

$E$ is the energy
$r_\min, r_\max$ are solutions to $\map {U_M} r = E$.
By definition, this is the angle between adjacent apocenters (pericenters).


This article, or a section of it, needs explaining.In particular: Apocenters or pericenters? Or either? This could be clarified.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Recall that if $\Phi$ is commensurable with $\pi$, then an orbit is closed.


This article, or a section of it, needs explaining.In particular: Link to a proof demonstrating this.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\Box$

In general $U_M$ is not monotonic on $\openint {r_\min} {r_\max}$.


This article, or a section of it, needs explaining.In particular: Link to a proof of that statement.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore a unique inverse $\map r {U_M}$ does not exist.
However, suppose it is possible to construct separate inverse functions $r_{1, 2}$ for the intervals $\openint {r_0} {r_\min}$ and $\openint {r_0} {r_\max}$, where $r_0$ is the minimum of $U_M$ on $\openint {r_\min} {r_\max}$.


This article, or a section of it, needs explaining.In particular: What does $r_{1, 2}$ mean in this context?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Note that the orbit corresponding to $r_0$ is the stable circular orbit.


This article, or a section of it, needs explaining.In particular: Link to a proof of the above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore this will be possible for orbits sufficiently close to it. 
Now write:

$\ds \Phi = \int_{U_0}^E \map F {U_M} \frac {\d U_{eff} } {\sqrt {E - U_M} }$
where:

$F = \sqrt 2 M \, \map {\dfrac {\d} {\d U_M} } {\dfrac 1 {r_1} - \dfrac 1 {r_2} }$
$U_0 \equiv \map {U_M} {r_0}$

This article, or a section of it, needs explaining.In particular: What does $U_{eff}$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
This is Abel's Integral Equation which can be solved for $\map F {U_M}$, giving:

$\ds \map F U = \dfrac 1 \pi \int_{U_0}^{U_M} \frac {\Phi \rd E} {\sqrt {U_M - E} }$
$\Phi$ may have energy dependence.
However, we require:

$\map \Phi E = 2 \pi \map q E$
such that $q: \R \to \Q$ is continuous, and a rational continuous function must be constant.


This article, or a section of it, needs explaining.In particular: Link to a result explaining why a rational continuous function must be constant.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Finally, integrating gives:

$\dfrac 1 {r_1} - \dfrac 1 {r_2} = \gamma \sqrt{U_M - U_0}, \gamma = \dfrac {\sqrt 2 \Phi} {\pi M}$

This article, or a section of it, needs explaining.In particular: Provide a link demonstrating the solution of that integral.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Now consider defining the left hand side to be a single function $\dfrac 1 {\map r U}$, meromorphic with a simple pole at $r = 0$.


This article, or a section of it, needs explaining.In particular: The definitions for meromorphic and simple pole as given on $\mathsf{Pr} \infty \mathsf{fWiki}$ are specifically for complex functions. Either these need to be expanded to define them in the specific context of real functions, or the above definition is actually for a complex function. In any case, the domain of all the functions defined in this proof need to be clarified.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Write:

$\dfrac 1 r = \gamma \sqrt {U_M - U_0} + \map \Omega {U_0, U}$
where $\Omega$ is an analytic function in $U$ in an open neighborhood of $U_0$ such that:

$\map \Omega {U_0, U_0} = \dfrac 1 {r_0}$

This article, or a section of it, needs explaining.In particular: What are $\tuple {U_0, U}$ and $\tuple {U_0, U_0}$ in this context?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Explicitly:

$\sqrt {U_M - U_0} = \sqrt {U + \dfrac {M^2} {2 r^2} - U_0} = \dfrac 1 r \sqrt {\dfrac {M^2} 2 + \paren ({U - U_0} r^2}$
It can be seen that the right hand side also has a simple pole at $r=0$.
However, it also has a branching point at $r = r_0$.
To avoid this, the radicand must be the square of an analytic function with a zero at $r_0$.
The only possibilities are:

$U \propto r^2, -\dfrac 1 {r^2}$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1974: V.I. Arnold: Mathematical Methods of Classical Mechanics: $\S 2.\text D$, problems $1$. to $6$.




