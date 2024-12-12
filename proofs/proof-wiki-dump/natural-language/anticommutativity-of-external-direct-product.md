# 

Source: https://proofwiki.org/wiki/Anticommutativity_of_External_Direct_Product



Theorem
Let $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$ be algebraic structures where $S$ and $T$ both have at least two distinct elements.
Let $\struct {S \times T, \circ}$ be their external direct product.

Then $\struct {S \times T, \circ}$ is anticommutative if and only if at least one of $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$ is.


Proof
Sufficient Condition
Suppose $\struct {S \times T, \circ}$ is anticommutative and neither $\struct {S, \circ_1}$ nor $\struct {T, \circ_2}$ is.
Then for some distinct $a, b \in S$:

$a \circ_1 b = b \circ_1 a$
Similarly, for some distinct $c, d \in T$:

$c \circ_2 d = d \circ_2 c$

Then we compute by definition of $\circ$ in the external direct product:

$\tuple {a, c} \circ \tuple {b, d} = \tuple {a \circ_1 b, c \circ_2 d}$
$\tuple {b, d} \circ \tuple {a, c} = \tuple {b \circ_1 a, d \circ_2 c}$
So: 

$\tuple {a, c} \circ \tuple {b, d} = \tuple {b, d} \circ \tuple {a, c}$
which contradicts our assumption that $\struct {S \times T, \circ}$ was anticommutative.
Hence at least one of $\struct {S, \circ_1}$ and $\struct {T, \circ_2}$ is anticommutative.
$\Box$


Necessary Condition
Suppose $\struct {S \times T, \circ}$ is not anticommutative. 
Then for some $\tuple {a, b}, \tuple {c, d} \in S \times T$:

$\tuple {a, b} \circ \tuple {c, d} = \tuple {c, d} \circ \tuple {a, b}$
which by the definition of $\circ$ implies:

$\tuple {a \circ_1 c, b \circ_2 d} = \tuple {c \circ_1 a, d \circ_2 b}$
Therefore we conclude:

$a \circ_1 c = c \circ_1 a$
$b \circ_2 d = d \circ_2 b$
Hence, neither $\struct {S, \circ_1}$ nor $\struct {T, \circ_2}$ can be anticommutative.

Hence if one of $\struct {S, \circ_1}$ or $\struct {T, \circ_2}$ is anticommutative, then $\struct {S \times T, \circ}$ must be as well.
$\blacksquare$





