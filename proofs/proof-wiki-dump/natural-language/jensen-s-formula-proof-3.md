# 

Source: https://proofwiki.org/wiki/Jensen%27s_Formula/Proof_3


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
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
Without loss of generality, assume that $r = 0$. 


This article, or a section of it, needs explaining.In particular: I don't see why $r = 0$ is WLOG?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Write:

$\map f z = \map {B_{\rho_1} } z \dotsm \map {B_{\rho_n} } z \map g z$
where $\map {B_\rho} z := \dfrac {z - \rho} {1 - z \overline \rho}$ is the Blaschke factor at $\rho$.
So:

$\map g z$ is holomorphic and nonzero in $D_r$
and:

each $\map {B_{\rho_i} } z$ is holomorphic and has a simple zero $\rho_i$ inside $D_r$.
It is sufficient to check the equality for each factor of $f$ in this expansion.

First let:

$\map h z = \map {B_{\rho_k} } z = \dfrac {z - \rho_k} {1 - z \overline {\rho_k} }$
for some $k \in \set {1, \ldots, n}$.
Note that:

$\size {\map h z} \equiv 1$ for $\size z = 1$
so the integral is $0$.
Also:

$\map {B_{\rho_k} } 0 = \rho_k$
so the equality holds in this case.


This article, or a section of it, needs explaining.In particular: Why do the above statements hold? All statements in the above line look wrong.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

To show equality for $\map g z$, first observe that by the Cauchy's Residue Theorem:

$\ds \int_{\size z \mathop = r} \frac {\ln \map g z} z \rd z = 2 \pi i \ln \map g 0$

This article, or a section of it, needs explaining.In particular: Is $\ln \map g z$ well-defined?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore substituting $z = r e^{i \theta}$ we have:

$\ds 2 \pi i \ln \map g 0 = i \int_0^{2 \pi} \ln \map g {r e^{i \theta} } \rd \theta$
Comparing the imaginary parts of this equality we see that:

$\ds \frac 1 {2 \pi} \int_0^{2 \pi} \ln \size {\map g {r e^{i \theta} } } \rd \theta = \ln \size {\map g 0}$
as required.
$\blacksquare$


Source of Name
This entry was named for Johan Jensen.





