# 

Source: https://proofwiki.org/wiki/Exponentiation_Functor_is_Functor

Theorem
Let $\mathbf C$ be a Cartesian closed metacategory.
Let $A$ be an object of $\mathbf C$.
Let $\left({-}\right)^A: \mathbf C \to \mathbf C$ be the exponentiation functor.

Then $\left({-}\right)^A$ is a functor.


Proof
Let $B$ be an object of $\mathbf C$.
Let $\epsilon_B: B^A \times A \to B$ be the evaluation morphism at $B$.
Then, since:














\(\ds \operatorname{id}_B \epsilon_B\)

\(=\)







\(\ds \epsilon_B\)




















\(\ds \)

\(=\)







\(\ds \epsilon_B \operatorname{id}_{B^A \times A}\)




















\(\ds \)

\(=\)







\(\ds \epsilon_B \left({\operatorname{id}_{B^A} \times \operatorname{id}_A}\right)\)









it follows that $\left({\operatorname{id}_B}\right)^A = \operatorname{id}_{B^A}$.

Next, let $f: B \to C, g: C \to D$ be composable morphisms.
Then:














\(\ds g f \epsilon_B\)

\(=\)







\(\ds g \epsilon_C \left({f^A \times \operatorname{id}_A}\right)\)





Definition of $f^A$














\(\ds \)

\(=\)







\(\ds \epsilon_D \left({g^A \times \operatorname{id}_A}\right) \left({f^A \times \operatorname{id}_A}\right)\)





Definition of $g^A$














\(\ds \)

\(=\)







\(\ds \epsilon_D \left({g^A f^A \times \operatorname{id}_A}\right)\)









Thus, $g^A f^A$ is the morphism satisfying the UMP for $\left({g f}\right)^A$.
That is to say:

$\left({g f}\right)^A = g^A f^A$

Hence, $\left({-}\right)^A$ is a functor.
$\blacksquare$


This article is complete as far as it goes, but it could do with expansion.In particular: diagramYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous): $\S 6.2$: Proposition $6.7$




