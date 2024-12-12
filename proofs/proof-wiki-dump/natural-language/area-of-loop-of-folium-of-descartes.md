# 

Source: https://proofwiki.org/wiki/Area_of_Loop_of_Folium_of_Descartes

Theorem
Consider the folium of Descartes $F$, given in parametric form as:

$\begin {cases} x = \dfrac {3 a t} {1 + t^3} \\ y = \dfrac {3 a t^2} {1 + t^3} \end {cases}$

The area $\AA$ of the loop of $F$ is given as:

$\AA = \dfrac {3 a^2} 2$


Proof
From Behaviour of Parametric Equations for Folium of Descartes according to Parameter we have that the loop is traversed for $0 \le t < +\infty$.
We convert the parametric equation to polar form:














\(\ds r^2\)

\(=\)







\(\ds x^2 + y^2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 a t}^2} {\paren {1 + t^3}^2} + \dfrac {\paren {3 a t^2}^2} {\paren {1 + t^3}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 a t}^2 \paren {1 + t^2} } {\paren {1 + t^3}^2}\)




















\(\ds \tan \theta\)

\(=\)







\(\ds \dfrac y x\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 a t^2} {1 + t^3} \dfrac {1 + t^3} {3 a t}\)




















\(\ds \)

\(=\)







\(\ds t\)














\(\ds \leadsto \ \ \)





\(\ds \theta\)

\(=\)







\(\ds \arctan t\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d \theta} {\d t}\)

\(=\)







\(\ds \dfrac 1 {1 + t^2}\)





Derivative of Arctangent Function




Then we have:














\(\ds \AA\)

\(=\)







\(\ds \dfrac 1 2 \int_{t \mathop = 0}^{t \mathop \to \infty} r^2 \rd \theta\)





Area between Radii and Curve in Polar Coordinates














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \int_{t \mathop = 0}^{t \mathop \to \infty} \dfrac {\paren {3 a t}^2 \paren {1 + t^2} } {\paren {1 + t^3}^2} \dfrac 1 {1 + t^2} \rd t\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac {3 a^2} 2 \int_{t \mathop = 0}^{t \mathop \to \infty} \dfrac {3 t^2 \rd t} {\paren {1 + t^3}^2}\)





Integration by Substitution




Then:














\(\ds u\)

\(=\)







\(\ds 1 + t^3\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d u} {\d t}\)

\(=\)







\(\ds 3 t^2\)






















\(\ds t\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds 1\)






















\(\ds t\)

\(\to\)







\(\ds +\infty\)














\(\ds \leadsto \ \ \)





\(\ds u\)

\(\to\)







\(\ds +\infty\)










which leads us to:














\(\ds \AA\)

\(=\)







\(\ds \dfrac {3 a^2} 2 \int_{t \mathop = 0}^{t \mathop \to \infty} \dfrac {3 t^2 \rd t} {\paren {1 + t^3}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 a^2} 2 \int_{u \mathop = 1}^{u \mathop \to \infty} \dfrac {\d u} {u^2}\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \dfrac {3 a^2} 2 \intlimits {-\dfrac 1 u} 1 {+\infty}\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \dfrac {3 a^2} 2 \paren {-0 - \paren {-1} }\)





evaluating limits: $u \to +\infty \implies \dfrac 1 u \to 0$














\(\ds \)

\(=\)







\(\ds \dfrac {3 a^2} 2\)









Hence the result.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 11$: Special Plane Curves: Folium of Descartes: $11.26$
Weisstein, Eric W. "Folium of Descartes." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FoliumofDescartes.html




