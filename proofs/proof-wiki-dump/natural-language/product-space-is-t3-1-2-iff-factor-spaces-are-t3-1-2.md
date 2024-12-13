# 

Source: https://proofwiki.org/wiki/Product_Space_is_T3_1/2_iff_Factor_Spaces_are_T3_1/2



Theorem
Let $\mathbb S = \family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be an indexed family of topological spaces for $\alpha$ in some indexing set $I$ with $S_\alpha \ne \O$ for every $\alpha \in I$.

Let $\ds T = \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\mathbb S$.

Then $T$ is a $T_{3 \frac 1 2}$ space if and only if each of $\struct {S_\alpha, \tau_\alpha}$ is a $T_{3 \frac 1 2}$ space.


Proof
Necessary Condition
Suppose $T$ is a $T_{3 \frac 1 2}$ space.
Since $S_\alpha \ne \O$ we also have $S \ne \O$ by the axiom of choice.
Let $\alpha \in I$ be arbitrary.
From Subspace of Product Space is Homeomorphic to Factor Space:

$\struct {S_\alpha, \tau_\alpha}$ is homeomorphic to a subspace $T_\alpha$ of $T$.
From $T_{3 \frac 1 2}$ Property is Hereditary:

$T_\alpha$ is $T_{3 \frac 1 2}$.
From $T_{3 \frac 1 2}$ Space is Preserved under Homeomorphism:

$\struct {S_\alpha, \tau_\alpha}$ is $T_{3 \frac 1 2}$.
Because $\alpha \in I$ was arbitrary then the result follows.
$\Box$


Sufficient Condition
Let $\struct{S_\alpha, \tau_\alpha}$ is a $T_{3 \frac 1 2}$ space for each $\alpha \in I$. 

Let $x \in S$.
Let $F$ be a closed subset of $S$ such that $x \notin F$.

By definition of a closed subset:

$S \setminus F \in \tau$
By definition of the product topology, there exists an open set $B$ of the natural basis containing $x$ which is disjoint from $F$.
By definition of the natural basis, $B$ is of the form:

$\map {\pr_{\alpha_1}^\gets} {U_1} \cap \dotsb \cap \map {\pr_{\alpha_n}^\gets} {U_n}$
where:

$\pr_{\alpha_k}$ is the $\alpha_k$-th projection from $S$
$U_k$ is open in $S_{\alpha_k}$ for all $1 \le k \le n$

By definition of a $T_{3 \frac 1 2}$ space, for each $1 \le k \le n$ there exists a continuous mapping:

$f_k: S_{\alpha_k} \to \closedint 0 1$
such that:

$\map {f_k} {x_{\alpha_k} } = 1$
and:

$\map {f_k} {S_{\alpha_k} \setminus U_k} = 0$

Let $g_k = f_k \circ \pr_{\alpha_k}$ be the composite mapping of $f_k$ with $\pr_{\alpha_k}$ for each $1 \le k \le n$.
From Composite of Continuous Mappings is Continuous each $g_k: S \to \closedint 0 1$ is a continuous mapping.

We define $g: S \to \closedint 0 1$ by setting:

$\map g y = \min \set {\map {g_k} {y_{\alpha_k} }: k = 1, \dotsc, n}$
From Minimum Rule for Continuous Functions:

$g$ is continuous.

Now:














\(\ds \map g x\)

\(=\)







\(\ds \min \set{\map {g_k} x : k = 1, \dotsc, n}\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \min \set {\map {f_k} {\map {\pr_{\alpha_k} } x} : k = 1, \dotsc, n}\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \min \set {\map {f_k} {x_{\alpha_k} } : k = 1, \dotsc, n}\)





Definition of Projection














\(\ds \)

\(=\)







\(\ds \min \set {1 : k = 1, \dotsc, n}\)





Definition of $f_k$














\(\ds \)

\(=\)







\(\ds 1\)





Definition of Minimum




Let $y \in F$.
By definition of disjoint sets:

$\exists j \in \set {1, \dotsc, n} : y \notin \map {\pr_{\alpha_j}^\gets} {U_j}$
By definition of the inverse image mapping of $\pr_{\alpha_j}$:

$y_{\alpha_j} \notin U_j$
Thus:

$\map {f_j} {y_{\alpha_j} } = 0$

So:














\(\ds \map g y\)

\(=\)







\(\ds \min \set {\map {g_k} y : k = 1, \dotsc, n}\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \min \set {\map {f_k} {\map {\pr_{\alpha_k} } y} : k = 1, \dotsc, n}\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \min \set {\map {f_k} {y_{\alpha_k} } : k = 1, \dotsc, n}\)





Definition of Projection














\(\ds \)

\(=\)







\(\ds 0\)





Definition of Minimum and $\map {f_k} {y_{\alpha_k} } = 0$




Therefore $T$ is a $T_{3 \frac 1 2}$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $2$: Separation Axioms: Functions, Products, and Subspaces




