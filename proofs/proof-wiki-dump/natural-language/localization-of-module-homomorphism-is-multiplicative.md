# 

Source: https://proofwiki.org/wiki/Localization_of_Module_Homomorphism_is_Multiplicative

Theorem
Let $A$ be a commutative ring with unity.
Let $S \subseteq A$ be a multiplicatively closed subset.
Let $S^{-1}A$ be the localization of $A$ at $S$.
Let $f_1$ and $f_2$ be $A$-homomorphisms:

$M_1 \stackrel {f_1} \longrightarrow M_2 \stackrel {f_2} \longrightarrow M_3$
For $i=1,2,3$, let $\struct { S^{-1}M_i, \iota_i}$ be the localization of $M_i$ at $S$.
Let $S^{-1}f_1$ and $S^{-1}f_i$ be the unique $S^{-1}A$-homomorphisms:

$S^{-1}M_1 \stackrel {S^{-1}f_1} \longrightarrow S^{-1}M_2 \stackrel {S^{-1}f_2} \longrightarrow S^{-1}M_3$
such that:

$\iota_{i+1} \circ f_i = \paren {S^{-1}f_i} \circ \iota_i$
Let:

$S^{-1}M_1 \stackrel {S^{-1}\paren {f_2 \circ f_1}} \longrightarrow S^{-1}M_3$
be the unique $S^{-1}A$-homomorphism such that:

$\iota_3 \circ \paren {f_2 \circ f_1} = \paren {S^{-1} \paren {f_2 \circ f_1} } \circ \iota_1$

Then we have:

$S^{-1} \paren {f_2 \circ f_1} = \paren {S^{-1} f_2} \circ \paren {S^{-1} f_1}$


Proof
Let $g : S^{-1}M_1 \to S^{-1}M_3$ be defined by:

$g:= \paren {S^{-1} f_2} \circ \paren {S^{-1} f_1}$
Then:














\(\ds g \circ \iota_1\)

\(=\)







\(\ds \paren {S^{-1}f_2} \circ \paren {S^{-1}f_1 } \circ \iota_1\)




















\(\ds \)

\(=\)







\(\ds \paren {S^{-1}f_2} \circ \iota_2 \circ f_1\)





Definition of $S^{-1} f_1$














\(\ds \)

\(=\)







\(\ds \iota_3 \circ \paren {f_2 \circ f_1}\)





Definition of $S^{-1} f_2$



Thus, by Definition of $S^{-1} \paren {f_2 \circ f_1}$, we have:

$g = S^{-1} \paren {f_2 \circ f_1}$
$\blacksquare$


Sources
1969: M.F. Atiyah and I.G. MacDonald: Introduction to Commutative Algebra: Chapter $3$: Rings and Modules of Fractions




