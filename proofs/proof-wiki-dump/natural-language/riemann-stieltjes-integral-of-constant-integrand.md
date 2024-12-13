# 

Source: https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_of_Constant_Integrand

Theorem
Let $\alpha$ be a real function that is bounded on $\closedint a b$.
Let $f : \closedint a b \to \R$ be defined as:

$\map f x = c$
for some $c \in \R$.

Then, $f$ is Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint a b$, and:

$\ds \int_a^b f \rd \alpha = c \map \alpha b - c \map \alpha a$


Proof
Let $\epsilon > 0$
Define $P_\epsilon = \set {a, b}$.
Let $P = \set {x_0, \dotsc, x_n}$ be a subdivision of $\closedint a b$ that is finer than $P_\epsilon$.
Then:














\(\ds \map S {P, f, \alpha}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {c \map \alpha {x_k} - c \map \alpha {x_{k - 1} } }\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds c \map \alpha {x_n} - c \map \alpha {x_0}\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds c \map \alpha b - c \map \alpha a\)





Definition of Finite Subdivision



Therefore:














\(\ds \size {\map S {P, f, \alpha} - \paren {c \map \alpha b - c \map \alpha a} }\)

\(=\)







\(\ds \size {\paren {c \map \alpha b - c \map \alpha a} - \paren {c \map \alpha b - c \map \alpha a} }\)





Above














\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)





Definition of $\epsilon$



Therefore, by definition of the Riemann-Stieltjes integral:

$\ds \int_a^b f \rd \alpha = c \map \alpha b - c \map \alpha a$
$\blacksquare$


Sources
1974: Tom M. Apostol: Mathematical Analysis (2nd ed.): Chapter $7$ The Riemann-Stieltjes Integral: Exercise $7.1$




