# 

Source: https://proofwiki.org/wiki/Jensen%27s_Formula



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


Proof 1
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


Proof 2
Write

$\map f z = \dfrac {r^2 - z \overline {\rho_1} } {r \paren {z - \rho_1} } \cdots \dfrac {r^2 - z \overline {\rho_n} } {r \paren {z - \rho_n} } \map g z$
so $\map g z \ne 0$ for $z \in D_r$.


This article, or a section of it, needs explaining.In particular: Why can you write like this? Looks wrong, because the zeros do not correspond. For example, insert $z=\rho_1$ in both sides.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
It is sufficient to check equality for each factor of $f$ in this expansion.

When $\cmod z = r$, we have:

$\dfrac 1 z = \dfrac {\overline z} {r^2}$
and:

$\cmod {\dfrac z r} = 1$
where $\overline z$ denotes the complex conjugate of $z$.

So:














\(\ds \cmod {\frac {r^2 - z \overline {\rho_k} } {r \paren {z - \rho_k} } }\)

\(=\)







\(\ds \frac {\cmod {r^2 - \overline z \rho_k} } {\cmod {r \paren {z - \rho_k} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {\cmod {1 - \overline z \rho_k / r^2} } {\cmod {z / r - \rho_k / r} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\cmod {1 - \overline z \rho_k / r^2} } {\cmod {1 - \rho_k / z} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\cmod {1 - \overline z \rho_k / r^2} } {\cmod {1 - \overline z \rho_k / r^2} }\)




















\(\ds \)

\(=\)







\(\ds 1\)









so the left hand side is $0$.


This article, or a section of it, needs explaining.In particular: What are you doing? The calculation above looks wrong and the conclusion that left hand side is zero because right hand side is one does not make sense. Please explain more.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Moreover:

$\\ln \cmod {\dfrac {r^2 - 0 \overline {\rho_k} } {r \paren {0 - \rho_k} } } = \ln \cmod {\rho_k} - \ln r$
so the right hand side is $0$.
Therefore, the formula holds for $\dfrac {r^2 - z \overline {\rho_k} } {r \paren {z - \rho_k} }$.

Since:

$r^2 - z \overline {\rho_i} = 0 \implies \cmod z = r^2 / \cmod {\overline {\rho_i} } > r$
it follows that $\map g z$ is holomorphic without zeroes on $D_r$.
So the right hand side is $\ln \size {\map g 0}$.
On the other hand, by the mean value property:

$\ds \dfrac 1 {2 \pi} \int_0^{2 \pi} \ln \size {\map g {r e^{i \theta} } } \rd \theta = \ln \map g 0$
as required.
$\blacksquare$


Proof 3
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





