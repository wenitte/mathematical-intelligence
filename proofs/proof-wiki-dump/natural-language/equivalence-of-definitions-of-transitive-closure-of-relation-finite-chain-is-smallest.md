# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Transitive_Closure_of_Relation/Finite_Chain_is_Smallest



Theorem
Let $S$ be a set or class.
Let $\RR$ be a relation on $S$.
Let $\RR^+$ be the transitive closure of $\RR$ by the finite chain definition.
That is, for $x, y \in S$ let $x \mathrel {\RR^+} y$ if and only if for some natural number $n > 0$ there exist $s_0, s_1, \dots, s_n \in S$ such that $s_0 = x$, $s_n = y$, and:

$\forall k \in \N_n: s_k \mathrel \RR s_{k + 1}$

Then $\RR^+$ is transitive and if $\QQ$ is a transitive relation on $S$ such that $\RR \subseteq \QQ$ then $\RR \subseteq \QQ$.


Proof
$\RR^+$ is transitive
Let $x, y, z \in S$.
Let $x \mathrel {\RR^+} y$ and $y \mathrel {\RR^+} z$.
Then for some $m, n \in \N_{>0}$ there are $s_0, s_1, \dots, s_m$ and $t_0, t_1, \dots, t_n$ such that $s_0 = x$, $s_m = y$, $t_0 = y$, $t_n = z$, and the following hold:

$\forall k \in \N_m: s_k \mathrel {\RR^+} s_{k + 1}$
$\forall k \in \N_n: t_k \mathrel {\RR^+} t_{k + 1}$
Let $\sequence {u_k}_{k \mathop \in \N_{m + n} }$ be defined thus:

$u_k = \cases {s_k & \text {if $k \le m$} \\ t_{k - m} & \text {if $k > m$} }$
Then clearly $u_k \mathrel {\RR^+} u_{k + 1}$ whenever $k < m$ and whenever $k > m$.
But $u_m = s_m = y = t_0 \mathrel {\RR^+} t_1 = u_{m + 1}$, so this holds also for $k = m$.
Furthermore, $u_0 = s_0 = x$ and $u_{m + n} = t_n = z$.
Therefore $x \mathrel {\RR^+} z$.
As this holds for all such $x$ and $z$, $\RR^+$ is transitive.
$\Box$


$\RR^+$ is smallest
Let $\QQ$ be any transitive relation on $S$ such that $\RR \subseteq \QQ$.
For any $x, y \in S$ such that $x \mathrel {\RR^+} y$, let $\map d {x, y}$ be the smallest natural number $n > 0$ such that there exist $s_0, s_1, \dots, s_n \in S$ such that $s_0 = x$, $s_n = y$, and:

$\forall k \in \N_n: s_k \mathrel \RR s_{k + 1}$
Such an $n$ always exists by the definition of $\RR^+$ and the fact that $\N$ is well-ordered by $\le$.
We will show by induction on $n$ that for every $x, y$ such that $x \mathrel {\RR^+} y$ and $\map d {x, y} = n$, $x \mathrel \QQ y$.
This will show that $\RR^+ \subseteq \QQ$.
If $\map d {x, y} = 1$ then $x \mathrel \RR y$, so $x \mathrel \QQ y$.
Suppose that the result holds for $n$.
Let $\map d {x, y} = n + 1$.
Then there exist $s_0, s_1, \dots, s_{n + 1}$ such that $s_0 = x$, $s_{n + 1} = y$, and:

$\forall k \in \N_{n + 1}: s_k \mathrel \RR s_{k + 1}$
Then dropping the last term:

$\forall k \in \N_n: s_k \mathrel \RR s_{k + 1}$
so $x \mathrel {\RR^+} s_n$.


This article, or a section of it, needs explaining.In particular: Explain better: either show that minimality implies this or replace standard induction with complete inductionYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
It should be clear, then, that $\map d {x, s_n} = n$.
Thus by the inductive hypothesis, $x \mathrel \QQ s_n$.
Since $\RR \subseteq \QQ$, $s_n \mathrel \QQ s_{n + 1} = y$.
Since $x \mathrel \QQ s_n$, $s_n \mathrel \QQ y$, and $\QQ$ is transitive:

$x \mathrel \QQ y$
As this holds for all such $x$ and $y$:

$\RR^+ \subseteq \QQ$
$\blacksquare$





