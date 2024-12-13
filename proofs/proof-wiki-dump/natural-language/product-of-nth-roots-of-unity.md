# 

Source: https://proofwiki.org/wiki/Product_of_nth_Roots_of_Unity

Theorem
Let $n \in \Z$ be an integer such that $n > 0$.
Let $z \in \C$ be a complex number such that $z^n = 1$.
Then:

$U_n = \set {e^{2 i k \pi / n}: k \in \N_n}$
where $U_n$ is the set of $n$th roots of unity.
That is:

$z \in \set {1, e^{2 i \pi / n}, e^{4 i \pi / n}, \ldots, e^{2 \paren {n - 1} i \pi / n} }$
Then the product of all of the elements of $U_n$ is $(-1)^{n-1}$


Proof













\(\ds \prod_{k \mathop = 0}^{n - 1} e^{2 i k \pi / n}\)

\(=\)







\(\ds e^{2 i \paren {0} \pi / n} e^{2 i \paren {1} \pi / n} e^{2 i \paren {2} \pi / n} \dotsm e^{2 i \paren {n - 1} \pi / n}\)




















\(\ds \)

\(=\)







\(\ds e^{\paren {2 i \pi / n} \paren {0 + 1 + \dotsm + \paren {n - 1} } }\)





Product of Powers














\(\ds \)

\(=\)







\(\ds e^{\paren {2 i \pi / n} \paren {\frac {n \paren {n - 1} } 2 } }\)





Closed Form for Triangular Numbers














\(\ds \)

\(=\)







\(\ds e^{\paren {i \pi } \paren {n - 1 } }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{\paren {n - 1 } }\)





$e^{i \pi} = -1$




$\blacksquare$





