# 

Source: https://proofwiki.org/wiki/Existence_of_Subdivision_with_Small_Norm

Theorem
Let $\closedint a b$ be a closed real interval.
Let $\epsilon > 0$ be a positive real number.
Then, there exists a finite subdivision $P$ of $\closedint a b$ such that:

$\norm P < \epsilon$
where $\norm P$ denotes the norm of $P$.


Proof
By the Axiom of Archimedes, choose $N \in \N$ such that:

$N > \dfrac {b - a} \epsilon > 0$
For each $k \in \set {0, 1, \dotsc, N - 1, N}$, define:

$x_k = a + \dfrac k N \paren {b - a}$
We have:














\(\ds x_0\)

\(=\)







\(\ds a + \frac 0 N \paren {b - a}\)





Definition of $x_k$














\(\ds \)

\(=\)







\(\ds a\)




















\(\ds x_N\)

\(=\)







\(\ds a + \frac N N \paren {b - a}\)





Definition of $x_k$














\(\ds \)

\(=\)







\(\ds b\)




















\(\ds x_k - x_{k - 1}\)

\(=\)







\(\ds \paren {a + \frac k N \paren {b - a} } - \paren {a + \frac {k - 1} N \paren {b - a} }\)





Definition of $x_k$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {b - a} N\)




















\(\ds \)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x_{k - 1}\)

\(<\)







\(\ds x_k\)









Let $P = \set {x_0, x_1, \dotsc, x_{N - 1}, x_N}$.
From:

$x_0 = a$
$x_N = b$
$\forall k \in \set {1, \dotsc, N}: x_{k - 1} < x_k$
it follows that $P$ is a finite subdivision of $\closedint a b$.

Now:














\(\ds \norm P\)

\(=\)







\(\ds \max \set {x_k - x_{k - 1} : k \in \set {1, \dotsc, N} }\)





Definition of Norm of Subdivision














\(\ds \)

\(=\)







\(\ds \max \set {\frac {b - a} N}\)





$\paren 1$ holds for all $k$














\(\ds \)

\(=\)







\(\ds \frac {b - a} N\)




















\(\ds \)

\(<\)







\(\ds \frac {b - a} {b - a} \epsilon\)





Definition of $N$














\(\ds \)

\(=\)







\(\ds \epsilon\)









$\blacksquare$





