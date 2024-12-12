# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Positive_Dividend/Existence/Proof_1

Theorem
For every pair of integers $a, b$ where $a \ge 0$ and $b > 0$, there exist integers $q, r$ such that $a = q b + r$ and $0 \le r < b$:

$\forall a, b \in \Z, a \ge 0, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
Let $a, b \in \Z$ such that $a \ge 0$ and $b > 0$ be given.
Let $S$ be defined as the set of all positive integers of the form $a - z b$ where $z$ is an integer:

$S = \set {x \in \Z_{\ge 0}: \exists z \in \Z: x = a - z b}$
By setting $z = 0$ we have that $a \in S$.
Thus $S \ne \O$.
We have that $S$ is bounded below by $0$.
From Set of Integers Bounded Below by Integer has Smallest Element it follows that $S$ has a smallest element $r$.
Thus:

$\exists q \in \Z: a - q b = r$
and so:

$a = q b + r$
So we have proved the existence of $q$ and $r$ such that $a = q b + r$.

It remains to be shown that $0 \le r < b$.
We have that $r \in S$ which is bounded below by $0$.
Therefore $0 \le r$.

Aiming for a contradiction, suppose $b \le r$.
So:














\(\ds b\)

\(\le\)







\(\ds r\)




















\(\ds \)

\(<\)







\(\ds r + b\)





as $b > 0$








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\le\)







\(\ds r - b\)




















\(\ds \)

\(<\)







\(\ds r\)





subtracting $b$ throughout



But then:














\(\ds a\)

\(=\)







\(\ds q b + r\)





from above








\(\ds \leadsto \ \ \)





\(\ds r - b\)

\(=\)







\(\ds \paren {a - q b} - b\)




















\(\ds \)

\(=\)







\(\ds a - b \paren {q + 1}\)














\(\ds \leadsto \ \ \)





\(\ds r - b\)

\(\in\)







\(\ds S\)





as $r - b$ is of the correct form




But $r - b < r$ contradicts the choice of $r$ as the least element of $S$.
Hence $r < b$ as required.

Thus the existence of $q$ and $r$ satisfying $a = q b + r, 0 \le r < b$ has been demonstrated.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 21$
1982: Martin Davis: Computability and Unsolvability (2nd ed.) ... (previous) ... (next): Appendix $1$: Some Results from the Elementary Theory of Numbers: Theorem $6$
1996: John F. Humphreys: A Course in Group Theory ... (next): $\text{A}.1$: Number theory: Theorem $\text{A}.1$




