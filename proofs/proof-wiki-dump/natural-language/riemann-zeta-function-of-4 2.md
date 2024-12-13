# 

Source: https://proofwiki.org/wiki/Riemann_Zeta_Function_of_4



Theorem
The Riemann zeta function of $4$ is given by:














\(\ds \map \zeta 4\)

\(=\)







\(\ds \dfrac 1 {1^4} +  \dfrac 1 {2^4} +  \dfrac 1 {3^4} +  \dfrac 1 {4^4} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\pi^4} {90}\)




















\(\ds \)

\(\approx\)







\(\ds 1 \cdotp 08232 \, 3 \ldots\)









This sequence is A013662 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof 1
By Fourier Series of Fourth Power of x, for $x \in \closedint {-\pi} \pi$:

$\ds x^4 = \frac {\pi^4} 5 + \sum_{n \mathop = 1}^\infty \frac {8 n^2 \pi^2 - 48} {n^4} \map \cos {n \pi} \map \cos {n x}$
Setting $x = \pi$: 














\(\ds \pi^4\)

\(=\)







\(\ds \frac {\pi^4} 5 + \sum_{n \mathop = 1}^\infty \frac {8 n^2 \pi^2 - 48} {n^4} \map {\cos^2} {n \pi}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {4 \pi^4} 5\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {8 n^2 \pi^2} {n^4} - \sum_{n \mathop = 1}^\infty \frac {48} {n^4}\)





Cosine of Multiple of Pi








\(\ds \leadsto \ \ \)





\(\ds \frac {\pi^4} 5\)

\(=\)







\(\ds 2 \pi^2 \sum_{n \mathop = 1}^\infty \frac 1 {n^2} - 12 \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^4} 3 - 12 \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)





Basel Problem








\(\ds \leadsto \ \ \)





\(\ds 12 \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)

\(=\)







\(\ds \frac {\pi^4} 3 - \frac {\pi^4} 5\)





rearranging














\(\ds \)

\(=\)







\(\ds \frac {2 \pi^4} {15}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)

\(=\)







\(\ds \frac {\pi^4} {90}\)









$\blacksquare$


Proof 2
By Fourier Series of x squared, for $x \in \closedint {-\pi} \pi$:

$\ds x^2 = \frac {\pi^2} 3 + \sum_{n \mathop = 1}^\infty \paren {\paren {-1}^n \frac 4 {n^2} \cos n x}$

Hence:














\(\ds \frac 1 \pi \int_{-\pi}^\pi x^4 \rd x\)

\(=\)







\(\ds \frac 1 2 \paren {\frac {2 \pi^2} 3}^2 + \sum_{n \mathop = 1}^\infty \paren {\frac {4 \paren {-1}^n} {n^2} }^2\)





Parseval's Theorem








\(\ds \leadsto \ \ \)





\(\ds \frac 2 \pi \int_0^\pi x^4 \rd x\)

\(=\)







\(\ds \frac {2 \pi^4} 9 + \sum_{n \mathop = 1}^\infty \frac {16} {n^4}\)





Definite Integral of Even Function








\(\ds \leadsto \ \ \)





\(\ds \frac {2 \pi^4} 5\)

\(=\)







\(\ds \frac {2 \pi^4} 9 + \sum_{n \mathop = 1}^\infty \frac {16} {n^4}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {8 \pi^4} {45}\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {16} {n^4}\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^4}\)

\(=\)







\(\ds \frac {\pi^4} {90}\)









$\blacksquare$


Proof 3

This theorem requires a proof.In particular: $\ds \int_0^1\int_0^1\int_0^1\int_0^1 \frac 1 {1 - x_1x_2x_3x_4} \rd x_1 \rd x_2 \rd x_3 \rd x_4$. Use Beukers-Calabi-Kolk sub.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 4













\(\ds \map \zeta 4\)

\(=\)







\(\ds \paren {-1}^3 \dfrac {B_4 2^3 \pi^4} {4!}\)





Riemann Zeta Function at Even Integers














\(\ds \)

\(=\)







\(\ds \paren {-1}^3 \paren {-\dfrac 1 {30} } \dfrac {2^3 \pi^4} {4!}\)





Definition of Sequence of Bernoulli Numbers














\(\ds \)

\(=\)







\(\ds \paren {\dfrac 1 {30} } \paren {\dfrac 8 {24} } \pi^4\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \dfrac {\pi^4} {90}\)





simplifying



$\blacksquare$


Proof 5
Create a multiplication table where the column down the left hand side and the row across the top each contains the terms of zeta function of $2$:

$\begin {array} {c|cccccccccc}
\paren {\map \zeta 2}^2 & \paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {2^2} } & \paren {\dfrac 1 {3^2} } & \paren {\dfrac 1 {4^2} } & \cdots \\
\hline

\paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {1^4} } & \paren {\dfrac 1 {1^2} } \paren {\dfrac 1 {2^2} } & \paren {\dfrac 1 {1^2} } \paren {\dfrac 1 {3^2} } & \paren {\dfrac 1 {1^2} } \paren {\dfrac 1 {4^2} } & \cdots \\

\paren {\dfrac 1 {2^2} }  & \paren {\dfrac 1 {2^2} } \paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {2^4} } & \paren {\dfrac 1 {2^2} } \paren {\dfrac 1 {3^2} } & \paren {\dfrac 1 {2^2} } \paren {\dfrac 1 {4^2} } & \cdots \\

\paren {\dfrac 1 {3^2} }  & \paren {\dfrac 1 {3^2} } \paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {3^2} } \paren {\dfrac 1 {2^2} } & \paren {\dfrac 1 {3^4} } & \paren {\dfrac 1 {3^2} } \paren {\dfrac 1 {4^2} } & \cdots \\

\paren {\dfrac 1 {4^2} }  & \paren {\dfrac 1 {4^2} } \paren {\dfrac 1 {1^2} } & \paren {\dfrac 1 {4^2} } \paren {\dfrac 1 {2^2} } & \paren {\dfrac 1 {4^2} } \paren {\dfrac 1 {3^2} } & \paren {\dfrac 1 {4^4} } & \cdots \\

\vdots & \vdots & \vdots & \vdots & \vdots & \ddots \\
\end {array}$

The sum of all of the entries in this table is equal to $\paren {\map \zeta 2}^2$.

$\map \zeta 4$ is the sum of the entries along the main diagonal.

We have:














\(\ds \paren {\map \zeta 2}^2\)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^\infty {\frac 1 {i^2} } } \paren {\sum_{j \mathop = 1}^\infty {\frac 1 {j^2} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty \sum_{j \mathop = 1}^\infty {\frac 1 {i^2} } {\frac 1 {j^2} }\)





Product of Absolutely Convergent Series














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^{\infty} {\frac 1 {i^4} } + \sum_{i \mathop = 1}^\infty \sum_{j \mathop = {i + 1} }^\infty {\frac 1 {i^2} } {\frac 1 {j^2} } + \sum_{j \mathop = 1}^\infty \sum_{i \mathop = {j + 1} }^\infty {\frac 1 {i^2} } {\frac 1 {j^2} }\)





$\paren {i = j} + \paren {j > i} + \paren {j < i}$














\(\ds \)

\(=\)







\(\ds \map \zeta 4  + 2  \sum_{i \mathop = 1}^\infty \sum_{j \mathop = {i + 1} }^\infty {\frac 1 {i^2} } {\frac 1 {j^2} }\)










Let:














\(\ds P_k\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^k \paren {1 - \frac {x^2} {n^2 \pi^2} }\)




















\(\ds \)

\(=\)







\(\ds x \paren {1 - \dfrac {x^2} {1 \pi^2} } \paren {1 - \dfrac {x^2} {2^2 \pi^2} } \paren {1 - \dfrac {x^2} {3^2 \pi^2} } \cdots \paren {1 - \dfrac {x^2} {k^2 \pi^2} }\)









Therefore:














\(\ds P_1\)

\(=\)







\(\ds x - \frac {x^3} {\pi^2} \paren {\dfrac 1 {1^2} }\)




















\(\ds P_2\)

\(=\)







\(\ds x - \frac {x^3} {\pi^2} \paren {\dfrac 1 {1^2} +  \dfrac 1 {2^2} } + \frac {x^5} {\pi^4} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} }\)




















\(\ds P_3\)

\(=\)







\(\ds x - \frac {x^3} {\pi^2} \paren {\dfrac 1 {1^2} +  \dfrac 1 {2^2} + \dfrac 1 {3^2} } + \frac {x^5} {\pi^4} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} + \dfrac 1 {1^2} \dfrac 1 {3^2} + \dfrac 1 {2^2} \dfrac 1 {3^2} } - \frac {x^7} {\pi^6} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} \dfrac 1 {3^2} }\)




















\(\ds P_4\)

\(=\)







\(\ds x - \frac {x^3} {\pi^2} \paren {\dfrac 1 {1^2} +  \dfrac 1 {2^2} + \dfrac 1 {3^2} + \dfrac 1 {4^2} } + \frac {x^5} {\pi^4} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} + \dfrac 1 {1^2} \dfrac 1 {3^2} + \dfrac 1 {1^2} \dfrac 1 {4^2} + \dfrac 1 {2^2} \dfrac 1 {3^2} + \dfrac 1 {2^2} \dfrac 1 {4^2} + \dfrac 1 {3^2} \dfrac 1 {4^2} } - \frac {x^7} {\pi^6} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} \dfrac 1 {3^2} + \dfrac 1 {1^2} \dfrac 1 {2^2} \dfrac 1 {4^2} + \dfrac 1 {1^2} \dfrac 1 {3^2} \dfrac 1 {4^2} + \dfrac 1 {2^2} \dfrac 1 {3^2} \dfrac 1 {4^2} } + \frac {x^9} {\pi^8} \paren {\dfrac 1 {1^2} \dfrac 1 {2^2} \dfrac 1 {3^2} \dfrac 1 {4^2} }\)









We make the following observations:

$(1): \quad$ The number of terms added to calculate the coefficient of the $x^3$ term is $\dbinom k 1 = k$
$(2): \quad$ The number of terms added to calculate the coefficient of the $x^5$ term is $\dbinom k 2$
$(3): \quad$ For $k \ge 1$, the coefficient  of $x^3$ in $\ds P_k = - \dfrac 1 {\pi^2} \sum_{i \mathop = 1}^k \dfrac 1 {i^2}$
$(4): \quad$ For $k \ge 2$, the coefficient  of $x^5$ in $\ds P_k = \dfrac 1 {\pi^4} \sum_{i \mathop = 1}^{k - 1} \sum_{j \mathop = {i + 1} }^k \paren {\frac 1 {i^2} } \paren {\frac 1 {j^2} } $

Expanding the product out to k, we get:














\(\ds P_k\)

\(=\)







\(\ds x - \dfrac {x^3} {\pi^2} \sum_{i \mathop = 1}^k \dfrac 1 {i^2} + \frac {x^5} {\pi^4} \sum_{i \mathop = 1}^{k - 1} \sum_{j \mathop = {i + 1} }^k \paren {\frac 1 {i^2} } \paren {\frac 1 {j^2} } -  \cdots\)









Now recall the following two representations of the Sine of x:














\(\ds \sin x\)

\(=\)







\(\ds x \prod_{n \mathop = 1}^\infty \paren {1 - \dfrac {x^2} {n^2 \pi^2} }\)





Euler Formula for Sine Function
















\(\ds \sin x\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \dfrac {x^{2 n + 1} } {\paren {2 n + 1}!} = x - \dfrac {x^3} {3!} + \dfrac {x^5} {5!} - \dfrac {x^7} {7!} + \cdots\)





Power Series Expansion for Sine Function



Notice that by taking the limit of $P_k$ as $k \to \infty$, we obtain precisely the Euler Formula for Sine Function.
Equating the coefficient of $x^5$ in the Euler Formula for Sine Function with the Power Series Expansion for Sine Function, we have:

$\ds \lim_{k \mathop \to \infty}  \dfrac 1 {\pi^4} \sum_{i \mathop = 1}^{k - 1} \sum_{j \mathop = {i + 1} }^k \paren {\frac 1 {i^2} } \paren {\frac 1 {j^2} } = \frac 1 {5!}$
Therefore:

$\ds \sum_{i \mathop = 1}^\infty \sum_{j \mathop = {i + 1} }^\infty \paren {\frac 1 {i^2} } \paren {\frac 1 {j^2} } = \frac {\pi^4} {5!}$

Therefore:














\(\ds \paren {\map \zeta 2}^2\)

\(=\)







\(\ds \map \zeta 4  + 2  \sum_{i \mathop = 1}^\infty \sum_{j \mathop = {i + 1} }^\infty {\frac 1 {i^2} } {\frac 1 {j^2} }\)




















\(\ds \paren {\map \zeta 2}^2\)

\(=\)







\(\ds \map \zeta 4 + 2  \dfrac {\pi^4} {5!}\)




















\(\ds \map \zeta 4\)

\(=\)







\(\ds \paren {\map \zeta 2}^2  - 2  \dfrac {\pi^4} {5!}\)





Rearranging














\(\ds \)

\(=\)







\(\ds \paren{\dfrac {\pi^2} 6 }^2 - \dfrac {\pi^4} {60}\)





Basel Problem














\(\ds \)

\(=\)







\(\ds \dfrac {\pi^4} {36} - \dfrac {\pi^4} {60}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {5\pi^4} {180} - \dfrac {3\pi^4} {180}\)




















\(\ds \)

\(=\)







\(\ds \frac {2\pi^4} {180}\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^4} {90}\)









$\blacksquare$

The decimal expansion can be found by an application of arithmetic.


Historical Note
The Riemann Zeta Function of 4 was solved by Leonhard Euler, using the same technique as for the Basel Problem.


If only my brother were alive now.
-- Johann Bernoulli


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 19$: Series involving Reciprocals of Powers of Positive Integers: $19.20$
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $1,08232 3237 \ldots$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $1 \cdotp 082 \, 323 \ldots$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): zeta function
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.21$: Euler ($\text {1707}$ – $\text {1783}$)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.7$: Harmonic Numbers: $(7)$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $1 \cdotp 08232 \, 3 \ldots$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Riemann zeta function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Riemann zeta function
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): zeta function




