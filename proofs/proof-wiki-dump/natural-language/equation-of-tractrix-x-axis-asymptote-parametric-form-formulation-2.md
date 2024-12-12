# 

Source: https://proofwiki.org/wiki/Equation_of_Tractrix/X-Axis_Asymptote/Parametric_Form/Formulation_2



Definition
Let $S$ be a cord of length $a$ situated as a (straight) line segment whose endpoints are $P$ and $T$.
Let $S$ be aligned along the $y$-axis of a cartesian plane with $T$ at the origin and $P$ therefore at the point $\tuple {0, a}$.
Let $T$ be dragged along the $x$-axis.

The equation of the tractrix along which $P$ travels can be expressed in parametric form as:














\(\ds x\)

\(=\)







\(\ds a \paren {u - \tanh u}\)




















\(\ds y\)

\(=\)







\(\ds a \sech u\)











Proof
Consider $P$ when it is at the point $\tuple {x, y}$.




Let $y = a \sech u$.
Substituting this into the Cartesian Form of the equation of the tractrix:














\(\ds x\)

\(=\)







\(\ds a \, \map \ln {\frac {a + \sqrt {a^2 - a^2 \sech u^2} } a \sech u} - \sqrt {a^2 - a^2 \sech u^2}\)




















\(\ds \)

\(=\)







\(\ds a \, \map \ln {\frac {a + \sqrt {a^2 \tanh^2 u} } {a \sech u} } - \sqrt {a^2 \tanh^2 u}\)





Sum of Squares of Hyperbolic Secant and Tangent














\(\ds \)

\(=\)







\(\ds a \, \map \ln {\frac {1 + \tanh u} {\sech u} } - a \tanh u\)





simplifying














\(\ds \)

\(=\)







\(\ds a \, \map \ln {\cosh u + \sinh u} - a \tanh u\)





Definition of Hyperbolic Secant and Definition of Hyperbolic Tangent














\(\ds \)

\(=\)







\(\ds a \, \map \ln {\dfrac {e^u + e^{-u} } 2 + \dfrac {e^u - e^{-u} } 2} - a \tanh u\)





Definition of Hyperbolic Sine and Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds a \, \map \ln {e^u} - a \tanh u\)





simplification














\(\ds \)

\(=\)







\(\ds a \paren {u - \tanh u}\)





more simplification



$\blacksquare$


Linguistic Note
The word tractrix derives from the Latin traho (trahere, traxi, tractum) meaning to pull or to drag.
The plural is tractrices.


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): tractrix
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): tractrix
Weisstein, Eric W. "Tractrix." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/Tractrix.html




