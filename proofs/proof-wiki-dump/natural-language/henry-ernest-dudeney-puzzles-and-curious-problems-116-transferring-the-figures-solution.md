# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/116_-_Transferring_the_Figures/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $116$
Transferring the Figures
If we wish to multiply $571 \, 428$ by $5$ and divide by $4$,
we need only transfer the $5$ from the beginning to the end for the correct answer $714 \, 285$.
Can you find a number that we can multiply by $4$ and then divide the product by $5$ in the same simple manner,
by moving the first figure to the end?
Of course $714 \, 285$, just given, would do if we were allowed to transfer from the end to the beginning.
But it must be from the beginning to the end!


Solution
We have that:

$2 \, 173 \, 913 \, 043 \, 478 \, 260 \, 869 \, 565 \times \dfrac 4 5 = 1 \, 739 \, 130 \, 434 \, 782 \, 608 \, 695 \, 652$


Proof
Suppose $N = \sqbrk {a_1 a_2 \dots a_k}$ satisfies the property above.
Consider the rational number represented by $q = 0.\dot {a_1} {a_2} \dots \dot {a_k}$.

By the property we have $\dfrac 4 5 q = 0.\dot {a_2} {a_3} \dots {a_k} \dot {a_1}$.
Also $10 q = a_1.\dot {a_2} {a_3} \dots {a_k} \dot {a_1}$.
Notice that the recurring part of $10 q$ is the same as the recurring part of $\dfrac 4 5 q$.
Subtracting, we get $9.2 q = a_1$, or $q = \dfrac {a_1} {9.2}$.

For the case $a_1 = 1$, we get:

$q = \dfrac 1 {9.2} = 0.1 \dot 086956521739130434782 \dot 6$
which is not of the form $q = 0.\dot {a_1} {a_2} \dots \dot {a_k}$.

For the case $a_1 = 2$, we get:

$q = \dfrac 2 {9.2} = 0. \dot 217391304347826086956 \dot 5$
which gives us $N = 2 \, 173 \, 913 \, 043 \, 478 \, 260 \, 869 \, 565$ as the smallest positive integer satisfying the property.

It may be interesting to note that $a_1 = 4, 6, 8$ also give solutions to the equation:

$4 \, 347 \, 826 \, 086 \, 956 \, 521 \, 739 \, 130 \times \dfrac 4 5 = 3 \, 478 \, 260 \, 869 \, 565 \, 217 \, 391 \, 304$
$6 \, 521 \, 739 \, 130 \, 434 \, 782 \, 608 \, 695 \times \dfrac 4 5 = 5 \, 217 \, 391 \, 304 \, 347 \, 826 \, 086 \, 956$
$8 \, 695 \, 652 \, 173 \, 913 \, 043 \, 478 \, 260 \times \dfrac 4 5 = 6 \, 956 \, 521 \, 739 \, 130 \, 434 \, 782 \, 608$
where all these are all multiples of $2 \, 173 \, 913 \, 043 \, 478 \, 260 \, 869 \, 565$;
and all numbers of the form $\sqbrk {NN}, \sqbrk {NNN}, \sqbrk {NNNN}$ also satisfy the conditions.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $116$. -- Transferring the Figures
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $190$. Transferring the Figures




