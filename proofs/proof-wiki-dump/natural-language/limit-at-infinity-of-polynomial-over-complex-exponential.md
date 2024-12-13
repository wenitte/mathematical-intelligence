# 

Source: https://proofwiki.org/wiki/Limit_at_Infinity_of_Polynomial_over_Complex_Exponential

Theorem
Let $n \in \N$.
Let $\map {P_n} x$ be a real polynomial, of degree $n$.
Let $e^z$ be the complex exponential function, where $z = x + i y$.
Let $a \in \R_{>0}$.

Then:

$\ds \lim_{x \mathop \to +\infty} \frac {\map {P_n} x} {e^{a z} } = 0$


Proof
Let $\epsilon > 0$.
By the definition of limits at infinity, we need to show that there is some $M \in \R$ such that:

$\ds x > M \implies \size {\frac {\map {P_n} x} {e^{a z} } - 0} < \epsilon$
But:














\(\ds \size {\frac {\map {P_n} x}{e^{a z} } - 0}\)

\(=\)







\(\ds \frac {\size {\map {P_n} x} } {\size {e^{a z} } }\)





Modulus of Product














\(\ds \)

\(=\)







\(\ds \frac {\size {\map {P_n} x} } {\size {e^{a x \mathop + i a y} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {\size {\map {P_n} x} } {\size {e^{a x} } }\)





Modulus of Exponential is Modulus of Real Part




This means it is sufficient to find an $M \in \R$ such that:














\(\ds \frac {\size {\map {P_n} x} } {\size {e^{a x} } }\)

\(<\)







\(\ds \epsilon\)










The validity of the material on this page is questionable.In particular: Exponential Dominates Polynomial doesn't say anything about the quotient. (Proof corrected Nov. 2016.)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $\ds \map {P_n} x = \sum_{j \mathop = 0}^n \paren {a_j x^j}$ where $a_j \in \R$ for every $j$ in $\set {0, \ldots, n}$.
Let $\ds M' = \frac 1 \epsilon \sum_{j \mathop = 0}^n \size {a_j}$.

We observe that $M' \ge 0$.
Also, for every $x > M'$:

$x > 0$ as $M' \ge 0$

We have for every $x > M'$:














\(\ds M'\)

\(<\)







\(\ds x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \frac 1 \epsilon \sum_{j \mathop = 0}^n \size {a_j}\)

\(<\)







\(\ds x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \frac 1 x \sum_{j \mathop = 0}^n \size {a_j}\)

\(<\)







\(\ds \epsilon\)





as $x \not = 0$ since $x > 0$




We have that for every $k \in \N$ there exists $N_k \in \N$ such that:

$x^k < e^{a x}$ for all $x > N_k$ by Exponential Dominates Polynomial
Let $N = \map \max {N_1, \ldots, N_{n + 1} }$.
We have for every $k \in \set {1, \ldots, n + 1}$:














\(\ds x^k\)

\(<\)







\(\ds e^{a x}\)





for all $x > N$








\(\ds \leadstoandfrom \ \ \)





\(\ds \frac {x^k} {e^{a x} }\)

\(<\)







\(\ds 1\)





for all $x > N$




Let $M = \map \max {M', N}$.
We get for every $x > M$:














\(\ds \frac {\size {\map {P_n} x} } {\size {e^{a x} } }\)

\(=\)







\(\ds \frac {\size {\sum_{j \mathop = 0}^n \paren {a_j x^j} } } {e^{a x} }\)




















\(\ds \)

\(\le\)







\(\ds \frac {\sum_{j \mathop = 0}^n \size {a_j x^j} } {e^{a x} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\sum_{j \mathop = 0}^n \paren {\size {a_j}  x^j} } {e^{a x} }\)





as $x^j > 0$ since $x > 0$














\(\ds \)

\(=\)







\(\ds \frac 1 x \frac {\sum_{j \mathop = 0}^n \paren {\size {a_j} x^\paren {j + 1} } } {e^{a x} }\)





as $x \not = 0$ since $x > 0$














\(\ds \)

\(=\)







\(\ds \frac 1 x \sum_{j \mathop = 0}^n \paren {\size {a_j} \frac {x^\paren {j + 1} } {e^{a x} } }\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 x \sum_{j \mathop = 0}^n \size {a_j} 1\)





as $\dfrac {x^\paren {j + 1} } {e^{a x} } < 1$ for every $j$ in $\set {0, \ldots, n}$














\(\ds \)

\(<\)







\(\ds \epsilon\)









$\blacksquare$





