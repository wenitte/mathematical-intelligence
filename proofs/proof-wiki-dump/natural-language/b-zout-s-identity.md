# 

Source: https://proofwiki.org/wiki/B%C3%A9zout%27s_Identity



Theorem
Let $a, b \in \Z$ such that $a$ and $b$ are not both zero.

Let $\gcd \set {a, b}$ be the greatest common divisor of $a$ and $b$.
Then:

$\exists x, y \in \Z: a x + b y = \gcd \set {a, b}$

That is, $\gcd \set {a, b}$ is an integer combination (or linear combination) of $a$ and $b$.

Furthermore, $\gcd \set {a, b}$ is the smallest positive integer combination of $a$ and $b$.


Bézout's Identity on Euclidean Domain
Let $\struct {D, +, \times}$ be a Euclidean domain whose zero is $0$ and whose unity is $1$.
Let $\nu: D \setminus \set 0 \to \N$ be the Euclidean valuation on $D$.
Let $a, b \in D$ such that $a$ and $b$ are not both equal to $0$.

Let $\gcd \set {a, b}$ be the greatest common divisor of $a$ and $b$.
Then:

$\exists x, y \in D: a \times x + b \times y = \gcd \set {a, b}$
such that $\gcd \set {a, b}$ is the element of $D$ such that:

$\forall c = a \times x + b \times y \in D: \map \nu {\gcd \set {a, b} } \le \map \nu c$


Bézout's Identity on Principal Ideal Domain
Let $\struct {D, +, \circ}$ be a principal ideal domain.
Let $S = \set {a_1, a_2, \dotsc, a_n}$ be a set of non-zero elements of $D$.

Let $y$ be a greatest common divisor of $S$.

Then $y$ is expressible in the form:

$y = d_1 a_1 + d_2 a_2 + \dotsb + d_n a_n$
where $d_1, d_2, \dotsc, d_n \in D$.


Proof 1
Work the Euclidean Division Algorithm backwards.
$\blacksquare$


Proof 2
Let $a, b \in \Z$ such that $a$ and $b$ are not both zero.
Let $S$ be the set of all positive integer combinations of $a$ and $b$:

$S = \set {x \in \Z, x > 0: x = m a + n b: m, n \in \Z}$

First we establish that $S \ne \O$.
We have:














\(\ds a > 0\)

\(\implies\)







\(\ds \size a = 1 \times a + 0 \times b\)




















\(\ds a < 0\)

\(\implies\)







\(\ds \size a = \paren {-1} \times a + 0 \times b\)




















\(\ds b > 0\)

\(\implies\)







\(\ds \size b = 0 \times a + 1 \times b\)




















\(\ds b < 0\)

\(\implies\)







\(\ds \size b = 0 \times a + \paren {-1} \times b\)










As it is not the case that both $a = 0$ and $b = 0$, it must be that at least one of $\size a \in S$ or $\size b \in S$.
Therefore $S \ne \O$.

As $S$ contains only positive integers, $S$ is bounded below by $0$ and therefore $S$ has a smallest element.
Call this smallest element $d$: we have $d = u a + v b$ for some $u, v \in \Z$.

Let $x \in S$.
By the Division Theorem:

$x = q d + r, 0 \le r < d$
Suppose $d \nmid x$.
Then $x \ne q d$ and so $0 < r$.
But:












\(\, \ds \exists m, n \in \Z: \, \)

\(\ds x\)

\(=\)







\(\ds m a + n b\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds x - q d\)




















\(\ds \)

\(=\)







\(\ds \paren {m a + n b} - q \paren {u a + v b}\)




















\(\ds \)

\(=\)







\(\ds \paren {m - q u} a + \paren {n - q v} b\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {r \in S} \land \paren {r < d}\)









which contradicts the choice of $d$ as the smallest element of $S$.

Therefore $\forall x \in S: d \divides x$.
In particular:

$d \divides \size a = 1 \times a + 0 \times b$
$d \divides \size b = 0 \times a + 1 \times b$
Thus:

$d \divides a \land d \divides b \implies 1 \le d \le \gcd \set {a, b}$

However, note that as $\gcd \set {a, b}$ also divides $a$ and $b$ (by definition), we have:














\(\ds \gcd \set {a, b}\)

\(\divides\)







\(\ds \paren {u a + v b} = d\)





Common Divisor Divides Integer Combination








\(\ds \leadsto \ \ \)





\(\ds \gcd \set {a, b}\)

\(\divides\)







\(\ds d\)














\(\ds \leadsto \ \ \)





\(\ds \gcd \set {a, b}\)

\(\le\)







\(\ds d\)










Since $d$ is the smallest number in $S$:

$\gcd \set {a, b} = d = u a + v b$
$\blacksquare$


Proof 3
Consider the Euclidean algorithm in action:














\(\ds a\)

\(=\)







\(\ds q_1 b + r_1\)




















\(\ds b\)

\(=\)







\(\ds q_2 r_1 + r_2\)




















\(\ds r_1\)

\(=\)







\(\ds q_3 r_2 + r_3\)




















\(\ds \cdots\)

\(\)







\(\ds \)




















\(\ds r_{n - 2}\)

\(=\)







\(\ds q_n r_{n - 1} + r_n\)




















\(\ds r_{n - 1}\)

\(=\)







\(\ds q_{n + 1} r_n + 0\)









First it will be established that there exist $x_i, y_i \in \Z$ such that:

$(1): \quad a x_i + b y_i = r_i$
for $i \in \set{1, 2, \ldots, n - 1}$.

The proof proceeds by induction.


Basis for the Induction
When $i = 1$, let $x_1 = 1, y_1 = -q_1$.
When $i = 2$, let $x_2 = -q_2, y_2 = 1 + q_1 q_2$.
This is the basis for the induction.


Induction Hypothesis
Our induction hypothesis is that the integer solutions to $(1)$ have been found for all $i$ such that $i \le k$ where $k < n - 1$.


Induction Step
We know that:

$r_{k - 1} = r_k q_{k + 1} + r_{k + 1}$
Thus, by the induction hypothesis:

$\paren {a x_{k - 1} + b y_{k - 1} } - \paren {a x_k + b y_k} q_{k + 1} = r_{k + 1}$
which can be rewritten as:

$\paren {x_{k - 1} - x_k q_{k + 1} } a + \paren {y_{k - 1} - y_k q_{k + 1} } b = r_{k + 1}$
Hence we have the following solutions to $(1)$ when $i = k + 1$:

$x_{k + 1} = x_{k - 1} - x_k q_{k + 1}$
$y_{k + 1} = y_{k - 1} - y_k q_{k + 1}$

The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Proof 4
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


Proof 5
Let $\gcd \set {a, b} = d$.
Let $\dfrac a d = p$ and $\dfrac b d = q$.
From Integers Divided by GCD are Coprime:

$\gcd \left\{{p, q}\right\} = 1$
From Integer Combination of Coprime Integers:

$\exists x, y \in \Z: p x + q y = 1$
The result follows by multiplying both sides by $d$.
$\blacksquare$


Proof 6
We have that Integers are Euclidean Domain, where the Euclidean valuation $\nu$ is defined as:

$\map \nu x = \size x$
The result follows from Bézout's Identity on Euclidean Domain.
$\blacksquare$


Also known as
Bézout's Identity is also known as Bézout's lemma, but that result is usually applied to a similar theorem on polynomials.
Some sources omit the accent off the name: Bezout's identity (or Bezout's lemma), which may be a mistake.


Also see
Integer Combination of Coprime Integers


Applications
Bézout's Identity is primarily used when finding solutions to linear Diophantine equations, but is also used to find solutions via Euclidean Division Algorithm.
This result can also be applied to the Extended Euclidean Division Algorithm.


Source of Name
This entry was named for Étienne Bézout.


Historical Note
There are sources which suggest that Bézout's Identity was first noticed by Claude Gaspard Bachet de Méziriac.
Étienne Bézout's contribution was to prove a more general result, for polynomials.



A particular theorem is missing.In particular: This result can also be expanded to include more general objects, as far up as bézout domains. Specifically the page Bézout's Identity/Bézout Domain is needed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding the theorem.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{TheoremWanted}} from the code.
Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: The following is actually about polynomial ringsIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Bezout's lemma or Bezout's identity




