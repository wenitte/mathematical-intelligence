# 

Source: https://proofwiki.org/wiki/Positive_Elements_of_Ordered_Ring


This page has been identified as a candidate for refactoring of advanced complexity.In particular: This could do with being merged with the similarly structured pages arising from Definition:Ordered Integral Domain and the Definition:Strict Positivity Property. Significant areas of overlap.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\struct {R, +, \circ, \le}$ be an ordered ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $P$ be the set of positive elements of $R$ , that is, $P = R_{\ge 0}$.

Then:

$(1): \quad P + P \subseteq P$
$(2): \quad P \cap \paren {-P} = \set {0_R}$
$(3): \quad P \circ P \subseteq P$

If $\le$ is a total ordering, that is, if $\struct {R, +, \circ, \le}$ is a totally ordered ring, then:

$(4): \quad P \cup \paren {-P} = R$

The converse is also true:
Let $\struct {R, +, \circ}$ be a ring.
Let $P \subseteq R$ such that $(1)$, $(2)$ and $(3)$ are satisfied.

Then there is one and only one ordering $\le$ compatible with the ring structure of $R$ such that $P = R_{\ge 0}$.

Also, if $(4)$ is also satisfied, then $\le$ is a total ordering.


Proof
Necessary Condition
First, suppose that $\le$ is compatible with the ring structure of $R$.
Hence:

$(OR1): \quad \le$ is compatible with $+$
$(OR2): \quad \forall x, y \in R: 0_R \le x, 0_R \le y \implies 0_R \le x \circ y$.

$(1)$: Let $x, y \in R: 0_R \le x, 0_R \le y$.
Then $0_R + 0_R \le x + y$ by the fact that $\le$ is compatible with $+$.
Thus $0_R \le x + y$ and thus $x + y \in P$.

$(2)$: By Properties of Ordered Ring item 4, $-P = \set {x \in R: x \le 0_R}$.
Let $x \in P \cap \paren {-P}$.
Then $x \le 0_R$ and $0_R \le x$.
So from the antisymmetric nature of $\le$, $x = 0_R$.

$(3)$: This is equivalent to $0_R \le x, 0_R \le y \implies 0_R \le x \circ y$ which is one of the properties of being compatible with the ring structure of $R$.

$(4)$: Now if $\le$ is a total ordering, then $\forall x \in R$, either $x \le 0_R$ or $0_R \le x$, and the result follows.


Sufficient Condition
Let $P \subseteq R$ such that $(1)$, $(2)$ and $(3)$ are satisfied.
By item $(OR2)$ of Properties of Ordered Ring, we have:

$x \le y \iff 0 \le y + \paren {-x}$
so there is at most one ordering on $R$ compatible with the ring structure of $R$ such that $P = R_{\ge 0}$, namely, the one that satisfies:

$x \le y \iff y + \left({-x}\right) \in P$
Now we need to show that $\le$ thus defined has the required properties.

Reflexivity

By $(2)$:

$\forall x \in R: x \le x$ because $x + \paren {-x} = 0_R \in P$


Antisymmetry

Let $x \le y$ and $y \le x$.
Then $y + \paren {-x} \in P$ and $-\paren {y + \paren {-x} } = x + \paren {-y} \in P$.
Thus by $(2)$, $y + \paren {-x} = 0_R$ and thus $y = x$.


Transitivity

If $x \le y$ and $y \le z$, then $y + \paren {-x} \in P$ and $z + \paren {-y} \in P$.
But as $z + \paren {-x} = z + \paren {-y} + y + \paren {-x}$, we have that $z + \paren {-x} \in P$ from $(1)$.
Hence $x \le z$.

Let $x \le y$.
Then $z + x \le z + y$ since $\paren {z + y} + \paren {-\paren {x + x} } = y + \paren {-x} \in P$.

Finally, Ordering Compatible with Ring holds because of $(3)$.

If $(4)$ holds, then $\forall x, y \in R$, either $y + \paren {-x} \in P$ or $x + \paren {-y} = -\paren {y + \paren {-x} }  \in P$, that is, either $x \le y$ or $y \le x$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.12$




