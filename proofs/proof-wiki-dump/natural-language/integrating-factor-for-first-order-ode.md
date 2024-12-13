# 

Source: https://proofwiki.org/wiki/Integrating_Factor_for_First_Order_ODE

  This article was Featured Proof between 27 November 2010 and 19 December 2010.




Theorem
Let the first order ordinary differential equation:

$(1): \quad \map M {x, y} + \map N {x, y} \dfrac {\d y} {\d x} = 0$
be non-homogeneous and not exact.
By Existence of Integrating Factor, if $(1)$ has a general solution, there exists an integrating factor $\map \mu {x, y}$ such that:

$\ds \map \mu {x, y} \paren {\map M {x, y} + \map N {x, y} \frac {\d y} {\d x} } = 0$
is an exact differential equation.
Unfortunately, there is no systematic method of finding such a $\map \mu {x, y}$ for all such equations $(1)$.[1]
However, there are certain types of first order ODE for which an integrating factor can be found procedurally.


Function of One Variable: $x$ or $y$ only
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


Function of $x + y$
Suppose that:

$\map g z = \dfrac {\dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x} } {\map N {x, y} - \map M {x, y} }$
is a function of $z$, where $z = x + y$.
Then:

$\map \mu {x + y} = \map \mu z = e^{\int \map g z \rd z}$
is an integrating factor for $(1)$.


Function of $x y$
$\map g z = \dfrac {\dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}} {N y - M x}$
is a function of $z$, where $z = x y$.

Then:

$\map \mu {x y} = \map \mu z = e^{\int \map g z \d z}$
is an integrating factor for $(1)$.


Proof
We have one of these:

Integrating Factor for First Order ODE: Function of One Variable: $x$ or $y$ only
Integrating Factor for First Order ODE: Function of $x + y$
Integrating Factor for First Order ODE: Function of $x y$


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


Technique for finding an Integrating Factor
Suppose you have a first order ODE which is in (or can be manipulated into) the form:

$\map M {x, y} + \map N {x, y} \dfrac {\d y} {\d x} = 0$
and it is not homogeneous, exact or linear.

Then what you can do is evaluate:

$\dfrac {\partial M} {\partial y} - \dfrac {\partial N} {\partial x}$
and see what you get when you divide it by each of $N$, $M$, $N - M$ and $N y - M x$ in turn.
Then examine what you get to see if you have a function in $x$ only, $y$ only, $x + y$ or $x y$ respectively.
Suppose this has been achieved.
Then from Integrating Factor for First Order ODE, you have found an integrating factor and can solve the equation by using the technique defined in Solution to Exact Differential Equation.


Examples
$y \rd x + \paren {x^2 y - x} \rd y = 0$
The first order ODE:

$(1): \quad y \rd x + \paren {x^2 y - x} \rd y = 0$
has the general solution:

$\dfrac {y^2} 2 - \dfrac y x = C$


$\paren {3 x^2 - y^2} \rd y - 2 x y \rd x = 0$
The first order ODE:

$(1): \quad \paren {3 x^2 - y^2} \rd y - 2 x y \rd x = 0$
has the general solution:

$\dfrac 1 y - \dfrac {x^2} {y^3} = C$


$\paren {x y - 1} \rd x + \paren {x^2 - x y} \rd y = 0$
The first order ODE:

$(1): \quad \paren {x y - 1} \rd x + \paren {x^2 - x y} \rd y = 0$
has the general solution:

$x y - \ln x - \dfrac {y^2} 2 + C$


$y \rd x + x \rd y + 3 x^3 y^4 \rd y = 0$
The first order ODE:

$(1): \quad y \rd x + x \rd y + 3 x^3 y^4 \rd y = 0$
has the general solution:

$-\dfrac 1 {2 x^2 y^2} + \dfrac {3 y^2} 2 = C$


References

↑ "In general this is quite difficult."
-- 1972: George F. Simmons: Differential Equations: $\S 2.9$: Integrating Factors




Sources
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 2.9$: Integrating Factors




