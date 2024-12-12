# 

Source: https://proofwiki.org/wiki/B%C3%A9zout%27s_Identity/Proof_2


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $a, b \in \Z$ such that $a$ and $b$ are not both zero.

Let $\gcd \set {a, b}$ be the greatest common divisor of $a$ and $b$.
Then:

$\exists x, y \in \Z: a x + b y = \gcd \set {a, b}$

That is, $\gcd \set {a, b}$ is an integer combination (or linear combination) of $a$ and $b$.

Furthermore, $\gcd \set {a, b}$ is the smallest positive integer combination of $a$ and $b$.


Proof
Let $a, b \in \Z$ such that $a$ and $b$ are not both zero.
Let $S$ be the set of all positive integer combinations of $a$ and $b$:

$S = \set {x \in \Z, x > 0: x = m a + n b: m, n \in \Z}$

First we establish that $S \ne \O$.
We have:














\(\ds a > 0\)

\(\implies\)







\(\ds \size a = 1 \times a + 0 \times b\)




















\(\ds a < 0\)

\(\implies\)







\(\ds \size a = \paren {-1} \times a + 0 \times b\)




















\(\ds b > 0\)

\(\implies\)







\(\ds \size b = 0 \times a + 1 \times b\)




















\(\ds b < 0\)

\(\implies\)







\(\ds \size b = 0 \times a + \paren {-1} \times b\)










As it is not the case that both $a = 0$ and $b = 0$, it must be that at least one of $\size a \in S$ or $\size b \in S$.
Therefore $S \ne \O$.

As $S$ contains only positive integers, $S$ is bounded below by $0$ and therefore $S$ has a smallest element.
Call this smallest element $d$: we have $d = u a + v b$ for some $u, v \in \Z$.

Let $x \in S$.
By the Division Theorem:

$x = q d + r, 0 \le r < d$
Suppose $d \nmid x$.
Then $x \ne q d$ and so $0 < r$.
But:












\(\, \ds \exists m, n \in \Z: \, \)

\(\ds x\)

\(=\)







\(\ds m a + n b\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds x - q d\)




















\(\ds \)

\(=\)







\(\ds \paren {m a + n b} - q \paren {u a + v b}\)




















\(\ds \)

\(=\)







\(\ds \paren {m - q u} a + \paren {n - q v} b\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {r \in S} \land \paren {r < d}\)









which contradicts the choice of $d$ as the smallest element of $S$.

Therefore $\forall x \in S: d \divides x$.
In particular:

$d \divides \size a = 1 \times a + 0 \times b$
$d \divides \size b = 0 \times a + 1 \times b$
Thus:

$d \divides a \land d \divides b \implies 1 \le d \le \gcd \set {a, b}$

However, note that as $\gcd \set {a, b}$ also divides $a$ and $b$ (by definition), we have:














\(\ds \gcd \set {a, b}\)

\(\divides\)







\(\ds \paren {u a + v b} = d\)





Common Divisor Divides Integer Combination








\(\ds \leadsto \ \ \)





\(\ds \gcd \set {a, b}\)

\(\divides\)







\(\ds d\)














\(\ds \leadsto \ \ \)





\(\ds \gcd \set {a, b}\)

\(\le\)







\(\ds d\)










Since $d$ is the smallest number in $S$:

$\gcd \set {a, b} = d = u a + v b$
$\blacksquare$


Source of Name
This entry was named for Étienne Bézout.


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $3$: The Integers: $\S 11$. Highest Common Factor: Theorem $19$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 23$
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.2$ The Greatest Common Divisor: Theorem $2 \text{-} 3$




