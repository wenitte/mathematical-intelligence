# 

Source: https://proofwiki.org/wiki/Equation_of_Catenary/Cartesian/Formulation_1



Theorem
Consider a catenary.
Let a cartesian plane be arranged so that the y-axis passes through the lowest point of the catenary.

The catenary is described by the equation:

$y = \dfrac {e^{a x} + e^{-a x} } {2 a} = \dfrac {\cosh a x} a$
where $a$ is a constant.
The lowest point of the catenary is at $\tuple {0, \dfrac 1 a}$.


Proof
Let $\tuple {x, y}$ be an arbitrary point on the chain.
Let $s$ be the length along the arc of the chain from the lowest point to $\tuple {x, y}$.
Let $w_0$ be the linear mass density of the chain, that is, its weight per unit length.
The section of chain between the lowest point and $\tuple {x, y}$ is in static equilibrium under the influence of three forces, as follows:

The tension $T_0$ at the lowest point
The tension $T$ at the point $\tuple {x, y}$
The weight $w_0 s$ of the chain between these two points.
As the chain is (ideally) flexible, the tension $T$ is along the line of the chain, and therefore along a tangent to the chain.




We can resolve this system of forces to obtain the horizontal and vertical components:

$T_0 = T \cos \theta$
$w_0 s = T \sin \theta$
We divide one by the other to eliminate $T$ and set $a = w_0 / T_0$:

$\tan \theta = a s = \dfrac {\d y} {\d x}$
Differentiating with respect to $x$:

$\dfrac {\d^2 y} {\d x^2} = a \dfrac {\d s} {\d x}$
From Derivative of Arc Length, we have:

$\dfrac {\d s} {\d x} = \sqrt {1 + \paren {\dfrac {\d y} {\d x} }^2}$
So we have this differential equation to solve:

$(1): \quad \dfrac {\d^2 y} {\d x^2} = a \sqrt {1 + \paren {\dfrac {\d y} {\d x} }^2}$

Let $p = \dfrac {\d y} {\d x}$.
This transforms $(1)$ into:

$\dfrac {\d p} {\d x} = a \sqrt {1 + p^2}$
This can be solved by Solution to Separable Differential Equation:

$(2): \quad \ds \int \frac {\d p} {\sqrt {1 + p^2} } = \int a \rd x$
The left hand side is worked by using Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$:

$\ds \int \frac {\d p} {\sqrt {1 + p^2} } = \map \ln {\sqrt {1 + p^2} + p} + c_1$
The right hand side is worked by using Primitive of Constant:

$\ds \int a \rd x = a x + c_2$
So $(2)$ becomes:

$\map \ln {\sqrt {1 + p^2} + p} = a x + c_3$
When $x = 0$ we have that $\theta = \dfrac {\d y} {\d x} = p = 0$ and so $c_3 = 0$, so:

$\map \ln {\sqrt {1 + p^2} + p} = a x$

Therefore:














\(\ds a x\)

\(=\)







\(\ds \map \ln {\sqrt {1 + p^2} + p}\)














\(\ds \leadsto \ \ \)





\(\ds e^{a x}\)

\(=\)







\(\ds \sqrt {1 + p^2} + p\)





Exponential of Natural Logarithm



and:














\(\ds -a x\)

\(=\)







\(\ds -\map \ln {\sqrt {1 + p^2} + p}\)














\(\ds \leadsto \ \ \)





\(\ds e^{- a x}\)

\(=\)







\(\ds \dfrac 1 {\sqrt {1 + p^2} + p}\)





Exponential of Natural Logarithm and Logarithm of Reciprocal














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt {1 + p^2} + p} \paren {\dfrac {\sqrt {1 + p^2} - p} {\sqrt {1 + p^2} - p} }\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt {1 + p^2} - p} {1 + p^2 - p^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {1 + p^2} - p\)










which gives us:

$p = \dfrac {\d y} {\d x} = \dfrac {e^{a x} - e^{-a x} } 2$
By Derivative of Exponential Function, we get:

$y = \dfrac {e^{a x} + e^{-a x} } {2 a} + c_4$

We now need to position the coordinate axes so as to make $c_4 = 0$.
So, setting $x = 0$ and $c_4 = 0$:

$y = \dfrac 1 a$
and the lowest point of the catenary is seen to be at $\tuple {0, \dfrac 1 a}$.
Hence the result:

$y = \dfrac {e^{a x} + e^{-a x} } {2 a}$
$\blacksquare$


Historical Note
The problem of determining the shape of the catenary was posed in $1690$ by Jacob Bernoulli as a challenge.
It had been thought by Galileo to be a parabola.
Huygens showed in $1646$ by physical considerations that it could not be so, but he failed to establish its exact nature.

In $1691$, Leibniz, Huygens and Johann Bernoulli all independently published solutions.
It was Leibniz who gave it the name catenary.

From a letter that Johann Bernoulli wrote in $1718$:

The efforts of my brother were without success. For my part, I was more fortunate, for I found the skill (I say it without boasting; why should I conceal the  truth?) to solve it in full ... It is true that it cost me study that robbed me of rest for an entire night. It was a great achievement for those days and for the slight age and experience I then had. The next morning, filled with joy, I ran to my brother, who was still struggling miserably with this Gordian knot without getting anywhere, always thinking like Galileo that the catenary was a parabola. Stop! Stop! I say to him, don't torture yourself any more trying to prove the identity of the catenary with the parabola, since it is entirely false.

However, Jacob Bernoulli was first to demonstrate that of all possible shapes, the catenary has the lowest center of gravity, and hence the smallest potential energy.
This discovery was significant.


Lingustic Note
The word catenary comes from the Latin word catena meaning chain.





