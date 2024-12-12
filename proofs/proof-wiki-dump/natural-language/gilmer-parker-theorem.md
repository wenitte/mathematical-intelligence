# 

Source: https://proofwiki.org/wiki/Gilmer-Parker_Theorem



Theorem
Let $\struct {R, +, *}$ be a GCD Domain.
Let $R \sqbrk x$ be a polynomial ring over $R$.

Then $R \sqbrk x$ is also a GCD Domain.


Proof

This article needs to be tidied.In particular: Under way, this will take a long time as this page is very far from following the house rules.
Use {{eqn}} template.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $K$ be the field of quotients of $R$.
Let $R \xrightarrow \varphi R \sqbrk x \xrightarrow \psi K \sqbrk x$
where $\varphi, \psi$ - embedding homomorphisms.
Let $\map {\operatorname{Prim} } {R \sqbrk x}$ be set of primitive polynomials of $R \sqbrk x$.
Let $\forall i \in \N \set {r_i \in R, \ f_i, g_i \in \R \sqbrk x, \ k_i \in K \sqbrk x, \ p_i \in \map {\operatorname{Prim} } {R \sqbrk x} }$
0. $p_i = r_j * f_l \implies r_j \sim 1$
Let $\cont {f_i}$ be content of $f_i$.
Let $f_1 = \cont {f_1} * p_1$, $f_2 = \cont {f_2} * p_2$


This page has been identified as a candidate for refactoring.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

As soon as polynomial domain over fraction field is Euclidean domain, it is GCD domain.
Let $\map {\operatorname{lcd} } {k_i}$ be the lowest common denominator of cofficients of $k_i$.
$k_0 = \gcd \set {p_1, p_2} \in K \sqbrk x$
$t_0 = \map {\operatorname {lcd} } {k_0} * k_0 \ \xrightarrow {\psi^{-1} } R \sqbrk x$
$t = \dfrac t {\cont {t_0} } \xrightarrow {\psi^{-1} } \map {\operatorname{Prim} } {R \sqbrk x}$
$\map {\operatorname{lcd} } {k_0}, \cont {t_0} \in K \sqbrk x^* \implies t \sim k_0$
$t \sim \gcd \set {p_1, p_2}$

$d = \gcd \set {\cont {f_1}, \cont {f_2 } } \in R$

l1. $\gcd \set {p_i, r_j} = 1 \in \R \sqbrk x$
$1 \divides p_i, \ r_j$
$x \divides r_j \implies x \in R$ (by in ID $\map \deg {f * g} = \map \deg f + \map \deg g)$
By 0:

$\paren {x \divides p_i \land x \in R} \implies x \sim 1$
So, any common divisor is associated with $1$



This page has been identified as a candidate for refactoring.In particular: This part(l2) is Euclid's Lemma and already proved there.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
l2. $\gcd \set {a, b} = 1 \implies \paren {a \divides b * c \implies a \divides c}$
By $\gcd \set {a, b} * \lcm \set {a, b} = a b$:
$\gcd \set {a, b} = 1 \implies \lcm \set {a, b} = a b$
$\paren {a \divides b * c \land b \divides b * c} \implies \lcm \set {a, b} \divides b * c \implies a * b  \divides b * c \implies a \divides c$

l3. 
$\begin{cases}
t \sim \gcd \set {p_1, p_2} \in K \sqbrk x
\\
t \xrightarrow {\psi^{-1} } \map {\operatorname{Prim} } {R \sqbrk x}
\end{cases}
\implies t \ \sim \gcd \set {p_1, p_2} \in R \sqbrk x$

3.1 $t \divides p_i \in K \sqbrk x \implies t \divides p_i \in R \sqbrk x$

$t \divides p_i \in K \sqbrk x \iff p_i = t * k_i$
$k_i = \dfrac {g_i} {\map {\operatorname{lcd} } {k_i} } = g_i * \map {\operatorname{lcd} } {k_i}^{-1} \implies$
$p_i = t * g_i * \map {\operatorname {lcd} } {k_i}^{-1}$
$p_i * \map {\operatorname{lcd} } {k_i} = t * g_i \implies$
$\begin{cases}
t \divides p_i * \map {\operatorname{lcd} } {k_i} 
\\
\gcd \set {t, \map {\operatorname {lcd} } {k_i} } = 1 \ \text{(by l1)}
\end{cases}
\implies t \divides p_i \in R \sqbrk x$ (by l2)

3.2 $g \in R \sqbrk x \ g \divides p_1, p_2 \implies g \divides t \in R \sqbrk x$
$g \divides p_1, p_2 \in R \sqbrk x \implies \ (by \ \psi )$
$g \divides p_1, p_2 \in K \sqbrk x \implies \ (by \ t - \gcd \set {p_1, p_2} )$
$g \divides t \in K \sqbrk x \implies \ (by \ \psi^{-1} )$
$g \divides t \in R \sqbrk x$

I. $d * t \ | f_1, f_2$

4. $d \divides \cont {f_i} \in R \implies d \divides \cont {f_i} \in R \sqbrk x \ (by \ \varphi)$

5.
$\begin{cases}
d \divides \cont {f_i}
\\
t \divides p_i
\end{cases}
\in R \sqbrk x \implies$

$\begin{cases}
d * t \divides \cont {f_i} * t
\\
\cont {f_i} * t \divides \cont {f_i} * p_i
\end{cases}
\implies d * t \divides f_i$

II. $\forall h \in R \sqbrk x (h \divides f_1, f_2 \implies h \divides d * t)$

6. Let $h \divides f_1, f_2$
$h = \cont h * p_3$

$\cont h, p_3 \divides h \divides f_i$
$\begin{cases}

 \cont h, p_3 \divides \cont {f_i} * p_i
 \\
 \gcd \set {p_i, \cont h} = 1 \ (by \ l1)
 \\
 \gcd \set {p_3, \cont {f_i} } = 1 

\end{cases}
\implies$ (by l2)
$\begin{cases}

 p_3 \divides p_i
 \\
 \cont h \divides \cont {f_i}

\end{cases}$

7. $\cont h \divides \cont {f_i}, \cont {f_2} \implies$
$\cont h \divides \gcd \set {\cont {f_i}, \cont {f_2} } \ (by \ \varphi \ gcd \ is \ same \in R \text{ and } R \sqbrk x)$
$\cont h \divides d$
$\cont h * p_3 \divides d * p_3$
$h \divides d * p_3$

8. $p_3 \divides p_1, p_2$
$p_3 \divides t$ (by l3)
$d * p_3 \divides d * t \implies$ (by 7)
$h \divides d * t$
So, for any $f_1, f_2 \in R \sqbrk x$, we have that $\gcd \set {f_1, f_2} = d * t$
$\blacksquare$


Source of Name
This entry was named for Robert William Gilmer and Thomas G. Parker.


Sources
1974: Robert William Gilmer and Thomas G. Parker: Divisibility properties in semigroup rings (Michigan Math. J. Vol. 21, no. 1: pp. 65 – 86)




