# 

Source: https://proofwiki.org/wiki/Cosine_of_Half_Side_for_Spherical_Triangles



Theorem
Let $\triangle ABC$ be a spherical triangle on the surface of a sphere whose center is $O$.
Let the sides $a, b, c$ of $\triangle ABC$ be measured by the angles subtended at $O$, where $a, b, c$ are opposite $A, B, C$ respectively.

Then:

$\cos \dfrac a 2 = \sqrt {\dfrac {\map \cos {S - B} \, \map \cos {S - C} } {\sin B \sin C} }$
where $S = \dfrac {A + B + C} 2$.


Proof
Let $\triangle A'B'C'$ be the polar triangle of $\triangle ABC$.
Let the sides $a', b', c'$ of $\triangle A'B'C'$ be opposite $A', B', C'$ respectively.

From Spherical Triangle is Polar Triangle of its Polar Triangle we have that:

not only is $\triangle A'B'C'$ be the polar triangle of $\triangle ABC$
but also $\triangle ABC$ is the polar triangle of $\triangle A'B'C'$.
Let $s' = \dfrac {a' + b' + c'} 2$.

We have:














\(\ds \sin \dfrac {A'} 2\)

\(=\)







\(\ds \sqrt {\dfrac {\sin \paren {s' - b'} \sin \paren {s' - c'} } {\sin b' \sin c'} }\)





Sine of Half Angle for Spherical Triangles








\(\ds \leadsto \ \ \)





\(\ds \sin \dfrac {\pi - a} 2\)

\(=\)







\(\ds \sqrt {\dfrac {\map \sin {s' - b'}  \, \map \sin {s' - c'} } {\map \sin {\pi - B} \, \map \sin {\pi - C} } }\)





Side of Spherical Triangle is Supplement of Angle of Polar Triangle








\(\ds \leadsto \ \ \)





\(\ds \map \sin {\dfrac \pi 2 - \dfrac a 2}\)

\(=\)







\(\ds \sqrt {\dfrac {\map \sin {s' - b'}  \, \map \sin {s' - c'} } {\sin B \sin C} }\)





Sine of Supplementary Angle








\(\ds \leadsto \ \ \)





\(\ds \cos \dfrac a 2\)

\(=\)







\(\ds \sqrt {\dfrac {\map \sin {s' - b'}  \, \map \sin {s' - c'} } {\sin B \sin C} }\)





Sine of Complement equals Cosine




Then:














\(\ds s' - b'\)

\(=\)







\(\ds \dfrac {\paren {\pi - A} + \paren {\pi - B} + \paren {\pi - C} } 2 - \paren {\pi - B}\)





Side of Spherical Triangle is Supplement of Angle of Polar Triangle














\(\ds \)

\(=\)







\(\ds \dfrac {\pi - \paren {A + B + C} } 2 + B\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac \pi 2 - \paren {S - B}\)





where $S = \dfrac {A + B + C} 2$








\(\ds \leadsto \ \ \)





\(\ds \map \sin {s' - b'}\)

\(=\)







\(\ds \map \sin {\dfrac \pi 2 - \paren {S - B} }\)




















\(\ds \)

\(=\)







\(\ds \map \cos {S - B}\)





Sine of Complement equals Cosine



and similarly:

$\map \sin {s' - c'} = \map \cos {S - C}$
The result follows.
$\blacksquare$


Also see
The other Half Side Formulas for Spherical Triangles:
Sine of Half Side for Spherical Triangles
Tangent of Half Side for Spherical Triangles


Half Angle Formulas for Spherical Triangles:
Sine of Half Angle for Spherical Triangles
Cosine of Half Angle for Spherical Triangles
Tangent of Half Angle for Spherical Triangles


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.100$




