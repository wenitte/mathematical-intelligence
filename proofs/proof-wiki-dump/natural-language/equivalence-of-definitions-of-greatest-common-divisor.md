# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Greatest_Common_Divisor



Theorem
The following definitions of the concept of Greatest Common Divisor of Integers are equivalent:

Definition 1
The greatest common divisor of $a$ and $b$ is defined as:

the largest $d \in \Z_{>0}$ such that $d \divides a$ and $d \divides b$
Definition 2
The greatest common divisor of $a$ and $b$ is defined as the (strictly) positive integer $d \in \Z_{>0}$ such that:

$(1): \quad d \divides a \land d \divides b$
$(2): \quad c \divides a \land c \divides b \implies c \divides d$


Proof
$(1)$ implies $(2)$
Let $\gcd \set{a, b}$ be the greatest common divisor of integers $a$ and $b$ by definition 1.
Then by definition:

$\gcd \set{a, b}$ is the largest $d \in \Z_{>0}$ such that $d \divides a$ and $d \divides b$.
From Common Divisor Divides GCD:

$c \divides a \land c \divides b \implies c \divides d$
Thus $\gcd \set{a, b}$ is the greatest common divisor of integers $a$ and $b$ by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $\gcd \set{a, b}$ be the greatest common divisor of integers $a$ and $b$ by definition 2.
Then by definition $\gcd \set{a, b}$ is  the (strictly) positive integer $d \in \Z_{>0}$ such that:

$(1): \quad d \divides a \land d \divides b$
$(2): \quad c \divides a \land c \divides b \implies c \divides d$

From $d \divides a \land d \divides b$, we see that $d$ is a common divisor of $a$ and $b$.
From $c \divides a \land c \divides b$, we see that $c$ is also a common divisor of $a$ and $b$.
Also, we have that $c \divides d$.
From Absolute Value of Integer is not less than Divisors, we see that (in the domain of $\Z_{>0}$): 

$c \divides d \implies c \le d$
Thus, whatever $c$ may be, it is no larger than $d$.
Therefore, $d$ must be the greatest of all the common divisors of $a$ and $b$.

Thus $\gcd \set{a, b}$ is the greatest common divisor of integers $a$ and $b$ by definition 1.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23 \alpha$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Theorem $2 \text{-} 6$




