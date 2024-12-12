# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/29

Examples of Continued Fraction Expansion of Irrational Square Root
The continued fraction expansion of the square root of $29$ is given by:

$\sqrt {29} = \sqbrk {5, \sequence {2, 1, 1, 2, 10} }$
This sequence is A010128 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Convergents
The sequence of convergents to the continued fraction expansion of the square root of $29$ begins:

$\dfrac 5 1, \dfrac {11} 2, \dfrac {16} 3, \dfrac {27} 5, \dfrac {70} {13}, \dfrac {727} {135}, \dfrac {1524} {283}, \dfrac {2251} {418}, \dfrac {3775} {701}, \dfrac {9801} {1820}, \ldots$


Proof
Let $\sqrt {29} = \sqbrk {a_0, a_1, a_2, a_3, \ldots}$
From Partial Denominators of Continued Fraction Expansion of Irrational Square Root, the partial denominators of this continued fraction expansion can be calculated as:

$a_r = \floor {\dfrac {\floor {\sqrt {29} } + P_r} {Q_r} }$
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

$a_r = \floor {\dfrac {\floor {\sqrt { 29 } } + P_r} {Q_r} }$


$0$

$0$

$1$

$\floor {\dfrac {\floor {\sqrt { 29 } } + 0} 1} = 5$


$1$

$5 \times 1 - 0 = 5$

$\dfrac { 29 - 5^2} { 1 } = 4$

$\floor {\dfrac {\floor {\sqrt { 29 } }\ + 5 } { 4 } } = 2$


$2$

$2 \times 4 - 5 = 3$

$\dfrac { 29 - 3^2} { 4 } = 5$

$\floor {\dfrac {\floor {\sqrt { 29 } }\ + 3 } { 5 } } = 1$


$3$

$1 \times 5 - 3 = 2$

$\dfrac { 29 - 2^2} { 5 } = 5$

$\floor {\dfrac {\floor {\sqrt { 29 } }\ + 2 } { 5 } } = 1$


$4$

$1 \times 5 - 2 = 3$

$\dfrac { 29 - 3^2} { 5 } = 4$

$\floor {\dfrac {\floor {\sqrt { 29 } }\ + 3 } { 4 } } = 2$


$5$

$2 \times 4 - 3 = 5$

$\dfrac { 29 - 5^2} { 4 } = 1$

$\floor {\dfrac {\floor {\sqrt { 29 } }\ + 5 } { 1 } } = 10$


and the cycle is complete:

$\sequence {2, 1, 1, 2, 10}$
$\blacksquare$





