# 

Source: https://proofwiki.org/wiki/Continued_Fraction_Expansion_of_Irrational_Square_Root/Examples/61/Convergents

Convergents to Continued Fraction Expansion of $\sqrt {61}$
The sequence of convergents to the continued fraction expansion of the square root of $61$ begins:

$\dfrac 7 1, \dfrac {8} 1, \dfrac {39} 5, \dfrac {125} {16}, \dfrac {164} {21}, \dfrac {453} {58}, \dfrac {1070} {137}, \dfrac {1523} {195}, \dfrac {5639} {722}, \dfrac {24079} {3083}, \ldots$
The numerators form sequence A041106 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).
The denominators form sequence A041107 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Let $\sqbrk {a_0, a_1, a_2, \ldots}$ be its continued fraction expansion.
Let $\sequence {p_n}_{n \ge \mathop 0}$ and $\sequence {q_n}_{n \ge \mathop 0}$ be its numerators and denominators.
Then the $n$th convergent is $p_n / q_n$.
By definition:

$p_k = \begin {cases} a_0 & : k = 0 \\
a_0 a_1 + 1 & : k = 1 \\
a_k p_{k - 1} + p_{k - 2} & : k > 1 \end {cases}$

$q_k = \begin {cases} 1 & : k = 0 \\
a_1 & : k = 1 \\
a_k q_{k - 1} + q_{k - 2} & : k > 1 \end {cases}$

From Continued Fraction Expansion of $\sqrt {61}$:

$\sqrt {61} = \sqbrk {7, \sequence {1, 4, 3, 1, 2, 2, 1, 3, 4, 1, 14} }$

Thus the convergents are assembled:





$k$

$a_k$

$p_k = a_k p_{k - 1} + p_{k - 2}$

$q_k = a_k q_{k - 1} + q_{k - 2}$

$\dfrac {p_k} {q_k}$

Decimal value


$0$

$7$

$7$

$1$

$\dfrac { 7 } 1$

$7$


$1$

$1$

$7 \times 1 + 1 = 8$

$1$

$\dfrac { 8 } { 1 }$

$8$


$2$

$4$

$4 \times 8 + 7 = 39$

$4 \times 1 + 1 = 5$

$\dfrac { 39 } { 5 }$

$7.8$


$3$

$3$

$3 \times 39 + 8 = 125$

$3 \times 5 + 1 = 16$

$\dfrac { 125 } { 16 }$

$7.8125$


$4$

$1$

$1 \times 125 + 39 = 164$

$1 \times 16 + 5 = 21$

$\dfrac { 164 } { 21 }$

$7.8095238095$


$5$

$2$

$2 \times 164 + 125 = 453$

$2 \times 21 + 16 = 58$

$\dfrac { 453 } { 58 }$

$7.8103448276$


$6$

$2$

$2 \times 453 + 164 = 1070$

$2 \times 58 + 21 = 137$

$\dfrac { 1070 } { 137 }$

$7.8102189781$


$7$

$1$

$1 \times 1070 + 453 = 1523$

$1 \times 137 + 58 = 195$

$\dfrac { 1523 } { 195 }$

$7.8102564103$


$8$

$3$

$3 \times 1523 + 1070 = 5639$

$3 \times 195 + 137 = 722$

$\dfrac { 5639 } { 722 }$

$7.8102493075$


$9$

$4$

$4 \times 5639 + 1523 = 24079$

$4 \times 722 + 195 = 3083$

$\dfrac { 24079 } { 3083 }$

$7.8102497567$


$10$

$1$

$1 \times 24079 + 5639 = 29718$

$1 \times 3083 + 722 = 3805$

$\dfrac { 29718 } { 3805 }$

$7.8102496715$


$11$

$14$

$14 \times 29718 + 24079 = 440131$

$14 \times 3805 + 3083 = 56353$

$\dfrac { 440131 } { 56353 }$

$7.8102496761$


$12$

$1$

$1 \times 440131 + 29718 = 469849$

$1 \times 56353 + 3805 = 60158$

$\dfrac { 469849 } { 60158 }$

$7.8102496759$


$13$

$4$

$4 \times 469849 + 440131 = 2319527$

$4 \times 60158 + 56353 = 296985$

$\dfrac { 2319527 } { 296985 }$

$7.8102496759$


$14$

$3$

$3 \times 2319527 + 469849 = 7428430$

$3 \times 296985 + 60158 = 951113$

$\dfrac { 7428430 } { 951113 }$

$7.8102496759$


$15$

$1$

$1 \times 7428430 + 2319527 = 9747957$

$1 \times 951113 + 296985 = 1248098$

$\dfrac { 9747957 } { 1248098 }$

$7.8102496759$


$16$

$2$

$2 \times 9747957 + 7428430 = 26924344$

$2 \times 1248098 + 951113 = 3447309$

$\dfrac { 26924344 } { 3447309 }$

$7.8102496759$


$17$

$2$

$2 \times 26924344 + 9747957 = 63596645$

$2 \times 3447309 + 1248098 = 8142716$

$\dfrac { 63596645 } { 8142716 }$

$7.8102496759$


$18$

$1$

$1 \times 63596645 + 26924344 = 90520989$

$1 \times 8142716 + 3447309 = 11590025$

$\dfrac { 90520989 } { 11590025 }$

$7.8102496759$


$19$

$3$

$3 \times 90520989 + 63596645 = 335159612$

$3 \times 11590025 + 8142716 = 42912791$

$\dfrac { 335159612 } { 42912791 }$

$7.8102496759$


$20$

$4$

$4 \times 335159612 + 90520989 = 1431159437$

$4 \times 42912791 + 11590025 = 183241189$

$\dfrac { 1431159437 } { 183241189 }$

$7.8102496759$


$21$

$1$

$1 \times 1431159437 + 335159612 = 1766319049$

$1 \times 183241189 + 42912791 = 226153980$

$\dfrac { 1766319049 } { 226153980 }$

$7.8102496759$

$\blacksquare$





