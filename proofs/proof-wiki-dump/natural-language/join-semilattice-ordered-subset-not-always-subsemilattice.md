# 

Source: https://proofwiki.org/wiki/Join_Semilattice_Ordered_Subset_Not_Always_Subsemilattice

Theorem
Let $\struct {S, \circ}$ be a semilattice.
Let $\preceq$ be the ordering on $S$ defined by:

$a \preceq b \iff \paren {a \circ b} = b$

Let $T$ be a subset of $S$.
Let the ordered subset $\struct {T, \preceq \restriction_T}$ be a join semilattice.
Let $\vee$ be the binary operation on $T$ defined by:

for all $a, b \in T$: $a \vee b$ is the join of $a$ and $b$ with respect to $\preceq$.

Then:

$\struct {T, \vee}$ may not be a subsemilattice of $\struct {S, \circ}$.


Proof
Let $S = \set {p, q, r, s}$.
Let $\circ: S \times S \to S$ be defined by:

$p \circ q = q \circ p = r$
$p \circ r = r \circ p = r$
$q \circ r = r \circ q = r$
$p \circ s = s \circ p = s$
$q \circ s = s \circ q = s$
$r \circ s = s \circ r = s$
$p \circ p = p$
$q \circ q = q$
$r \circ r = r$
$s \circ s = s$
Then a manual check shows that $\struct {S, \circ}$ satisfies:

Semilattice Axiom $\text {SL} 0$: Closure
Semilattice Axiom $\text {SL} 1$: Associativity
Semilattice Axiom $\text {SL} 2$: Commutativity
Semilattice Axiom $\text {SL} 3$: Idempotence
So $\struct {S, \circ}$ is a semilattice with ordering:

${\preceq} = \set {\tuple {p, p}, \tuple {q, q}, \tuple {r, r}, \tuple {s, s}, \tuple {p, r}, \tuple {q,r}, \tuple {p, s}, \tuple {q,s}, \tuple {r, s} }$

Let $T = \set {p, q, s}$.
Then:

${\preceq \restriction_T} = \set {\tuple {p, p}, \tuple {q, q}, \tuple {s, s}, \tuple {p, s}, \tuple {q, s} }$
Then a manual check shows that all joins exist in $\struct {T, \preceq \restriction_T}$:

$p \vee q = q \vee p = s$
$p \vee s = s \vee p = s$
$q \vee s = s \vee q = s$
$p \vee p = p$
$q \vee q = q$
$s \vee s = s$
So $\struct {T, \preceq \restriction_T}$ is a join semilattice with respect to $\preceq \restriction_T$.

Now:

$p \vee q = s \ne r = p \circ q$
So $\vee$ is not the restriction of $\circ$ to $T$.
That is, $\struct {T, \vee}$ is not a subsemilattice of $\struct {S, \circ}$ by definition.
$\blacksquare$


Sources
1982: Peter T. Johnstone: Stone Spaces ... (previous): Chapter $\text I$: Preliminaries, Definition $1.3$




