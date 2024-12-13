# 

Source: https://proofwiki.org/wiki/Number_of_Quadratic_Residues_of_Prime

Theorem
Let $p$ be an odd prime.
Then $p$ has $\dfrac {p - 1} 2$ quadratic residues and $\dfrac {p - 1} 2$ quadratic non-residues.
The quadratic residues are congruent modulo $p$ to the integers $1^2, 2^2, \ldots, \paren {\dfrac {p - 1} 2}$.


Proof
The quadratic residues of $p$ are the integers which result from the evaluation of the squares:

$1^2, 2^2, \ldots, \paren {p - 1}^2$ modulo $p$
But:

$r^2 = \paren {-r}^2$
and so these $p - 1$ integers fall into congruent pairs modulo $p$, namely:














\(\ds 1^2\)

\(\equiv\)







\(\ds \paren {p - 1}^2\)

\(\ds \pmod p\)


















\(\ds 2^2\)

\(\equiv\)







\(\ds \paren {p - 2}^2\)

\(\ds \pmod p\)


















\(\ds \)

\(\ldots\)







\(\ds \)




















\(\ds \paren {\frac {p - 1} 2}^2\)

\(\equiv\)







\(\ds \paren {\frac {p + 1} 2}^2\)

\(\ds \pmod p\)



Note that we require $p$ to be odd here.



Therefore each quadratic residue of $p$ is congruent modulo $p$ to one of the $\dfrac {p - 1} 2$ integers $1^2, 2^2, \ldots, \paren {\dfrac {p - 1} 2}^2$.
Note that as $r^2 \not \equiv 0 \pmod p$ for $1 \le r < p$, the integer $0$ is not among these.

All we need to do now is show that no two of these integers are congruent modulo $p$.
So, suppose that $r^2 \equiv s^2 \pmod p$ for some $1 \le r \le s \le \dfrac {p - 1} 2$.
What we are going to do is prove that $r = s$.
Now $r^2 \equiv s^2 \pmod p$ means that $p$ is a divisor of $r^2 - s^2 = \paren {r + s} \paren {r - s}$.
From Euclid's Lemma either:

$p \divides \paren {r + s}$
or:

$p \divides \paren {r - s}$

$p \divides \paren {r + s}$ is impossible as $2 \le r + s \le p - 1$.

Take $p \divides \paren {r - s}$.
As $0 \le r - s < \dfrac {p - 1} 2$, that can happen only when:

$r - s = 0$
or:

$r = s$
So there must be exactly $\dfrac {p - 1} 2$ quadratic residues.
That means there must also be exactly $\dfrac {p - 1} 2$ quadratic non-residues.
$\blacksquare$





