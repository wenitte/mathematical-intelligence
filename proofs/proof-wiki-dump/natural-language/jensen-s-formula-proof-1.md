# 

Source: https://proofwiki.org/wiki/Jensen%27s_Formula/Proof_1

Theorem
Let $S$ be an open subset of the complex plane containing the closed disk:

$D_r = \set {z \in \C : \cmod z \le r}$
of radius $r$ about $0$.
Let $f: S \to \C$ be holomorphic on $S$. 
Let $f$ have no zeroes on the circle $\cmod z = r$.
Let $\map f 0 \ne 0$.
Let $\rho_1, \ldots, \rho_n$ be the zeroes of $f$ in $D_r$, counted with multiplicity.

Then:

$(1): \quad \ds \frac 1 {2 \pi} \int_0^{2 \pi} \ln \cmod {\map f {r e^{i \theta} } } \rd \theta = \ln \cmod {\map f 0} + \sum_{k \mathop = 1}^n \paren {\ln r - \ln \size {\rho_k} }$


Proof
Write:

$\map f z = \paren {z - \rho_1} \dotsm \paren {z - \rho_n} \map g z$
so $\map g z \ne 0$ for $z \in D_r$.
It is sufficient to check the equality for each factor of $f$ in this expansion.

First let:

$\map h z = z - \rho_k$
for some $k \in \set {1, \ldots, n}$.
Making use of the substitution $u = r e^{i \theta} - \rho_k$ we find that:

$\ds \frac 1 {2 \pi} \int_0^{2 \pi} \ln \size {\map h {r e^{i \theta} } } \rd \theta = \frac 1 {2 \pi i} \int_\gamma \frac {\ln \size u} {u + \rho_k} \rd u$
where $\gamma$ is a circle of radius $r$ centred at $-\rho_k$, traversed anticlockwise.


There is believed to be a mistake here, possibly a typo.In particular: I think this last statement is False! The circle is not centered at 0 so $\size u$ is not constant.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
On this circle, $\ln \size u = \ln r$ is constant, and we have that:

$\ds \int_\gamma \frac 1 {u + \rho_k} \rd u = \int_{\size z \mathop = r} \frac {\d u} u = 2 \pi i$
Therefore the left hand side of $(1)$ is $\ln r$ as required.

To show equality for $\map g z$, first observe that by Cauchy's Residue Theorem:

$\ds \int_{\size z = r} \frac {\ln \map g z} z \rd z = 2 \pi i \ln \map g 0$

This article, or a section of it, needs explaining.In particular: Is $\ln \map g z$ well-defined?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore substituting $z = r e^{i \theta}$ we have

$\ds 2 \pi i \ln \map g 0 = i \int_0^{2 \pi} \ln \map g {r e^{i \theta} } \rd \theta$
Comparing the imaginary parts of this equality we see that:

$\ds \frac 1 {2 \pi} \int_0^{2 \pi} \ln \size {\map g {r e^{i \theta} } } \rd \theta = \ln \size {\map g 0}$
as required.
$\blacksquare$


Source of Name
This entry was named for Johan Jensen.





