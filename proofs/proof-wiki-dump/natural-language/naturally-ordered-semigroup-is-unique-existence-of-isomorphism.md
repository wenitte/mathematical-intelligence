# 

Source: https://proofwiki.org/wiki/Naturally_Ordered_Semigroup_is_Unique/Existence_of_Isomorphism

Theorem
Let $\struct {S, \circ, \preceq}$ and $\struct {S', \circ', \preceq'}$ be naturally ordered semigroups.

Let:

$0'$ be the smallest element of $S'$
$1'$ be the smallest element of $S' \setminus \set {0'} = S'^*$.
Then the mapping $g: S \to S'$ defined as:

$\forall a \in S: \map g a = \circ'^a 1'$
is an isomorphism from $\struct {S, \circ, \preceq}$ to $\struct {S', \circ', \preceq'}$.


Proof
Let $T' = \Cdm g$, that is, the codomain of $g$.
By Zero is Identity in Naturally Ordered Semigroup, $0'$ is the identity for $\circ'$.
Thus:

$\map g 0 = \circ'^0 1' = 0'$
and so $0' \in T'$

Suppose $x' \in T'$.
Then:

$\map g n = x'$
and so:














\(\ds x' \circ' 1'\)

\(=\)







\(\ds \circ'^n 1' \circ' 1'\)




















\(\ds \)

\(=\)







\(\ds \paren {\circ'^n 1'} \circ' \paren {\circ'^1 1'}\)




















\(\ds \)

\(=\)







\(\ds \circ'^{\paren {n \circ 1} } 1'\)




















\(\ds \)

\(=\)







\(\ds \map g {n \circ 1}\)










So:

$x' \in T' \implies x' \circ' 1' \in T'$
Thus, by the Principle of Mathematical Induction applied to $S'$:

$T' = S'$
So:

$\forall a' \in S': \exists a \in S: \map g a = a'$
and so $g$ is surjective by definition.

From Index Laws for Semigroup: Sum of Indices:

$\map g {a \circ b} = \map g a \circ' \map g b$
and therefore $g$ is a homomorphism from $\struct {S, \circ}$ to $\struct {S', \circ'}$.
Now:










\(\ds \forall p \in S: \, \)



\(\ds \circ'^p 1'\)

\(\prec'\)







\(\ds \circ'^p 1' \circ' 1'\)





Sum with One is Immediate Successor in Naturally Ordered Semigroup














\(\ds \)

\(=\)







\(\ds \paren {\circ'^p 1'} \circ' \paren {\circ'^1 1'}\)




















\(\ds \)

\(=\)







\(\ds \circ'^{\paren {p \circ 1} } 1'\)





Index Laws for Semigroup: Sum of Indices








\(\ds \leadsto \ \ \)





\(\ds \circ'^p 1'\)

\(\prec'\)







\(\ds \circ'^{\paren {p \circ 1} } 1'\)










For $p \in S$, let $S_p$ be the initial segment of $S$:

$S_p = \set {x \in S: x \prec p}$
Let:

$T = \set {p \in S: \forall a \in S_p: \circ'^a 1' \prec' \circ'^p 1'}$
Now $S_0 = \O \implies 0 \in T$.

Suppose $p \in T$.
Then:

$a \prec p \circ 1 \implies a \preceq p$
By Strict Lower Closure of Sum with One, either of these is the case:

$(1): \quad a \prec p: p \in T \implies \circ'^a 1' \prec' \circ'^p 1' \prec' \circ'^{\paren {p \circ 1} } 1'$
$(2): \quad a = p: \circ'^a 1' = \circ'^p 1' \prec' \circ'^{\paren {p \circ 1} } 1'$
In either case, we have:

$p \in T \implies p \circ 1 \in T$, and by the Principle of Mathematical Induction:
$T = S$

So $n \prec p \implies \circ'^n 1' \prec' \circ'^p 1'$.
Thus $g$ is a surjective monomorphism and therefore is an isomorphism from $\struct {S, \circ, \preceq}$ to $\struct {S', \circ', \preceq'}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Theorem $16.15$




