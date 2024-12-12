# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/13

Example of Continued Fraction Expansion of Irrational Square Root
The continued fraction expansion of the square root of $13$ is given by:

$\sqrt {13} = \sqbrk {3, \sequence {1, 1, 1, 1, 6} }$
This sequence is A010122 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Convergents
The sequence of convergents to the continued fraction expansion of the square root of $13$ begins:

$\dfrac 3 1, \dfrac 4 1, \dfrac 7 2, \dfrac {11} 3, \dfrac {18} 5, \dfrac {119} {33}, \dfrac {137} {38}, \dfrac {256} {71}, \dfrac {393} {109}, \dfrac {649} {180}, \ldots$


Proof
Let $\sqrt {13} = \sqbrk {a_0, a_1, a_2, a_3, \ldots}$
From Partial Denominators of Continued Fraction Expansion of Irrational Square Root, the partial denominators of this continued fraction expansion can be calculated as:

$a_r = \floor {\dfrac {\floor {\sqrt {13} } + P_r} {Q_r} }$
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

$a_r = \floor {\dfrac {\floor {\sqrt { 13 } } + P_r} {Q_r} }$


$0$

$0$

$1$

$\floor {\dfrac {\floor {\sqrt { 13 } } + 0} 1} = 3$


$1$

$3 \times 1 - 0 = 3$

$\dfrac { 13 - 3^2} { 1 } = 4$

$\floor {\dfrac {\floor {\sqrt { 13 } }\ + 3 } { 4 } } = 1$


$2$

$1 \times 4 - 3 = 1$

$\dfrac { 13 - 1^2} { 4 } = 3$

$\floor {\dfrac {\floor {\sqrt { 13 } }\ + 1 } { 3 } } = 1$


$3$

$1 \times 3 - 1 = 2$

$\dfrac { 13 - 2^2} { 3 } = 3$

$\floor {\dfrac {\floor {\sqrt { 13 } }\ + 2 } { 3 } } = 1$


$4$

$1 \times 3 - 2 = 1$

$\dfrac { 13 - 1^2} { 3 } = 4$

$\floor {\dfrac {\floor {\sqrt { 13 } }\ + 1 } { 4 } } = 1$


$5$

$1 \times 4 - 1 = 3$

$\dfrac { 13 - 3^2} { 4 } = 1$

$\floor {\dfrac {\floor {\sqrt { 13 } }\ + 3 } { 1 } } = 6$


and the cycle is complete:

$\sequence {1, 1, 1, 1, 6}$
$\blacksquare$





