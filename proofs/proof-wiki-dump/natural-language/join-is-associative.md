# 

Source: https://proofwiki.org/wiki/Join_is_Associative



Theorem
Let $\struct {S, \vee, \preceq}$ be a join semilattice.

Then $\vee$ is associative.


Proof
Let $a, b, c \in S$ be arbitrary.
Then:














\(\ds a \vee \paren {b \vee c}\)

\(=\)







\(\ds a \vee \sup \set {b, c}\)





Definition of Join (Order Theory)














\(\ds \)

\(=\)







\(\ds \sup \set {\sup \set a, \sup \set {b, c} }\)





Supremum of Singleton














\(\ds \)

\(=\)







\(\ds \sup \set {a, b, c}\)





Supremum of Suprema














\(\ds \)

\(=\)







\(\ds \sup \set {\sup \set {a, b}, \sup \set c}\)





Supremum of Suprema














\(\ds \)

\(=\)







\(\ds \sup \set {a, b} \vee c\)





Supremum of Singleton














\(\ds \)

\(=\)







\(\ds \paren {a \vee b} \vee c\)





Definition of Join (Order Theory)



Hence the result.
$\blacksquare$


Also see
Meet is Associative

This article is complete as far as it goes, but it could do with expansion.In particular: Needs to be phrased using a "partial operation" to remove the condition that $\vee$ is a total operationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.23 \ \text {(a)}$




