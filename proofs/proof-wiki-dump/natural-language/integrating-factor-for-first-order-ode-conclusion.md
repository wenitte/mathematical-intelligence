# 

Source: https://proofwiki.org/wiki/Integrating_Factor_for_First_Order_ODE/Conclusion

Theorem
Let the first order ordinary differential equation:

$(1): \quad \map M {x, y} + \map N {x, y} \dfrac {\d y} {\d x} = 0$
be non-homogeneous and not exact.
Let $\map \mu {x, y}$be an integrating factor for $(1)$.
If one of these is the case:

$\mu$ is a function of $x$ only
$\mu$ is a function of $y$ only
$\mu$ is a function of $x + y$
$\mu$ is a function of $x y$
then:

$\mu = e^{\int \map f w \rd w}$
where $w$ depends on the nature of $\mu$.


Proof
We have one of these:

Integrating Factor for First Order ODE: Function of One Variable: $x$ or $y$ only
Integrating Factor for First Order ODE: Function of $x + y$
Integrating Factor for First Order ODE: Function of $x y$

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




