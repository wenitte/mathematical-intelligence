# 

Source: https://proofwiki.org/wiki/Cosine_of_Sum



Theorem
$\map \cos {a + b} = \cos a \cos b - \sin a \sin b$
where $\sin$ denotes the sine and $\cos$ denotes the cosine.


Corollary
$\map \cos {a - b} = \cos a \cos b + \sin a \sin b$


Proof 1













\(\ds \map \cos {a + b} + i \, \map \sin {a + b}\)

\(=\)







\(\ds e^{i \paren {a + b} }\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds e^{i a} e^{i b}\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \paren {\cos a + i \sin a} \paren {\cos b + i \sin b}\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \paren {\cos a \cos b - \sin a \sin b} + i \paren {\sin a \cos b + \cos a \sin b}\)





Complex Numbers form Field



The result follows by equating the real parts.
$\blacksquare$


Proof 2
Recall the analytic definitions of sine and cosine:

$\ds \sin x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n + 1} } {\paren {2 n + 1}!}$
$\ds \cos x = \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n}!}$
Let:














\(\ds \map g a\)

\(=\)







\(\ds \map \sin {a + b} - \sin a \cos b - \cos a \sin b\)




















\(\ds \map h a\)

\(=\)







\(\ds \map \cos {a + b} - \cos a \cos b + \sin a \sin b\)









Let us differentiate these with respect to $a$, keeping $b$ constant.
Then from Derivative of Sine Function and Derivative of Cosine Function, we have:














\(\ds \map {g'} a\)

\(=\)







\(\ds \map \cos {a + b} - \cos a \cos b + \sin a \sin b = \map h a\)




















\(\ds \map {h'} a\)

\(=\)







\(\ds -\map \sin {a + b} + \sin a \cos b + \cos a \sin b = -\map g a\)









Hence:














\(\ds \map {D_a} {\paren {\map g a}^2 + \paren {\map h a}^2}\)

\(=\)







\(\ds 2 \map g a \map {g'} a + 2 \map h a \map {h'} a\)




















\(\ds \)

\(=\)







\(\ds 0\)









Thus from Derivative of Constant:

$\forall a \in \R: \map g a^2 + \map h a^2 = c$
In particular, it is true for $a = 0$, and so:

$\map g 0^2 + \map h 0^2 = 0$
So:

$\map g a^2 + \map h a^2 = 0$
But from Square of Real Number is Non-Negative:

$\map g a^2 \ge 0$
and:

$\map h a^2 \ge 0$
So it follows that:

$\map g a = 0$
and:

$\map h a = 0$
Hence the result.
$\blacksquare$


Proof 3













\(\ds \cos a \cos b - \sin a \sin b\)

\(=\)







\(\ds \paren {\frac {e^{i a} + e^{-i a} } 2} \paren {\frac {e^{i b} + e^{-i b} } 2} - \sin a \sin b\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \paren {\frac {e^{i a} + e^{-i a} } 2} \paren {\frac {e^{i b} + e^{-i b} } 2} - \paren {\frac {e^{i a} - e^{-i a} } {2 i} } \paren {\frac {e^{i b} - e^{-i b} } {2 i} }\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac {e^{i a} e^{i b} + e^{i a} e^{-i b} + e^{-i a} e^{i b} + e^{-i a} e^{-i b} } 4\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \frac {e^{i a} e^{i b} - e^{i a} e^{-i b} - e^{-i a} e^{i b} + e^{-i a} e^{-i b} } {4 i^2}\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{i a} e^{i b} + e^{i a} e^{-i b} + e^{-i a} e^{i b} + e^{-i a} e^{-i b} } 4\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {e^{i a} e^{i b} - e^{i a} e^{-i b} - e^{-i a} e^{i b} + e^{-i a} e^{-i b} } 4\)





as $i^2 = -1$














\(\ds \)

\(=\)







\(\ds \frac {e^{i a} e^{i b} + e^{-ia} e^{-ib} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac {e^{i \paren {a + b} } + e^{-i \paren {a + b} } } 2\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \map \cos {a + b}\)





Euler's Cosine Identity



$\blacksquare$


Proof 4


$AB$, $AC$, $AE$, and $AD$ are radii of the circle centered at $A$.
Let $\angle BAC = a$ and $\angle DAC = \angle BAE = b$.
By Euclid's First Postulate, we can construct line segments $BD$ and $CE$.
By Euclid's second common notion, $\angle DAB = \angle CAE$.
Thus by Triangle Side-Angle-Side Congruence, $\triangle DAB \cong \triangle CAE$.
Therefore, $DB = CE$.

We now assign Cartesian coordinates to the points $B$, $C$, $D$, and $E$:














\(\ds B\)

\(=\)







\(\ds \tuple {1, 0}\)




















\(\ds C\)

\(=\)







\(\ds \tuple {\cos a, \sin a}\)




















\(\ds D\)

\(=\)







\(\ds \tuple {\map \cos {a + b}, \map \sin {a + b} }\)




















\(\ds E\)

\(=\)







\(\ds \tuple {\cos b, -\sin b}\)





Cosine Function is Even and Sine Function is Odd




We use the definition of the distance function on the Euclidean space $\struct {\R^2, d}$ as defined by the Euclidean metric:

$\forall x, y \in \R^2: \map d {x, y} = \sqrt {\paren {x_1 - x_2}^2 + \paren {y_1 - y_2}^2}$
where $x = \tuple {x_1, y_1}, y = \tuple {x_2, y_2}$.

Thus:

$DB \cong CE \iff \map d {D, B} = \map d {C, E}$

So, plugging in the coordinates of $B, C, D, E$, we get:














\(\ds \paren {\map \cos {a + b} } - 1)^2 + \map {\sin^2} {a + b}\)

\(=\)







\(\ds \paren {\cos a - \cos b}^2 + \paren {\sin a + \sin b}^2\)














\(\ds \leadsto \ \ \)





\(\ds \cos^2 \left({a + b}\right) + \sin^2 \left({a + b}\right)\)

\(\)







\(\ds \)





multiplying out left hand side














\(\ds {} - 2 \, \map \cos {a + b} + 1\)

\(=\)







\(\ds \paren {\cos a - \cos b}^2 + \paren {\sin a + \sin b}^2\)














\(\ds \leadsto \ \ \)





\(\ds 1 - 2 \, \map \cos {a + b} + 1\)

\(=\)







\(\ds \paren {\cos a - \cos b}^2 + \paren {\sin a + \sin b}^2\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds 2 - 2 \, \map \cos {a + b}\)

\(=\)







\(\ds \cos^2 a - 2 \cos a \cos b + \cos^2 b\)





multiplying out right hand side














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sin^2 a + 2 \sin a \sin b + \sin^2 b\)














\(\ds \leadsto \ \ \)





\(\ds 2 - 2 \, \map \cos {a + b}\)

\(=\)







\(\ds 2 - 2 \cos a \cos b + 2 \sin a \sin b\)





Sum of Squares of Sine and Cosine








\(\ds \leadsto \ \ \)





\(\ds \map \cos {a + b}\)

\(=\)







\(\ds \cos a \cos b - \sin a \sin b\)









$\blacksquare$


Proof 5


We begin by enclosing a right-angled triangle $BEF$ with hypotenuse $BF$ of length $1$, inside Rectangle $ABCD$.
Let $\angle EBF = a$ and $\angle ABE = b$.
Therefore:














\(\ds BF\)

\(=\)







\(\ds 1\)





Given














\(\ds BE\)

\(=\)







\(\ds \cos a\)





Definition of Cosine of Angle














\(\ds EF\)

\(=\)







\(\ds \sin a\)





Definition of Sine of Angle














\(\ds AB\)

\(=\)







\(\ds \cos a \cos b\)




















\(\ds AE\)

\(=\)







\(\ds \cos a \sin b\)




















\(\ds ED\)

\(=\)







\(\ds \sin a \cos b\)




















\(\ds DF\)

\(=\)







\(\ds \sin a \sin b\)




















\(\ds \map \cos {a + b }\)

\(=\)







\(\ds FC\)




















\(\ds \)

\(=\)







\(\ds AB - DF\)




















\(\ds \)

\(=\)







\(\ds \cos a \cos b - \sin a \sin b\)









$\blacksquare$


Proof 6













\(\ds \map \cos {a + b}\)

\(=\)







\(\ds \map \cos {a - \paren {-b} }\)




















\(\ds \)

\(=\)







\(\ds \cos a \map \cos {-b} + \sin a \map \sin {-b}\)





Cosine of Difference














\(\ds \)

\(=\)







\(\ds \cos a \cos b + \sin a \paren {-\sin b}\)





Cosine Function is Even, Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \cos a \cos b - \sin a \sin b\)





simplifying



$\blacksquare$


Proof 7

Let two triangles $\triangle ABC$ and $\triangle ABD$ be inscribed in a circle in the same semicircle:.
By Thales' Theorem, these are both right triangles with:

$ \angle ACB = \angle ADB = 90 \degrees$
Let $AB = 1$.
Join $DC$.
By construction, $\Box ABCD$ is a cyclic quadrilateral.
Let:

$\angle CAB = \alpha$
$\angle DBA = \beta$
$\angle DAC = \gamma$
From the construction above, we have the following:

$\cos \alpha = AC$
$\cos \beta = BD$
$\sin \alpha = CB$
$\sin \beta = AD$
$\gamma = \dfrac \pi 2 - \alpha - \beta$
By Length of Chord of Circle:

$CD = 2 r \map \sin {\gamma}$
Since $2r \mathop = 1$:

$CD = \map \sin {\gamma}$
Therefore:














\(\ds CD\)

\(=\)







\(\ds \map \sin {\gamma}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {\dfrac \pi 2 - \gamma}\)





Cosine of Complement equals Sine














\(\ds \)

\(=\)







\(\ds \map \cos {\alpha + \beta}\)





$\gamma$ is complementary to $\alpha + \beta$



By Ptolemy's Theorem:

$AC \times BD = AD \times BC + AB \times CD$
Substituting:

$\cos \alpha \times \cos \beta  = \sin \beta \times \sin \alpha + 1 \times \map \cos {\alpha + \beta}$
Rearranging:

$\cos \tuple {\alpha + \beta} = \cos \alpha \cos \beta - \sin \alpha \sin \beta$

By Equivalence of Definitions of Cosine of Angle, the definition of cosine from the circle, from the triangle and as a real function are equivalent.
It follows that all real numbers $x$ and $y$ correspond to values of $\alpha$ and $\beta$ for which the proof above applies, with one exception.
The exception occurs when both $\alpha$ and $\beta$ are equal to $\dfrac {\pi} 2$.
But then the result is simply:

$ \cos {\pi} = \cos \dfrac {\pi} 2 \cos \dfrac {\pi} 2 - \sin \dfrac {\pi} 2 \sin \dfrac {\pi} 2$
$ -1 = 0 \cdot 0  - 1 \cdot 1$
The result follows.
$\blacksquare$


Historical Note
The Cosine of Sum formula and its corollary were proved by François Viète in about $1579$.


Also see
Sine of Sum
Tangent of Sum


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text V$. Trigonometry: Formulae $(11)$
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.5$. The Functions $e^z$, $\cos z$, $\sin z$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 5$: Trigonometric Functions: $5.35$
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $2$: Functions, Limits and Continuity: The Elementary Functions: $4$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): addition formula: 1.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): addition formulae
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): addition formulae
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $5$: Eternal Triangles: Ptolemy
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): compound angle formulae (in trigonometry)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $12$: Trigonometric formulae: Addition formulae
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $14$: Trigonometric formulae: Addition formulae




