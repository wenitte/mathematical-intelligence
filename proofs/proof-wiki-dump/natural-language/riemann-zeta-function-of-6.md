# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_of_6



Theorem
The Riemann zeta function of $6$ is given by:














\(\ds \map \zeta 6\)

\(=\)







\(\ds \dfrac 1 {1^6} +  \dfrac 1 {2^6} +  \dfrac 1 {3^6} +  \dfrac 1 {4^6} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^6} {945}\)




















\(\ds \)

\(\approx\)







\(\ds 1 \cdotp 01734 \, 3 \ldots\)









This sequence is A013664 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof 1
By Fourier Series: $x^6$ over $-\pi$ to $\pi$, for $x \in \closedint {-\pi} \pi$:

$\ds x^6 = \frac {\pi^6} 7 + \sum_{n \mathop = 1}^\infty \frac {12 n^4 \pi^4 - 240 n^2 \pi^2 +1440} {n^6} \, \map \cos {n \pi} \, \map \cos {n x}$
Setting $x = \pi$: 














\(\ds \pi^6\)

\(=\)







\(\ds \frac {\pi^6} 7 + \sum_{n \mathop = 1}^\infty \frac {12 n^4 \pi^4 - 240 n^2 \pi^2 +1440} {n^6} \, \map {\cos^2} {n \pi}\)














\(\ds \leadsto \ \ \)





\(\ds \frac { 6 \pi^6} 7\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {12 \pi^4} {n^2} - \sum_{n \mathop = 1}^\infty \frac {240 \pi^2} {n^4} + \sum_{n \mathop = 1}^\infty \frac {1440} {n^6}\)





Cosine of Multiple of Pi








\(\ds \leadsto \ \ \)





\(\ds \frac {\pi^6} 7\)

\(=\)







\(\ds 2 \pi^4 \sum_{n \mathop = 1}^\infty \frac 1 {n^2} - 40 \pi^2 \sum_{n \mathop = 1}^\infty \frac 1 {n^4} + 240 \sum_{n \mathop = 1}^\infty \frac 1 {n^6}\)




















\(\ds \)

\(=\)







\(\ds - \frac {\pi^6} 9 + 240 \sum_{n \mathop = 1}^\infty \frac 1 {n^6}\)





Basel Problem and Riemann Zeta Function of 4








\(\ds \leadsto \ \ \)





\(\ds 240 \sum_{n \mathop = 1}^\infty \frac 1 {n^6}\)

\(=\)







\(\ds \frac {\pi^6} 9 + \frac {\pi^6} 7\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {16 \pi^4} {63}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^6}\)

\(=\)







\(\ds \frac {\pi^6} {945}\)









$\blacksquare$


Proof 2













\(\ds \sin x\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^\infty \paren {1 - \dfrac {x^2} {n^2 \pi^2} }\)





Euler Formula for Sine Function














\(\ds \)

\(=\)







\(\ds x \paren {1 - \dfrac {x^2} {1^2 \pi^2} } \paren {1 - \dfrac {x^2} {2^2 \pi^2} } \paren {1 - \dfrac {x^2} {3^2 \pi^2} } \cdots\)
























\(\ds \sin x\)

\(=\)







\(\ds x\sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {x^{2 n} } {\paren {2 n + 1}!}\)





Power Series Expansion for Sine Function














\(\ds \)

\(=\)







\(\ds x \paren {1 - \dfrac {x^2} {3!} + \dfrac {x^4} {5!} - \dfrac {x^6} {7!} + \cdots }\)










Dividing out the x factor on both sides and equating the product with the sum, we have:














\(\ds \prod_{n \mathop = 1}^\infty \paren {1 - \dfrac {x^2} {n^2 \pi^2} }\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {x^{2 n} } {\paren {2 n + 1}!}\)




















\(\ds \paren {1 - \dfrac {x^2} {1 \pi^2} } \paren {1 - \dfrac {x^2} {4 \pi^2} } \paren {1 - \dfrac {x^2} {9 \pi^2} } \cdots\)

\(=\)







\(\ds \paren {1 - \dfrac {x^2} {3!} + \dfrac {x^4} {5!} - \dfrac {x^6} {7!} + \cdots }\)










Equating the $x^2$ term on both sides of the equation, we obtain the value of the sum of the individual terms in the Basel Problem:














\(\ds -\dfrac {x^2} {3!}\)

\(=\)







\(\ds -\dfrac {x^2} {\pi^2} \paren {1 + \dfrac 1 4 + \dfrac 1 9 + \dfrac 1 {16} + \cdots}\)





Basel Problem














\(\ds \dfrac {\pi^2} 6\)

\(=\)







\(\ds \paren {1 + \dfrac 1 4 + \dfrac 1 9 + \dfrac 1 {16} + \cdots}\)










Equating the $x^4$ term on both sides of the equation, we obtain the value of the sum of the product of every unique combination of $2$ terms from the Basel Problem:














\(\ds \dfrac {x^4} {5!}\)

\(=\)







\(\ds \dfrac {x^4} {\pi^4} \paren {\paren 1 \paren {\dfrac 1 4 } + \paren 1 \paren {\dfrac 1 9 } + \paren 1 \paren {\dfrac 1 {16} } + \cdots + \paren {\dfrac 1 4} \paren {\dfrac 1 9} + \paren {\dfrac 1 4} \paren {\dfrac 1 {16} } + \cdots + \paren {\dfrac 1 9} \paren {\dfrac 1 {16} } + \cdots }\)




















\(\ds \dfrac {\pi^4} {120 }\)

\(=\)







\(\ds \paren {\paren 1 \paren {\dfrac 1 4 } + \paren 1 \paren {\dfrac 1 9 } + \paren 1 \paren {\dfrac 1 {16} } + \cdots + \paren {\dfrac 1 4} \paren {\dfrac 1 9} + \paren {\dfrac 1 4} \paren {\dfrac 1 {16} } + \cdots + \paren {\dfrac 1 9} \paren {\dfrac 1 {16} } + \cdots }\)










Equating the $x^6$ term on both sides of the equation, we obtain the value of the sum of the product of every unique combination of $3$ terms from the Basel Problem:














\(\ds -\dfrac {x^6} {7!}\)

\(=\)







\(\ds -\dfrac {x^6} {\pi^6} \paren {\paren 1 \paren {\dfrac 1 4} \paren {\dfrac 1 9} + \paren 1 \paren {\dfrac 1 4} \paren {\dfrac 1 {16} } + \cdots + \paren 1 \paren {\dfrac 1 9} \paren {\dfrac 1 {16} } + \cdots + \paren {\dfrac 1 4} \paren {\dfrac 1 9} \paren {\dfrac 1 {16} } + \cdots}\)




















\(\ds \dfrac {\pi^6} {7!}\)

\(=\)







\(\ds \paren {\paren 1 \paren {\dfrac 1 4} \paren {\dfrac 1 9} + \paren 1 \paren {\dfrac 1 4} \paren {\dfrac 1 {16} } + \cdots + \paren 1 \paren {\dfrac 1 9} \paren {\dfrac 1 {16} } + \cdots + \paren {\dfrac 1 4} \paren {\dfrac 1 9} \paren {\dfrac 1 {16} } + \cdots}\)










When we take the cube of a sum, we have:














\(\ds \paren {A + B + C + \cdots}^3\)

\(=\)







\(\ds \paren {A^3 + B^3 + C^3 + \cdots} + 3 \paren {A^2 B + A B^2 + A^2 C + A C^2 + B^2 C + B C^2 + \cdots} + 6 \paren {A B C + \cdots}\)




















\(\ds \paren {\text {Cube of Sum } }\)

\(=\)







\(\ds \paren {\text {Sum of Cubes } } + 3 \paren { \text {Product of 3 Terms, with one term a perfect square (Every Combination) } } + 6 \paren { \text {Product of 3 Unique Terms (Every Combination) } }\)










Let $A = \dfrac 1 {1^2}, B = \dfrac 1 {2^2}, C = \dfrac 1 {3^2}, \cdots $

Then the left hand side (Cube of Sum) becomes:














\(\ds \paren {\paren {\dfrac 1 {1^2} } + \paren {\dfrac 1 {2^2} } + \paren {\dfrac 1 {3^2} } + \cdots}^3\)

\(=\)







\(\ds \paren {\map \zeta 2}^3\)










and the first term on the right hand side (Sum of Cubes) becomes:














\(\ds \paren {\paren {\dfrac 1 {1^2} }^3 + \paren {\dfrac 1 {2^2} }^3 + \paren {\dfrac 1 {3^2} }^3 + \cdots}\)

\(=\)







\(\ds \map \zeta 6\)










To obtain the remaining two terms on the right hand side, we have:














\(\ds \paren {AB + AC + BC + \cdots}\)

\(=\)







\(\ds \dfrac {\pi^4} {5!}\)





From the $x^4$ term above: Product of $2$ Unique terms














\(\ds \paren {A + B + C + \cdots}\)

\(=\)







\(\ds \dfrac {\pi^2} {3!}\)





From the $x^2$ term above: Each term once














\(\ds \paren {AB + AC + BC + \cdots}  \paren {A + B + C + \cdots}\)

\(=\)







\(\ds \paren {A^2B + AB^2 + A^2C + AC^2 + B^2C + BC^2 + \cdots} + 3\paren {ABC + \cdots}\)




















\(\ds 3 \paren {AB + AC + BC + \cdots} \paren {A + B + C + \cdots}\)

\(=\)







\(\ds 3 \paren {A^2B + AB^2 + A^2C + AC^2 + B^2C + BC^2 + \cdots} + 9 \paren {ABC + \cdots}\)





We have 3 too many of the 'ABC' type (only need 6) - need to subtract 3 of these




Finally, we have:














\(\ds \paren {\map \zeta 2}^3\)

\(=\)







\(\ds \map \zeta 6  + 3 \dfrac {\pi^2} {3!} \dfrac {\pi^4} {5!} - 3  \dfrac {\pi^6} {7!}\)














\(\ds \leadsto \ \ \)





\(\ds \map \zeta 6\)

\(=\)







\(\ds \paren {\map \zeta 2}^3  - 3  \dfrac {\pi^2} {3!} \dfrac {\pi^4} {5!} + 3  \dfrac {\pi^6} {7!}\)





rearranging














\(\ds \)

\(=\)







\(\ds \dfrac {\pi^6} {216} - 21 \dfrac {\pi^6} {7!} + 3 \dfrac {\pi^6} {7!}\)





simplifying














\(\ds \)

\(=\)







\(\ds 70 \dfrac {\pi^6} {3 \paren { 7!} } - 54 \dfrac {\pi^6} {3 \paren {7!} }\)





simplifying














\(\ds \)

\(=\)







\(\ds 16 \dfrac {\pi^6} {3 \paren {7!} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\pi^6} {945}\)









$\blacksquare$


Proof 3













\(\ds \sum_{n \mathop = 1}^{\infty} \frac 1 {n^6}\)

\(=\)







\(\ds \map \zeta 6\)





Definition of Riemann Zeta Function














\(\ds \)

\(=\)







\(\ds \paren {-1}^4 \frac {B_6 2^5 \pi^6} {6!}\)





Riemann Zeta Function at Even Integers














\(\ds \)

\(=\)







\(\ds \frac 1 {42} \cdot \frac {2^5 \pi^6} {6!}\)





Definition of Sequence of Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds \frac {32 \pi^6} {42 \cdot 720}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\pi^6} {945}\)









$\blacksquare$


Historical Note
The Riemann Zeta Function of 6 was solved by Leonhard Euler, using the same technique as for the Riemann Zeta Function of 4 and the Basel Problem.


If only my brother were alive now.
-- Johann Bernoulli


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Series involving Reciprocals of Powers of Positive Integers: $19.21$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Bernoulli number
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.21$: Euler ($\text {1707}$ – $\text {1783}$)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: $(7)$
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): zeta function




