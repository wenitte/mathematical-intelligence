# 

Source: https://proofwiki.org/wiki/Composition_of_Affine_Transformations_is_Affine_Transformation

Theorem
Let $\EE$, $\FF$ and $\GG$ be affine spaces with difference spaces $E$, $F$ and $G$ respectively.
Let $\LL: \EE \to \FF$ and $\MM: \FF \to \GG$ be affine transformations.
Let $L$ and $M$ be the tangent maps of $\LL$ and $\MM$ respectively.

Then the composition $\MM \circ \LL: \EE \to \FF$ is an affine transformation with tangent map $M \circ L$.


Proof
Let $\NN = \MM \circ \LL : \EE \to \GG$ be the composition.
We want to show that for any $p, q \in \EE$

$\map \GG Q = \map \GG p + \map {M \circ L} {\vec {p q} }$
We find that:














\(\ds \map \GG q\)

\(=\)







\(\ds \map {\MM \circ \LL} q\)




















\(\ds \)

\(=\)







\(\ds \map \MM {\map \LL p} + \map L {\vec{p q} }\)





$\LL$ is an Affine Transformation



Now let:

$p' = \map \LL p$
and:

$q' = \map \LL p + \map L {\vec {p q} }$
so:

$\vec {p' q'} = \map L {\vec {p q} }$
Then:














\(\ds \map \GG q\)

\(=\)







\(\ds \map \MM {q'}\)




















\(\ds \)

\(=\)







\(\ds \map \MM {p'} + \map M {\vec {p' q'} }\)





$\MM$ is an Affine Transformation














\(\ds \)

\(=\)







\(\ds \map \MM {\map \LL p} + \map M {\map L {\vec {p q} } }\)





Definitions of $p'$ and $q'$














\(\ds \)

\(=\)







\(\ds \map {\MM \circ \LL} p + \map {M \circ L} {\vec {p q} }\)









as required.
$\blacksquare$





