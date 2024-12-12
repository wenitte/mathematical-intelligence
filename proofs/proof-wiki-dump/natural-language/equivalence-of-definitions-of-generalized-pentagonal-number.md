# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Generalized_Pentagonal_Number



Theorem
The following definitions of the concept of Generalized Pentagonal Number are equivalent:

Definition 1
Recall the sequence of pentagonal numbers:

$0, 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, 176, \ldots$
and the sequence of second pentagonal numbers:

$0, 2, 7, 15, 26, 40, 57, 77, 100, 126, 155, 187, \ldots$

The sequence of generalized pentagonal numbers consists of the elements of both of these sequences merged and arranged into ascending order.

Definition 2
The generalized pentagonal numbers are the integers obtained from the formula:

$GP_n = \begin {cases} \dfrac {m \paren {3 m + 1} } 2 & : n = 2 m \\
\dfrac {m \paren {3 m - 1} } 2 & : n = 2 m - 1 \end {cases}$
for $n = 0, 1, 2, \ldots$


Proof
It is sufficient to verify that the sequence $GP_n$ defined in Definition 2 contains both sequences of pentagonal numbers and second pentagonal numbers, and is in ascending order.

From Closed Form for Pentagonal Numbers:

$P_n = \dfrac {n \paren {3 n - 1} } 2$
which are the odd terms (and the zeroth term) of $GP_n$.

From definition of second pentagonal numbers:

$P'_n = \dfrac {n \paren {3 n + 1} } 2$
which are the even terms of $GP_n$.

Finally it is shown that $GP_n$ is increasing.
We have:

$GP_{2 m - 1} = \dfrac {m \paren {3 m - 1} } 2 < \dfrac {m \paren {3 m + 1} } 2 = GP_{2 m}$
and:

$GP_{2 m} = \dfrac {m \paren {3 m + 1} } 2 < \dfrac {\paren {m + 1} \paren {3 m + 2} } 2 = GP_{2 m + 1}$
Hence the result.
$\blacksquare$





