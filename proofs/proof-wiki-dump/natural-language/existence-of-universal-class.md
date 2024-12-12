# 

Source: https://proofwiki.org/wiki/Existence_of_Universal_Class

Theorem
There exists a unique class $V$ such that:

$\forall u: u \in V$
That is, the universal class exists and is unique.


Proof
By Existence of Empty Class, there is a unique class $\O$ such that:

$\forall u: u \notin \O$
for every set $u$.
Thus, by Existence of Class Complement, there is a unique class $\overline \O$ such that:

$u \in \overline \O \iff u \notin \O$
But then, by the definition of $\O$:

$\forall u: u \in \overline \O$
Then, $V := \overline \O$ satisfies the theorem, and is unique.
$\blacksquare$





