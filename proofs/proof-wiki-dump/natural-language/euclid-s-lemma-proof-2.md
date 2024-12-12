# 

Source: https://proofwiki.org/wiki/Euclid%27s_Lemma/Proof_2



Theorem
Let $a, b, c \in \Z$.
Let $a \divides b c$, where $\divides$ denotes divisibility.

Let $a \perp b$, where $\perp$ denotes relative primeness.
Then $a \divides c$.


Proof
Let $a, b, c \in \Z$.
We have that $a \perp b$.
That is:

$\gcd \set {a, b} = 1$
where $\gcd$ denotes greatest common divisor.
From Bézout's Identity, we may write:

$a x + b y = 1$
for some $x, y \in \Z$.
Upon multiplication by $c$, we see that:

$c = c \paren {a x + b y} = c a x + c b y$

Now note that $c a x + c b y$ is an integer combination of $a c$ and $b c$.
So, since:

$a \divides a c$
and:

$a \divides b c$
it follows from Common Divisor Divides Integer Combination that:

$a \divides \paren {c a x + c b y}$

However:

$c a x + c b y = c \paren {a x + b y} = c \cdot 1 = c$
Therefore:

$a \divides c$
$\blacksquare$


Source of Name
This entry was named for Euclid.


Also see
Euclid's Lemma for Prime Divisors


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 12$. Primes: Theorem $20$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-2}$ Divisibility: Theorem $\text {2-3}$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Theorem $2 \text{-} 5$




