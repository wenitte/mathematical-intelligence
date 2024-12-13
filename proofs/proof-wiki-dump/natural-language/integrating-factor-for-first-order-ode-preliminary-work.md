# 

Source: https://proofwiki.org/wiki/Integrating_Factor_for_First_Order_ODE/Preliminary_Work

Theorem
Let the first order ordinary differential equation:

$(1): \quad \map M {x, y} + \map N {x, y} \dfrac {\d y} {\d x} = 0$
be non-homogeneous and not exact.
Let $\map \mu x$ be an integrating factor for $(1)$.
Let:

$\map P {x, y} := \dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}$

Then:

$\dfrac 1 \mu = \dfrac {\map P {x, y} } {N \dfrac {\partial \mu} {\partial x} - M  \dfrac {\partial \mu} {\partial y} }$


Proof
Let us for ease of manipulation express $(1)$ in the form of differentials:

$(2): \quad \map M {x, y} \rd x + \map N {x, y} \rd y = 0$
Let $\mu$ be an integrating factor for $(2)$.
Then, by definition:

$\mu \, \map M {x, y} \rd x + \mu \, \map N {x, y} \rd y = 0$
is an exact differential equation.
By Solution to Exact Differential Equation:

$\dfrac {\map \partial {\mu M} } {\partial y} = \dfrac {\map \partial {\mu N} } {\partial x}$
Evaluating this, using the Product Rule for Derivatives:

$\mu \dfrac {\partial M} {\partial y} + M \dfrac {\partial \mu} {\partial y} = \mu \dfrac {\partial N} {\partial x} + N \dfrac {\partial \mu} {\partial x}$
which leads us to:

$\dfrac 1 \mu \paren {N \dfrac {\partial \mu} {\partial x} - M  \dfrac {\partial \mu} {\partial y} } = \dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}$

Let us use $\map P {x, y}$ for $\dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}$.
Then:

$(3): \quad \dfrac 1 \mu = \dfrac {\map P {x, y} } {N \dfrac {\partial \mu} {\partial x} - M \dfrac {\partial \mu} {\partial y}}$
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors




