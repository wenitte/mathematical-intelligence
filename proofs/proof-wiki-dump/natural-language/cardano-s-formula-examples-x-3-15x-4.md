# 

Source: https://proofwiki.org/wiki/Cardano%27s_Formula/Examples/x%5E3_-_15x_-_4


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Example of Use of Cardano's Formula
$\ds x^3 - 15x - 4  = 0$
has solutions $x = 4$, $x = -2 + \sqrt 3$ and $x = -2 - \sqrt 3$.


Proof













\(\ds x^3 - 15x - 4\)

\(=\)







\(\ds 0\)









This is in the form:

$a x^3 + b x^2 + c x + d = 0$
where:

$a = 1$
$b = 0$
$c = -15$
$d = -4$

From Cardano's Formula:

$x = S + T$
where:

$S = \sqrt [3] {R + \sqrt {Q^3 + R^2} }$
$T = \sqrt [3] {R - \sqrt {Q^3 + R^2} }$
where:














\(\ds Q\)

\(=\)







\(\ds \dfrac {3 a c - b^2} {9 a^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3 \times 1 \times \paren {-15} - 0^2} {9 \times 1^2}\)




















\(\ds \)

\(=\)







\(\ds -5\)









and:














\(\ds R\)

\(=\)







\(\ds \dfrac {9 a b c - 27 a^2 d - 2 b^3} {54 a^3}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {9 \times 1 \times 0 \times \paren {-15} - 27 \times 1^2 \times \paren {-4} - 2 \times 0^3} {54 \times 1^3}\)




















\(\ds \)

\(=\)







\(\ds 2\)









Thus:














\(\ds x\)

\(=\)







\(\ds S + T\)





putting $x = S + T$














\(\ds \)

\(=\)







\(\ds \sqrt [3] {R + \sqrt {Q^3 + R^2} } + \sqrt[3] {R - \sqrt {Q^3 + R^2} }\)





substituting for $S$ and $T$














\(\ds \)

\(=\)







\(\ds \sqrt [3] {R + \sqrt {\paren {-5}^3 + R^2} } + \sqrt [3] {R - \sqrt {\paren {-5}^3 + R^2} }\)





substituting for $Q$














\(\ds \)

\(=\)







\(\ds \sqrt [3] {2 + \sqrt {\paren { {-5}^3 + 2^2 } } } + \sqrt [3] {2 - \sqrt {\paren { {-5}^3 + 2^2 } } }\)





substituting for $R$














\(\ds \)

\(=\)







\(\ds \sqrt [3] {2 + \sqrt {-121 } } + \sqrt [3] {2 - \sqrt {-121 } }\)




















\(\ds \)

\(=\)







\(\ds \sqrt [3] {\paren {2 + 11 i } } + \sqrt [3] {\paren {2 - 11 i } }\)










Using Cardano's Formula for Real Coefficients, we know from

$D = Q^3 + R^2 = -121 < 0$
that all roots are real and unequal.

From Roots of Complex Number/Examples/Cube Roots of 2+11i, we have:

$\sqrt [3] {\paren {2 + 11 i } } = \set {2 + i, -1 + \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 - \sqrt 3 }, -1 - \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 + \sqrt 3}}$
From Roots of Complex Number/Examples/Cube Roots of 2-11i, we have:

$\sqrt [3] {\paren {2 - 11 i } } = \set {2 - i, -1 + \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 + \sqrt 3 }, -1 - \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 - \sqrt 3}}$

We need to investigate $9$ sums and find solutions where the complex part vanishes.




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{2 + i } + \paren{2 - i }\)





Yes. $\paren {1 - 1}i = 0$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{2 + i } + \paren{-1 + \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 + \sqrt 3 } }\)





No. $\paren {1 + \dfrac 1 2 + \sqrt 3 }i > 0$




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{2 + i } + \paren{-1 - \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 - \sqrt 3 } }\)





No. $\paren {1 + \dfrac 1 2 - \sqrt 3 }i < 0$




\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{-1 + \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 - \sqrt 3 } } + \paren{2 - i }\)





No. $\paren {-\dfrac 1 2 - \sqrt 3 - 1 }i < 0$




\(\text {(5)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{-1 + \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 - \sqrt 3 } } + \paren{-1 + \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 + \sqrt 3 } }\)





Yes. $\paren {-\dfrac 1 2 - \sqrt 3 +\dfrac 1 2 + \sqrt 3 }i = 0$




\(\text {(6)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{-1 + \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 - \sqrt 3 } } + \paren{-1 - \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 - \sqrt 3 } }\)





No. $\paren {-\dfrac 1 2 - \sqrt 3 +\dfrac 1 2 - \sqrt 3 }i < 0$




\(\text {(7)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{-1 - \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 + \sqrt 3} } + \paren{2 - i }\)





No. $\paren {-\dfrac 1 2 + \sqrt 3 - 1}i > 0$




\(\text {(8)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{-1 - \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 + \sqrt 3} } + \paren{-1 + \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 + \sqrt 3 } }\)





No. $\paren {-\dfrac 1 2 + \sqrt 3 +\dfrac 1 2 + \sqrt 3 }i > 0$




\(\text {(9)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren{-1 - \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 + \sqrt 3} } + \paren{-1 - \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 - \sqrt 3 } }\)





Yes. $\paren {-\dfrac 1 2 + \sqrt 3 +\dfrac 1 2 - \sqrt 3 }i = 0$



Our $3$ solutions are:














\(\ds \paren{2 + i } + \paren{2 - i }\)

\(=\)







\(\ds 4\)




















\(\ds \paren{-1 + \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 - \sqrt 3 } } + \paren{-1 + \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 + \sqrt 3 } }\)

\(=\)







\(\ds -2 + \sqrt 3\)




















\(\ds \paren{-1 - \dfrac {\sqrt 3} 2 + i \paren {-\dfrac 1 2 + \sqrt 3} } + \paren{-1 - \dfrac {\sqrt 3} 2 + i \paren {\dfrac 1 2 - \sqrt 3 } }\)

\(=\)







\(\ds -2 - \sqrt 3\)










Hence:














\(\ds x^3 - 15 x - 4\)

\(=\)







\(\ds \paren {x - 4} \paren {x - \paren {-2 - \sqrt 3} } \paren {x - \paren {-2 + \sqrt 3} }\)




















\(\ds \)

\(=\)







\(\ds \paren {x - 4} \paren {x^2 + 4x + 1}\)









The result follows.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: all at sea -- please review how the linking technique worksIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1990: William Dunham: Journey Through Genius ... (previous) ... (next): Chapter $6$: Cardano and the Solution of the Cubic




