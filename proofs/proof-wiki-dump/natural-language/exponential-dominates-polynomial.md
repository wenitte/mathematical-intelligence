# 

Source: https://proofwiki.org/wiki/Exponential_Dominates_Polynomial

Theorem
Let $\exp$ denote the real exponential function.
Let $k \in \N$.
Let $\alpha \in \R_{>0}$.

Then: 

$\exists N \in \N: \forall x \in \R_{>N}: \map \exp {\alpha x} > x^k$


Proof
Choose any $N > \dfrac {\paren {k + 1}!} {\alpha^{k + 1} }$, where $!$ denotes the factorial.
By Taylor Series Expansion for Exponential Function we have for $x \in \R_{\ge 0}$:

$\ds \map \exp {\alpha x} = \sum_{m \mathop \ge 0} \frac {\paren {\alpha x}^m}{m!} > \frac {\paren {\alpha x}^{k + 1} } {\paren {k + 1}!}$

Therefore, for $x > N$:














\(\ds \map \exp {\alpha x}\)

\(>\)







\(\ds \frac {\paren {\alpha x}^{k + 1} } {\paren {k + 1}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {x \alpha^{k + 1} } {\paren {k + 1}!} x^k\)





factoring out an $x$














\(\ds \)

\(>\)







\(\ds \frac {N \alpha^{k + 1} } {\paren {k + 1}!} x^k\)





because $x > N$














\(\ds \)

\(>\)







\(\ds \frac {\paren {\dfrac {\paren {k + 1}!} {\alpha^{k + 1} } } \alpha^{k + 1} } {\paren {k + 1}!} x^k\)





Definition of $N$














\(\ds \)

\(=\)







\(\ds x^k\)









$\blacksquare$





