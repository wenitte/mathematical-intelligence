# 

Source: https://proofwiki.org/wiki/Separation_Properties_Preserved_under_Topological_Product/Corollary

Theorem
Let $\SS = \family {\struct {S_i, \tau_i} }_{i \mathop \in I}$ be an indexed family of topological spaces where $I$ is an arbitrary index set.
Let $\ds T = \struct {S, \tau} = \prod_{i \mathop \in I} \struct {S_i, \tau_i}$ be the product space of $\SS$.

$T = \struct {S, \tau}$ has one of the following properties if and only if each of $\struct {S_i, \tau_i}$ has the same property:

Regular Property
Tychonoff (Completely Regular) Property

If $T = \struct {S, \tau}$ has one of the following properties then each of $\struct {S_i, \tau_i}$ has the same property:

Normal Property
Completely Normal Property
but the converse does not necessarily hold.


Proof
A regular space is a topological space which is both a $T_0$ (Kolmogorov) space and a $T_3$ space.
Hence from:

Product Space is $T_0$ iff Factor Spaces are $T_0$
and

Product Space is $T_3$ iff Factor Spaces are $T_3$
it follows that $T$ is a regular space if and only if each of $\struct {S_i, \tau_i}$ is a regular space.
$\Box$

A Tychonoff (completely regular) space is a topological space which is both a $T_0$ (Kolmogorov) space and a $T_{3 \frac 1 2}$ space.
Hence from:

Product Space is $T_0$ iff Factor Spaces are $T_0$
and

Product Space is $T_{3 \frac 1 2}$ iff Factor Spaces are $T_{3 \frac 1 2}$
it follows that $T$ is a Tychonoff space if and only if each of $\struct {S_i, \tau_i}$ is a Tychonoff space.
$\Box$

A normal space is a topological space which is both a $T_1$ (Fréchet) space and a $T_4$ space.
Hence from:

Product Space is $T_1$ iff Factor Spaces are $T_1$
and

Factor Spaces are $T_4$ if Product Space is $T_4$
it follows that if $T$ is a normal space then each of $\struct {S_i, \tau_i}$ is a normal space.
$\Box$

A completely normal space is a topological space which is both a $T_1$ (Fréchet) space and a $T_5$ space.
Hence from:

Product Space is $T_1$ iff Factor Spaces are $T_1$
and

Factor Spaces are $T_5$ if Product Space is $T_5$
it follows that if $T$ is a completely normal space then each of $\struct {S_i, \tau_i}$ is a completely normal space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




