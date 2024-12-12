# 

Source: https://proofwiki.org/wiki/Delambre%27s_Analogies/Sine_by_Cosine



Delambre's Analogies
Let $\triangle ABC$ be a spherical triangle on the surface of a sphere whose center is $O$.
Let the sides $a, b, c$ of $\triangle ABC$ be measured by the angles subtended at $O$, where $a, b, c$ are opposite $A, B, C$ respectively.

Then:

$\sin \dfrac c 2 \cos \dfrac {A - B} 2 = \sin \dfrac C 2 \sin \dfrac {a + b} 2$


Proof
In the below, we have:

$s = \dfrac {a + b + c} 2$

Thus:














\(\ds \sin \frac c 2 \cos \dfrac {A - B} 2\)

\(=\)







\(\ds \sin \frac c 2 \paren {\cos \dfrac A 2 \cos \dfrac B 2 + \sin \dfrac A 2 \sin \dfrac B 2}\)





Cosine of Difference














\(\ds \)

\(=\)







\(\ds \sin \frac c 2 \paren {\sqrt {\dfrac {\sin s \map \sin {s - a} } {\sin b \sin c} } \sqrt {\dfrac {\sin s \map \sin {s - b} } {\sin a \sin c} } + \sqrt {\dfrac {\map \sin {s - b} \map \sin {s - c} } {\sin b \sin c} } \sqrt {\dfrac {\map \sin {s - a} \map \sin {s - c} } {\sin a \sin c} } }\)





Sine of Half Angle for Spherical Triangles, Cosine of Half Angle for Spherical Triangles














\(\ds \)

\(=\)







\(\ds \sin \frac c 2 \paren {\dfrac {\sin s} {\sin c} \sqrt {\dfrac {\map \sin {s - a} \map \sin {s - b} } {\sin a \sin b} } + \dfrac {\map \sin {s - c} } {\sin c} \sqrt {\dfrac {\map \sin {s - a} \map \sin {s - b} } {\sin a \sin b} } }\)





simplifying














\(\ds \)

\(=\)







\(\ds \sin \frac c 2 \sin \dfrac C 2 \paren {\dfrac {\sin s } {\sin c} + \dfrac {\map \sin {s - c} } {\sin c} }\)





Sine of Half Angle for Spherical Triangles














\(\ds \)

\(=\)







\(\ds \dfrac {\sin \frac c 2} {\sin c} \sin \dfrac C 2 \paren {\map \sin {\dfrac {a + b + c} 2} + \map \sin {\dfrac {a + b - c} 2} }\)





Definition of $s$














\(\ds \)

\(=\)







\(\ds \dfrac {\sin \frac c 2} {\sin c} \sin \dfrac C 2 \paren {2 \map \sin {\dfrac {a + b + c + a + b - c} 4} \map \cos {\dfrac {a + b + c - a - b + c} 4} }\)





Sine plus Sine














\(\ds \)

\(=\)







\(\ds \dfrac {\sin \frac c 2} {\sin c} \sin \dfrac C 2 \paren {2 \map \sin {\dfrac {a + b} 2} \map \cos {\dfrac c 2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {2 \sin \frac c 2 \cos {\frac c 2} } {2 \sin \frac c 2 \cos \frac c 2} \sin \dfrac C 2 \map \sin {\dfrac {a + b} 2}\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds \sin \dfrac C 2 \map \sin {\dfrac {a + b} 2}\)





simplifying



$\blacksquare$


Also known as
Delambre's Analogies are also known as Gauss's Formulas, or Gauss's Formulae.
However, there are so many results and theorems named for Carl Friedrich Gauss that $\mathsf{Pr} \infty \mathsf{fWiki}$ prefers to settle for Delambre.

The names of the individual formulas are not standard, but $\mathsf{Pr} \infty \mathsf{fWiki}$ needs some way to distinguish between them. Any advice on this matter is welcome.


Also see
Napier's Analogies


Source of Name
This entry was named for Jean Baptiste Joseph Delambre.


Sources
1976: W.M. Smart: Textbook on Spherical Astronomy (6th ed.) ... (previous) ... (next): Chapter $\text I$. Spherical Trigonometry: $16$. Delambre's and Napier's analogies.




