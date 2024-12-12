# 

Source: https://proofwiki.org/wiki/B%C3%A9zout%27s_Identity/Proof_4

Theorem
Let $a, b \in \Z$ such that $a$ and $b$ are not both zero.

Let $\gcd \set {a, b}$ be the greatest common divisor of $a$ and $b$.
Then:

$\exists x, y \in \Z: a x + b y = \gcd \set {a, b}$

That is, $\gcd \set {a, b}$ is an integer combination (or linear combination) of $a$ and $b$.

Furthermore, $\gcd \set {a, b}$ is the smallest positive integer combination of $a$ and $b$.


Proof
Let $a, b \in \Z$ such that $a$ and $b$ are not both zero.
Let $J$ be the set of all integer combinations of $a$ and $b$:

$J = \set {x: x = m a + n b: m, n \in \Z}$

First we show that $J$ is an ideal of $\Z$
Let $\alpha = m_1 a + n_1 b$ and $\beta = m_2 a + n_2 b$, and let $c \in \Z$
Then $\alpha,\beta \in J$ and :















\(\ds \alpha + \beta\)

\(=\)







\(\ds m_1 a + n_1 b + m_2 a + n_2 b\)




















\(\ds \)

\(=\)







\(\ds \paren {m_1 + m_2} a + \paren {n_1 + n_2} b\)














\(\ds \leadsto \ \ \)





\(\ds \alpha + \beta\)

\(\in\)







\(\ds J\)
























\(\ds c \alpha\)

\(=\)







\(\ds c \paren {m_1 a + n_1 b}\)




















\(\ds \)

\(=\)







\(\ds \paren {c m_1} a + \paren {c n_1} b\)














\(\ds \leadsto \ \ \)





\(\ds c \alpha\)

\(\in\)







\(\ds J\)










Thus $J$ is an integral ideal.
We have that:














\(\ds a\)

\(=\)







\(\ds 1 a + 0 b\)


















\(\, \ds \land \, \)

\(\ds b\)

\(=\)







\(\ds 0 a + 1 b\)














\(\ds \leadsto \ \ \)





\(\ds a, b\)

\(\in\)







\(\ds J\)










$a$ and $b$ are not both zero, thus:

$J \ne \set 0$
By the something {theorem about ideals}:


This article, or a section of it, needs explaining.In particular: what is "By the something {theorem about ideals}"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\exists x_0 > 0 : J = x_0 \Z$


$a \in J \land \set {J = x_0 \Z} \implies x_0 \divides a$
$b \in J \land \set {J = x_0 \Z} \implies x_0 \divides b$


$x_0 \divides a \land x_0 \divides b \implies x_0 \in \map D {a, b}$

This article, or a section of it, needs explaining.In particular: What is $\map D {a, b}$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Furthermore:

$x_0 \in J \implies \exists r, s \in \Z : x_0 = r a + s b$

Let $x_1 \in \map D {a, b}$.
Then:














\(\ds x_1 \in \map D {a, b}\)

\(\leadsto\)







\(\ds x_1 \divides a \land x_1 \divides b\)




















\(\ds \)

\(\leadsto\)







\(\ds x_1 \divides \paren {r a + s b}\)




















\(\ds \)

\(\leadsto\)







\(\ds x_1 \vert x_0\)




















\(\ds \)

\(\leadsto\)







\(\ds \size {x_1} \le \size {x_0} = x_0\)









Thus:

$x_0 = \max \set {\map D {a, b} } = \gcd \set {a, b} = r a + s b$
$\blacksquare$





