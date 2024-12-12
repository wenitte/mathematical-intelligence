# 

Source: https://proofwiki.org/wiki/Cosine_of_Half_Angle_for_Spherical_Triangles



Theorem
Let $\triangle ABC$ be a spherical triangle on the surface of a sphere whose center is $O$.
Let the sides $a, b, c$ of $\triangle ABC$ be measured by the angles subtended at $O$, where $a, b, c$ are opposite $A, B, C$ respectively.

Then:

$\cos \dfrac A 2 = \sqrt {\dfrac {\sin s \, \map \sin {s - a} } {\sin b \sin c} }$
where $s = \dfrac {a + b + c} 2$.


Proof













\(\ds \cos a\)

\(=\)







\(\ds \cos b \cos c + \sin b \sin c \cos A\)





Spherical Law of Cosines














\(\ds \)

\(=\)







\(\ds \cos b \cos c + \sin b \sin c \paren {2 \cos^2 \dfrac A 2 - 1}\)





Double Angle Formula for Cosine: Corollary $1$














\(\ds \)

\(=\)







\(\ds \map \cos {b + c} + 2 \sin b \sin c \cos^2 \dfrac A 2\)





Cosine of Sum








\(\ds \leadsto \ \ \)





\(\ds \cos a - \map \cos {b + c}\)

\(=\)







\(\ds 2 \sin b \sin c \cos^2 \dfrac A 2\)





rearranging








\(\ds \leadsto \ \ \)





\(\ds 2 \sin \dfrac {a + \paren {b + c} } 2 \sin \dfrac {\paren {b + c} - a} 2\)

\(=\)







\(\ds 2 \sin b \sin c \cos^2 \dfrac A 2\)





Cosine minus Cosine








\(\ds \leadsto \ \ \)





\(\ds \map \sin {\dfrac {a + b + c} 2} \map \sin {\dfrac {a + b + c} 2 - a}\)

\(=\)







\(\ds \sin b \sin c \cos^2 \dfrac A 2\)














\(\ds \leadsto \ \ \)





\(\ds \sin s \, \map \sin {s - a}\)

\(=\)







\(\ds \sin b \sin c \cos^2 \dfrac A 2\)





setting $s = \dfrac {a + b + c} 2$ and simplifying



The result follows.
$\blacksquare$


Also see
The other Half Angle Formulas for Spherical Triangles:
Sine of Half Angle for Spherical Triangles
Tangent of Half Angle for Spherical Triangles


Half Side Formulas for Spherical Triangles:
Sine of Half Side for Spherical Triangles
Cosine of Half Side for Spherical Triangles
Tangent of Half Side for Spherical Triangles


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.99$
1976: W.M. Smart: Textbook on Spherical Astronomy (6th ed.) ... (previous) ... (next): Chapter $\text I$. Spherical Trigonometry: $5$. The cosine-formula.




