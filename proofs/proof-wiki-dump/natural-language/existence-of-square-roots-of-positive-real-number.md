# 

Source: https://proofwiki.org/wiki/Existence_of_Square_Roots_of_Positive_Real_Number



Theorem
Let $r \in \R_{\ge 0}$ be a positive real number.
Then:

$\exists y_1 \in \R_{\ge 0}: {y_1}^2 = r$
$\exists y_2 \in \R_{\le 0}: {y_2}^2 = r$


Proof
Let $S = \set {x \in \R: x^2 < r}$.
As $0 \in S$, it follows that $S$ is non-empty.
To show that $S$ is bounded above, we note that $r + 1$ is an upper bound:

$y > r + 1 \implies y^2 > r^2 + 2 r + 1 > r$
and so $y \notin S$.
Thus $x \in S \implies x < r + 1$.
By the Completeness Axiom, $S$ has a supremum, say:

$u = \sup S$
We already have that $u \ge 0$, as $0 \in S$ as seen.
It remains to demonstrate that $u^2 = r$.

Aiming for a contradiction, suppose $u^2 \ne r$.
Then either $u^2 > r$ or $u^2 < r$.

Suppose that $u^2 > r$.
Then:

$\dfrac {u^2 - r} {2 u} > 0$
So there exists $n \in \N$ such that:

$0 < \dfrac 1 n < \dfrac {u^2 - r} {2 u}$

We note that:














\(\ds u - \dfrac {u^2 - 2 r} {2 u}\)

\(=\)







\(\ds \dfrac {u^2 + 2 r} {2 u}\)





algebraic manipulation














\(\ds \)

\(>\)







\(\ds 0\)





as $u > 0$ and $r > 0$








\(\ds \leadsto \ \ \)





\(\ds \dfrac 1 n\)

\(<\)







\(\ds u\)














\(\ds \leadsto \ \ \)





\(\ds u - \dfrac 1 n\)

\(>\)







\(\ds 0\)










Then:














\(\ds \paren {u - \dfrac 1 n}^2\)

\(=\)







\(\ds u^2 - \dfrac {2 u} n + \dfrac 1 {n^2}\)




















\(\ds \)

\(>\)







\(\ds u^2 - \dfrac {2 u} n\)




















\(\ds \)

\(>\)







\(\ds u^2 - \paren {u^2 - r}\)





as $\dfrac 1 n < \dfrac {u^2 - r} {2 u}$














\(\ds \)

\(=\)







\(\ds r\)









Hence:














\(\ds x\)

\(\in\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds x^2\)

\(<\)







\(\ds r\)




















\(\ds \)

\(<\)







\(\ds \paren {u - \dfrac 1 n}^2\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(<\)







\(\ds u - \dfrac 1 n\)









which contradicts the leastness of $u$.

Suppose instead that $u^2 < r$.
Then $\exists n \in \N$ such that:

$0 < \dfrac 1 n \le \dfrac {r - u^2} {4 u}$
and:

$\dfrac 1 n < 2 u$
Then:














\(\ds \paren {u + \dfrac 1 n}^2\)

\(=\)







\(\ds u^2 + \dfrac {2 u} n + \dfrac 1 {n^2}\)




















\(\ds \)

\(<\)







\(\ds u^2 + \dfrac {2 u} n + \dfrac {2 u} n\)





as $\dfrac 1 n < 2 u$














\(\ds \)

\(\le\)







\(\ds u^2 + r - u^2\)





as $r - u^2 \ge \dfrac {4 u} n$














\(\ds \)

\(=\)







\(\ds r\)









Hence:

$u + \dfrac 1 n \in S$
which contradicts the fact that $u$ is an upper bound of $S$.
Hence by Proof by Contradiction it follows that $u^2 = r$.
Hence let:

$y_1=u$
and:

$y_2=-u$
$\blacksquare$


Examples
Example: $\sqrt 2$
There exists $u \in \R$ such that $u^2 = 2$.


Sources
1937: Eric Temple Bell: Men of Mathematics ... (previous) ... (next): Chapter $\text{IX}$: Analysis Incarnate
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): square root




