# 

Source: https://proofwiki.org/wiki/Mean_Distance_between_Two_Random_Points_in_Cuboid

Theorem
Let $B$ be a cuboid in the Cartesian $3$-space $\R^3$ as:

$\size x \le a$, $\size y \le b$, $\size z \le c$
Let $E$ denote the mean distance $D$ between $2$ points chosen at random from the interior of $B$.

Then:














\(\ds E\)

\(=\)







\(\ds \dfrac {2 r} {15} - \dfrac 7 {45} \paren {\paren {r - r_1} \paren {\dfrac {r_1} a}^2 + \paren {r - r_2} \paren {\dfrac {r_2} b}^2 + \paren {r - r_3} \paren {\dfrac {r_3} c}^2}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 8 {315 a^2 b^2 c^2} \paren {a^7 + b^7 + c^7 - {r_1}^7 - {r_2}^7 - {r_3}^7 + r^7}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 a b^2 c^2} \paren {b^6 \sinh^{-1} \dfrac a b + c^6 \sinh^{-1} \dfrac a c - {r_1}^2 \paren { {r_1}^4 - 8 b^2 c^2} \sinh^{-1} \dfrac a {r_1} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 a^2 b c^2} \paren {c^6 \sinh^{-1} \dfrac b c + a^6 \sinh^{-1} \dfrac b a - {r_2}^2 \paren { {r_2}^4 - 8 c^2 a^2} \sinh^{-1} \dfrac b {r_2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 a^2 b^2 c} \paren {a^6 \sinh^{-1} \dfrac c a + b^6 \sinh^{-1} \dfrac c b - {r_3}^2 \paren { {r_3}^4 - 8 a^2 b^2} \sinh^{-1} \dfrac c {r_3} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac 4 {15 a b c} \paren {a^4 \arcsin \dfrac {b c} {r_2 r_3} + b^4 \arcsin \dfrac {a c} {r_3 r_1} + c^4 \arcsin \dfrac {a b} {r_1 r_2} }\)










where:














\(\ds r\)

\(=\)







\(\ds \sqrt {a^2 + b^2 + c^2}\)




















\(\ds r_1\)

\(=\)







\(\ds \sqrt {b^2 + c^2}\)




















\(\ds r_2\)

\(=\)







\(\ds \sqrt {a^2 + c^2}\)




















\(\ds r_3\)

\(=\)







\(\ds \sqrt {a^2 + b^2}\)











Proof
Let $X_1$, $X_2$; $Y_1$, $Y_2$; $Z_1$, $Z_2$ be pairs of independent random variables with a continuous uniform distribution in $\closedint {-a} a$, $\closedint {-b} b$ and $\closedint {-c} c$.
The random variables $U = \size {X_1 - X_2}$, $V = \size {Y_1 - Y_2}$, $W = \size {Z_1 - Z_2}$ are likewise independent.
Thus the probability density functions $\map f U$, $\map g V$, $\map h W$ can be shown to be:














\(\ds \map f u\)

\(=\)







\(\ds \dfrac {2 a - u} {2 a^2}\)




















\(\ds \map f v\)

\(=\)







\(\ds \dfrac {2 a - v} {2 a^2}\)




















\(\ds \map f w\)

\(=\)







\(\ds \dfrac {2 a - w} {2 a^2}\)









Hence the sought expectation is given by:

$E = \ds \dfrac 1 {8 a^2 b^2 c^2} \int_0^{2 c} \int_0^{2 b} \int_0^{2 a} \sqrt {u^2 + v^2 + v^2} \paren {2 a - u} \paren {2 b - v} \paren {2 c - w} \rd u \rd v \rd w$

Let $\map P {a, b, c}$ be the pyramid defined by the planes $u = 2 a$, $v = 0$, $w = 0$, $a v = b u$ and $a w = c u$.
Set:

$\map F {a, b, c} = \ds \dfrac 1 {8 a^2 b^2 c^2} \iiint_{\map P {a, b, c} } \sqrt {u^2 + v^2 + v^2} \paren {2 a - u} \paren {2 b - v} \paren {2 c - w} \rd u \rd v \rd w$
By symmetry:

$\map F {a, b, c} = \map F {a, c, b}$
and so:

$(1): \quad E = \dfrac 1 {8 a^2 b^2 c^2} \paren {\map F {a, b, c} + \map F {c, a, b} + \map F {b, c, a} }$

All that remains is to calculate $\map F {a, b, c}$.
Using spherical coordinates we obtain:
$\map F {a, b, c} = \ds \int_0^{\arctan \frac b a} \int_{\arccot \frac c a \cos \theta}^{\frac \pi 2} \int_0^{2 a \cosec \phi \sec \theta} \Phi \rd \rho \rd \phi \rd \theta$
where:

$\Phi = \rho^3 \paren {2 a - \rho \sin \phi \cos \theta} \paren {2 b - \rho \sin \phi \sin \theta} \paren {2 c - \rho \cos \phi} \sin \phi$
After integration:














\(\ds \map F {a, b, c}\)

\(=\)







\(\ds \dfrac {64} {315} a^7\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac 8 {315} a^2 \paren {8 a^4 - 19 a^2 b^2 - 6 b^4} r_3\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac 8 {315} a^2 \paren {8 a^4 - 19 a^2 c^2 - 6 c^4} r_2\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 8 {315} a^2 \paren {8 a^4 - 6 b^4 - 6 c^4 + 19 a^2 b^2 + 30 b^2 c^2} r\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 8 {15} a^6 b \sinh^{-1} \dfrac b a + \dfrac 8 {15} a^6 c \sinh^{-1} \dfrac c a\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac 8 {15} a^2 b \paren {a^4 - 4 a^2 c^2 - c^4} \sinh^{-1} \dfrac b {r_2}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac 8 {15} a^2 c \paren {a^4 - 4 a^2 b^2 - b^4} \sinh^{-1} \dfrac c {r_3}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac {32} {15} a^5 b c \arcsin \dfrac {b c} {r_2 r_3}\)









where:














\(\ds r\)

\(=\)







\(\ds \sqrt {a^2 + b^2 + c^2}\)




















\(\ds r_1\)

\(=\)







\(\ds \sqrt {b^2 + c^2}\)




















\(\ds r_2\)

\(=\)







\(\ds \sqrt {a^2 + c^2}\)




















\(\ds r_3\)

\(=\)







\(\ds \sqrt {a^2 + b^2}\)










Substituting in $(1)$ we obtain:














\(\ds E\)

\(=\)







\(\ds \dfrac {2 r} {15} - \dfrac 7 {45} \paren {\paren {r - r_1} \paren {\dfrac {r_1} a}^2 + \paren {r - r_2} \paren {\dfrac {r_2} b}^2 + \paren {r - r_3} \paren {\dfrac {r_3} c}^2}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 8 {315 a^2 b^2 c^2} \paren {a^7 + b^7 + c^7 - {r_1}^7 - {r_2}^7 - {r_3}^7 + r^7}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 a b^2 c^2} \paren {b^6 \sinh^{-1} \dfrac a b + c^6 \sinh^{-1} \dfrac a c - {r_1}^2 \paren { {r_1}^4 - 8 b^2 c^2} \sinh^{-1} \dfrac a {r_1} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 a^2 b c^2} \paren {c^6 \sinh^{-1} \dfrac b c + a^6 \sinh^{-1} \dfrac b a - {r_2}^2 \paren { {r_2}^4 - 8 c^2 a^2} \sinh^{-1} \dfrac b {r_2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 a^2 b^2 c} \paren {a^6 \sinh^{-1} \dfrac c a + b^6 \sinh^{-1} \dfrac c b - {r_3}^2 \paren { {r_3}^4 - 8 a^2 b^2} \sinh^{-1} \dfrac c {r_3} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac 4 {15 a b c} \paren {a^4 \arcsin \dfrac {b c} {r_2 r_3} + b^4 \arcsin \dfrac {a c} {r_3 r_1} + c^4 \arcsin \dfrac {a b} {r_1 r_2} }\)









$\blacksquare$


This article needs proofreading.In particular: Bound to be numerous transcription errorsIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Sources
1977: David P. Robbins: E2629 (Amer. Math. Monthly Vol. 84: p. 57)  www.jstor.org/stable/2318315
1978: David P. Robbins and Theodore S. Bolis: E2629: Average distance between two points in a box (Amer. Math. Monthly Vol. 85: pp. 277 – 278)  www.jstor.org/stable/2321177




