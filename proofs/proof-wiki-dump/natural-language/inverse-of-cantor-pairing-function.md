# 

Source: https://proofwiki.org/wiki/Inverse_of_Cantor_Pairing_Function

Theorem
Let $\pi : \N^2 \to \N$ be the Cantor pairing function.

Define $k : \N \to \N$ as:

$\map k z$ is the largest $k$ such that $T_k \le z$
where $T_k$ is the $k$-th triangular number.
Let $\pi_1 : \N \to \N$ be defined as:

$\ds \map {\pi_1} z = z - T_{\map k z}$
Let $\pi_2 : \N \to \N$ be defined as:

$\map {\pi_2} z = \map k z - \map {\pi_1} z$

Then:

$\pi_1$ and $\pi_2$ are well-defined
For every $z \in \N$:
$\map \pi {\map {\pi_1} z, \map {\pi_2} z} = z$
For every $x, y \in \N$:
$\map {\pi_1} {\map \pi {x, y}} = x$
$\map {\pi_2} {\map \pi {x, y}} = y$


Proof
By definition of $\map k z$, we have $T_{\map k z} \le z$.
Thus, $z - T_{\map k z} \ge 0$.
Therefore, $\pi_1$ is well-defined.

Aiming for a contradiction, suppose $\map {\pi_1} z > \map k z$.
That is:

$z > T_{\map k z} + \map k z$
Or:

$z \ge T_{\map k z} + \map k z + 1 = T_{\map k z + 1}$
which contradicts the maximality of $\map k z$.
Thus, by Proof by Contradiction:

$\map {\pi_1} z \le \map k z$
Therefore:

$\map k z - \map {\pi_1} z \ge 0$
and $\pi_2$ is well-defined.
$\Box$

Let $z \in \N$ be arbitrary.
We have:














\(\ds \map \pi {\map {\pi_1} z, \map {\pi_2} z}\)

\(=\)







\(\ds \frac 1 2 \paren {\map {\pi_1} z + \map {\pi_2} z} \paren {\map {\pi_1} z + \map {\pi_2} z + 1} + \map {\pi_1} z\)





Definition of Cantor Pairing Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\map k z} \paren {\map k z + 1} + \map {\pi_1} z\)





Definition of $\pi_2$














\(\ds \)

\(=\)







\(\ds T_{\map k z} + \map {\pi_1} z\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds z\)





Definition of $\pi_1$



$\Box$

Let $x, y \in \N$ be arbitrary.
We have:














\(\ds \map \pi {x, y}\)

\(=\)







\(\ds \frac 1 2 \paren {x + y} \paren {x + y + 1} + x\)





Definition of Cantor Pairing Function














\(\ds \)

\(=\)







\(\ds T_{x + y} + x\)





Closed Form for Triangular Numbers



Since:

$T_{x + y} + x \ge T_{x + y}$
we have:

$\map k {\map \pi {x, y}} \ge x + y$
Since:

$x \le x + y$
we have:

$T_{x + y} + x \le T_{x + y} + \paren {x + y + 1} = T_{x + y + 1}$
Hence:

$\map k {\map \pi {x, y}} < x + y + 1$
Therefore:

$\map k {\map \pi {x, y}} = x + y$

It follows:














\(\ds \map {\pi_1} {\map \pi {x, y} }\)

\(=\)







\(\ds \map \pi {x, y} - T_{\map k {\map \pi {x, y} } }\)





Definition of $\pi_1$














\(\ds \)

\(=\)







\(\ds \map \pi {x, y} - T_{x + y}\)





Above














\(\ds \)

\(=\)







\(\ds T_{x + y} + x - T_{x + y}\)





Above














\(\ds \)

\(=\)







\(\ds x\)









And:














\(\ds \map {\pi_2} {\map \pi {x, y} }\)

\(=\)







\(\ds \map k {\map \pi {x, y} } - \map {\pi_1} {\map \pi {x, y} }\)





Definition of $\pi_2$














\(\ds \)

\(=\)







\(\ds x + y - x\)





Both above














\(\ds \)

\(=\)







\(\ds y\)









$\blacksquare$





