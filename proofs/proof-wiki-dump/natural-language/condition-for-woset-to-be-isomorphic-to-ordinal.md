# 

Source: https://proofwiki.org/wiki/Condition_for_Woset_to_be_Isomorphic_to_Ordinal

Theorem
Let $\struct {S, \preceq}$ be a woset.
Let $\struct {S, \preceq}$ be such that $\forall a \in S$, the initial segment $S_a$ of $S$ determined by $a$ is order isomorphic to some ordinal.

Then $\struct {S, \preceq}$ itself is order isomorphic to an ordinal.


Proof
For each $a \in S$, let $g_a: S_a \to \map Z a$ be an order isomorphism from $S_a$ to an ordinal $\map Z a$.
By Isomorphic Ordinals are Equal‎ and Order Isomorphism between Wosets is Unique, both $\map Z a$ and $g_a$ are unique.
So this defines a mapping $Z$ on $S$.
Let the image of $Z$ be $W$:

$W = \set {\map Z a: a \in S}$
Now we define $f: S \to W$ as:

$\map f a = \map Z a$

Now we show that $x, y \in S, x \prec y \implies \map Z x \subset \map Z y$.
So, let $x, y \in S$ such that $x \prec y$.
Then:

$(1) \quad g_x: S_x \cong \map Z x$
Also, because:














\(\ds S_x\)

\(=\)







\(\ds \set {z \in S: z \prec x}\)





Initial Segment of Ordinal is Ordinal














\(\ds \)

\(=\)







\(\ds \set {z \in S: z \prec y \land z \prec x}\)




















\(\ds \)

\(=\)







\(\ds \set {z \in S_y: z \prec x}\)




















\(\ds \)

\(=\)







\(\ds \paren {S_y}_x\)









we have:

$(2): \quad \paren {g_y \restriction S_x}: S_x \to \paren {\map Z y}_{\map {g_y} x}$ is an order isomorphism
So by Isomorphic Ordinals are Equal, we have:

$(3): \quad \map Z x = \paren {\map Z y}_{\map {g_y} x}$
So, in particular:

$\map Z x \subset \map Z y$

By this result, $f: S \to W$ is a bijection.
Also by this result, $f: S \to \struct {W, \subseteq}$ is an order isomorphism.
This means that $W$ is well-ordered by $\subseteq$.

Now we show that $W$ is an ordinal.
Let $y \in S$.
Since $\map Z y$ is an ordinal, we have:

$x \prec y \implies \paren {\map Z y}_{\map {g_y} x} = \map {g_y} x$
So by $(3)$ above, we have:

$(4) \quad x \prec y \implies \map Z x = \map {g_y} x$
Hence:














\(\ds W_{\map Z y}\)

\(=\)







\(\ds \set {\map Z x: \map Z x \subset \map Z y}\)




















\(\ds \)

\(=\)







\(\ds \set {\map Z x: x \prec y}\)




















\(\ds \)

\(=\)







\(\ds \set {\map {g_y} x: x \prec y}\)




















\(\ds \)

\(=\)







\(\ds \map {g_y} {S_y}\)




















\(\ds \)

\(=\)







\(\ds \map Z y\)









As $y$ is an arbitrary element of $S$, it follows that $\map Z y$ is an arbitrary element of $W$.
So $W$ is an ordinal, as we wanted to prove.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Theorem $1.7.11$




