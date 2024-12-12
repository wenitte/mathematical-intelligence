# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Direct_Limit_of_Sequence_of_Groups/Lemma_3


This article needs to be linked to other articles.In particular: It is important for all pages to be self-contained, so we need to include on this page the required definitions from its parent page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Lemma
Let $h_\infty: G_\infty \to H$ be the mapping defined as:

$\eqclass {\tuple {x_n, n} } {} \mapsto \map {h_n} {x_n}$
Then $h_\infty$ is a well-defined group homomorphism.


Proof
Well-Definedness of $h_\infty$
Let $\tuple {x_n, n}, \tuple{x_{n'}, n'} \in \eqclass {\tuple {x_n, n} } {}$.
Without loss of generality, let $n' \ge n$. 
Then we have:

$\map {g_{n, n'} } {x_n} = x_{n'}$
and:














\(\ds \map {h_{n'} } {x_{n'} }\)

\(=\)







\(\ds \map {h_{n'} } {\map {g_{n,n'} } {x_n} }\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {h_{n'} \circ g_{n, n'} } } {x_n}\)





because $h_{n'} \circ g_{n, n'} = h_n$














\(\ds \)

\(=\)







\(\ds \map {h_n} {x_n}\)









This proves that $h_\infty$ is independent of the representative chosen.
That is, $h_\infty$ is well-defined.
$\Box$


Homomorphism Property
Let $\eqclass {\tuple{x_n, n} } {}, \eqclass {\tuple {y_m, m} } {} \in G_\infty$.
Without loss of generality, we may assume, by the definition of the group operation, that $n = m$.
See Lemma 2 for details.


This article contains statements that are justified by handwavery.In particular: Can that be demonstrated?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It follows that:














\(\ds \map {h_{\infty} } {\eqclass {\tuple {x_n, n} } {} \circ \eqclass {\tuple {y_n, n} } {} }\)

\(=\)







\(\ds \map {h_n} {x_n y_n}\)





Definition of $h_\infty$














\(\ds \)

\(=\)







\(\ds \map {h_n} {x_n} \map {h_n} {y_n}\)





$h_n$ is a homomorphism














\(\ds \)

\(=\)







\(\ds \map {h_\infty} {\eqclass {\tuple {x_n, n} } {} } \circ \map {h_\infty} {\eqclass {\tuple {y_n, n} } {} }\)





Definition of $h_\infty$



Thus $h_\infty$ is a homomorphism.
$\blacksquare$





