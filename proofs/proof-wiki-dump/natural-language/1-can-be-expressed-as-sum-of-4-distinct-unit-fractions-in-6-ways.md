# 

Source: https://proofwiki.org/wiki/1_can_be_Expressed_as_Sum_of_4_Distinct_Unit_Fractions_in_6_Ways



Theorem
The number $1$ can be expressed as the sum of $4$ distinct unit fractions in $6$ different ways:














\(\ds 1\)

\(=\)







\(\ds \frac 1 2 + \frac 1 3 + \frac 1 7 + \frac 1 {42}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 3 + \frac 1 8 + \frac 1 {24}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 3 + \frac 1 9 + \frac 1 {18}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 3 + \frac 1 {10} + \frac 1 {15}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 4 + \frac 1 5 + \frac 1 {20}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 4 + \frac 1 6 + \frac 1 {12}\)











Proof 1
Let:

$1 = \dfrac 1 v + \dfrac 1 w + \dfrac 1 x + \dfrac 1 y$
where $ 1 < v < w < x < y$
Suppose $v = 3$ and take the largest potential solution that can be generated:

$1 \stackrel {?} {=} \dfrac 1 3 + \dfrac 1 4 + \dfrac 1 5 + \dfrac 1 6$
But we find:

$1 > \dfrac 1 3 + \dfrac 1 4 + \dfrac 1 5 + \dfrac 1 6$
Therefore, there can be no solutions where $v \ge 3$, as that solution was the largest possible.
Hence, $v = 2$ if there are any solutions.

Repeating the above anaylsis on $w$:














\(\ds \dfrac 1 2\)

\(=\)







\(\ds \dfrac 1 w + \dfrac 1 x + \dfrac 1 y\)




















\(\ds \dfrac 1 2\)

\(<\)







\(\ds \dfrac 1 3 + \dfrac 1 4 + \dfrac 1 5\)




















\(\ds \dfrac 1 2\)

\(<\)







\(\ds \dfrac 1 4 + \dfrac 1 5 + \dfrac 1 6\)




















\(\ds \dfrac 1 2\)

\(<\)







\(\ds \dfrac 1 5 + \dfrac 1 6 + \dfrac 1 7\)




















\(\ds \dfrac 1 2\)

\(>\)







\(\ds \dfrac 1 6 + \dfrac 1 7 + \dfrac 1 8\)









Potential solutions are located where $w = 3, 4, 5$.

Now that $v$ and $w$ are known, the variable $y$ can be written in terms of $x$:

$y = \dfrac 1 {\dfrac {w - 2} {2 w} - \dfrac 1 x}$
Solutions are only positive when:














\(\ds \dfrac 1 x\)

\(<\)







\(\ds \dfrac {w - 2} {2 w}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(>\)







\(\ds \dfrac {2 w} {w - 2}\)










As $x < y$:














\(\ds x\)

\(<\)







\(\ds \dfrac 1 {\dfrac {w - 2} {2 w} - \dfrac 1 x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 x\)

\(<\)







\(\ds \dfrac {w - 2} {2 w} - \dfrac 1 x\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac 2 x\)

\(<\)







\(\ds \dfrac {w - 2} {2 w}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(<\)







\(\ds \dfrac {4 w} {w - 2}\)










Therefore solutions exist only in the domain:

$\dfrac {2 w} {w - 2} < x < \dfrac {4 w} {w - 2}$
and:

$w < x$

Case $w = 3$:














\(\ds 6\)

\(<\)







\(\ds x < 12\)

\(\ds \text {and } 3 < x\)












\(\ds \leadsto \ \ \)





\(\ds 6\)

\(<\)







\(\ds x < 12\)









Integer solutions in the above domain can then be found by inspection:

$\tuple {7, 42}, \tuple {8, 24}, \tuple {9, 18}, \tuple {10, 15}$

Case $w = 4$:














\(\ds 4\)

\(<\)







\(\ds x < 8\)

\(\ds \text {and } 4 < x\)












\(\ds \leadsto \ \ \)





\(\ds 4\)

\(<\)







\(\ds x < 8\)









Integer solutions in the above domain can again be found by inspection:

$\tuple {5, 20}, \tuple {6, 12}$

Case $w = 5$:














\(\ds \dfrac {10} 3\)

\(<\)







\(\ds \dfrac {20} 3\)

\(\ds \text {and } 5 < x\)












\(\ds \leadsto \ \ \)





\(\ds 5\)

\(<\)







\(\ds \dfrac {20} 3\)










and it is immediately seen that there are no integer solutions in this domain.

All solutions have therefore been found:

$\tuple {2, 3, 7, 42}, \tuple {2, 3, 8, 24}, \tuple {2, 3, 9, 18}, \tuple {2, 3, 10, 15}, \tuple {2, 4, 5, 20}, \tuple {2, 4, 6, 12}$

Hence:














\(\ds 1\)

\(=\)







\(\ds \frac 1 2 + \frac 1 3 + \frac 1 7 + \frac 1 {42}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 3 + \frac 1 8 + \frac 1 {24}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 3 + \frac 1 9 + \frac 1 {18}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 3 + \frac 1 {10} + \frac 1 {15}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 4 + \frac 1 5 + \frac 1 {20}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 4 + \frac 1 6 + \frac 1 {12}\)









$\blacksquare$


Proof 2
From Sum of 4 Unit Fractions that equals 1:
There are $14$ ways to represent $1$ as the sum of exactly $4$ unit fractions.

This includes repeated unit fractions.

The full list is:




\(\text {(1)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 3 + \dfrac 1 7 + \dfrac 1 {42}\)










\(\text {(2)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 3 + \dfrac 1 8 + \dfrac 1 {24}\)










\(\text {(3)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 3 + \dfrac 1 9 + \dfrac 1 {18}\)










\(\text {(4)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 3 + \dfrac 1 {10} + \dfrac 1 {15}\)










\(\text {(5)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 3 + \dfrac 1 {12} + \dfrac 1 {12}\)










\(\text {(6)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 4 + \dfrac 1 5 + \dfrac 1 {20}\)










\(\text {(7)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 4 + \dfrac 1 6 + \dfrac 1 {12}\)










\(\text {(8)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 4 + \dfrac 1 8 + \dfrac 1 8\)










\(\text {(9)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 5 + \dfrac 1 5 + \dfrac 1 {10}\)










\(\text {(10)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 2 + \dfrac 1 6 + \dfrac 1 6 + \dfrac 1 6\)










\(\text {(11)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 3 + \dfrac 1 3 + \dfrac 1 4 + \dfrac 1 {12}\)










\(\text {(12)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 3 + \dfrac 1 3 + \dfrac 1 6 + \dfrac 1 {6}\)










\(\text {(13)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 3 + \dfrac 1 4 + \dfrac 1 4 + \dfrac 1 6\)










\(\text {(14)}: \quad\)









\(\ds \)

\(\)







\(\ds \dfrac 1 4 + \dfrac 1 4 + \dfrac 1 4 + \dfrac 1 4\)










The result follows from inspection: solutions $(1)$, $(2)$, $(3)$, $(4)$, $(6)$ and $(7)$ are the only solutions of the above such that the denominators of the summands are distinct.
$\blacksquare$


Also see
2520 equals Sum of 4 Divisors in 6 Ways




