# 

Source: https://proofwiki.org/wiki/Closed_Form_for_Sequence_1,_2,_2,_3,_3,_3,_4,_4,_4,_4,_...

Theorem
Let $a_1, a_2, a_3, \ldots$ be the integer sequence:

$\sequence {a_n} = 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, \ldots$
Then:

$a_n = \ceiling {\dfrac {\sqrt {1 + 8 n} - 1} 2}$


Proof
From Closed Form for Triangular Numbers, for $n = 1, 3, 6, 10, \ldots$:

$n = \dfrac {a_n \paren {a_n + 1} } 2$
Thus by the Quadratic Formula:
$a_n = \dfrac {-1 \pm \sqrt {1 + 8 n} } 2$
In this context it is the positive root that is required.
The result follows by definition of ceiling function.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $41$




