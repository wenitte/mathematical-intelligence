# 

Source: https://proofwiki.org/wiki/Heron%27s_Formula/Proof_1



Theorem
Let $\triangle ABC$ be a triangle with sides $a$, $b$ and $c$ opposite vertices $A$, $B$ and $C$ respectively.

Then the area $\AA$ of $\triangle ABC$ is given by:

$\AA = \sqrt {s \paren {s - a} \paren {s - b} \paren {s - c} }$
where $s = \dfrac {a + b + c} 2$ is the semiperimeter of $\triangle ABC$.


Proof
Construct the altitude from $A$.
Let the length of the altitude be $h$ and the foot of the altitude be $D$.
Let the distance from $D$ to $B$ be $z$.


From Pythagoras's Theorem:

$\paren 1: \quad h^2 + \paren {a - z}^2 = b^2$
and:

$\paren 2: \quad h^2 + z^2 = c^2$
By subtracting $\paren 1$ from $\paren 2$:

$2 a z - a^2 = c^2 - b^2$
which can be expressed in terms of $z$ as:

$z = \dfrac {a^2 + c^2 - b^2} {2 a}$
Substituting for $z$ in $\paren 2$ and simplifying yields:

$h = \sqrt {c^2 - \paren {\dfrac {a^2 + c^2 - b^2} {2a} }^2}$
and so:














\(\ds \AA\)

\(=\)







\(\ds \frac 1 2 a \sqrt {c^2 - \paren {\frac{a^2 + c^2 - b^2}{2a} }^2}\)





Area of Triangle in Terms of Side and Altitude














\(\ds \)

\(=\)







\(\ds \sqrt {\frac {4 c^2 a^2 - \left({a^2 + c^2 - b^2}\right)^2} {16} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac {\paren {2ac - a^2 - c^2 + b^2} \paren {2ac + a^2 + c^2 - b^2} } {16} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \sqrt {\frac {\paren {b^2 - \paren {a - c}^2} \paren {\paren {a + c}^2 - b^2} } {16} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\frac {\paren {b - a + c} \paren {b + a - c} \paren {a + c - b} \paren {a + b + c} } {16} }\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds \sqrt {\frac {\paren {a + b + c} \paren {a + b - c} \paren {a - b + c} \paren {-a + b + c} } {16} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\frac {a + b + c} 2} \paren {\frac {a + b + c} 2 - c} \paren {\frac {a + b + c} 2 - b} \paren {\frac {a + b + c} 2 - a} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {s \paren {s - c} \paren {s - b} \paren{s - a} }\)





Definition of Semiperimeter



$\blacksquare$


Source of Name
This entry was named for Heron of Alexandria.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.1$: The Pythagorean Theorem: Appendix: The Formulas of Heron and Brahmagupta




