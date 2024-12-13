# 

Source: https://proofwiki.org/wiki/Integer_Divisor_Results/Divisors_of_Negative_Values

Theorem
Let $m, n \in \Z$, i.e. let $m, n$ be integers.

$m \divides n \iff -m \divides n \iff m \divides -n \iff -m \divides -n$
That is, $m$ divides $n$ if and only if $-m$ divides $n$ if and only if $m$ divides $-n$ if and only if $-m$ divides $-n$.


Proof
Let $m \divides n$.
From Integer Divides its Negative, we have $-m \divides m$.
From Divisor Relation on Positive Integers is Partial Ordering it follows that $-m \divides n$.

From Integer Divides its Negative, we have $n \divides -n$.
From Divisor Relation on Positive Integers is Partial Ordering it follows that $m \divides -n$.

From above, we have $-m \divides n$.
From Integer Divides its Negative, we have $n \divides -n$.
From Divisor Relation on Positive Integers is Partial Ordering it follows that $-m \divides -n$.

The reverse implications follow similarly.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Problems $2.2$: $1$




