# 

Source: https://proofwiki.org/wiki/Existence_of_Lowest_Common_Multiple/Proof_2



Theorem
Let $a, b \in \Z: a b \ne 0$.
The lowest common multiple of $a$ and $b$, denoted $\lcm \set {a, b}$, always exists.

In the words of Euclid:

Given two numbers, to find the least number which they measure.
(The Elements: Book $\text{VII}$: Proposition $34$)


Proof
Either $a$ and $b$ are coprime or they are not.
Let:

$a \perp b$
where $a \perp b$ denotes that $a$ and $b$ are coprime.
Let $a b = c$.
Then:

$a \divides c, b \divides c$
where $a \divides c$ denotes that $a$ is a divisor of $c$.
Suppose both $a \divides d, b \divides d$ for some $d \in \N_{> 0}: d < c$.
Then:

$\exists e \in \N_{> 0}: a e = d$
$\exists f \in \N_{> 0}: b f = d$
Therefore:

$a e = b f$
and from Proposition $19$ of Book $\text{VII} $: Relation of Ratios to Products:

$a : b = f : e$
But $a$ and $b$ are coprime.
From:

Proposition $21$: Coprime Numbers form Fraction in Lowest Terms
and:

Proposition $20$: Ratios of Fractions in Lowest Terms
it follows that $b \divides e$
Since:

$a b = c$
and:

$a e = d$
it follows from Proposition $17$: Multiples of Ratios of Numbers that:

$b : e = c : d$
But $b \divides e$ and therefore:

$c \divides d$
But $c > d$ which is impossible.
Therefore $a$ and $b$ are both the divisor of no number less than $c$.

Now suppose $a$ and $b$ are not coprime.
Let $f$ and $e$ be the least numbers of those which have the same ratio with $a$ and $b$.
Then from Proposition $19$: Relation of Ratios to Products:

$a e = b f$
Let $a e = c$.
Then $b f = c$.
Hence:

$a \divides c$
$b \divides c$
Suppose $a$ and $b$ are both the divisor of some number $d$ which is less than $c$.
Let:

$a g = d$
and:

$b h = d$
Therefore:

$a g = b h$
and so by Proposition $19$: Relation of Ratios to Products:

$a : b = f : e$
Also:

$f : e = h : g$
But $f, e$ are the least such.
From Proposition $20$: Ratios of Fractions in Lowest Terms:

$e \divides g$
Since $a e = c$ and $a g = d$, from Proposition $17$: Multiples of Ratios of Numbers:

$e : g = c : d$
But:

$e \divides g$
So $c \divides d$
But $c > d$ which is impossible.
Therefore $a$ and $b$ are both the divisor of no number less than $c$.
$\blacksquare$


Historical Note
This proof is Proposition $34$ of Book $\text{VII}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 2 (2nd ed.) ... (previous) ... (next): Book $\text{VII}$. Propositions




