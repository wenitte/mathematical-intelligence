# 

Source: https://proofwiki.org/wiki/Division_Theorem/Positive_Divisor/Existence/Proof_1

Theorem
For every pair of integers $a, b$ where $b > 0$, there exist integers $q, r$ such that $a = q b + r$ and $0 \le r < b$:

$\forall a, b \in \Z, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$


Proof
From Division Theorem: Positive Divisor: Positive Dividend: Existence:

$\forall a, b \in \Z, a \ge 0, b > 0: \exists q, r \in \Z: a = q b + r, 0 \le r < b$
That is, the result holds for positive $a$.
$\Box$

It remains to be shown that the statement holds for $a < 0$.

From Division Theorem: Positive Divisor: Positive Dividend:

$\exists \tilde q, \tilde r \in \Z: \size a = \tilde q b + \tilde r, 0 \le \tilde r < b$
where $\size a$ denotes the absolute value of $a$: by definition $\size a \ge 0$.

As $a < 0$ it follows by definition of absolute value that $\size a = -a$.
This gives:














\(\ds a\)

\(=\)







\(\ds -\size a\)




















\(\ds \)

\(=\)







\(\ds -\paren {\tilde q b + \tilde r}\)




















\(\ds \)

\(=\)







\(\ds b \paren {-\tilde q} + \paren {-\tilde r}\)










Let $\tilde r = 0$.
Then:

$q = -\tilde q, r = \tilde r = 0$
which gives:

$a = q b + r, 0 \le r < b$
as required.

Otherwise:

$0 < \tilde r < b \implies 0 < b - \tilde r < b$
which suggests a rearrangement of the expression for $a$ above:














\(\ds a\)

\(=\)







\(\ds b \paren {-\tilde q} + \paren {-\tilde r}\)




















\(\ds \)

\(=\)







\(\ds b \paren {-\tilde q} - b + b - \tilde r\)




















\(\ds \)

\(=\)







\(\ds b \paren {-1 - \tilde q} + \paren {b - \tilde r}\)










Taking:

$q = \paren {-1 - \tilde q}$
and:

$r = \paren {b - \tilde r}$
the required result follows.

Uniqueness of $q$ and $r$ follow from the Uniqueness of $\tilde q$ and $\tilde r$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Theorem $24.1$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {2-1}$ Euclid's Division Lemma: Theorem $\text {2-1}$




