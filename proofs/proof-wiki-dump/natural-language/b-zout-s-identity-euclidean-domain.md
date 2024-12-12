# 

Source: https://proofwiki.org/wiki/B%C3%A9zout%27s_Identity/Euclidean_Domain



Theorem
Let $\struct {D, +, \times}$ be a Euclidean domain whose zero is $0$ and whose unity is $1$.
Let $\nu: D \setminus \set 0 \to \N$ be the Euclidean valuation on $D$.
Let $a, b \in D$ such that $a$ and $b$ are not both equal to $0$.

Let $\gcd \set {a, b}$ be the greatest common divisor of $a$ and $b$.
Then:

$\exists x, y \in D: a \times x + b \times y = \gcd \set {a, b}$
such that $\gcd \set {a, b}$ is the element of $D$ such that:

$\forall c = a \times x + b \times y \in D: \map \nu {\gcd \set {a, b} } \le \map \nu c$


Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
We are given that $a, b \in D$ such that $a$ and $b$ are not both equal to $0$.
Without loss of generality, suppose specifically that $b \ne 0$.
Let $S \subseteq D$ be the set defined as:

$S = \set {x \in D_{\ne 0}: x = m \times a + n \times b: m, n \in D}$
where $D_{\ne 0}$ denotes $D \setminus 0$.
Setting $m = 0$ and $n = 1$, for example, it is noted that $b \in S$.
Therefore $S \ne \O$.

By definition, $\nu$ has the properties:

$(1): \quad \forall a, b \in D, b \ne 0: \exists q, r \in D$ such that $\map \nu r < \map \nu b$, or $r = 0$, such that:
$a = q \times b + r$
$(2): \quad \forall a, b \in D, b \ne 0$:
$\map \nu a \le \map \nu {a \times b}$
Let $\nu \sqbrk S$ denote the image of $S$ under $\nu$.
We have that:

$\nu \sqbrk S \subseteq \N$
Hence by the Well-Ordering Principle $\nu \sqbrk S$ has a smallest element.
Let $d \in S$ be such that $\map \nu d$ is that smallest element of $\nu \sqbrk S$.
By definition of $S$, we have that:

$d = u \times a + v \times b$
for some $u, v \in D$.

Let $x \in S$.
By $(2)$ above:

$x = q \times d + r$
such that either:

$\map \nu r < \map \nu d$
or:

$r = 0$

Aiming for a contradiction, suppose $r \ne 0$.
Then:










\(\ds \exists m, n \in D: \, \)



\(\ds x\)

\(=\)







\(\ds m \times a + n \times b\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds x - q \times d\)




















\(\ds \)

\(=\)







\(\ds \paren {m \times a + n \times b} - q \paren {u \times a + v \times b}\)




















\(\ds \)

\(=\)







\(\ds \paren {m - q \times u} a + \paren {n - q \times v} b\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \paren {r \in S} \land \paren {\map \nu r < \map \nu d}\)









which contradicts the choice of $d$ as the element of $S$ such that $\map \nu d$ is the smallest element of $\nu \sqbrk S$.

Therefore:

$\forall x \in S: x = q \times d$
for some $q \in D$.
That is:

$\forall x \in S: d \divides x$
where $\divides$ denotes divisibility.

In particular:

$d \divides a = 1 \times a + 0 \times b$
$d \divides b = 0 \times a + 1 \times b$
Thus:

$d \divides a \land d \divides b \implies \map \nu 1 \le \map \nu d \le \map \nu {\gcd \set {a, b} }$

However, note that as $\gcd \set {a, b}$ also divides $a$ and $b$ (by definition), we have:














\(\ds \gcd \set {a, b}\)

\(\divides\)







\(\ds \paren {u \times a + v \times b} = d\)














\(\ds \leadsto \ \ \)





\(\ds \gcd \set {a, b}\)

\(\divides\)







\(\ds d\)














\(\ds \leadsto \ \ \)





\(\ds \map \nu {\gcd \set {a, b} }\)

\(\le\)







\(\ds \map \nu d\)










Since $d$ is the element of $S$ such that $\map \nu d$ is the smallest element of $\nu \sqbrk S$:

$\gcd \set {a, b} = d = u \times a + v \times b$
$\blacksquare$


Also known as
Bézout's Identity is also known as Bézout's lemma, but that result is usually applied to a similar theorem on polynomials.
Some sources omit the accent off the name: Bezout's identity (or Bezout's lemma), which may be a mistake.


Source of Name
This entry was named for Étienne Bézout.


Historical Note
There are sources which suggest that Bézout's Identity was first noticed by Claude Gaspard Bachet de Méziriac.
Étienne Bézout's contribution was to prove a more general result, for polynomials.





