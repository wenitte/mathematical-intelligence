# 

Source: https://proofwiki.org/wiki/Integrating_Factor_for_First_Order_ODE/Function_of_One_Variable



Theorem
Let the first order ordinary differential equation:

$(1): \quad \map M {x, y} + \map N {x, y} \dfrac {\d y} {\d x} = 0$
be non-homogeneous and not exact.

Suppose that:

$\map g x = \dfrac {\dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x} } {\map N {x, y} }$
is a function of $x$ only.
Then:

$\map \mu x = e^{\int \map g x \rd x}$
is an integrating factor for $(1)$.

Similarly, suppose that:

$\map h y = \dfrac {\dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x} } {\map M {x, y} }$
is a function of $y$ only.
Then:

$\map \mu y = e^{\int -\map h y \rd y}$
is an integrating factor for $(1)$.


Proof
Preliminary Work
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


Proof for Function of $x$ or $y$ only
Suppose that $\mu$ is a function of $x$ only.
Then:

$\dfrac {\partial \mu} {\partial x} = \dfrac {d \mu} {d x}, \dfrac {\partial \mu} {\partial y} = 0$
which, when substituting in $(3)$, leads us to:

$\dfrac 1 \mu \dfrac {\d \mu} {\d x} = \dfrac {\map P {x, y} } {\map N {x, y} } = \map g x$
where $\map g x$ is the function of $x$ that we posited.

Similarly, if $\mu$ is a function of $y$ only, we find that:

$\dfrac 1 \mu \dfrac {\d \mu} {\d y} = \dfrac {\map P {x, y} } {-\map M {x, y} } = \map h y$
where $\map h y$ is the function of $y$ that we posited.


Conclusion of Proof
We have an equation of the form:

$\dfrac 1 \mu \dfrac {\d \mu} {\d w} = \map f w$
which is what you get when you apply the Chain Rule for Derivatives and Derivative of Logarithm Function to:

$\dfrac {\map \d {\ln \mu} } {\d w} = \map f w$
Thus:

$\ds \ln \mu = \int \map f w \rd w$
and so:

$\mu = e^{\int \map f w \rd w}$

Hence the results as stated.
$\blacksquare$


Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors




