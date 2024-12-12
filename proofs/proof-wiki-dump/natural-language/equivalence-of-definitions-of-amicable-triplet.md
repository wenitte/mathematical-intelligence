# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Amicable_Triplet



Theorem
Let $m_1, m_2, m_3 \in \Z_{>0}$ be (strictly) positive integers.
The following definitions of the concept of Amicable Triplet are equivalent:

Definition 1
$\tuple {m_1, m_2, m_3}$ are an amicable triplet if and only if the aliquot sum of any one of them equals the sum of the other two:

the aliquot sum of $m_1$ is equal to $m_2 + m_3$
and:

the aliquot sum of $m_2$ is equal to $m_1 + m_3$
and:

the aliquot sum of $m_3$ is equal to $m_1 + m_2$
Definition 2
$\tuple {m_1, m_2, m_3}$ are an amicable triplet if and only if:

$\map {\sigma_1} {m_1} = \map {\sigma_1} {m_2} = \map {\sigma_1} {m_3} = m_1 + m_2 + m_3$
where $\sigma_1$ denotes the divisor sum function.


Proof
For $n \in \Z_{>0}$, let $\map s n$ denote the aliquot sum of (strictly) positive integer $n$.
The sum of all the divisors of a (strictly) positive integer $n$ is $\map {\sigma_1} n$, where $\sigma_1$ is the divisor sum function.
The aliquot sum of $n$ is the sum of the divisors of $n$ with $n$ excluded.
Thus:

$\map s n = \map {\sigma_1} n - n$

Suppose:














\(\ds \map s {m_1}\)

\(=\)







\(\ds m_2 + m_3\)




















\(\ds \map s {m_2}\)

\(=\)







\(\ds m_1 + m_3\)




















\(\ds \map s {m_3}\)

\(=\)







\(\ds m_1 + m_2\)










Then:














\(\ds \map {\sigma_1} {m_1} - m_1\)

\(=\)







\(\ds m_2 + m_3\)





Definition of Proper Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_1} {m_1}\)

\(=\)







\(\ds m_1 + m_2 + m_3\)










Similarly:














\(\ds \map {\sigma_1} {m_2} - m_2\)

\(=\)







\(\ds m_1 + m_3\)





Definition of Proper Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_1} {m_2}\)

\(=\)







\(\ds m_1 + m_2 + m_3\)










and:














\(\ds \map {\sigma_1} {m_3} - m_3\)

\(=\)







\(\ds m_1 + m_2\)





Definition of Proper Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_1} {m_3}\)

\(=\)







\(\ds m_1 + m_2 + m_3\)










Thus:

$\map {\sigma_1} {m_1} = \map {\sigma_1} {m_2} = \map {\sigma_1} {m_3} = m_1 + m_2 + m_3$

The argument reverses.
$\blacksquare$





