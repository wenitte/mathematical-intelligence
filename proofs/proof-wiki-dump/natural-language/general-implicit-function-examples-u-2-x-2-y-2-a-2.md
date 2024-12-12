# 

Source: https://proofwiki.org/wiki/General_Implicit_Function/Examples/u%5E2_%2B_x%5E2_%2B_y%5E2_%3D_a%5E2

Example of General Implicit Function
Consider the equation:

$(1): \quad u^2 + x^2 + y^2 = a^2$
where $u, x, y \in \R$ are real variables.

Then $(1)$ defines $u$ as an implicit function of $x$ and $y$ on the region $x^2 + y^2 \le a^2$.


Proof
Solving for $u$, we obtain:

$y = \pm \sqrt {a^2 - x^2 - y^2}$
As it stands, $(1)$ does not define a real function, because:

$\text{(a)}: \quad u$ is not defined for values of $x^2 + y^2$ outside the range $-a \le x \le a$
$\text{(b)}: \quad$ For all $x^2 + y^2$ within the range $-a \le x \le a$, there are two possible values of $u$ that can be taken.

This can be corrected by:

$\text{(a)}: \quad$ Specifying the domain to be the region $x^2 + y^2 \le a^2$ (or a subset thereof)
$\text{(b)}: \quad$ Specifying which value of $x^2 + y^2$ that is to be chosen, for example:
$\forall x, y: x^2 + y^2 \le a^2: u = \sqrt {a^2 - x^2 - y^2}$ (where $\sqrt {}$ in this context specifically means the positive square root)
$\forall x, y: x^2 + y^2 \le a^2: u = -\sqrt {a^2 - x^2 - y^2}$
$\blacksquare$


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 1$. Introduction




