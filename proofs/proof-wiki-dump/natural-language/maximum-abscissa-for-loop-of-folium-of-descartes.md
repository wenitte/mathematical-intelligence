# 

Source: https://proofwiki.org/wiki/Maximum_Abscissa_for_Loop_of_Folium_of_Descartes

Theorem
Consider the folium of Descartes defined in parametric form as:

$\begin {cases} x = \dfrac {3 a t} {1 + t^3} \\ y = \dfrac {3 a t^2} {1 + t^3} \end {cases}$




The point on the loop at which the $x$ value is at a maximum occurs when $t = \sqrt [3] {\dfrac 1 2}$, corresponding to the point $P$ defined as:

$P = \tuple {2^{2/3} a, 2^{1/3} a}$


Proof
We calculate the derivative of $x$ with respect to $t$:














\(\ds \dfrac {\d x} {\d t}\)

\(=\)







\(\ds \map {\dfrac \d {\d t} } {\dfrac {3 a t} {1 + t^3} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 + t^3} \times 3 a - 3 a t \paren {3 t^2} } {\paren {1 + t^3}^2}\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \dfrac {3 a - 6 a t^3} {\paren {1 + t^3}^2}\)





simplifying




Thus $x$ is stationary when:














\(\ds 3 a - 6 a t^3\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds t\)

\(=\)







\(\ds \paren {\dfrac 1 2}^{1/3}\)









From Behaviour of Parametric Equations for Folium of Descartes according to Parameter, it is clear from the geometry that $x$ is a local maximum for this value of $t$.
Then we have:














\(\ds x\)

\(=\)







\(\ds \dfrac {3 a \times \paren {1/2}^{1/3} } {1 + \paren {\paren {1/2}^{1/3} }^3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 a \times \paren {1/2}^{1/3} } {1 + 1/2}\)




















\(\ds \)

\(=\)







\(\ds 2 a \times \paren {\dfrac 1 2}^{1/3}\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {2^3} 2}^{1/3} a\)




















\(\ds \)

\(=\)







\(\ds 2^{2/3} a\)










and:














\(\ds y\)

\(=\)







\(\ds \dfrac {3 a \times \paren {\paren {1/2}^{1/3} }^2} {1 + \paren {\paren {1/2}^{1/3} }^3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 a \times \paren {1/2}^{2/3} } {1 + 1/2}\)




















\(\ds \)

\(=\)







\(\ds 2 a \times \paren {\dfrac 1 2}^{2/3}\)




















\(\ds \)

\(=\)







\(\ds \paren {\dfrac {2^3} {2^2} }^{1/3} a\)




















\(\ds \)

\(=\)







\(\ds 2^{1/3} a\)









Hence the result.
$\blacksquare$





