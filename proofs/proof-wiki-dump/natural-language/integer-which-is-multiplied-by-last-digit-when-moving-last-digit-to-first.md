# 

Source: https://proofwiki.org/wiki/Integer_which_is_Multiplied_by_Last_Digit_when_moving_Last_Digit_to_First

Theorem
Let $N$ be a positive integer expressed in decimal notation in the form:

$N = \sqbrk {a_k a_{k - 1} a_{k - 2} \ldots a_2 a_1}_{10}$
Let $N$ be such that when you multiply it by $a_1$, you get:

$a_1 N = \sqbrk {a_1 a_k a_{k - 1} \ldots a_3 a_2}_{10}$

Then at least one such $N$ is equal to the recurring part of the fraction:

$q = \dfrac {a_1} {10 a_1 - 1}$


Proof
Let us consider:

$q = 0 \cdotp \dot a_k a_{k - 1} a_{k - 2} \ldots a_2 \dot a_1$
Let:

$a_1 q = 0 \cdotp \dot a_1 a_k a_{k - 1} \ldots a_3 \dot a_2$
Then:














\(\ds 10 a_1 q\)

\(=\)







\(\ds a_1 \cdotp \dot a_k a_{k - 1} a_{k - 2} \ldots a_2 \dot a_1\)














\(\ds \leadsto \ \ \)





\(\ds 10 a_1 q - a_1\)

\(=\)







\(\ds 0 \cdotp \dot a_k a_{k - 1} a_{k - 2} \ldots a_2 \dot a_1\)




















\(\ds \)

\(=\)







\(\ds q\)














\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds \dfrac {a_1} {10 a_1 - 1}\)









$\blacksquare$





