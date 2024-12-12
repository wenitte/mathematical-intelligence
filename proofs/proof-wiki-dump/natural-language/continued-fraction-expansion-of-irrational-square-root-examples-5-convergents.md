# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/5/Convergents

Convergents to Continued Fraction Expansion of $\sqrt 5$
The sequence of convergents to the continued fraction expansion of the square root of $5$ begins:

$\dfrac 2 1, \dfrac 9 4, \dfrac {38} {17}, \dfrac {161} {72}, \dfrac {682} {305}, \dfrac {2889} {1292}, \dfrac {12238} {5473}, \dfrac {51841} {23184}, \ldots$
The numerators form sequence A001077 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The denominators form sequence A001076 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Let $\sqbrk {a_0, a_1, a_2, \ldots}$ be its continued fraction expansion.
Let $\sequence {p_n}_{n \mathop \ge 0}$ and $\sequence {q_n}_{n \mathop \ge 0}$ be its numerators and denominators.
Then the $n$th convergent is $\dfrac {p_n} {q_n}$.
By definition:

$p_k = \begin {cases} a_0 & : k = 0 \\
a_0 a_1 + 1 & : k = 1 \\
a_k p_{k - 1} + p_{k - 2} & : k > 1 \end {cases}$
$q_k = \begin {cases} 1 & : k = 0 \\
a_1 & : k = 1 \\
a_k q_{k - 1} + q_{k - 2} & : k > 1 \end {cases}$

From Continued Fraction Expansion of $\sqrt 5$:

$\sqrt 5 = \sqbrk {2, \sequence 4}$

Thus the convergents are assembled:





$k$

$a_k$

$p_k = a_k p_{k - 1} + p_{k - 2}$

$q_k = a_k q_{k - 1} + q_{k - 2}$

$\dfrac {p_k} {q_k}$

Decimal value


$0$

$2$

$2$

$1$

$\dfrac { 2 } 1$

$2$


$1$

$4$

$2 \times 4 + 1 = 9$

$4$

$\dfrac { 9 } { 4 }$

$2.25$


$2$

$4$

$4 \times 9 + 2 = 38$

$4 \times 4 + 1 = 17$

$\dfrac { 38 } { 17 }$

$2.2352941176$


$3$

$4$

$4 \times 38 + 9 = 161$

$4 \times 17 + 4 = 72$

$\dfrac { 161 } { 72 }$

$2.2361111111$


$4$

$4$

$4 \times 161 + 38 = 682$

$4 \times 72 + 17 = 305$

$\dfrac { 682 } { 305 }$

$2.2360655738$


$5$

$4$

$4 \times 682 + 161 = 2889$

$4 \times 305 + 72 = 1292$

$\dfrac { 2889 } { 1292 }$

$2.2360681115$


$6$

$4$

$4 \times 2889 + 682 = 12238$

$4 \times 1292 + 305 = 5473$

$\dfrac { 12238 } { 5473 }$

$2.23606797$


$7$

$4$

$4 \times 12238 + 2889 = 51841$

$4 \times 5473 + 1292 = 23184$

$\dfrac { 51841 } { 23184 }$

$2.2360679779$

$\blacksquare$


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): continued fraction




