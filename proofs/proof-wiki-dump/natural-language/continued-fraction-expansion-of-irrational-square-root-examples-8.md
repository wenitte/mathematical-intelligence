# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/8

Example of Continued Fraction Expansion of Irrational Square Root
The continued fraction expansion of the square root of $8$ is given by:

$\sqrt 8 = \sqbrk {2, \sequence {1, 4} }$
This sequence is A040005 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Convergents
The sequence of convergents to the continued fraction expansion of the square root of $8$ begins:

$\dfrac 2 1, \dfrac 3 1, \dfrac {14} 5, \dfrac {17} 6, \dfrac {82} {29}, \dfrac {99} {35}, \dfrac {478} {169}, \dfrac {577} {204}, \dfrac {2786} {985}, \dfrac {3363} {1189}, \ldots$


Proof
Let $\sqrt 8 = \sqbrk {a_0, a_1, a_2, a_3, \ldots}$
From Partial Denominators of Continued Fraction Expansion of Irrational Square Root, the partial denominators of this continued fraction expansion can be calculated as:

$a_r = \floor {\dfrac {\floor {\sqrt 8} + P_r} {Q_r} }$
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

$a_r = \floor {\dfrac {\floor {\sqrt { 8 } } + P_r} {Q_r} }$


$0$

$0$

$1$

$\floor {\dfrac {\floor {\sqrt { 8 } } + 0} 1} = 2$


$1$

$2 \times 1 - 0 = 2$

$\dfrac { 8 - 2^2} { 1 } = 4$

$\floor {\dfrac {\floor {\sqrt { 8 } }\ + 2 } { 4 } } = 1$


$2$

$1 \times 4 - 2 = 2$

$\dfrac { 8 - 2^2} { 4 } = 1$

$\floor {\dfrac {\floor {\sqrt { 8 } }\ + 2 } { 1 } } = 4$


$3$

$4 \times 1 - 2 = 2$

$\dfrac { 8 - 2^2} { 1 } = 4$

$\floor {\dfrac {\floor {\sqrt { 8 } }\ + 2 } { 4 } } = 1$


and the cycle is complete:

$\sequence {1, 4}$
$\blacksquare$





