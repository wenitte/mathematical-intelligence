# 

Source: https://proofwiki.org/wiki/Property_of_being_Totally_Ordered_is_of_Finite_Character



Theorem
Let $P$ be the property of sets defined as:

$\forall x: \map P x$ denotes that $x$ is totally ordered under a relation $\RR$.
Then $P$ is of finite character.

That is:

$x$ is totally ordered under $\RR$
if and only if:

every finite subset of $x$ is totally ordered under $\RR$.


Proof
Sufficient Condition
Let $x$ be totally ordered under $\RR$.
Let $y \subseteq x$.
From Restriction of Total Ordering is Total Ordering it follows that $y$ is also a totally ordered under $\RR$.
This holds in particular if $y$ is a finite set.
Hence every finite subset of $x$ is totally ordered under $\RR$.
$\Box$


Necessary Condition
Let every finite subset of $x$ be totally ordered under $\RR$.
Let $a, b, c \in x$ be arbitrary.

As $\set a$ is totally ordered under $\RR$:

$a \mathrel \RR a$
As $a$ is arbitrary, it follows that:

$\forall a \in x: a \mathrel \RR a$
and so $\RR$ is reflexive on $x$.

As $\set {a, b}$ is totally ordered under $\RR$:

$a \mathrel \RR b \land b \mathrel \RR a \implies a = b$
As $a$ and $b$ are arbitrary, it follows that:

$\forall a, b \in x: a \mathrel \RR b \land b \mathrel \RR a \implies a = b$
and so $\RR$ is antisymmetric on $x$.

As $\set {a, b, c}$ is totally ordered under $\RR$:

$a \mathrel \RR b \land b \mathrel \RR c \implies a \mathrel \RR c$
As $a$, $b$ and $c$ are arbitrary, it follows that:

$\forall a, b, c \in x: a \mathrel \RR b \land b \mathrel \RR c \implies a = c$
and so $\RR$ is transitive on $x$.

As $\set {a, b}$ is totally ordered under $\RR$:

$a \mathrel \RR b \lor b \mathrel \RR a$
As $a$ and $b$ are arbitrary, it follows that:

$\forall a, b \in x: a \mathrel \RR b \lor b \mathrel \RR a$
and so $\RR$ is connected on $x$.

So $\RR$ is reflexive, antisymmetric, transitive and connected on $x$.
That is, $x$ is totally ordered under $\RR$.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $4$: Superinduction, Well Ordering and Choice: Part $\text {II}$ -- Maximal principles: $\S 5$ Maximal principles: Proposition $5.7$




