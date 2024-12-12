# 

Source: https://proofwiki.org/wiki/Differential_Equation_defining_Confocal_Conics

Theorem
Consider the equation:

$(1): \quad \dfrac {x^2} {a^2 + \lambda} + \dfrac {y^2} {b^2 + \lambda} = 1$
where $a^2 > b^2$ and $-\lambda < a^2$.
defining the set of confocal conics whose foci are at $\tuple {\pm \sqrt {a^2 - b^2}, 0}$.

The differential equation defining these confocal conics is:

$x y \paren {\paren {y'}^2 - 1} + \paren {x^2 - y^2 - a^2 + b^2} y' = 0$


Proof













\(\ds \dfrac {x^2} {a^2 + \lambda}\)

\(=\)







\(\ds 1 - \dfrac {y^2} {b^2 + \lambda}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \dfrac {b^2 + \lambda - y^2} {b^2 + \lambda}\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a^2 + \lambda\)

\(=\)







\(\ds \dfrac {x^2 \paren {b^2 + \lambda} } {b^2 + \lambda - y^2}\)




















\(\ds \dfrac {y^2} {b^2 + \lambda}\)

\(=\)







\(\ds 1 - \dfrac {x^2} {a^2 + \lambda}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \dfrac {a^2 + \lambda - x^2} {a^2 + \lambda}\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds b^2 + \lambda\)

\(=\)







\(\ds \dfrac {y^2 \paren {a^2 + \lambda} } {a^2 + \lambda - x^2}\)










Then we have:














\(\ds \map {\dfrac \d {\d x} } {\dfrac {x^2} {a^2 + \lambda} + \dfrac {y^2} {b^2 + \lambda} }\)

\(=\)







\(\ds \map {\dfrac \d {\d x} } 1\)





Differentiating $(1)$ with respect to $x$




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {2 x} {a^2 + \lambda} + \dfrac {2 y} {b^2 + \lambda} \dfrac {\d y} {\d x}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a^2 + \lambda} y'\)

\(=\)







\(\ds -\dfrac {2 x} {2 y} \paren {b^2 + \lambda}\)





putting $y' = \dfrac {\d y} {\d x}$














\(\ds \)

\(=\)







\(\ds -\dfrac x y \dfrac {y^2 \paren {a^2 + \lambda} } {a^2 + \lambda - x^2}\)





from $(3)$








\(\ds \leadsto \ \ \)





\(\ds y'\)

\(=\)







\(\ds -\dfrac {x y} {a^2 + \lambda - x^2}\)














\(\ds \leadsto \ \ \)





\(\ds y' \paren {a^2 + \lambda}\)

\(=\)







\(\ds x^2 y' - x y\)










\(\text {(5)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a^2 + \lambda\)

\(=\)







\(\ds \dfrac {x^2 y' - x y} {y'}\)









and similarly:














\(\ds \paren {b^2 + \lambda}\)

\(=\)







\(\ds -\dfrac {2 y} {2 x} \paren {a^2 + \lambda} y'\)





from $(4)$, putting $y' = \dfrac {\d y} {\d x}$














\(\ds \)

\(=\)







\(\ds -\dfrac {y y'} x \dfrac {x^2 \paren {b^2 + \lambda} } {b^2 + \lambda - y^2}\)





from $(2)$








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(=\)







\(\ds -\dfrac {x y y'} {b^2 + \lambda - y^2}\)










\(\text {(6)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds b^2 + \lambda\)

\(=\)







\(\ds y^2 - x y y'\)










Eliminating $\lambda$:














\(\ds b^2 + \paren {\dfrac {x^2 y' - x y} {y'} - a^2}\)

\(=\)







\(\ds y^2 - x y y'\)





from $(5)$ and $(6)$








\(\ds \leadsto \ \ \)





\(\ds y' \paren {b^2 - a^2} + x^2 y' - x y - y^2 y + x y \paren {y'}^2\)

\(=\)







\(\ds 0\)





multiplying through by $y'$ and rearranging








\(\ds \leadsto \ \ \)





\(\ds x y \paren {\paren {y'}^2 - 1} + \paren {x^2 - y^2 - a^2 + b^2} y'\)

\(=\)







\(\ds 0\)





multiplying through by $y'$ and rearranging



$\blacksquare$


Sources
1926: E.L. Ince: Ordinary Differential Equations ... (previous) ... (next): Chapter $\text I$: Introductory: $\S 1.201$ The Differential Equation of a Family of Confocal Conics




