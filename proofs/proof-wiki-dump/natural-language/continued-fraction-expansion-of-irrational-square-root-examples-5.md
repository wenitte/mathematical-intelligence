# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/5



Examples of Continued Fraction Expansion of Irrational Square Root
The continued fraction expansion of the square root of $5$ is given by:

$\sqrt 5 = \sqbrk {2, \sequence 4}$
This sequence is A040002 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Convergents
The sequence of convergents to the continued fraction expansion of the square root of $5$ begins:

$\dfrac 2 1, \dfrac 9 4, \dfrac {38} {17}, \dfrac {161} {72}, \dfrac {682} {305}, \dfrac {2889} {1292}, \dfrac {12238} {5473}, \dfrac {51841} {23184}, \ldots$


Proof
Let $\sqrt 5 = \sqbrk {a_0, a_1, a_2, a_3, \ldots}$
From Partial Denominators of Continued Fraction Expansion of Irrational Square Root, the partial denominators of this continued fraction expansion can be calculated as:

$a_r = \floor {\dfrac {\floor {\sqrt 5} + P_r} {Q_r} }$
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

$a_r = \floor {\dfrac {\floor {\sqrt { 5 } } + P_r} {Q_r} }$


$0$

$0$

$1$

$\floor {\dfrac {\floor {\sqrt { 5 } } + 0} 1} = 2$


$1$

$2 \times 1 - 0 = 2$

$\dfrac { 5 - 2^2} { 1 } = 1$

$\floor {\dfrac {\floor {\sqrt { 5 } }\ + 2 } { 1 } } = 4$


$2$

$4 \times 1 - 2 = 2$

$\dfrac { 5 - 2^2} { 1 } = 1$

$\floor {\dfrac {\floor {\sqrt { 5 } }\ + 2 } { 1 } } = 4$


$3$

$4 \times 1 - 2 = 2$

$\dfrac { 5 - 2^2} { 1 } = 1$

$\floor {\dfrac {\floor {\sqrt { 5 } }\ + 2 } { 1 } } = 4$


and the pattern is established:

$\sequence 4$
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): continued fraction
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): continued fraction




