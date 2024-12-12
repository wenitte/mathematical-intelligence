# 

Source: https://proofwiki.org/wiki/Definite_Integral_of_Partial_Derivative/Proof_1

Theorem
Let $\map f {x, y}$ and $\map {\dfrac {\partial f} {\partial x} } {x, y}$ be continuous functions of $x$ and $y$ on $D = \closedint {x_1} {x_2} \times \closedint a b$.
Then:

$\ds \frac \d {\d x} \int_a^b \map f {x, y} \rd y = \int_a^b \map {\frac {\partial f} {\partial x} } {x, y} \rd y$
for $x \in \closedint {x_1} {x_2}$.


Proof
From Leibniz's Integral Rule:

$\ds \frac \d {\d y} \int_{\map a y}^{\map b y} \map f {x, y} \rd x = \map f {y, \map b y} \frac {\d b} {\d y} - \map f {y, \map a y} \frac {\d a} {\d y} + \int_{\map a y}^{\map b y} \frac {\partial} {\partial y} \map f {x, y} \rd x$
where $\map a y$, $\map b y$ are continuously differentiable.

Setting $\map a y$ and $\map b y$ constant, so that $\exists a, b \in \R: \map a y = a, \map b y = b$:

$\dfrac {\d a} {\d y} = \dfrac {\d b} {\d y} = 0$
from which the result follows immediately.
$\blacksquare$





