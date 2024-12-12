# 

Source: https://proofwiki.org/wiki/Composite_Number_has_Prime_Factor



Theorem
Let $a$ be a composite number.
Then there exists a prime number $p$ such that:

$p \divides a$
where $\divides$ means is a divisor of.

In the words of Euclid:

Any composite number is measured by some prime number.
(The Elements: Book $\text{VII}$: Proposition $31$)


Proof
By definition of composite number:

$\exists b \in \Z: b \divides a$
If $b$ is a prime number then the proof is complete.

Otherwise $b$ is composite.
By definition of composite number:

$\exists c \in \Z: c \divides b$
and so:

$c \divides a$
Again, if $c$ is a prime number then the proof is complete.

Continuing in this manner, some prime number will be found which will divide the number before it.
This will be a divisor of $a$.

Because if not, then an infinite series of numbers will be divisors of $a$, each of which is less than the other.
This is impossible in numbers.
Hence the result.
$\blacksquare$


Historical Note
This proof is Proposition $31$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Euclid




