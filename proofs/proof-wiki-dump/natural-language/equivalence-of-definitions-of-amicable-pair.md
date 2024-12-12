# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Amicable_Pair



Theorem
Let $m \in \Z_{>0}$ and $n \in \Z_{>0}$ be (strictly) positive integers.
The following definitions of the concept of Amicable Pair are equivalent:

Definition 1
$m$ and $n$ are an amicable pair if and only if:

the aliquot sum of $m$ is equal to $n$
and:

the aliquot sum of $n$ is equal to $m$.
Definition 2
$m$ and $n$ are an amicable pair if and only if:

$\map {\sigma_1} m = \map {\sigma_1} n = m + n$
where $\sigma_1$ denotes the divisor sum function.

Definition 3
$m$ and $n$ are an amicable pair if and only if they form a sociable chain of order $2$.


Proof
Definition 1 is equivalent to Definition 2
Let $\map s n$ denote the aliquot sum of (strictly) positive integer $n$.
The sum of all the divisors of a (strictly) positive integer $n$ is $\map {\sigma_1} n$, where $\sigma_1$ is the divisor sum function.
The aliquot sum of $n$ is the sum of the divisors of $n$ with $n$ excluded.
Thus:

$\map s n = \map {\sigma_1} n - n$

Suppose:

$\map s n = m$
and:

$\map s m = n$

Then:














\(\ds \map {\sigma_1} n - n\)

\(=\)







\(\ds m\)





Definition of Proper Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_1} n\)

\(=\)







\(\ds m + n\)










Similarly:














\(\ds \map {\sigma_1} m - m\)

\(=\)







\(\ds n\)





Definition of Proper Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_1} m\)

\(=\)







\(\ds m + n\)









Thus:

$\map s n = \map s m = m + n$

The argument reverses.

$\Box$


Definition 1 is equivalent to Definition 3
From the definition of definition 1 of an amicable pair:
$m$ and $n$ are an amicable pair if and only if:

the aliquot sum of $m$ is equal to $n$
and:

the aliquot sum of $n$ is equal to $m$.

From the definition of a sociable chain:
Let $m$ be a positive integer.
Let $\map s m$ be the aliquot sum of $m$.

Define the sequence $\sequence {a_k}$ recursively as:

$a_{k + 1} = \begin{cases} m & : k = 0 \\ \map s {a_k} & : k > 0 \end{cases}$

A sociable chain is such a sequence $\sequence {a_k}$ where:

$a_r = a_0$
for some $r > 0$.

Here it is seen that setting $r = 2$ gives that:

$\map s {a_0} = a_1$
$\map s {a_1} = a_0$
and the equivalence follows.
$\blacksquare$





