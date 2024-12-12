# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/2/Convergents

Convergents to Continued Fraction Expansion of $\sqrt 2$
The sequence of convergents to the continued fraction expansion of the square root of $2$ begins:

$\dfrac 1 1, \dfrac 3 2, \dfrac 7 5, \dfrac {17} {12}, \dfrac {41} {29}, \dfrac {99} {70}, \dfrac {239} {169}, \dfrac {577} {408}, \dfrac {1393} {985}, \dfrac {3363} {2378}, \ldots$
The numerators form sequence A001333 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The denominators form sequence A000129 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


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

From Continued Fraction Expansion of $\sqrt 2$:

$\sqrt 2 = \sqbrk {1, \sequence 2}$

Thus the convergents are assembled:





$k$

$a_k$

$p_k = a_k p_{k - 1} + p_{k - 2}$

$q_k = a_k q_{k - 1} + q_{k - 2}$

$\dfrac {p_k} {q_k}$

Decimal value


$0$

$1$

$1$

$1$

$\dfrac { 1 } 1$

$1$


$1$

$2$

$1 \times 2 + 1 = 3$

$2$

$\dfrac { 3 } { 2 }$

$1.5$


$2$

$2$

$2 \times 3 + 1 = 7$

$2 \times 2 + 1 = 5$

$\dfrac { 7 } { 5 }$

$1.4$


$3$

$2$

$2 \times 7 + 3 = 17$

$2 \times 5 + 2 = 12$

$\dfrac { 17 } { 12 }$

$1.4166666667$


$4$

$2$

$2 \times 17 + 7 = 41$

$2 \times 12 + 5 = 29$

$\dfrac { 41 } { 29 }$

$1.4137931034$


$5$

$2$

$2 \times 41 + 17 = 99$

$2 \times 29 + 12 = 70$

$\dfrac { 99 } { 70 }$

$1.4142857143$


$6$

$2$

$2 \times 99 + 41 = 239$

$2 \times 70 + 29 = 169$

$\dfrac { 239 } { 169 }$

$1.4142011834$


$7$

$2$

$2 \times 239 + 99 = 577$

$2 \times 169 + 70 = 408$

$\dfrac { 577 } { 408 }$

$1.4142156863$


$8$

$2$

$2 \times 577 + 239 = 1393$

$2 \times 408 + 169 = 985$

$\dfrac { 1393 } { 985 }$

$1.414213198$


$9$

$2$

$2 \times 1393 + 577 = 3363$

$2 \times 985 + 408 = 2378$

$\dfrac { 3363 } { 2378 }$

$1.4142136249$

$\blacksquare$





