# 

Source: https://proofwiki.org/wiki/Derivative_of_Curve_at_Point

Theorem
Let $f: \R \to \R$ be a real function.
Let the graph $G$ of $f$ be depicted on a Cartesian plane.

Then the derivative of $f$ at $x = \xi$ is equal to the tangent to $G$ at $x = \xi$.


Proof
Let $f: \R \to \R$ be a real function.




Let the graph $G$ of $f$ be depicted on a Cartesian plane.

Let $A = \tuple {\xi, \map f \xi}$ be a point on $G$.

Consider the secant $AB$ to $G$ where $B = \tuple {\xi + h, \map f {\xi + h} }$.
From Slope of Secant, the slope of $AB$ is given by:

$\dfrac {\map f {x + h} - \map f x} h$
By taking $h$ smaller and smaller, the secant approaches more and more closely the tangent to $G$ at $A$:

$\map {f'} x = \ds \lim_{h \mathop \to 0} \dfrac {\map f {x + h} - \map f x} h$
where $\lim$ denotes the limit as $h \to 0$.
$\blacksquare$


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (next): $\text {II}$. Calculus: Differentiation: Differential Coefficient
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $8$: The System of the World: Calculus




