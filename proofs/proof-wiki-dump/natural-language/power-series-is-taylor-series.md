# 

Source: https://proofwiki.org/wiki/Power_Series_is_Taylor_Series



Theorem
Let $\ds \map f z = \sum_{n \mathop = 0}^\infty a_n \paren {z - \xi}^n$ be a complex power series about $\xi \in \C$.
Let $R$ be the radius of convergence of $f$.

Then, $f$ is of differentiability class $C^\infty$.
For all $n \in \N$:

$a_n = \dfrac {\map {f^{\paren n} } \xi} {n!}$
Hence, $f$ is equal to its Taylor series expansion about $\xi$:

$\ds \forall z \in \C, \size {z - \xi} < R: \quad \map f z = \sum_{n \mathop = 0}^\infty \dfrac {\paren {z - \xi}^n} {n!} \map {f^{\paren n} } \xi$


Proof
First, we prove by induction over $k \in \N_{\ge 1}$ that:

$\ds \map {f^{\paren k} } z = \sum_{n \mathop = k}^\infty a_n \paren {z - \xi}^{n - k} n^{\underline k}$
where $n^{\underline k}$ denotes the falling factorial.


Basis for the Induction
For $k = 1$, it follows from Derivative of Complex Power Series that 

$\ds \map {f^{\paren k} } z = \sum_{n \mathop = 1}^\infty n a_n \paren {z - \xi}^{n - 1}$
As $n = n^{\underline 1}$, this proves the hypothesis.
From Radius of Convergence of Derivative of Complex Power Series, it follows that the equation holds for all $z \in \C$ with $\size {z - \xi} < R$.


Induction Hypothesis
For fixed $k \in \N_{\ge 1}$, the hypothesis is that:

$\ds \map {f^{\paren k} } z = \sum_{n \mathop = k}^\infty a_n \paren {z - \xi}^{n - k} n^{\underline k}$
and $f^{\paren k}$ has radius of convergence $R$.


Induction Step
Note that $f^{\paren {k + 1} }$ is the derivative of $f^{\paren k}$.
From Radius of Convergence of Derivative of Complex Power Series, it follows that $f^{\paren {k + 1} }$ has radius of convergence $R$.
For $z \in \C$ with $\size {z - \xi} < R$, we have:














\(\ds f^{\paren {k + 1} }\)

\(=\)







\(\ds \map {\dfrac \d {\d z} } {\sum_{n \mathop = k}^\infty a_n \paren {z - \xi}^{n - k} n^{\underline k} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d z} } {\sum_{n \mathop = 0}^\infty a_{n + k} \paren {z - \xi}^n \paren {n + k}^{\underline k} }\)





subtracting $k$ from $n$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty n a_{n + k} \paren {z - \xi}^{n - 1} \paren {n + k}^{\underline k}\)





Derivative of Complex Power Series














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty a_{n + k} \paren {z - \xi}^{n - 1} \paren {n + k}^{\underline {k + 1} }\)





Definition of Falling Factorial














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = k + 1}^\infty a_n \paren {z - \xi}^{n - \paren {k + 1} } n^{\underline {k + 1} }\)





adding $k$ to $n$



$\Box$

With $k \in \N$, we have:














\(\ds \map {f^{\paren k} } \xi\)

\(=\)







\(\ds \sum_{n \mathop = k}^\infty a_n \paren {\xi - \xi}^{n - k} n^{\underline k}\)




















\(\ds \)

\(=\)







\(\ds a_k 0^0 k^{\underline k}\)




















\(\ds \)

\(=\)







\(\ds a_k k!\)









Hence, it follows that $a_n = \dfrac {\map {f^{\paren n} } \xi} {n!}$.
By definition of Taylor series, it follows that $f$ is equal to its Taylor series expansion about $\xi$.
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 1.4$




