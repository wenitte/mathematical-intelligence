# 

Source: https://proofwiki.org/wiki/Fermat%27s_Two_Squares_Theorem

  This article was Featured Proof between 5 June 2009 and 12 June 2009.




Theorem
Let $p$ be a prime number.

Then $p$ can be expressed as the sum of two squares if and only if either:

$p = 2$
or:

$p \equiv 1 \pmod 4$

The expression of a prime of the form $4 k + 1$ as the sum of two squares is unique except for the order of the two summands.


Proof
Uniqueness Lemma
Let $p$ be a prime number.
Suppose there were an expression:

$p = a^2 + b^2$
where $a$ and $b$ are positive integers.
Then that expression would be unique except for the order of the two summands.
$\Box$


Proof of Existence
There are three possibilities for a prime:

$(1): \quad p = 2$
or:

$(2): \quad p \equiv 1 \pmod 4$
or:

$(3): \quad p \equiv 3 \pmod 4$


Necessary Condition
Suppose $p$ can be expressed as the sum of two squares.
First we note that $2 = 1^2 + 1^2$, which is the sum of two squares.
This disposes of the case where $p = 2$.

Let $p = a^2 + b^2$.
From Sum of Two Squares not Congruent to 3 modulo 4, $p \not \equiv 3 \pmod 4$ whatever $a$ and $b$ are.
So either $p = 2$, or $p \equiv 1 \pmod 4$.


Sufficient Condition
We have already noted that $2 = 1^2 + 1^2$, which is the sum of two squares.
Let $p$ be a prime number of the form $p \equiv 1 \pmod 4$.
Suppose $m p = x^2 + y^2$ has a solution such that $1 < m < p$.
Let $u, v$ be the least absolute residues modulo $m$ of $x$ and $y$ respectively.
That is:

$u \equiv x, v \equiv y \pmod m: \dfrac {-m} 2 < u, v \le \dfrac m 2$
Then:

$u^2 + v^2 \equiv x^2 + y^2 \pmod m$
Thus:

$\exists r \in \Z, r \ge 0: u^2 + v^2 = m r$

We are going to establish a descent step.
That is, we aim to show that $r p$ is the sum of two squares with $1 \le r < m$.
First we show that $r$ does lie in this range.
If $r = 0$ then $u = v = 0$ and so $m$ divides both $x$ and $y$.
But then from $m p = x^2 + y^2$ we have that $m \divides p$.
This cannot happen as $p$ is prime.
So:

$1 \le r = \dfrac {u^2 + v^2} m \le \dfrac 1 m \times \paren {\dfrac {m^2} 4 + \dfrac {n^2} 4} = \dfrac m 2 < m$
So $1 \le r < m$.

Now we show that $r p$ is the sum of two squares.
Multiplying $m p = x^2 + y^2$ and $m r = u^2 + v^2$:














\(\ds m^2 r p\)

\(=\)







\(\ds \paren {x^2 + y^2} \paren {u^2 + v^2}\)




















\(\ds \)

\(=\)







\(\ds \paren {x u + y v}^2 + \paren {x v - y u}^2\)





Brahmagupta-Fibonacci Identity



Now:

$x u + y v \equiv x^2 + y^2 \equiv 0 \pmod m$, so $m \divides x u + y v$
$x v - y u \equiv x y - x y \equiv 0 \pmod m$, so $m \divides x v - y u$
So, putting $m X = x u + y v, m Y = x v - y u$, we get:

$m^2 r p = m^2 X^2 + m^2 Y^2$
That is:

$r p = X^2 + Y^2$
Hence the descent step is established.

Next we need to show that $m p = x^2 + y^2$ has a solution for some $m$ with $1 \le m < p$.
From First Supplement to Law of Quadratic Reciprocity, we have that $-1$ is a quadratic residue for each prime $p \equiv 1 \pmod 4$.
Hence the congruence $x^2 + 1 \equiv 0 \pmod p$ has a least positive solution $x_1$ such that $1 \le x_1 \le p - 1$.
So there exists a positive integer $m$ such that $m p = x_1^2 + 1^2$.
This is just what we want, because:

$m = \dfrac {x_1^2 + 1^2} p \le \dfrac {\paren {p - 1}^2 + 1} p = \dfrac {p^2 - 2 \paren {p - 1}^2} p < p$
If this solution has $m > 1$, then our descent step (above) guarantees a solution for a smaller positive value of $m$.
Eventually we will reach a solution with $m = 1$, that is:

$p = x^2 + y^2$
$\blacksquare$


Also known as
Fermat's Two Squares Theorem is also known as just the Two Squares Theorem.
It is also known as Fermat's Christmas Theorem on account of the date on it.


Also see
Definition:Pythagorean Prime


Source of Name
This entry was named for Pierre de Fermat.


Historical Note
According to Ivan M. Niven, on "Albert Girard" at Absolute Astronomy.com, Fermat's Two Squares Theorem was initially stated without proof by Albert Girard in $1632$.
Fermat announced its proof in a letter to Marin Mersenne dated December $25$, $1640$.
For this reason it is also sometimes referred to as Fermat's Christmas Theorem.
The first published proof was by Leonhard Paul Euler after $7$ years of hard work.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{IV}$: The Prince of Amateurs
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $1$: The Nature of Differential Equations: $\S 6$: The Brachistochrone. Fermat and the Bernoullis
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $13$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.2$: More about Numbers: Irrationals, Perfect Numbers and Mersenne Primes
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $13$
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $7$: Patterns in Numbers: Fermat




