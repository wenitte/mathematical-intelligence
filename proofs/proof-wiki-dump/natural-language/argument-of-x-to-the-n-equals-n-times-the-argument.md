# 

Source: https://proofwiki.org/wiki/Argument_of_x_to_the_n_Equals_n_Times_The_Argument


This article needs to be linked to other articles.In particular: categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

It has been suggested that this page or section be merged into De Moivre's Theorem.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $z$ be a complex number.
Then:

$\forall n \in \N_{>0}: \map \arg {z^n} = n \map \arg z$


Proof
For $n = 1$

$\map \arg {z^1} = 1 \cdot \map \arg z$
Assuming the result is true for $n = k$, we have:














\(\ds \map \arg {z^{k + 1} }\)

\(=\)







\(\ds \map \arg {z z^k}\)




















\(\ds \)

\(=\)







\(\ds \map \arg z + \map \arg {z^k}\)





Argument of Product equals Sum of Arguments














\(\ds \)

\(=\)







\(\ds \map \arg z + k \map \arg z\)





by our induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k + 1} \map \arg z\)









$\blacksquare$





