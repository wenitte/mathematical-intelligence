# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Odd-Times_Odd_Integer



Theorem
The following definitions of the concept of Odd-Times Odd Integer are equivalent:

Definition 1
$n$ is odd-times odd if and only if it is an odd number greater than $1$ which is not prime.

Definition 2
$n$ is odd-times odd if and only if there exist odd numbers $x, y > 1$ such that $n = x y$.


Proof
$(1)$ implies $(2)$
Let $n$ be an odd-times odd integer by definition 1.
Then by definition:

$n > 1$
$n$ is not prime.
Thus:

$n = r s$
where $1 < r < p$ and $1 < s < p$.

As $n$ is odd:

$2 \nmid n$
and so:

$2 \nmid r$
and:

$2 \nmid s$
So both $r$ and $s$ are odd integers greater than $1$ such that $n = r s$.
Thus $n$ is an odd-times odd integer by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $n$ be an odd-times odd integer by definition 2.
Then by definition:

$n = r s$
where $r > 1, s > 1$ are odd integers.
Thus $n$ is not prime by definition.
As $r$ and $s$ are odd:

$2 \nmid r$
and

$2 \nmid s$
and so:

$2 \nmid r s$
So $n = r s$ is odd.
As $r > 1$ and $s > 1$ it follows from Divisor Relation on Positive Integers is Partial Ordering that $n > 1$.
Thus $n$ is an odd-times odd integer by definition 1.
$\blacksquare$





