# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/61

Examples of Continued Fraction Expansion of Irrational Square Root
The continued fraction expansion of the square root of $61$ is given by:

$\sqrt {61} = \sqbrk {7, \sequence {1, 4, 3, 1, 2, 2, 1, 3, 4, 1, 14} }$
This sequence is A010145 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Convergents
The sequence of convergents to the continued fraction expansion of the square root of $61$ begins:

$\dfrac 7 1, \dfrac {8} 1, \dfrac {39} 5, \dfrac {125} {16}, \dfrac {164} {21}, \dfrac {453} {58}, \dfrac {1070} {137}, \dfrac {1523} {195}, \dfrac {5639} {722}, \dfrac {24079} {3083}, \ldots$


Proof
Let $\sqrt {61} = \sqbrk {a_0, a_1, a_2, a_3, \ldots}$
From Partial Denominators of Continued Fraction Expansion of Irrational Square Root, the partial denominators of this continued fraction can be calculated as:

$a_r = \floor {\dfrac {\floor {\sqrt {61} } + P_r} {Q_r} }$
where:

$P_r = \begin {cases} 0 & : r = 0 \\
a_{r - 1} Q_{r - 1} - P_{r - 1} & : r > 0 \\
\end {cases}$


$Q_r = \begin {cases} 1 & : r = 0 \\
\dfrac {n - {P_r}^2} {Q_{r - 1} } & : r > 0 \\
\end {cases}$





$r$

$P_r = a_{r - 1} Q_{r - 1} - P_{r - 1}$

$Q_r = \dfrac {n - {P_r}^2} {Q_{r - 1} }$

$a_r = \floor {\dfrac {\floor {\sqrt { 61 } } + P_r} {Q_r} }$


$0$

$0$

$1$

$\floor {\dfrac {\floor {\sqrt { 61 } } + 0} 1} = 7$


$1$

$7 \times 1 - 0 = 7$

$\dfrac { 61 - 7^2} { 1 } = 12$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 7 } { 12 } } = 1$


$2$

$1 \times 12 - 7 = 5$

$\dfrac { 61 - 5^2} { 12 } = 3$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 5 } { 3 } } = 4$


$3$

$4 \times 3 - 5 = 7$

$\dfrac { 61 - 7^2} { 3 } = 4$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 7 } { 4 } } = 3$


$4$

$3 \times 4 - 7 = 5$

$\dfrac { 61 - 5^2} { 4 } = 9$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 5 } { 9 } } = 1$


$5$

$1 \times 9 - 5 = 4$

$\dfrac { 61 - 4^2} { 9 } = 5$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 4 } { 5 } } = 2$


$6$

$2 \times 5 - 4 = 6$

$\dfrac { 61 - 6^2} { 5 } = 5$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 6 } { 5 } } = 2$


$7$

$2 \times 5 - 6 = 4$

$\dfrac { 61 - 4^2} { 5 } = 9$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 4 } { 9 } } = 1$


$8$

$1 \times 9 - 4 = 5$

$\dfrac { 61 - 5^2} { 9 } = 4$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 5 } { 4 } } = 3$


$9$

$3 \times 4 - 5 = 7$

$\dfrac { 61 - 7^2} { 4 } = 3$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 7 } { 3 } } = 4$


$10$

$4 \times 3 - 7 = 5$

$\dfrac { 61 - 5^2} { 3 } = 12$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 5 } { 12 } } = 1$


$11$

$1 \times 12 - 5 = 7$

$\dfrac { 61 - 7^2} { 12 } = 1$

$\floor {\dfrac {\floor {\sqrt { 61 } }\ + 7 } { 1 } } = 14$


and the cycle is complete:

$\sequence {1, 4, 3, 1, 2, 2, 1, 3, 4, 1, 14}$
$\blacksquare$





