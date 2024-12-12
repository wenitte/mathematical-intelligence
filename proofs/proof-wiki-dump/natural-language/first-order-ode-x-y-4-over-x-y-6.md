# 

Source: https://proofwiki.org/wiki/First_Order_ODE/(x_%2B_y_%2B_4)_over_(x_-_y_-_6)

Theorem
The first order ODE:

$(1): \quad \dfrac {\d y} {\d x} = \dfrac {x + y + 4} {x - y - 6}$
has the general solution:

$\map \arctan {\dfrac {y + 5} {x - 1} } = \ln \sqrt {\paren {x - 1}^2 + \paren {y + 5}^2} + C$


Proof
We note that $(1)$ is in the form:

$\dfrac {\d y} {\d x} = \map F {\dfrac {a x + b y + c} {d x + e y + f} }$
where:

$a e = -1 \ne b d = 1$
Hence we can use First Order ODE in form $y' = \map F {\dfrac {a x + b y + c} {d x + e y + f} }$.
Let:

$x = z - h$ where $h = 2 / -2 = -1$
$y = w - k$ where $k = -10 / -2 = 5$.
Then:

$\dfrac {\d w} {\d z} = \dfrac {z + w} {z - w}$
From the solution to $\dfrac {\d y} {\d x} = \dfrac {x + y} {x - y}$:

$\arctan \dfrac w z = \ln \sqrt {z^2 + w^2} + C$
We have:

$x = z - \paren {-1}$
$y = w - 5$
and so:

$z = x - 1$
$w = y + 5$
This gives:

$\map \arctan {\dfrac {y + 5} {x - 1} } = \ln \sqrt {\paren {x - 1}^2 + \paren {y + 5}^2} + C$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.7$: Homogeneous Equations: Problem $5 \ \text{(a)}$




