# 

Source: https://proofwiki.org/wiki/Euler%27s_Criterion/Quadratic_Residue/Proof_1

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





Proof
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





