# 

Source: https://proofwiki.org/wiki/Operation_Induced_by_Permutation_on_Semigroup_is_not_necessarily_Associative

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $\sigma: S \to S$ be a permutation on $S$.
Let $\circ_\sigma$ be the operation on $S$ induced by $\sigma$:

$\forall x, y \in S: x \circ_\sigma y := \map \sigma {x \circ y}$

Then $\circ_\sigma$ is not necessarily associative on $S$.


Proof
Proof by Counterexample
Let $S = \set {a, b, c}$.
Let $\circ$ denote the right operation on $S$:

$\forall x, y \in S: x \to y = y$
From Structure under Right Operation is Semigroup, $\struct {S, \circ}$ is a semigroup.
Hence we have:

$a \circ \paren {b \circ c} = c = \paren {a \circ b} \circ c$

Let $\sigma$ denote the permutation on $S$ defined as:














\(\ds \map \sigma a\)

\(=\)







\(\ds b\)




















\(\ds \map \sigma b\)

\(=\)







\(\ds c\)




















\(\ds \map \sigma c\)

\(=\)







\(\ds a\)









We have:














\(\ds a \circ_\sigma \paren {b \circ_\sigma c}\)

\(=\)







\(\ds a \circ_\sigma \map \sigma {b \circ c}\)





Definition of Operation Induced by Permutation














\(\ds \)

\(=\)







\(\ds a \circ_\sigma \map \sigma c\)





Definition of Right Operation














\(\ds \)

\(=\)







\(\ds a \circ_\sigma a\)





Definition of $\sigma$














\(\ds \)

\(=\)







\(\ds \map \sigma {a \circ a}\)





Definition of Operation Induced by Permutation














\(\ds \)

\(=\)







\(\ds \map \sigma a\)





Definition of Right Operation














\(\ds \)

\(=\)







\(\ds b\)





Definition of $\sigma$



Then:














\(\ds \paren {a \circ_\sigma b} \circ_\sigma c\)

\(=\)







\(\ds \map \sigma {a \circ b} \circ_\sigma c\)





Definition of Operation Induced by Permutation














\(\ds \)

\(=\)







\(\ds \map \sigma b \circ_\sigma c\)





Definition of Right Operation














\(\ds \)

\(=\)







\(\ds c \circ_\sigma c\)





Definition of $\sigma$














\(\ds \)

\(=\)







\(\ds \map \sigma {c \circ c}\)





Definition of Operation Induced by Permutation














\(\ds \)

\(=\)







\(\ds \map \sigma c\)





Definition of Right Operation














\(\ds \)

\(=\)







\(\ds a\)





Definition of $\sigma$



So $a \circ_\sigma \paren {b \circ_\sigma c} \ne \paren {a \circ_\sigma b} \circ_\sigma c$ and the result follows.
$\blacksquare$





