# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/29/Convergents

Convergents to Continued Fraction Expansion of $\sqrt {29}$
The sequence of convergents to the continued fraction expansion of the square root of $29$ begins:

$\dfrac 5 1, \dfrac {11} 2, \dfrac {16} 3, \dfrac {27} 5, \dfrac {70} {13}, \dfrac {727} {135}, \dfrac {1524} {283}, \dfrac {2251} {418}, \dfrac {3775} {701}, \dfrac {9801} {1820}, \ldots$
The numerators form sequence A041046 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The denominators form sequence A041047 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Let $\sqbrk {a_0, a_1, a_2, \ldots}$ be its continued fraction expansion.
Let $\sequence {p_n}_{n \mathop \ge 0}$ and $\sequence {q_n}_{n \mathop \ge 0}$ be its numerators and denominators.
Then the $n$th convergent is $p_n / q_n$.
By definition:

$p_k = \begin {cases} a_0 & : k = 0 \\
a_0 a_1 + 1 & : k = 1 \\
a_k p_{k - 1} + p_{k - 2} & : k > 1\end {cases}$

$q_k = \begin {cases} 1 & : k = 0 \\
a_1 & : k = 1 \\
a_k q_{k - 1} + q_{k - 2} & : k > 1\end {cases}$

From Continued Fraction Expansion of $\sqrt {29}$:

$\sqrt {29} = \sqbrk {5, \sequence {2, 1, 1, 2, 10} }$

Thus the convergents are assembled:





$k$

$a_k$

$p_k = a_k p_{k - 1} + p_{k - 2}$

$q_k = a_k q_{k - 1} + q_{k - 2}$

$\dfrac {p_k} {q_k}$

Decimal value


$0$

$5$

$5$

$1$

$\dfrac { 5 } 1$

$5$


$1$

$2$

$5 \times 2 + 1 = 11$

$2$

$\dfrac { 11 } { 2 }$

$5.5$


$2$

$1$

$1 \times 11 + 5 = 16$

$1 \times 2 + 1 = 3$

$\dfrac { 16 } { 3 }$

$5.3333333333$


$3$

$1$

$1 \times 16 + 11 = 27$

$1 \times 3 + 2 = 5$

$\dfrac { 27 } { 5 }$

$5.4$


$4$

$2$

$2 \times 27 + 16 = 70$

$2 \times 5 + 3 = 13$

$\dfrac { 70 } { 13 }$

$5.3846153846$


$5$

$10$

$10 \times 70 + 27 = 727$

$10 \times 13 + 5 = 135$

$\dfrac { 727 } { 135 }$

$5.3851851852$


$6$

$2$

$2 \times 727 + 70 = 1524$

$2 \times 135 + 13 = 283$

$\dfrac { 1524 } { 283 }$

$5.3851590106$


$7$

$1$

$1 \times 1524 + 727 = 2251$

$1 \times 283 + 135 = 418$

$\dfrac { 2251 } { 418 }$

$5.3851674641$


$8$

$1$

$1 \times 2251 + 1524 = 3775$

$1 \times 418 + 283 = 701$

$\dfrac { 3775 } { 701 }$

$5.3851640514$


$9$

$2$

$2 \times 3775 + 2251 = 9801$

$2 \times 701 + 418 = 1820$

$\dfrac { 9801 } { 1820 }$

$5.3851648352$

$\blacksquare$





