# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Limit_of_Mapping_between_Metric_Spaces



Theorem
The following definitions of the concept of Limit of Mapping between Metric Spaces are equivalent:

Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $c$ be a limit point of $M_1$.
Let $f: A_1 \to A_2$ be a mapping from $A_1$ to $A_2$ defined everywhere on $A_1$ except possibly at $c$.

Let $L \in M_2$.


$\epsilon$-$\delta$ Condition
$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: 0 < \map {d_1} {x, c} < \delta \implies \map {d_2} {\map f x, L} < \epsilon$
That is, for every real positive $\epsilon$ there exists a real positive $\delta$ such that every point in the domain of $f$ within $\delta$ of $c$ has an image within $\epsilon$ of some point $L$ in the codomain of $f$.

$\epsilon$-Ball Condition
$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {c; d_1} \setminus \set c} \subseteq \map {B_\epsilon} {L; d_2}$
where:

$\map {B_\delta} {c; d_1} \setminus \set c$ is the deleted $\delta $-neighborhood of $c$ in $M_1$
$\map {B_\epsilon} {L; d_2}$ is the open $\epsilon$-ball of $L$ in $M_2$.

That is, for every open $\epsilon$-ball of $L$ in $M_2$, there exists a deleted $\delta $-neighborhood of $c$ in $M_1$ whose image is a subset of that open $\epsilon$-ball.


Proof
$\epsilon$-$\delta$ Condition implies $\epsilon$-Ball Condition
Suppose that $f$ satisfies the $\epsilon$-$\delta$ condition:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: 0 < \map {d_1} {x, c} < \delta \implies \map {d_2} {\map f x, L} < \epsilon$
Let $y \in f \sqbrk {\map {B_\delta} {c; d_1} \setminus \set c}$.
By definition of open $\epsilon$-ball, this means:

$\exists x \in A_1: 0 < \map {d_1} {x, c} < \delta: y = \map f x$
By hypothesis, it follows that $\map {d_2} {y, L} < \epsilon$
That is:

$y \in \map {B_\epsilon} {L; d_2}$
By definition of subset:

$f \sqbrk {\map {B_\delta} {c; d_1} \setminus \set c} \subseteq \map{B_\epsilon} {L; d_2}$
Thus it follows that $f$ satisfies the $\epsilon$-ball condition.
$\Box$


$\epsilon$-Ball Condition implies $\epsilon$-$\delta$ Condition
Suppose that $f$ satisfies the $\epsilon$-ball condition:

$\forall \epsilon \in \R_{>0}: \exists \delta \in \R_{>0}: f \sqbrk {\map {B_\delta} {c; d_1} \setminus \set c} \subseteq \map {B_\epsilon} {L; d_2}$
Let $0 < \map {d_1} {x, c} < \delta$.
By definition of open $\epsilon$-ball, this means:

$x \in \map {B_\delta} {c; d_1} \setminus \set c$
By hypothesis, it follows that:

$\map f x \in \map {B_\epsilon} {L; d_2}$
Thus by definition of open $\epsilon$-ball:

$\map {d_2} {\map f x, L} < \epsilon$
That is, $f$ satisfies the $\epsilon$-$\delta$ condition.
$\blacksquare$


Notes
$(1): \quad c$ does not need to be a point in $A_1$. Therefore $\map f c$ need not be defined. And even if $c \in A_1$, in may be that $\map f c \ne L$.
$(2): \quad$ It is essential that $c$ be a limit point of $A_1$.
Otherwise there would exist $\delta > 0$ such that $\set {z: 0 < \map {d_1} {z, c} < \delta}$ contains no points of $A_1$.
In this case the $\epsilon$-$\delta$ condition would be vacuously true for any $L \in A_2$, which would not do.




