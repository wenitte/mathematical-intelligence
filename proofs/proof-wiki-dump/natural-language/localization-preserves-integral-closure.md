# 

Source: https://proofwiki.org/wiki/Localization_Preserves_Integral_Closure

Theorem
Let $A \subseteq B$ be an extension of commutative rings with unity.
Let $C$ be the integral closure of $A$ in $B$.
Let $S \subseteq A$ be a multiplicatively closed subset.

Then $C_S$ is the integral closure of $A_S$ in $B_S$, where subscript $S$ indicates the localization at $S$.


Proof
First we show that $C_S$ is an integral extension of $A_S$.
Let $x \in C_S$, and $\iota$ be the canonical inclusion from a ring to its localization.
There exists $s \in S$ such that $sx \in \iota(C)$, say $sx = \iota(c)$.
Since $c \in C$ is integral, there is an equation:

$c^n + a_{n-1}c^{n-1} + \cdots + a_1 c + a_0 = 0$
with the $a_i \in A$. Since $\iota$ is a homomorphism, we have:

$\left({s x}\right)^n + \iota \left({a_{n-1} }\right) \left({s x}\right)^{n-1} + \cdots + \iota \left({a_1}\right) \left({s x}\right) + \iota \left({a_0}\right) = 0$

This article, or a section of it, needs explaining.In particular: Just a link, probably, to indicate the nature of $\iota$ - so as to confirm that it is a (ring) homomorphism.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Multiplying by $s^{-n}$ this gives:

$x^n + s^{-1}\iota \left({a_{n-1} }\right)x^{n-1} + \cdots + x^{1-n} \iota \left({a_1}\right) x + s^{-n}\iota \left({a_0}\right) = 0$
This is a monic polynomial with coefficients in $A_S$, so $x$ is integral over $A_S$.

Now let $x \in B_S$ be integral over $A_S$.
So we have an equation

$x^n + r_{n-1}x^{n-1} + \cdots + r_1 x + r_0 = 0$
Let:

$t \in S$ be such that $t x \in \iota \left({B}\right)$
$u_i$ be such that $u_i r_i \in \iota \left({A}\right)$ for $i = 0, \ldots, n-1$
$s = t u_0 \cdots u_{n-1}$.
Then we have:

$\left({s x}\right)^n + r_{n-1} s \left({s x}\right)^{n-1} + \cdots + r_1 s^{n-1} \left({s x}\right) + r_0 s^n = 0$
Now let:

$s x = \iota \left({y}\right)$ for $y \in B$
$r_{n-i} s^i = \iota \left({q_i}\right)$ for $i = 1, \ldots, n$
Then:

$\iota \left({y^n + q_1 y^{n-1} + \cdots + q_{n-1} y + q_n}\right) = 0$
Now:

$\ker \left({\iota: B \to B_S}\right) = \left\{{x \in B : s x = 0 \text{ for some } s \in S}\right\}$
So there exists $v \in S$ such that:

$\left({v y}\right)^n + q_1 v (\left({v y}\right)^{n-1} + \cdots + q_{n-1} v^{n-1} \left({v y}\right) + q_n v^n = 0$
Therefore $v y \in B$ is integral over $A$, so $vy \in C$.
Therefore:

$\iota \left({v y}\right) \in C_S$
and:

$\iota \left({y}\right) \in C_S$
Thus:

$x = s^{-1} \iota \left({y}\right) \in C_S$
$\blacksquare$


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.




