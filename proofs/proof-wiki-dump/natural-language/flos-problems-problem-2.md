# 

Source: https://proofwiki.org/wiki/Flos/Problems/Problem_2



Problem from Flos by Leonardo Fibonacci
Solve the cubic:
$x^3 + 2 x^2 + 10 x = 20$


Solution
$1 \cdotp 3688081075 \dots$


Proof
Express the equation as:

$x^3 + 2 x^2 + 10 x - 20 = 0$
We apply Cardano's Formula, with $a = 1$, $b = 2$, $c = 10$ and $d = -20$.
Thus:














\(\ds Q\)

\(=\)







\(\ds \dfrac {3 a c - b^2} {9 a^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 \times 1 \times 10 - 2^2} {9 \times 1^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {26} 9\)




















\(\ds R\)

\(=\)







\(\ds \dfrac {9 a b c - 27 a^2 d - 2 b^3} {54 a^3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {9 \times 1 \times 2 \times 10 - 27 \times 1^2 \times \paren {-20} - 2 \times 2^3} {54 \times 1^3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {180 + 540 - 16} {54}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {352} {27}\)










Then:














\(\ds S\)

\(=\)







\(\ds \sqrt [3] {R + \sqrt {Q^3 + R^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt [3] {\frac {352} {27} + \sqrt {\paren {\frac {26} 9}^3 + \paren {\frac {352} {27} }^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt [3] {\frac {352} {27} + \sqrt {\frac {17576} {729} + \frac {123904} {729} } }\)




















\(\ds \)

\(=\)







\(\ds \sqrt [3] {\frac {352 + 376.138} {27} }\)




















\(\ds \)

\(=\)







\(\ds 2.9988 \ldots\)






















\(\ds T\)

\(=\)







\(\ds \sqrt [3] {R - \sqrt {Q^3 + R^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt [3] {\frac {352} {27} - \sqrt {\paren {\frac {26} 9}^3 + \paren {\frac {352} {27} }^2} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt [3] {\frac {352} {27} - \sqrt {\frac {17576} {729} + \frac {123904} {729} } }\)




















\(\ds \)

\(=\)







\(\ds \sqrt [3] {\frac {352 - 376.138} {27} }\)




















\(\ds \)

\(=\)







\(\ds -0.9633 \ldots\)






















\(\ds x_1\)

\(=\)







\(\ds S + T - \dfrac b {3 a}\)




















\(\ds \)

\(=\)







\(\ds 2.9988 \ldots - 0.9633 \ldots - \dfrac 2 3\)




















\(\ds \)

\(=\)







\(\ds 1.3688 \ldots\)









The other two roots are complex.
$\blacksquare$


Sources
1225: Leonardo Fibonacci: Flos
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): Liber Abaci




