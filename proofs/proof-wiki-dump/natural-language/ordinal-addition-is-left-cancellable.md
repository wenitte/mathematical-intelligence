# 

Source: https://proofwiki.org/wiki/Ordinal_Addition_is_Left_Cancellable



Theorem
Let $x, y, z$ be ordinals.

Then:

$\paren {z + x} = \paren {z + y} \implies x = y$
That is, ordinal addition is left cancellable.


Proof
For the proof, $<$, $\in$, and $\subsetneq$ will be used interchangeably.
This is justified by Transitive Set is Proper Subset of Ordinal iff Element of Ordinal.

Note that:














\(\ds x < y\)

\(\implies\)







\(\ds \paren {z + x} < \paren {z + y}\)





Membership is Left Compatible with Ordinal Addition














\(\ds y < x\)

\(\implies\)







\(\ds \paren {z + y} < \paren {z + x}\)





Membership is Left Compatible with Ordinal Addition




However:














\(\ds \paren {z + x} = \paren {z + y}\)

\(\implies\)







\(\ds \paren {z + x} \not < \paren {z + y} \land \paren {z + y} \not < \paren {z + x}\)





No Membership Loops




This contradicts the consequents of the first two equations, so:














\(\ds \)

\(\implies\)







\(\ds x \not < y \land y \not < x\)





Rule of Transposition














\(\ds \)

\(\implies\)







\(\ds x = y\)





Ordinal Membership is Trichotomy



$\blacksquare$


Warning

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract this into its own page and link to it in also seeYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Ordinal addition is not right cancellable.
By Finite Ordinal Plus Transfinite Ordinal

$\paren {1 + \omega} = \paren {0 + \omega}$
but $1 \ne 0$.


Also see
Natural Number Addition is Cancellable: natural number addition is both left and right cancellable.


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.5$




