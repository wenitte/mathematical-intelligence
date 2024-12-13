# 

Source: https://proofwiki.org/wiki/User:KBlott/Proofs/Semilattice_with_Identity_is_an_Idempotent_Commutative_Monoid

An algebra $(S, \cdot)$ is a semilattice with identity $e \in S$ iff $(S, \cdot, e)$ is an idempotent commutative monoid.  

Proof
$(S, \cdot)$ is a semilattice with identity $e \in S$ iff

$(S, \cdot)$ is a commutative semigroup, and
$\forall x \in S$:
$x \cdot x = x$, and
$x \cdot e = x = e \cdot x$.
Likewise,$(S, \cdot, e)$ is an idempotent commutative monoid iff

$(S, \cdot)$ is a commutative semigroup, and
$\forall x \in S$:
$x \cdot e = x = e \cdot x$, and
$x \cdot x = x$.
$\blacksquare$

Examples and some non-examples
$(\lbrace 0, \N \rbrace, \cup)$ is a semilattice with identity $0 \in \lbrace 0, \N \rbrace$.
$(\lbrace 0, \N \rbrace, \cap)$ is a semilattice with identity $\N \in \lbrace 0, \N \rbrace$.
$(\N, \cup)$ is a semilattice with identity $0 \in \N$.
$(\N, \cap)$ is a semilattice without identity,  since $\N  \not \in \N$.  This can be fixed by taking the successor set $\N + 1 := \N \cup \lbrace \N \rbrace$.
$(\N + 1, \cup)$ semilattice with identity $0 \in \N + 1$.
$(\N + 1, \cap)$ semilattice with identity $\N \in \N + 1$.  $\N + 1$ is a subset of the power set of $\N$.  This allows us to further generalize $\N$ without losing structural integrity.
$(\mathscr P(\N), \cup)$ semilattice with identity $0 \in \mathscr P(\N)$ where $\mathscr P(\N)$ is the power set of $\N$.
$(\mathscr P(\N), \cap)$ semilattice with identity $\N \in \mathscr P(\N)$.
$(\N, +, 0)$ and $(\N, \times, 1)$ are commutative monoids but not semilattices, since they are not idempotent.
$(1, +,  0)$ is a semilattice with identity $0 \in 1$.
$(2, \times, 1)$ is a semilattice with identity $1 \in 2$.
Sources
Proof Theoretical Studies on Semilattice Relevant Logics.   2001.  Ryo Kashim.




