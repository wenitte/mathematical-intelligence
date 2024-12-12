# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Totally_Bounded_Metric_Space



Theorem
The following definitions of the concept of Totally Bounded Metric Space are equivalent:

Definition 1
A metric space $M = \struct {A, d}$ is totally bounded if and only if:

for every $\epsilon \in \R_{>0}$ there exists a finite $\epsilon$-net for $M$.

That is, $M$ is totally bounded if and only if:

for every $\epsilon \in \R_{>0}$ there exists a finite set of points $x_1, \ldots, x_n \in A$ such that:
$\ds A = \bigcup_{i \mathop = 1}^n \map {B_\epsilon} {x_i}$
where $\map {B_\epsilon} {x_i}$ denotes the open $\epsilon$-ball of $x_i$.

That is: $M$ is totally bounded if and only if, given any $\epsilon \in \R_{>0}$, one can find a finite number of open $\epsilon$-balls which cover $A$.

Definition 2
A metric space $M = \struct {A, d}$ is totally bounded if and only if:

for every $\epsilon \in \R_{>0}$ there exist finitely many points $x_0, \dots, x_n \in A$ such that:
$\ds \inf_{0 \mathop \le i \mathop \le n} \map d {x_i, x} \le \epsilon$
for all $x \in A$.


Proof
Definition 1 implies Definition 2
Let $M$ be totally bounded by definition 1.
That is:

$\forall \epsilon \in \R_{>0}: \struct {A, d}$ has a finite $\epsilon$-net.
So, let $\epsilon \in \R_{>0}$.
Let $A' = \set {x_0, x_1, \ldots, x_n}$ be such a finite $\epsilon$-net of $A$.
By definition:

$\ds A \subseteq \bigcup_{x_i \mathop \in A'} \map {B_\epsilon} {x_i}$

Now let $x \in A$, and so:

$\ds x \in \bigcup_{x_i \mathop \in A'} \map {B_\epsilon} {x_i}$
Thus:

$\exists i: 0 \le i \le n: x \in \map {B_\epsilon} {x_i}$
and so:

$\map d {x_i, x} < \epsilon$
But:

$\ds \inf_{0 \mathop \le i \mathop \le n} \map d {x_i, x} \le \map d {x_i, x}$

Thus it follows that there exist finitely many points $x_0, \dots, x_n \in x$ such that:

$\ds \inf_{0 \mathop \le i \mathop \le n} \map d {x_i, x} \le \epsilon$
for all $x \in A$.
Thus $M$ is totally bounded by definition 2.
$\Box$


Definition 2 implies Definition 1
Let $M$ be totally bounded by definition 2.
That is:

for every $\epsilon > 0$ there exist finitely many points $x_0, \dots, x_n \in A$ such that $\ds \inf_{0 \mathop \le i \mathop \le n} \map d {x_i, x} \le \epsilon$ for all $x \in A$.

So, let $x \in A$.
Let $\epsilon' = \dfrac \epsilon 2$.
Then by definition $\exists n \in \N: A' = \set {x_0, x_1, \ldots, x_n}$ such that $\forall x \in A: \exists x_i \in A': \map d {x_i, x} \le \epsilon'$.
Hence:

$x \in \map {B_{\epsilon'} } {x_i}$
where $\map {B_{\epsilon'} } {x_i}$ is the open $\epsilon'$-ball of $x_i$.
So:

$\ds x \in \bigcup_{x_i \mathop \in A'} \map {B_{\epsilon'} } {x_i}$
and hence:

$\ds A \subseteq \bigcup_{x_i \mathop \in A'} \map {B_{\epsilon'} } {x_i}$
Thus by definition, $A'$ is a finite $\epsilon'$-net of $A$.
Thus $M$ is totally bounded by definition 1.
$\blacksquare$





