# 

Source: https://proofwiki.org/wiki/Naturally_Ordered_Semigroup_is_Unique/Isomorphism_is_Unique

Theorem
Let $\struct {S, \circ, \preceq}$ and $\struct {S', \circ', \preceq'}$ be naturally ordered semigroups.

Let:

$0'$ be the smallest element of $S'$
$1'$ be the smallest element of $S' \setminus \set {0'} = S'^*$.
Then the isomorphism $g: \struct {S, \circ, \preceq} \to \struct {S', \circ', \preceq'}$ defined as:

$\forall a \in S: \map g a = \circ'^a 1'$
is unique.


Proof
Let $f: S \to S'$ be another isomorphism different from $g$.
Aiming for a contradiction, suppose $\map f 1 \ne 1'$.
We show by induction that $1' \notin \Cdm f$.


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
... Thus $1' \notin \Cdm f$ which is a contradiction.

Thus $\map f 1 = 1$ and it follows


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
that $f = g$.
Thus the isomorphism $g$ is unique.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 16$: The Natural Numbers: Exercise $16.28 \ \text {(b)}$




