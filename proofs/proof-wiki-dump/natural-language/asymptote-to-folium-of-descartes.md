# 

Source: https://proofwiki.org/wiki/Asymptote_to_Folium_of_Descartes

Theorem
Consider the folium of Descartes $F$, given in parametric form as:

$\begin {cases} x = \dfrac {3 a t} {1 + t^3} \\ y = \dfrac {3 a t^2} {1 + t^3} \end {cases}$

The straight line whose equation is given by:

$x + y + a = 0$
is an asymptote to $F$.


Proof
First we note that from Behaviour of Parametric Equations for Folium of Descartes according to Parameter:

when $t = 0$ we have that $x = y = 0$
when $t \to \pm \infty$ we have that $x \to 0$ and $y \to 0$
when $t \to -1^+$ we have that $1 + t^3 \to 0+$, and so:
$x \to -\infty$
$y \to +\infty$
when $t \to -1^-$ we have that $1 + t^3 \to 0-$, and so:
$x \to +\infty$
$y \to -\infty$

We have that:














\(\ds x + y\)

\(=\)







\(\ds \dfrac {3 a t} {1 + t^3} + \dfrac {3 a t^2} {1 + t^3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 a t \paren {1 + t} } {\paren {1 + t} \paren {1 - t + t^2} }\)





Sum of Two Cubes














\(\ds \)

\(=\)







\(\ds \dfrac {3 a t} {1 - t + t^2}\)





simplifying




So setting $t = -1$:














\(\ds x + y\)

\(=\)







\(\ds \dfrac {3 a \times \paren {-1} } {1 - \paren {-1} + \paren {-1}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-3 a} {1 + 1 + 1}\)




















\(\ds \)

\(=\)







\(\ds -a\)














\(\ds \leadsto \ \ \)





\(\ds x + y + a\)

\(=\)







\(\ds 0\)









The result follows.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 11$: Special Plane Curves: Folium of Descartes: $11.27$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): folium of Descartes
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): folium of Descartes
Weisstein, Eric W. "Folium of Descartes." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/FoliumofDescartes.html




