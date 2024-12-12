# 

Source: https://proofwiki.org/wiki/Existence_of_Integrating_Factor



Theorem
Let the first order ordinary differential equation:

$(1): \quad \map M {x, y} + \map N {x, y} \dfrac {\d y} {\d x} = 0$
be such that $M$ and $N$ are real functions of two variables which are not homogeneous functions of the same degree.
Suppose also that:

$\dfrac {\partial M} {\partial y} \ne \dfrac {\partial N} {\partial x}$
that is, $(1)$ is not exact.

Finally, suppose that $(1)$ has a general solution.
Then it is always possible to find an integrating factor $\map \mu {x, y}$ such that:

$\map \mu {x, y} \paren {\map M {x, y} + \map N {x, y} \dfrac {\d y} {\d x} } = 0$
is an exact differential equation.
Hence it is possible to find that solution by Solution to Exact Differential Equation.


Proof
Let us for ease of manipulation express $(1)$ in the form of differentials:

$(2): \quad \map M {x, y} \rd x + \map N {x, y} \rd y = 0$

Suppose that $(2)$ has a general solution:

$(3): \quad \map f {x, y} = C$
where $C$ is some constant.
We can eliminate $C$ by differentiating:

$\dfrac {\partial f} {\partial x} \rd x + \dfrac {\partial f} {\partial y} \rd y = 0$
It follows from $(2)$ and $(3)$ that:

$\dfrac {\d y} {\d x} = - \dfrac M N = -\dfrac {\partial f / \partial x} {\partial f / \partial y}$
and so:

$(4): \quad \dfrac {\partial f / \partial x} M = \dfrac {\partial f / \partial y} N$
Let this common ratio in $(4)$ be denoted $\map \mu {x, y}$.
Then:

$\dfrac {\partial f} {\partial x} = \mu M$
$\dfrac {\partial f} {\partial y} = \mu N$
So, if we multiply $(2)$ by $\mu$, we get:

$\mu M \rd x + \mu N \rd y = 0$
or:

$\dfrac {\partial f} {\partial x} \rd x + \dfrac {\partial f} {\partial y} \rd y = 0$
which is exact.
So, if $(2)$ has a general solution, it has at least one integrating factor $\map \mu {x, y}$.
$\blacksquare$


Also see
Existence of Infinitely Many Integrating Factors


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors




