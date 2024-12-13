# 

Source: https://proofwiki.org/wiki/Metric_Space_Continuity_by_Epsilon-Delta



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping from $A_1$ to $A_2$.
Let $a \in A_1$ be a point in $A_1$.

Then the following definitions of continuity of $f$ at $a$ with respect to $d_1$ and $d_2$ are equivalent:

$\epsilon$-$\delta$ Definition
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in A_1: \map {d_1} {x, a} < \delta \implies \map {d_2} {\map f x, \map f a} < \epsilon$
where $\R_{>0}$ denotes the set of all strictly positive real numbers.

Definition by Limits
$f$ is continuous at (the point) $a$ (with respect to the metrics $d_1$ and $d_2$) if and only if:

$(1): \quad$ The limit of $\map f x$ as $x \to a$ exists
$(2): \quad \ds \lim_{x \mathop \to a} \map f x = \map f a$.


Proof
Definition by Limits implies $\epsilon$-$\delta$ Definition
Suppose that $f$ is $\tuple {d_1, d_2}$-continuous at $a$ in the sense that:

$(1): \quad$ The limit of $\map f x$ as $x \to a$ exists
$(2): \quad \ds \lim_{x \mathop \to a} \map f x = \map f a$

Let $\ds \lim_{x \mathop \to a} \map f x$.
Then by the $\epsilon$-$\delta$ definition of limit:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: 0 < \map {d_1} {x, a} < \delta \implies \map {d_2} {\map f x, L} < \epsilon$
By $(2)$: 

$\ds \lim_{x \mathop \to a} \map f x = \map f a$
that is:

$\map f a = L$
Then:

$0 = \map {d_1} {a, a}$
and so:

$\map {d_2} {\map f a, L} = 0 < \epsilon$
Thus the definition by limits implies the $\epsilon$-$\delta$ definition.
$\Box$


$\epsilon$-$\delta$ Definition implies Definition by Limits
Suppose that $f$ is $\tuple {d_1, d_2}$-continuous at $a$ in the sense that:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: \forall x \in A_1: \map {d_1} {x, a} < \delta \implies \map {d_2} {\map f x, \map f a} < \epsilon$
where $\R_{>0}$ denotes the set of all strictly positive real numbers.

There are two possibilities for $\map {d_1} {x, a}$:
$(\text a): \quad 0 < \map {d_1} {x, a} < \delta$
Then by the $\epsilon$-$\delta$ definition of limit:

$\ds \lim_{x \mathop \to a} \map f x = \map f a$

$(\text b): \quad \map {d_1} {x, a} = 0$
That is, $x = a$.

Hence:

$\map f x = \map f a$
and so again:

$\ds \lim_{x \mathop \to a} \map f x = \map f a$

Thus the $\epsilon$-$\delta$ definition implies the definition by limits.
$\blacksquare$


Also see
Metric Space Continuity by Open Ball




