# 

Source: https://proofwiki.org/wiki/Hensel%27s_Lemma/First_Form

Theorem
Let $p$ be a prime number.
Let $k > 0$ be a positive integer.
Let $f \left({X}\right) \in \Z \left[{X}\right]$ be a polynomial.
Let $x_k \in \Z$ such that:

$f \left({x_k}\right) \equiv 0 \pmod {p^k}$
$f' \left({x_k}\right) \not \equiv 0 \pmod p$

Then for every integer $l \ge 0$, there exists an integer $x_{k + l}$ such that:

$f \left({x_{k + l} }\right) \equiv 0 \pmod {p^{k + l} }$
$x_{k + l}\equiv x_k \pmod {p^k}$
and any two integers satisfying these congruences are congruent modulo $p^{k + l}$.
Moreover, for all $l\geq0$ and any solutions $x_{k + l}$ and $x_{k + l + 1}$:

$x_{k + l + 1} \equiv x_{k + l} - \dfrac {f \left({x_{k + l} }\right)} {f' \left({x_{k + l} }\right)} \pmod {p^{k + l + 1} }$
$x_{k + l + 1} \equiv x_{k + l} \pmod {p^{k + l} }$


Proof
We use induction on $l$.
The base case $l = 0$ is trivial.
Let $l \ge 0$ be such that a solution $x_{k + l}$ exists and is unique up to a multiple of $p^{k + l}$.
Choose a solution $x_{k + l}$ satisfying:

$f \left({x_{k + l} }\right) \equiv 0 \pmod {p^{k + l} }$
$x_{k + l} \equiv x_k \pmod {p^k}$
By Congruence by Divisor of Modulus, each solution $x_{k + l + 1}$ is also a solution of the previous congruence.
By uniqueness, it has to satisfy $x_{k + l + 1}\equiv x_{k + l} \pmod {p^{k + l} }$, hence is of the form $x_{k+  l} + t p^{k + l}$ with $t \in \Z$.
Let $d = \deg f$.
We have, for all $t \in \Z$:














\(\ds f \left({x_{k + l} + t p^{k + l} }\right)\)

\(=\)







\(\ds f \left({x_{k + l} }\right) + t p^{k + l} f' \left({x_{k + l} }\right) + \left({t p^{k + l} }\right)^2 m\)





for some $m \in \Z$, by Taylor Expansion for Polynomials: Order 1














\(\ds \)

\(\equiv\)







\(\ds f \left({x_{k+l} }\right) + t p^{k + l} f' \left({x_{k + l} }\right) \pmod {p^{k + l + 1} }\)









Because $f' \left({x_{k + l} }\right) \equiv f' \left({x_k}\right) \not \equiv 0 \pmod p$, $f' \left({x_{k + l} }\right)$ is invertible modulo $p$.


This article needs to be linked to other articles.In particular: invertible modulo $p$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Thus $x_{k + l} + t p^{k + l}$ is a solution modulo $p^{k + l + 1}$ if and only if:

$t \equiv - \dfrac {f \left({x_{k + l} }\right)} {f' \left({x_{k + l} }\right)} \pmod p$
Thus, necessarily:

$x_{k + l + 1} \equiv x_{k + l} - \dfrac {f \left({x_{k + l} }\right)} {f' \left({x_{k + l} }\right)} \pmod {p^{k + l + 1} }$
which proves the existence and uniqueness.
By induction, we have shown uniqueness and existence for all $l \ge 0$, as well as the relations:

$x_{k + l + 1} \equiv x_{k + l} - \dfrac {f \left({x_{k + l} }\right)} {f' \left({x_{k + l} }\right)} \pmod {p^{k + l + 1} }$
$x_{k + l + 1} \equiv x_{k + l} \pmod {p^{k + l} }$
$\blacksquare$


Also see
Hensel's Lemma for Composite Numbers




