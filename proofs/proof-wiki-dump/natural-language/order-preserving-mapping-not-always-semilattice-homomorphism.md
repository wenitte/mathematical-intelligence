# 

Source: https://proofwiki.org/wiki/Order-Preserving_Mapping_Not_Always_Semilattice_Homomorphism

Theorem
Let $\struct {S, \circ}$ and $\struct {T, *}$ be semilattices.
Let $\preceq_1$ be the ordering on $S$ defined by:

$a \preceq_1 b \iff \paren {a \circ b} = b$
Let $\preceq_2$ be the ordering on $T$ defined by:

$x \preceq_2 y \iff \paren {x * y} = y$
Let $\phi: \struct {S, \preceq_1} \to \struct {T, \preceq_2}$ be an order-preserving mapping.

Then:

$\phi: \struct {S, \circ} \to \struct {T, *}$ may not be a semilattice homomorphism


Proof
Let $S = \set {a, b, c}$.
Let $\circ : S \times S \to S$ be defined by:

$a \circ b = b \circ a = c$
$a \circ c = c \circ a = c$
$b \circ c = c \circ b = c$
$a \circ a = a$
$b \circ b = b$
$c \circ c = c$
Then a manual check shows that $\circ$ is:

closed
associative
commutative
idempotent
So $\struct {S, \circ}$ is a semilattice with ordering:

$\preceq_1 = \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, c}, \tuple {b, c} }$

Let $T = \set{p, q, r, s}$.
Let $* : S \times S \to S$ be defined by:

$p * q = q * p = r$
$p * r = r * p = r$
$q * r = r * q = r$
$p * s = s * p = s$
$q * s = s * q = s$
$r * s = s * r = s$
$p * p = p$
$q * q = q$
$r * r = r$
$s * s = s$
Then a manual check shows that $*$ is:

closed
associative
commutative
idempotent
So $\struct {T, *}$ is a semilattice with ordering

$\preceq_2 = \set {\tuple {p, p}, \tuple {q, q}, \tuple {r, r}, \tuple {s, s}, \tuple {p, r}, \tuple {q, r}, \tuple {p, s}, \tuple {q, s}, \tuple {r, s} }$

Let $\phi : S \to T$ be defined by:

$\map \phi a = p$
$\map \phi b = q$
$\map \phi c = s$
Then a manual check shows that $\phi$ is [[order-preserving.

Now:














\(\ds \map \phi a * \map \phi b\)

\(=\)







\(\ds p * q\)




















\(\ds \)

\(=\)







\(\ds r\)




















\(\ds \)

\(\ne\)







\(\ds s\)




















\(\ds \)

\(=\)







\(\ds \map \phi c\)




















\(\ds \)

\(=\)







\(\ds \map \phi {a \circ b}\)









Hence $\phi$ is not a semilattice homomorphism by definition.
$\blacksquare$


Sources
1982: Peter T. Johnstone: Stone Spaces ... (previous) ... (next): Chapter $\text I$: Preliminaries, Definition $1.3$




