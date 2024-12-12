# 

Source: https://proofwiki.org/wiki/Euclid%27s_Lemma

  This article was Featured Proof between 29 December 2008 and 19 January 2009.




Theorem
Let $a, b, c \in \Z$.
Let $a \divides b c$, where $\divides$ denotes divisibility.

Let $a \perp b$, where $\perp$ denotes relative primeness.
Then $a \divides c$.


Proof 1
Follows directly from Integers are Euclidean Domain.
$\blacksquare$


Proof 2
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
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $2$: Some Properties of $\Z$: Exercise $2.5$




