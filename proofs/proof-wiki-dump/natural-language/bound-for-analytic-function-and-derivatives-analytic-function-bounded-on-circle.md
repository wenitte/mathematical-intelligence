# 

Source: https://proofwiki.org/wiki/Bound_for_Analytic_Function_and_Derivatives/Analytic_Function_Bounded_on_Circle

Lemma
Let $f$ be a complex function.
Let $z_0$ be a point in $\C$.
Let $\Gamma$ be a circle in $\C$ with center at $z_0$ and radius in $\R_{>0}$.
Let $f$ be analytic on $\Gamma$.

Then $f$ is bounded on $\Gamma$.


Proof
Let:

$\map {f_{\Re} } z = \map \Re {\map f z}$
$\map {f_{\Im} } z = \map \Im {\map f z}$
Let $\closedint a b$, $a < b$, be a closed real interval.
Let $p$ be a continuous complex-valued function defined such that:

$\Gamma = \set {\map p u: u \in \closedint a b}$

$f$ is continuous on $\Gamma$ as $f$ is analytic on $\Gamma$ by the definition of analytic.
Also, Real and Imaginary Part Projections are Continuous.
Therefore, $f_{\Re}$ and $f_{\Im}$ are continuous by the corollary to Composite of Continuous Mappings is Continuous.

Observe that $f_{\Re}$ and $f_{\Im}$ are real-valued functions that are continuous.
Also, $p$ is a continuous function defined on a set of real numbers.
Therefore $\map {f_{\Re} } {\map p u}$ and $\map {f_{\Im} } {\map p u}$ are continuous real functions by the corollary to Composite of Continuous Mappings is Continuous.

$\map {f_{\Re} } {\map p u}$ and $\map {f_{\Im} } {\map p u}$ are bounded on $\closedint a b$ by Continuous Real Function is Bounded.
Therefore $\map f {\map p u}$ is bounded on $\closedint a b$ as $\map f {\map p u} = \map {f_{\Re} } {\map p u} + i \map {f_{\Im} } {\map p u}$ where $i = \sqrt {-1}$.
Accordingly, $f$ is bounded on $\Gamma$ as $\Gamma = \set {\map p u: u \in \closedint a b}$.
$\blacksquare$





