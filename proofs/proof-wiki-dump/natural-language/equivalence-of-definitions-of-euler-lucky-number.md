# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Euler_Lucky_Number



Theorem
The following definitions of the concept of Euler Lucky Number are equivalent:

Definition 1
The Euler lucky numbers are the prime numbers $p$ such that:

$n^2 + n + p$
is prime for $0 \le n < p - 1$.

Definition 2
The Euler lucky numbers are the prime numbers $p$ such that:

$n^2 - n + p$
is prime for $1 \le n < p$.


Proof
Let $p$ be an Euler lucky number.
Let $f_p: \Z \to \Z$ be the mapping defined as:

$\forall n \in \Z: f_p \left({n}\right) = n^2 + n + p$
Let $m = n - 1$.
Then:














\(\ds f_p \left({m}\right)\)

\(=\)







\(\ds f_p \left({n - 1}\right)\)




















\(\ds \)

\(=\)







\(\ds \left({n - 1}\right)^2 + \left({n - 1}\right) + p\)




















\(\ds \)

\(=\)







\(\ds n^2 - 2 n + 1 + n - 1 + p\)




















\(\ds \)

\(=\)







\(\ds n^2 - n + p\)









We have that $f_p \left({n}\right)$ is prime for $0 \le n < p - 1$.
Thus $f_p \left({m}\right)$ is prime for $0 \le \left({n - 1}\right) < p - 1$.
and so $f_p \left({m}\right)$ is prime for $1 \le n < p$.
$\blacksquare$





