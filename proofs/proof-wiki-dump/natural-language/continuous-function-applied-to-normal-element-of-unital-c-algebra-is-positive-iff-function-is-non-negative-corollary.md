# 

Source: https://proofwiki.org/wiki/Continuous_Function_applied_to_Normal_Element_of_Unital_C*-Algebra_is_Positive_iff_Function_is_Non-Negative/Corollary

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $x \in A$ be normal. 
Let $\map {\sigma_A} x$ denote the spectrum of $x$ in $A$.
Let $f, g, h : \map {\sigma_A} x \to \R$ be continuous such that:

$\map g z \le \map f z$ for all $z \in \map {\sigma_A} x$.
Let $\map {\Theta_x} f = \map f x$, $\map {\Theta_x} g = \map g x$ be the continuous functional calculus of $x$ applied to $f$ and $g$ respectively.
Let $\le_A$ be the canonical ordering of $A$. 

Then:

$\map g x \le_A \map f x$


Proof
Since $g \le f$ we have:

$\map {\paren {f - g} } z \in \R_{\ge 0}$ for all $z \in \map {\sigma_A} x$.
Hence from Continuous Function applied to Normal Element of Unital C*-Algebra is Positive iff Function is Non-Negative, we have:

$\map {\Theta_x} {f - g} \ge_A {\mathbf 0}_A$
Since $\Theta_x$ is linear, we have:

$\map {\Theta_x} f - \map {\Theta_x} g \ge_A {\mathbf 0}_A$
and hence:

$\map f x \ge_A \map g x$
$\blacksquare$





