# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/8/Convergents

Convergents to Continued Fraction Expansion of $\sqrt 8$
The sequence of convergents to the continued fraction expansion of the square root of $8$ begins:

$\dfrac 2 1, \dfrac 3 1, \dfrac {14} 5, \dfrac {17} 6, \dfrac {82} {29}, \dfrac {99} {35}, \dfrac {478} {169}, \dfrac {577} {204}, \dfrac {2786} {985}, \dfrac {3363} {1189}, \ldots$
The numerators form sequence A041010 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The denominators form sequence A041011 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


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

From Continued Fraction Expansion of $\sqrt 8$:

$\sqrt 8 = \sqbrk {2, \sequence {1, 4} }$

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

$1$

$2 \times 1 + 1 = 3$

$1$

$\dfrac { 3 } { 1 }$

$3$


$2$

$4$

$4 \times 3 + 2 = 14$

$4 \times 1 + 1 = 5$

$\dfrac { 14 } { 5 }$

$2.8$


$3$

$1$

$1 \times 14 + 3 = 17$

$1 \times 5 + 1 = 6$

$\dfrac { 17 } { 6 }$

$2.8333333333$


$4$

$4$

$4 \times 17 + 14 = 82$

$4 \times 6 + 5 = 29$

$\dfrac { 82 } { 29 }$

$2.8275862069$


$5$

$1$

$1 \times 82 + 17 = 99$

$1 \times 29 + 6 = 35$

$\dfrac { 99 } { 35 }$

$2.8285714286$


$6$

$4$

$4 \times 99 + 82 = 478$

$4 \times 35 + 29 = 169$

$\dfrac { 478 } { 169 }$

$2.8284023669$


$7$

$1$

$1 \times 478 + 99 = 577$

$1 \times 169 + 35 = 204$

$\dfrac { 577 } { 204 }$

$2.8284313725$


$8$

$4$

$4 \times 577 + 478 = 2786$

$4 \times 204 + 169 = 985$

$\dfrac { 2786 } { 985 }$

$2.8284263959$


$9$

$1$

$1 \times 2786 + 577 = 3363$

$1 \times 985 + 204 = 1189$

$\dfrac { 3363 } { 1189 }$

$2.8284272498$

$\blacksquare$





