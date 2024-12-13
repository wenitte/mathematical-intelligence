# 

Source: https://proofwiki.org/wiki/Meet_is_Associative



Theorem
Let $\struct {S, \wedge, \preceq}$ be a meet semilattice.

Then $\wedge$ is associative.


Proof
Let $a, b, c \in S$ be arbitrary.
Then:














\(\ds a \wedge \paren {b \wedge c}\)

\(=\)







\(\ds \inf \set {a, b \wedge c}\)





Definition of Meet














\(\ds \)

\(=\)







\(\ds \inf \set {\inf \set a, \inf \set {b, c} }\)





Infimum of Singleton














\(\ds \)

\(=\)







\(\ds \inf \set {a, b, c}\)





Infimum of Infima














\(\ds \)

\(=\)







\(\ds \inf \set {\inf \set {a, b}, \inf \set c}\)





Infimum of Infima














\(\ds \)

\(=\)







\(\ds \inf \set {a, b} \wedge c\)





Infimum of Singleton














\(\ds \)

\(=\)







\(\ds \paren {a \wedge b} \wedge c\)





Definition of Meet



Hence the result.
$\blacksquare$


Also see
Join is Associative

This article is complete as far as it goes, but it could do with expansion.In particular: Needs to be phrased using a "partial operation" to remove the condition that $\wedge$ is a total operationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.23 \ \text {(a)}$




