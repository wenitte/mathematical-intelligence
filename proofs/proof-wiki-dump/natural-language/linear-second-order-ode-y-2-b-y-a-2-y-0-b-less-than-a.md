# 

Source: https://proofwiki.org/wiki/Linear_Second_Order_ODE/y%27%27_%2B_2_b_y%27_%2B_a%5E2_y_%3D_0/b_less_than_a

Theorem
The second order ODE:

$(1): \quad y + 2 b y' + a^2 y = 0$ where $b^2 < a^2$
has the general solution:

$y = e^{-b x} \paren {C_1 \, \map \cos {\sqrt {a^2 - b^2} } x + C_2 \, \map \sin {\sqrt {a^2 - b^2} } x}$


Proof
It can be seen that $(1)$ is a constant coefficient homogeneous linear second order ODE.
Its auxiliary equation is:

$(2): \quad: m^2 + 2 b m + a^2 = 0$
From Solution to Quadratic Equation with Real Coefficients, the roots of $(2)$ are:

$m_1 = - b + \sqrt {b^2 - a^2}$
$m_2 = - b - \sqrt {b^2 - a^2}$
As $b^2 < a^2$, this converts into:

$m_1 = - b + i \sqrt {a^2 - b^2}$
$m_2 = - b - i \sqrt {a^2 - b^2}$

These are complex and unequal.
So from Solution of Constant Coefficient Homogeneous LSOODE, the general solution of $(1)$ is:

$y = e^{-b x} \paren {C_1 \, \map \cos {\sqrt {a^2 - b^2} } x + C_2 \, \map \sin {\sqrt {a^2 - b^2} } x}$
$\blacksquare$





