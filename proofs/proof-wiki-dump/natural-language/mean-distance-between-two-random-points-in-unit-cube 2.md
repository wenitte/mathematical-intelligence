# 

Source: https://proofwiki.org/wiki/Mean_Distance_between_Two_Random_Points_in_Unit_Cube

Theorem
The mean distance $R$ between $2$ points chosen at random from the interior of a unit cube is given by:














\(\ds R\)

\(=\)







\(\ds \frac {4 + 17 \sqrt 2 - 6 \sqrt3 - 7 \pi} {105} + \frac {\map \ln {1 + \sqrt 2 } } 5 + \frac {2 \, \map \ln {2 + \sqrt 3} } 5\)




















\(\ds \)

\(\approx\)







\(\ds 0 \cdotp 66170 \, 71822 \, 67176 \, 23515 \, 582 \ldots\)










The value $R$ is known as the Robbins constant.


Proof
From Mean Distance between Two Random Points in Cuboid:
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










The result follows by setting $a = b = c = \dfrac 1 2$.
Hence we have:














\(\ds r\)

\(=\)







\(\ds \sqrt {\dfrac 1 {2^2} + \dfrac 1 {2^2} + \dfrac 1 {2^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac 3 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt 3} 2\)









and:














\(\ds r_1 = r_2 = r_3\)

\(=\)







\(\ds \sqrt {\dfrac 1 {2^2} + \dfrac 1 {2^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\dfrac 2 4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt 2} 2\)









So:

$r - r_1 = r - r_2 = r - r_3 = \dfrac {\sqrt 3 - \sqrt 2} 2$
Thus:














\(\ds E\)

\(=\)







\(\ds \dfrac 2 {15} \dfrac {\sqrt 3} 2 - \dfrac 7 {45} \paren {\dfrac {\sqrt 3 - \sqrt 2} 2 \paren {\dfrac {\sqrt 2} {2 a} }^2 + \dfrac {\sqrt 3 - \sqrt 2} 2 \paren {\dfrac {\sqrt 2} {2 b} }^2 + \dfrac {\sqrt 3 - \sqrt 2} 2 \paren {\dfrac {\sqrt 2} {2 c} }^2}\)





substituting for all instances of $r$, $r_1$ etc.














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 8 {315 a^2 b^2 c^2} \paren {a^7 + b^7 + c^7 - 3 \paren {\dfrac {\sqrt 2} 2}^7 + \paren {\dfrac {\sqrt 3} 2}^7}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 a b^2 c^2} \paren {b^6 \sinh^{-1} \dfrac a b + c^6 \sinh^{-1} \dfrac a c -  \paren {\dfrac {\sqrt 2} 2}^2 \paren { \paren {\dfrac {\sqrt 2} 2}^4 - 8 b^2 c^2} \sinh^{-1} \dfrac {2 a} {\sqrt 2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 a^2 b c^2} \paren {c^6 \sinh^{-1} \dfrac b c + a^6 \sinh^{-1} \dfrac b a -  \paren {\dfrac {\sqrt 2} 2}^2 \paren { \paren {\dfrac {\sqrt 2} 2}^4 - 8 c^2 a^2} \sinh^{-1} \dfrac {2 b} {\sqrt 2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 a^2 b^2 c} \paren {a^6 \sinh^{-1} \dfrac c a + b^6 \sinh^{-1} \dfrac c b -  \paren {\dfrac {\sqrt 2} 2}^2 \paren { \paren {\dfrac {\sqrt 2} 2}^4 - 8 a^2 b^2} \sinh^{-1} \dfrac {2 c} {\sqrt 2} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac 4 {15 a b c} \paren {a^4 \, \map \arcsin {2 b c} + b^4 \, \map \arcsin {2 a c} + c^4 \, \map \arcsin {2 a b} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {15} \dfrac {\sqrt 3} 2 - \dfrac 7 {45} \paren {\dfrac {\sqrt 3 - \sqrt 2} 2 \paren {\sqrt 2}^2 + \dfrac {\sqrt 3 - \sqrt 2} 2 \paren {\sqrt 2}^2 + \dfrac {\sqrt 3 - \sqrt 2} 2 \paren {\sqrt 2}^2}\)





substituting for all instances of $a = b = c = \dfrac 1 2$














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 8 {315 \paren {\dfrac 1 2}^2 \paren {\dfrac 1 2}^2 \paren {\dfrac 1 2}^2} \paren {\paren {\dfrac 1 2}^7 + \paren {\dfrac 1 2}^7 + \paren {\dfrac 1 2}^7 - 3 \paren {\dfrac {\sqrt 2} 2}^7 + \paren {\dfrac {\sqrt 3} 2}^7}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 \paren {\dfrac 1 2} \paren {\dfrac 1 2}^2 \paren {\dfrac 1 2}^2} \paren {\paren {\dfrac 1 2}^6 \sinh^{-1} 1 + \paren {\dfrac 1 2}^6 \sinh^{-1} 1 -  \paren {\dfrac {\sqrt 2} 2}^2 \paren { \paren {\dfrac {\sqrt 2} 2}^4 - 8 \paren {\dfrac 1 2}^2 \paren {\dfrac 1 2}^2} \sinh^{-1} \dfrac 1 {\sqrt 2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 \paren {\dfrac 1 2}^2 \paren {\dfrac 1 2} \paren {\dfrac 1 2}^2} \paren {\paren {\dfrac 1 2}^6 \sinh^{-1} 1 + \paren {\dfrac 1 2}^6 \sinh^{-1} 1 -  \paren {\dfrac {\sqrt 2} 2}^2 \paren { \paren {\dfrac {\sqrt 2} 2}^4 - 8 \paren {\dfrac 1 2}^2 \paren {\dfrac 1 2}^2} \sinh^{-1} \dfrac 1 {\sqrt 2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 {15 \paren {\dfrac 1 2}^2 \paren {\dfrac 1 2}^2 \paren {\dfrac 1 2} } \paren {\paren {\dfrac 1 2}^6 \sinh^{-1} 1 + \paren {\dfrac 1 2}^6 \sinh^{-1} 1 -  \paren {\dfrac {\sqrt 2} 2}^2 \paren { \paren {\dfrac {\sqrt 2} 2}^4 - 8 \paren {\dfrac 1 2}^2 \paren {\dfrac 1 2}^2} \sinh^{-1} \dfrac 1 {\sqrt 2} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac 4 {15 \paren {\dfrac 1 2} \paren {\dfrac 1 2} \paren {\dfrac 1 2} } \paren {\paren {\dfrac 1 2}^4 \, \map \arcsin {2 \paren {\dfrac 1 2} \paren {\dfrac 1 2} } + \paren {\dfrac 1 2}^4 \, \map \arcsin {2 \paren {\dfrac 1 2} \paren {\dfrac 1 2} } + \paren {\dfrac 1 2}^4 \, \map \arcsin {2 \paren {\dfrac 1 2} \paren {\dfrac 1 2} } }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt 3} {15} - \dfrac {21} {45} \paren {\sqrt 3 - \sqrt 2}\)





simplification














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {8 \times 2^6} {315} \paren {\dfrac 3 {2^7} - \dfrac {3 \sqrt 2^7} {2^7} + \dfrac {\sqrt 3^7} {2^7} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {2^5} {15} \paren {\dfrac 1 {2^5} \sinh^{-1} 1 - \dfrac 1 2 \paren {\dfrac 1 4 - \dfrac 1 2} \sinh^{-1} \dfrac 1 {\sqrt 2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {2^5} {15} \paren {\dfrac 1 {2^5} \sinh^{-1} 1 - \dfrac 1 2 \paren {\dfrac 1 4 - \dfrac 1 2} \sinh^{-1} \dfrac 1 {\sqrt 2} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac {2^5} {15} \paren {\dfrac 1 {2^5} \sinh^{-1} 1 - \dfrac 1 2 \paren {\dfrac 1 4 - \dfrac 1 2} \sinh^{-1} \dfrac 1 {\sqrt 2} }\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \dfrac {4 \times 2^3} {15} \paren {\dfrac 3 {2^4} \arcsin \dfrac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 \sqrt 3 - 21 \sqrt 3 + 21 \sqrt 2} {45} + \dfrac 4 {315} \paren {3 - 3 \sqrt 2^7 + \sqrt 3^7}\)





simplification














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 5 \sinh^{-1} 1 + \dfrac 4 5 \sinh^{-1} \dfrac 1 {\sqrt 2} - \dfrac 2 5 \arcsin \dfrac 1 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {21 \sqrt 2 - 18 \sqrt 3} {45} + \dfrac 4 {315} \paren {3 + 27 \sqrt 3 - 24 \sqrt 2}\)





simplification














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 5 \map \ln {1 + \sqrt {1^2 + 1} } + \dfrac 4 5 \map \ln {\dfrac 1 {\sqrt 2} + \sqrt {\paren {\dfrac 1 {\sqrt 2} }^2 + 1} } - \dfrac 2 5 \arcsin \dfrac 1 2\)





Inverse Hyperbolic Sine Logarithmic Formulation














\(\ds \)

\(=\)







\(\ds \dfrac {7 \sqrt 2 - 6 \sqrt 3} {15} + \dfrac 4 {105} \paren {1 + 9 \sqrt 3 - 8 \sqrt 2}\)





simplification














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 5 \map \ln {1 + \sqrt 2} + \dfrac 4 5 \map \ln {\dfrac {1 + \sqrt 3} {\sqrt 2} } - \dfrac 2 5 \dfrac \pi 6\)





Sine of $30 \degrees$














\(\ds \)

\(=\)







\(\ds \dfrac {49 \sqrt 2 - 42 \sqrt 3 + 4 + 36 \sqrt 3 - 32 \sqrt 2 - 7 \pi} {105}\)





common denominator














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \dfrac 1 5 \map \ln {1 + \sqrt 2} + \dfrac 2 5 \map \ln {\paren {\dfrac {1 + \sqrt 3} {\sqrt 2} }^2 }\)





Logarithm of Power














\(\ds \)

\(=\)







\(\ds \frac {4 + 17 \sqrt 2 - 6 \sqrt3 - 7 \pi} {105} + \dfrac {\map \ln {1 + \sqrt 2} } 5 + \dfrac {2 \, \map \ln {2 + \sqrt 3} } 5\)





tidying up



$\blacksquare$


Sources
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,66170 7 \ldots$
1978: David P. Robbins and Theodore S. Bolis: E2629: Average distance between two points in a box (Amer. Math. Monthly Vol. 85: pp. 277 – 278)  www.jstor.org/stable/2321177




