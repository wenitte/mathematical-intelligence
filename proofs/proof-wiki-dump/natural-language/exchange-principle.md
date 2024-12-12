# 

Source: https://proofwiki.org/wiki/Exchange_Principle


This article is not under active maintenance.While the contents of this page could be useful, they are currently not being maintained.
The correctness, lay-out and usefulness of the article may be compromised, so use whatever you get from here with caution.To discuss this page in more detail, feel free to use the talk page.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.In particular: structure needs to be reworked so as to be strictly serial with one simple statement per sentence per line.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
Let $D$ be a strongly minimal set in $\MM$.
Let $A$ be a subset of $D$.
Let $b, c \in D$.

If $b$ is algebraic over $A \cup \set c$ but not over $A$, then $c$ is algebraic over $A \cup \set b$.


Proof
Let $\map D x$ be a formula defining $D$, which exists since by definition, strongly minimal sets are definable.
To simplify exposition, we will assume below that all further mentioned formulas are  $\LL$-formulas with parameters from $A$, in addition to whatever other parameters are supplied.

Suppose $b$ is algebraic over $A \cup \set c$ but not over $A$.

By definition of being algebraic, there is some $\map \phi {x, c}$ with $x$ free such that $\MM \models \map \phi {b, c}$ and $\set {m \in \MM: \MM \models \map \phi {m, c} }$ is finite.
Consequently, the subset $\set {m \in \MM : \MM \models \map D m \wedge \phi(m, c) } = \set {d \in D : \MM \models \map \phi {d, c} }$ must have some finite $n \in \N$ many elements.

Let $\map \psi y$ be the formula

$\ds \map D y \wedge \exists x_1 \cdots \exists x_n \paren {\paren {\bigwedge_{i \mathop = 1}^n \map D {x_i} \wedge \map \phi {x_i, y} } \wedge \forall z \paren {\map D z \wedge \map \phi {z, y} \rightarrow \paren {\bigvee_{i \mathop = 1}^n z = x_i} } }$
which asserts that:

$\set {d \in D : \MM \models \map \phi {d, y} }$ has $n$ many elements.
Note the dependence on the free variable $y$.

We will argue that $\map \phi {b, x} \wedge \map \psi x$ demonstrates the algebraicity of $c$ over $A \cup \set b$.

Aiming for a contradiction, suppose that $\set {d \in D: \MM \models \map \phi {b, d} \wedge \map \psi d}$ is infinite.

Since $D$ is strongly minimal, $\set {d \in D : \MM \models \map \phi {b, d} \wedge \map \psi d}$ is cofinite in $D$.
Thus $D \setminus \set {d \in D : \MM \models \map \phi {b, d} \wedge \map \psi d}$ has some finite $k \in \N$ many elements.
Define $\map \chi x$ to be a formula which asserts that $D \setminus \set {d \in D : \MM \models \map \phi {x, d} \wedge \map \psi d}$ has $k$ many elements.
This can be done similarly to how $\map \psi y$ was defined above.

$\chi$ cannot define a finite subset of $D$, since $\chi$ involves only parameters from $A$ and $\MM \models \map \chi b$, and so this would imply that $b$ is algebraic over $A$.
Thus, $\chi$ defines an infinite subset of $D$.
So, we may let $b_1, \dots, b_{n + 1}$ be distinct elements of $D$ such that $\MM \models \map \chi {b_i}$ for each $i = 1, \ldots, n + 1$.
For each $i = 1, \ldots, n + 1$, define:
$C_i = \set {d \in D : \map \phi {b_i, d} \wedge \map \psi d}$
Then each $C_i$ is cofinite in $D$, since $\MM \models \map \chi {b_i}$ and hence $D \setminus \set {d \in D : \MM \models \map \phi {b_i, d} \wedge \map \psi d}$ has $k$ many elements.
It follows that $\ds \bigcap_{i \mathop = 1}^{n + 1} C_i$ is nonempty, since $D$ is infinite and the intersection excludes at most $k \cdot \paren {n + 1}$ elements of $D$.
Let $\ds \hat c \in \bigcap_{i \mathop = 1}^{n + 1} C_i$.
By definition of each $C_i$, this means that $\MM \models \map \psi {\hat c}$ and $\MM \models \map \phi {b_i, \hat c}$ for $i = 1, \ldots, n + 1$.
But this is a contradiction, since the definition of $\psi$ gives us that $\MM \models \map \phi {d, \hat c}$ for only $n$ many $d \in D$.

Thus $\set {d \in D : \MM \models \map \phi {b, d} \wedge \map \psi d} = \set {m \in \MM : \MM \models \map \phi {b, m} \wedge \map \psi m}$ is finite.

Since $\MM \models \map \phi {b, c} \wedge \map \psi c$, this means that $c$ is definable over $A \cup \set b$.
$\blacksquare$





