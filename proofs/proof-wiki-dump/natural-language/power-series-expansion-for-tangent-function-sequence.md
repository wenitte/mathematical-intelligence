# 

Source: https://proofwiki.org/wiki/Power_Series_Expansion_for_Tangent_Function/Sequence

Theorem
The Power Series Expansion for Tangent Function begins:

$\tan x = x + \dfrac 1 3 x^3 + \dfrac 2 {15} x^5 + \dfrac {17} {315} x^7 + \dfrac {62} {2835} x^9 + \cdots$
The numerators form sequence A002430 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The denominators form sequence A036279 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
From Power Series Expansion for Tangent Function:














\(\ds \tan x\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n - 1} 2^{2 n} \paren {2^{2 n} - 1} B_{2 n} } {\paren {2 n}!} x^{2 n - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac {2^2 \paren {2^2 - 1} B_2} {2!} x - \frac {2^4 \paren {2^4 - 1} B_4} {4!} x^3 + \frac {2^6 \paren {2^6 - 1} B_6} {6!} x^5 - \frac {2^8 \paren {2^8 - 1} B_8} {8!} x^7 + \frac {2^{10} \paren {2^{10} - 1} B_{10} } {10!} x^9 - \cdots\)










Enumerating the Bernoulli numbers:














\(\ds B_2\)

\(=\)







\(\ds \dfrac 1 6\)




















\(\ds B_4\)

\(=\)







\(\ds -\dfrac 1 {30}\)




















\(\ds B_6\)

\(=\)







\(\ds \dfrac 1 {42}\)




















\(\ds B_8\)

\(=\)







\(\ds -\dfrac 1 {30}\)




















\(\ds B_{10}\)

\(=\)







\(\ds \dfrac 5 {66}\)










Thus the appropriate arithmetic is performed on each coefficient:















\(\ds \frac {2^2 \paren {2^2 - 1} B_2} {2!}\)

\(=\)







\(\ds \frac {4 \times 3} {2} \times \dfrac 1 6\)




















\(\ds \)

\(=\)







\(\ds 1\)
























\(\ds -\frac {2^4 \paren {2^4 - 1} B_4} {4!}\)

\(=\)







\(\ds -\dfrac {16 \times 15} {24} \times \dfrac {-1} {30}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2^4} \times \paren {3 \times 5} } {\paren {2^3 \times 3} \times \paren {2 \times 3 \times 5} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 3\)
























\(\ds \frac {2^6 \paren {2^6 - 1} B_6} {6!}\)

\(=\)







\(\ds \dfrac {64 \times 63} {720} \times \dfrac 1 {42}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2^6} \times \paren {3^2 \times 7} } {\paren {2^4 \times 3^2 \times 5} \times \paren {2 \times 3 \times 7} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 2 {15}\)
























\(\ds -\frac {2^8 \paren {2^8 - 1} B_8} {8!}\)

\(=\)







\(\ds -\dfrac {256 \times 255} {40 \, 320} \times \dfrac {-1} {30}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2^8} \times \paren {3 \times 5 \times 17} } {\paren {2^7 \times 3^2 \times 5 \times 7} \times \paren {2 \times 3 \times 5} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {17} {3^2 \times 5 \times 7}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {17} {315}\)
























\(\ds \frac {2^{10} \paren {2^{10} - 1} B_{10} } {10!}\)

\(=\)







\(\ds \dfrac {1024 \times 1023} {3 \, 628 \, 800} \times \dfrac 5 {66}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2^{10} } \times \paren {3 \times 11 \times 31} \times 5} {\paren {2^8 \times 3^4 \times 5^2 \times 7} \times \paren {2 \times 3 \times 11} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2 \times 31} {\paren {3^4 \times 5 \times 7} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {62} {2835}\)









Hence the result.
$\blacksquare$


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $8$. Taylor Series and Power Series: Appendix: Table $8.2$: Power Series of Important Functions
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.20$: The Bernoulli Numbers and some Wonderful Discoveries of Euler
Beware: there is a mistake in the $5$th term as reported here.




