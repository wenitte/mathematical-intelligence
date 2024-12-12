# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/13/Convergents

Convergents to Continued Fraction Expansion of $\sqrt {13}$
The sequence of convergents to the continued fraction expansion of the square root of $13$ begins:

$\dfrac 3 1, \dfrac 4 1, \dfrac 7 2, \dfrac {11} 3, \dfrac {18} 5, \dfrac {119} {33}, \dfrac {137} {38}, \dfrac {256} {71}, \dfrac {393} {109}, \dfrac {649} {180}, \ldots$
The numerators form sequence A041018 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The denominators form sequence A041019 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


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

From Continued Fraction Expansion of $\sqrt {13}$:

$\sqrt {13} = \sqbrk {3, \sequence {1, 1, 1, 1, 6} }$

Thus the convergents are assembled:





$k$

$a_k$

$p_k = a_k p_{k - 1} + p_{k - 2}$

$q_k = a_k q_{k - 1} + q_{k - 2}$

$\dfrac {p_k} {q_k}$

Decimal value


$0$

$3$

$3$

$1$

$\dfrac { 3 } 1$

$3$


$1$

$1$

$3 \times 1 + 1 = 4$

$1$

$\dfrac { 4 } { 1 }$

$4$


$2$

$1$

$1 \times 4 + 3 = 7$

$1 \times 1 + 1 = 2$

$\dfrac { 7 } { 2 }$

$3.5$


$3$

$1$

$1 \times 7 + 4 = 11$

$1 \times 2 + 1 = 3$

$\dfrac { 11 } { 3 }$

$3.6666666667$


$4$

$1$

$1 \times 11 + 7 = 18$

$1 \times 3 + 2 = 5$

$\dfrac { 18 } { 5 }$

$3.6$


$5$

$6$

$6 \times 18 + 11 = 119$

$6 \times 5 + 3 = 33$

$\dfrac { 119 } { 33 }$

$3.6060606061$


$6$

$1$

$1 \times 119 + 18 = 137$

$1 \times 33 + 5 = 38$

$\dfrac { 137 } { 38 }$

$3.6052631579$


$7$

$1$

$1 \times 137 + 119 = 256$

$1 \times 38 + 33 = 71$

$\dfrac { 256 } { 71 }$

$3.6056338028$


$8$

$1$

$1 \times 256 + 137 = 393$

$1 \times 71 + 38 = 109$

$\dfrac { 393 } { 109 }$

$3.6055045872$


$9$

$1$

$1 \times 393 + 256 = 649$

$1 \times 109 + 71 = 180$

$\dfrac { 649 } { 180 }$

$3.6055555556$

$\blacksquare$





