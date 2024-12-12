# 

Source: https://proofwiki.org/wiki/Complex_Function_is_Entire_iff_it_has_Everywhere_Convergent_Power_Series



Theorem
Let $f: \C \to \C$ be a complex function.
Then $f$ is an entire function if and only if $f$ can be given by an everywhere convergent power series:

$\ds \map f z = \sum_{n \mathop = 0}^\infty a_n z^n; \quad \lim_{n \mathop \to \infty} \sqrt [n] {\size {a_n} } = 0$


Proof

This article, or a section of it, needs explaining.In particular: This needs tightening.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Sufficient Condition
From Holomorphic Function is Analytic, if $f$ is holomorphic on some open ball $D$ in $\C$, then $f$ is complex analytic on $D$. 
However, as, by the definition of an entire function, $f$ is holomorphic everywhere, the radius of $D$ can be made arbitrarily large, meaning that $f$ is complex analytic everywhere.
This implies that an entire function is complex analytic everywhere.
$\Box$


Necessary Condition
It remains to prove that if $f$ is complex analytic everywhere, $f$ is entire. 
By Power Series is Termwise Differentiable within Radius of Convergence, if $f$ is complex analytic everywhere, $f$ is holomorphic everywhere. 
That is, a function complex analyticeverywhere is entire. 

Note that by the Cauchy-Hadamard theorem: 

$\ds \lim_{n \mathop \to \infty} \sqrt [n] {\size {a_n} } = 0$
if and only if this series has an infinite radius of convergence. 
That is, if and only if the series converges for all $z \in \C$, satisfying our second demand. 
$\blacksquare$





