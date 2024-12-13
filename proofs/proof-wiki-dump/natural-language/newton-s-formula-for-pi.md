# 

Source: https://proofwiki.org/wiki/Newton%27s_Formula_for_Pi



Theorem
$\pi$ (pi) can be approximated using the formula:

$\pi = \dfrac {3 \sqrt 3} 4 + 24 \paren {\dfrac 2 {3 \times 2^3} - \dfrac 1 {5 \times 2^5} - \dfrac 1 {28 \times 2^7} - \dfrac 1 {72 \times 2^9} - \dfrac 5 {704 \times 2^{11} } - \dfrac 7 {1664 \times 2^{13} } - \cdots}$


Proof
Let $\AA$ denote the area of the shaded region in the following diagram:




Consider the semicircle embedded in the cartesian plane:

whose radius is $\dfrac 1 2$
and

whose center is the point $\tuple {\dfrac 1 2, 0}$.
We have:














\(\ds \paren {x - \frac 1 2}^2 + \paren {y - 0}^2\)

\(=\)







\(\ds \frac 1 2 ^2\)





Equation of Circle








\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \sqrt {\paren {x - x^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt x \sqrt {\paren {1 - x} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt x \paren {1 - \frac 1 2 x - \frac 1 8 x^2 - \frac 1 {16} x^3 - \frac 5 {128} x^4 - \frac 7 {256} x^5 - \cdots}\)





General Binomial Theorem














\(\ds \)

\(=\)







\(\ds \paren {x^{\frac 1 2} - \dfrac 1 2 x^{\frac 3 2} - \dfrac 1 8 x^{\frac 5 2} - \dfrac 1 {16} x^{\frac 7 2} - \dfrac 5 {128} x^{\frac 9 2} - \dfrac 7 {256} x^{\frac {11} 2} - \cdots}\)









We calculate $\AA$ in $2$ different ways.

First we calculate it as the definite integral between $x = 0$ and $x = \dfrac 1 4$:














\(\ds \AA\)

\(=\)







\(\ds \int_0^\frac 1 4 \paren {x^{\frac 1 2} - \dfrac 1 2 x^{\frac 3 2} - \dfrac 1 8 x^{\frac 5 2} - \dfrac 1 {16} x^{\frac 7 2} - \dfrac 5 {128} x^{\frac 9 2} - \dfrac 7 {256} x^{\frac {11} 2} - \cdots} \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\paren {\frac 2 3 x^{\frac 3 2} - \frac 1 5 x^{\frac 5 2} - \frac 1 {28} x^{\frac 7 2} - \frac 1 {72} x^{\frac 9 2} - \frac 5 {704} x^{\frac {11} 2} - \frac 7 {1664} x^{\frac {13} 2} - \cdots } } {x \mathop = 0} {x \mathop = \frac 1 4}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {\dfrac 2 {3 \times 2^3} - \dfrac 1 {5 \times 2^5} - \dfrac 1 {28 \times 2^7} - \dfrac 1 {72 \times 2^9} - \dfrac 5 {704 \times 2^{11} } - \dfrac 7 {1664 \times 2^{13} } - \cdots}\)









$\Box$

Then we calculate $\AA$ using the techniques of plane geometry.

From the construction, we have that:

$AC = CD$
$AB = BC$
$BD$ is common
so by Triangle Side-Side-Side Congruence:

$\triangle ABD = \triangle CBD$
Thus:

$AD = AC = CD$
and so $\triangle ACD$ is equilateral.
Thus we have that $\triangle BCD$ has angles $30 \degrees$, $60 \degrees$ and $90 \degrees$.
Hence by Pythagoras's Theorem:














\(\ds BD^2 + BC^2\)

\(=\)







\(\ds CD^2\)














\(\ds \leadsto \ \ \)





\(\ds BD\)

\(=\)







\(\ds \sqrt {CD^2 - BC^2}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\dfrac 1 2}^2 - \paren {\dfrac 1 4}^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 4 \sqrt {4 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt 3} 4\)










Then we observe that $\AA$ is:

the area $\AA_S$ of the sector of the semicircle whose central angle is $\dfrac \pi 3$
minus:

the area $\AA_T$ of the right triangle $\triangle BCD$.

$\AA_S$ is $\dfrac 1 6$ of the area of the circle whose radius is $\dfrac 1 2$.
Thus from Area of Circle:

$\AA_S = \dfrac 1 6 \paren {\pi \paren {\dfrac 1 2}^2}$
$\AA_T$ is given from Area of Triangle in Terms of Side and Altitude as:

$\AA_T = \dfrac 1 2 \paren {\dfrac 1 4} \paren {\dfrac {\sqrt 3} 4}$
Hence:














\(\ds \AA\)

\(=\)







\(\ds \AA_S - AA_T\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 6 \paren {\pi \paren {\dfrac 1 2}^2} - \dfrac 1 2 \paren {\dfrac 1 4} \paren {\dfrac {\sqrt 3} 4}\)










\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\pi} {24} - \dfrac {\sqrt 3} {32}\)









$\Box$

Finally, setting $(1)$ equal to $(2)$:














\(\ds \dfrac {\pi} {24} - \dfrac {\sqrt 3} {32}\)

\(=\)







\(\ds \paren {\dfrac 2 {3 \times 2^3} - \dfrac 1 {5 \times 2^5} - \dfrac 1 {28 \times 2^7} - \dfrac 1 {72 \times 2^9} - \dfrac 5 {704 \times 2^{11} } - \dfrac 7 {1664 \times 2^{13} } - \cdots}\)














\(\ds \leadsto \ \ \)





\(\ds \pi\)

\(=\)







\(\ds \dfrac {3 \sqrt 3} 4 + 24 \paren {\dfrac 2 {3 \times 2^3} - \dfrac 1 {5 \times 2^5} - \dfrac 1 {28 \times 2^7} - \dfrac 1 {72 \times 2^9} - \dfrac 5 {704 \times 2^{11} } - \dfrac 7 {1664 \times 2^{13} } - \cdots}\)









$\blacksquare$


Source of Name
This entry was named for Isaac Newton.


Historical Note
Isaac Newton arrived at his formula for $\pi$ after having returned to his home in Grantham in $1666$ to escape the epidemic of bubonic plague.
He used it to find $\pi$ to $16$ places by using only $22$ terms of his formula.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1990: William Dunham: Journey Through Genius ... (previous) ... (next): Chapter $7$: A Gem from Isaac Newton (Late 1660s): Great Theorem: Newton's Approximation of $\pi$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$




