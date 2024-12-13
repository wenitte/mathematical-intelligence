# 

Source: https://proofwiki.org/wiki/Hensel%27s_Lemma_for_Composite_Numbers



Theorem
Let $b \in \Z \setminus \set {-1, 0, 1}$ be an integer.
Let $k > 0$ be a positive integer.
Let $\map f X \in \Z \sqbrk X$ be a polynomial.
Let $x_k \in \Z$ such that:

$\map f {x_k} \equiv 0 \pmod {b^k}$
$\gcd \set {\map {f'} {x_k}, b} = 1$

Then for every integer $l \ge 0$, there exists an integer $x_{k + l}$ such that:

$\map  f {x_{k + l} } \equiv 0 \pmod {b^{k + l} }$
$x_{k + l} \equiv x_k \pmod {b^k}$
and any two integers satisfying these congruences are congruent modulo $b^{k + l}$.
Moreover, for all $l \ge 0$ and any solutions $x_{k + l}$ and $x_{k + l + 1}$:

$x_{k + l + 1} \equiv x_{k + l} - \dfrac {\map f {x_{k + l} } } {\map {f'} {x_{k + l} } } \pmod {b^{k + l + 1} }$
$x_{k + l + 1} \equiv x_{k + l} \pmod {b^{k + l} }$


Proof
We use induction on $l$.
The base case $l = 0$ is trivial.
Let $l \ge 0$ be such that a solution $x_{k + l}$ exists and is unique up to a multiple of $b^{k + l}$.
Choose a solution $x_{k + l}$.
Each solution $x_{k + l + 1}$ is also a solution of the previous congruence.
By uniqueness, it has to satisfy $x_{k + l + 1} \equiv x_{k + l} \pmod {b^{k + l} }$, hence is of the form $x_{k + l} + t b^{k + l}$ with $t \in \Z$.
Let $d = \deg f$.
We have:














\(\ds \map f {x_{k + l} + t b^{k + l} }\)

\(=\)







\(\ds \map f {x_{k + l} } + t b^{k + l} \map {f'} {x_{k + l} } + \paren {t b^{k + l} }^2 m\)





for some $m \in \Z$, by Taylor Expansion for Polynomials: Order 1














\(\ds \)

\(\equiv\)







\(\ds \map f {x_{k + l} } + t b^{k + l} \map {f'} {x_{k + l} } \pmod {b^{k + l + 1} }\)









Because $\map {f'} {x_{k + l} } \equiv \map {f'} {x_k} \pmod b$, $\map {f'} {x_{k + l} }$ is invertible modulo $b$.
Thus $x_{k + l} + t b^{k + l}$ is a solution modulo $b^{k + l + 1}$ if and only if:

$t \equiv - \dfrac {\map f {x_{k + l} } } {\map {f'} {x_{k + l} } } \pmod b$
Thus, necessarily:

$x_{k + l + 1} \equiv x_{k + l} - \dfrac {\map f {x_{k + l} } } {\map {f'} {x_{k + l} } } \pmod {b^{k + l + 1} }$
which proves the existence and uniqueness.
By induction, we have shown uniqueness and existence for all $l \ge 0$, as well as the relations:

$x_{k + l + 1} \equiv x_{k + l} - \dfrac {\map f {x_{k + l} } } {\map {f'} {x_{k + l} } } \pmod {b^{k + l + 1} }$
$x_{k + l + 1} \equiv x_{k + l} \pmod {b^{k + l} }$
$\blacksquare$


Also see
Hensel's Lemma


Source of Name
This entry was named for Kurt Wilhelm Sebastian Hensel.





