# 

Source: https://proofwiki.org/wiki/Implicit_Function/Examples/x%5E2_%2B_y%5E2_-_r%5E2_%3D_0

Example of Implicit Function
Consider the equation:

$(1): \quad x^2 + y^2 - r^2 = 0$
where:

$x, y \in \R$ are real variables
$r \in \R_{>0}$ is a strictly positive real constant.

Then $(1)$ defines $y$ as an implicit function of $x$ on the closed interval $\closedint {-r} r$.


Proof
Solving for $y$, we obtain:

$y = \pm \sqrt {r^2 - x^2}$
As it stands, $(1)$ does not define a real function, because:

$\text{(a)}: \quad y$ is not defined for values of $x$ outside the range $-r \le x \le r$
$\text{(b)}: \quad$ For all $x$ within the range $-r \le x \le r$, there are two possible values of $y$ that can be taken.

This can be corrected by:

$\text{(a)}: \quad$ Specifying the domain to be the closed interval $\closedint {-r} r$ (or a subset thereof)
$\text{(b)}: \quad$ Specifying which value of $y$ that is to be chosen, for example:
$\forall x \in \closedint {-r} r: y = \sqrt {r^2 - x^2}$ (where $\sqrt {}$ in this context specifically means the positive square root)
$\forall x \in \closedint {-r} r: y = -\sqrt {r^2 - x^2}$
$\forall x \in \closedint {-r} r: y = \begin {cases} \sqrt {r^2 - x^2} & : x \le 0 \\ -\sqrt {r^2 - x^2} & : x > 0 \end {cases}$

Thus we have:

$y = \map f {x, \map g x}$
where:

$\map f {x, \map g x} = x^2 + \paren {\sqrt {r^2 - x^2} }^2 - r^2 = 0$
thereby demonstrating that $y$ is an implicit function of $x$.
$\blacksquare$


Sources
1963: Morris Tenenbaum and Harry Pollard: Ordinary Differential Equations ... (previous) ... (next): Chapter $1$: Basic Concepts: Lesson $2 \text D$: Implicit Function
for the special case of $r = 5$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): implicit function
for the special case of $r = 1$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): implicit function
for the special case of $r = 1$




