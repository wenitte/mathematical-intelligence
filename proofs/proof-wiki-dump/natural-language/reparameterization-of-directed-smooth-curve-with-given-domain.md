# 

Source: https://proofwiki.org/wiki/Reparameterization_of_Directed_Smooth_Curve_with_Given_Domain

Theorem
Let $\gamma: \closedint a b \to \C$ be a smooth path in the complex plane.
Let $C$ be a directed smooth curve with parameterization $\gamma$.
Let $\closedint { a_0 }{ b_0 }$ be a closed real interval, where $a_0 < b_0$.

Then there exists a smooth path

$\gamma_0 : \closedint { a_0 }{ b_0 } \to \C$
that is a reparameterization of $C$.


Proof
Define $\phi : \closedint a b \to \closedint { a_0 }{ b_0 }$ by:

$\map{ \phi }{ t } = \dfrac{ b_0 - a_0 }{ b - a } \paren{ t - a } + a_0$

Power Rule for Derivatives shows that

$\map{ \phi' }{ t } = \dfrac{ b_0 - a_0 }{ b - a }$

Real Function with Strictly Positive Derivative is Strictly Increasing shows that $\phi$ is strictly increasing, as $\map{ \phi' }{ t } > 0$ for all $t \in \closedint a b$.
Strictly Monotone Real Function is Bijective shows that $\phi$ is bijective.
Set $\gamma_0 = \gamma \circ \phi : \closedint a b \to \C$.
By definition of directed smooth curve, it follows that $\gamma_0$ is a reparameterization of $C$.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




