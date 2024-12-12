# 

Source: https://proofwiki.org/wiki/Euler%27s_Criterion/Quadratic_Residue



Theorem
Let $p$ be an odd prime.
Let $a \not \equiv 0 \pmod p$.
Then:














\(\ds a^{\frac {p-1} 2}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod p\)



if and only if $a$ is a quadratic residue of $p$














\(\ds a ^{\frac {p-1} 2}\)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod p\)



if and only if $a$ is a quadratic non-residue of $p$.





Proof 1
Trivially, any $a \not \equiv 0 \pmod p$ is either a quadratic residue or a quadratic non-residue, modulo $p$.
Therefore, it suffices to check the sufficient condition for both of the equations (i.e., the if parts from the iffs).

So let $a$ be a quadratic non-residue of $p$.
Also, let $b \in \set {1, 2, \ldots, p - 1}$.
The congruence $b x \equiv a \pmod p$ has (modulo $p$) a unique solution $b'$ by Solution of Linear Congruence.
Note that $b' \not\equiv b$, because otherwise we would have $b^2 \equiv a \pmod p$ and $a$ would be a quadratic residue of $p$.
It follows that the residue classes $\set {1, 2, \ldots, p - 1}$ modulo $p$ fall into $\dfrac {p - 1} 2$ pairs $b, b'$ such that $b b' \equiv a \pmod p$.
Therefore, we have:

$\paren {p - 1}! = 1 \times 2 \times \cdots \times \paren {p - 1} \equiv a \times a \times \cdots \times a \equiv a^{\frac {p - 1} 2} \pmod p$
From Wilson's Theorem, we also have:

$\paren {p - 1}! \equiv -1 \pmod p$
And so, for any quadratic non-residue of $p$:

$a^{\frac {p - 1} 2} \equiv -1 \pmod p$

Subsequently, let $a$ be a quadratic residue of $p$.
By definition of a quadratic residue, the congruence $x^2 \equiv a \pmod p$ has a solution $x$.
Suppose also $y$ is a solution. Then we have:














\(\ds x^2 - y^2\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)












\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x + y} \paren {x - y}\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod p\)








So either $x + y \equiv 0 \pmod p$ or $x - y \equiv 0 \pmod p$ from Product is Zero Divisor means Zero Divisor.
It follows that when $c \pmod p$ is one solution, $-c \pmod p$ is, too.
Also, these solutions are distinct as $p$ is odd.
Furthermore, we conclude that these are the only two solutions.

Now, remove $c$ and $p - c$ from $\set {1, 2, \ldots, p - 1}$.
The remaining integers fall, modulo $p$, into $\dfrac {p - 3} 2$ pairs $b, b'$ such that $b b' \equiv a \pmod p$ by Solution of Linear Congruence.
Therefore, we can compute the following:














\(\ds \paren {p - 1}!\)

\(=\)







\(\ds 1 \times 2 \times \cdots \times c \times \cdots \times \paren {p - c} \times \cdots \times \paren {p - 1}\)




















\(\ds \)

\(\equiv\)







\(\ds a \times a \times \cdots \times a \times c \times \paren {-c}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds a^{\frac {p - 3} 2} \paren {-c^2}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds a^{\frac {p - 3} 2} \paren {-a}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds -a^{\frac {p - 1} 2}\)

\(\ds \pmod p\)








Again applying Wilson's Theorem, we conclude:

$-a^{\frac {p-1} 2} \equiv - 1 \pmod p$
The assertion for quadratic residues $a$ of $p$ follows.
$\blacksquare$


Proof 2
First note that the square roots of $1$ are $1, -1 \pmod p$.
Also, we have that $a^{p - 1} \equiv 1 \pmod p$ by Fermat's Little Theorem.
Combining these two observations, we find:

$a^{\frac {p - 1} 2} \equiv 1 \text{ or } -1 \pmod p$

The theorem is therefore equivalent to stating that $a$ is a quadratic residue modulo $p$ if and only if $a^{\frac{p - 1} 2} \equiv 1 \pmod p$.
Namely, considering the above, we see this also implies that all quadratic non-residues will be congruent to $-1 \pmod p$.

We prove each direction of the equivalent statement separately:


Sufficient Condition
Assume $a$ is a quadratic residue modulo $p$.
We pick $k$ such that $k^2 \equiv a \pmod p$.
Then by Congruence of Powers and Fermat's Little Theorem:

$a^{\frac{p-1} 2} \equiv k^{p-1} \equiv 1 \pmod p$


Necessary Condition
Now assume $a^{\frac{p - 1} 2} \equiv 1 \pmod p$.
Then let $y$ be a primitive root modulo $p$, so that $a$ can be written as $y^j$.
In particular:

$y^{j \frac {p - 1} 2} \equiv 1 \pmod p$
From the definition of $y$, it has order $p-1$.
It follows that $p - 1 \divides j \dfrac {p - 1} 2$ from Element to Power of Multiple of Order is Identity.
We conclude that $j$ is necessarily an even integer, and denote $j' = \dfrac j 2$.
Let $k$ be such that $k \equiv y^{j'} \pmod p$.
By construction, we have:

$k^2 \equiv y^{2 j'} \equiv y^j \equiv a \pmod p$
Hence $a$ is a quadratic residue modulo $p$.
$\blacksquare$


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Euler's criterion




