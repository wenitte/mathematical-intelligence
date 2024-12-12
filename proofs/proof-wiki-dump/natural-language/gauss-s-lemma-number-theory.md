# 

Source: https://proofwiki.org/wiki/Gauss%27s_Lemma_(Number_Theory)



Lemma
Let $p$ be an odd prime.
Let $a \in \Z: a \not \equiv 0 \pmod p$.
Let $S = \set {a, 2 a, 3 a, \ldots, \dfrac {p - 1} 2 a}$.
Let $n$ denote the number of elements of $S$ whose least positive residue modulo $p$ is greater than $\dfrac p 2$.

Then:

$\paren {\dfrac a p} = \paren {-1}^n$
where $\paren {\dfrac a p}$ is the Legendre symbol.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
First note that no two elements of $s$ are congruent modulo $p$:
Let $r a \equiv s a \pmod p$ for some $r, s$ such that $1 \le s \le r \le \dfrac {p - 1} 2$.
As $a \perp p$, we have that $r a \equiv s a \implies r \equiv s \pmod p$ from Cancellability of Congruences.
Now $r \equiv s \pmod p$ can happen only when $r = s$ as $0 \le r - s \le \dfrac {p - 1} 2$.

Next, no element of $S$ is congruent modulo $p$ to $0$.
This is because $r a \equiv 0 \pmod p$ when $a \not \equiv 0$ requires $r \equiv 0$ which doesn't happen.

Now, we create $S'$ from $S$ by replacing each element of $S$ by its least positive residue modulo $p$.
Arranging $S'$ into increasing order, we get:

$S' = \set {b_1, b_2, \ldots, b_m, c_1, c_2, \ldots, c_n}$
where $b_m < \dfrac p 2 < c_1$ and $m + n = \dfrac {p - 1} 2$.
As $p$ is an odd prime, $\dfrac p 2$ is not an integer so neither $b_m$ nor $c_1$ can be equal to $\dfrac p 2$.

Now we let $S' ' = \set {b_1, b_2, \ldots, b_m, p - c_1, p - c_2, \ldots, p - c_n}$
We need to show that $S' ' = \set {1, 2, 3, \ldots, \dfrac {p - 1} 2}$.
Now:

all the elements of $S' '$ are positive, as all the $c_j < p$
the largest one is either $b_m$ or $p - c_1$
there are $\dfrac {p - 1} 2$ of them
they are all less than $\dfrac p 2$.
So $S' '$ contains $\dfrac {p - 1} 2$ positive integers all less than $\dfrac p 2$.
So all we need to do is show that they are distinct.

As all the elements of $S'$ are distinct, the $m$ elements $b_1, b_2, \ldots, b_m$ are distinct.
Similarly, so are the $n$ elements $p - c_1, p - c_2, \ldots, p - c_n$.
So, we suppose $b_i = p - c_j$ for some $i, j$ and try to derive a contradiction.
So:

$p = b_i + c_j \equiv r a + s a \pmod p$
for some $r, s$ such that $1 \le r, s \le \dfrac {p - 1} 2$.
But from:

$p \equiv \paren {r + s} a \pmod p$ and $a \not \equiv 0 \pmod p$
we apply Euclid's Lemma to get $r + s \equiv 0 \pmod p$.
But this is impossible since $2 \le r + s \le p - 1$.
This establishes that $S' ' = \set {1, 2, 3, \ldots, \dfrac {p - 1} 2}$.

Now, we multiply all the elements of $S' '$ together:














\(\ds \paren {\frac {p - 1} 2} !\)

\(=\)







\(\ds b_1 b_2 \cdots b_m \paren {p - c_1} \paren {p - c_2} \cdots \paren {p - c_n}\)




















\(\ds \)

\(\equiv\)







\(\ds b_1 b_2 \cdots b_m \paren {-c_1} \paren {-c_2} \cdots \paren {-c_n}\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {-1}^n b_1 b_2 \cdots b_m c_1 c_2 \cdots c_n\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {-1}^n a \times 2 a \times 3 a \times \cdots \frac {p - 1} 2 a\)

\(\ds \pmod p\)


















\(\ds \)

\(\equiv\)







\(\ds \paren {-1} ^n a^{\paren {\frac {p - 1} 2} } \times \paren {\frac {p - 1} 2} !\)

\(\ds \pmod p\)



as the elements in $S'$ are congruent, in some order, to those in $S$




Now, from GCD with Prime:

$\gcd \set {p, \paren {\dfrac {p - 1} 2} !} = 1$
So from Cancellability of Congruences the term $\paren {\dfrac {p - 1} 2} !$ can be cancelled from both sides of the above congruence:

$1 \equiv \paren {-1}^n a^{\paren {\frac {p - 1} 2} } \pmod p$
Finally, from the definition of the Legendre symbol:

$\paren {\dfrac a p} \equiv a^{\paren {\frac {p - 1} 2} } \pmod p$
Multiplying both sides of the congruence by $\paren {-1}^n$:

$\paren {\dfrac a p} = \paren {-1}^n$
$\blacksquare$


Source of Name
This entry was named for Carl Friedrich Gauss.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $47 \ \text {a)}$




