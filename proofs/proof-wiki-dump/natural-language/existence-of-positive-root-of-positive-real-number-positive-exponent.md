# 

Source: https://proofwiki.org/wiki/Existence_of_Positive_Root_of_Positive_Real_Number/Positive_Exponent

Theorem
Let $x \in \R$ be a real number such that $x > 0$.
Let $n \in \Z$ be an integer such that $n > 0$.

Then there exists a $y \in \R: y \ge 0$ such that $y^n = x$.


Proof 1
Let $f$ be the real function defined on the unbounded closed interval $\hointr 0 \to$ defined by $\map f y = y^n$.
Consider first the case of $n > 0$.
By Strictly Positive Integer Power Function is Unbounded Above:

$\exists q \in \R_{>0}: \map f q \ge x$
Since $x \ge 0$:

$\map f 0 \le x$
By the Intermediate Value Theorem:

$\exists y \in \R: 0 \le y \le q, \map f y = x$
Hence the result has been shown to hold for $n > 0$.
$\blacksquare$


Proof 2
Let $S$ be the set consisting of the positive real numbers $t$ such that $t^n < x$.
Let $t = \dfrac x {1 - x}$.
Then $0 < t < 1$ and so:

$t^n < t < x$
demonstrating that $S \ne \O$.
Let $t_0 = 1 + x$.
Then $t > t_0$ implies $t^n \ge t > x$.
So $t \notin S$.
Hence $t_0$ is an upper bound of $S$.
By the Continuum Property, $S$ has a supremum.

Let $y = \sup S$.
Aiming for a contradiction, suppose $y_n < x$.
Choose $h \in \R$ such that $0 < h < 1$ and such that:

$h < \dfrac {x - y^n} {\paren {1 + y}^n - y^n}$
Let $\dbinom n m$ denote a binomial coefficient.
By the Binomial Theorem, the coefficient of $z^m$ in the expansion of $\paren {1 + z}^n$ is
We have:














\(\ds \paren {y + h}^n\)

\(=\)







\(\ds y^n + \dbinom n 1 y^{n - 1} h + \dbinom n 2 y^{n - 2} h^2 + \dotsb + \dbinom n n h^n\)





Binomial Theorem














\(\ds \)

\(\le\)







\(\ds y^n + h \paren {\dbinom n 1 y^{n - 1} + \dbinom n 2 y^{n - 2} + \dotsb + \dbinom n n}\)





as $0 < h < 1$














\(\ds \)

\(=\)







\(\ds y^n + h \paren {\paren {1 + y}^n - y^n}\)





Binomial Theorem














\(\ds \)

\(<\)







\(\ds y^n + \paren {x - y^n}\)





Definition of $h$














\(\ds \)

\(=\)







\(\ds x\)









Thus we have $y + h \in S$, which contradicts the fact that $y$ is an upper bound of $S$.

Aiming for a contradiction, suppose $y^n > x$.
Let $k \in \R$ be chosen such that:

$0 < k < 1$
$k < y$
$k < \dfrac {y^n - x} {\paren {1 + y}^n - y^n}$
Let $t \ge y - k$.
Then:














\(\ds t^n\)

\(\ge\)







\(\ds \paren {y - k}^n\)




















\(\ds \)

\(=\)







\(\ds y^n - \dbinom n 1 y^{n - 1} h + \dbinom n 2 y^{n - 2} h^2 - \dotsb + \paren {-1} \dbinom n n h^n\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds y^n - k \paren {\dbinom n 1 y^{n - 1} + \dbinom n 2 y^{n - 2} k - \dotsb + \paren {-1} \dbinom n n k^{n - 1} }\)




















\(\ds \)

\(\ge\)







\(\ds y^n - k \paren {\dbinom n 1 y^{n - 1} + \dbinom n 2 y^{n - 2} + \dotsb + \dbinom n n}\)





as $0 < k < 1$














\(\ds \)

\(=\)







\(\ds y^n - k \paren {\paren {1 + y}^n - y^n}\)





Binomial Theorem














\(\ds \)

\(>\)







\(\ds y^n - \paren {y^n - x}\)





Definition of $k$














\(\ds \)

\(=\)







\(\ds x\)









Thus we have $y - k$ is an upper bound of $S$
This contradicts the fact that $y$ is the supremum of $S$.

It has been shown that both $y^n < x$ and $y^n > x$ lead to a contradiction.
Hence it must be the case that $y^n = x$.

Hence the result.
$\blacksquare$





