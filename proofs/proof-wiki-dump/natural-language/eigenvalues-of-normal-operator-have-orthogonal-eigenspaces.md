# 

Source: https://proofwiki.org/wiki/Eigenvalues_of_Normal_Operator_have_Orthogonal_Eigenspaces


This article needs to be linked to other articles.In particular: Orthogonal Eigenspaces -- if you're going to mention a property in the title, you need to coordinate that with what you've got going on in the body of the proof. The reader of the page is not as likely to be as clever as the writer of the page, and so won't necessarily have the knowledge to know what "Orthogonal Eigenspaces" are. Link to it rather than present its definition in this page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\HH$ be a Hilbert space.
Let $\mathbf T: \HH \to \HH$ be a normal operator.
Let $\lambda_1, \lambda_2$ be distinct eigenvalues of $\mathbf T$.

Then:

$\map \ker {\mathbf T - \lambda_1} \perp \map \ker {\mathbf T - \lambda_2}$
where:

$\ker$ denotes kernel
$\perp$ denotes orthogonality.


Proof

Although this article appears correct, it's inelegant. There has to be a better way of doing it.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Requisite knowledge: $\mathbf T^*$ is the adjoint of $\mathbf T$ and is defined by the fact that for any $\mathbf u, \mathbf w \in \HH$, we have

$\innerprod {\mathbf {T u} } {\mathbf w} = \innerprod {\mathbf u} {\mathbf T^* \mathbf w}$
It is important to note the existence and uniqueness of adjoint operators.


This article, or a section of it, needs explaining.In particular: Link to the required proofs and/or definitions as given above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Claim: We know that for $\mathbf v \in \HH$:

$\mathbf {T v} = \lambda \mathbf v \iff \mathbf T^* \mathbf v = \overline \lambda \mathbf v$
This is true because for all normal operators, by definition:

$\mathbf T^* \mathbf T = \mathbf T {\mathbf T^*}$
and so:














\(\ds \norm {\mathbf {T v} }^2\)

\(=\)







\(\ds \innerprod {\mathbf{T v} } {\mathbf{T v} }\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {\mathbf T^* \mathbf {T v} } {\mathbf v}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\mathbf T \mathbf T^* \mathbf v} {\mathbf v}\)





Definition of Normal Operator














\(\ds \)

\(=\)







\(\ds \innerprod {\mathbf T^* \mathbf v} {\mathbf T^* \mathbf v}\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf T^* \mathbf v}^2\)





Definition of Inner Product Norm




Since $\mathbf T$ is normal, $\mathbf T - \lambda \mathbf I$ is also normal.


This article, or a section of it, needs explaining.In particular: Link to a page demonstrating the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus:














\(\ds \mathbf {T v}\)

\(=\)







\(\ds \lambda \mathbf v\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \bszero\)

\(=\)







\(\ds \norm {\paren {\mathbf T - \lambda \mathbf I} \mathbf v}\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {\mathbf T - \lambda \mathbf I}^* \mathbf v}\)




















\(\ds \)

\(=\)







\(\ds \norm {\mathbf T^* \mathbf v - \overline \lambda \mathbf v}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf T^* \mathbf v\)

\(=\)







\(\ds \overline \lambda \mathbf v\)










Let $\mathbf v_1$ and $\mathbf v_2$ be non-zero eigenvectors of $\mathbf T$ with corresponding eigenvalues $\lambda_1$ and $\lambda_2$, respectively.
Then:














\(\ds \lambda_1 \innerprod {\mathbf v_1} {\mathbf v_2}\)

\(=\)







\(\ds \innerprod {\lambda_1 \mathbf v_1} {\mathbf v_2}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\mathbf T \mathbf v_1} {\mathbf v_2}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\mathbf v_1} {\mathbf T^* \mathbf v_2}\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\mathbf v_1} {\overline{\lambda_2} \mathbf v_2}\)




















\(\ds \)

\(=\)







\(\ds \lambda_2 \innerprod {\mathbf v_1} {\mathbf v_2}\)














\(\ds \leadsto \ \ \)





\(\ds \bszero\)

\(=\)







\(\ds \paren {\lambda_1 - \lambda_2} \innerprod {\mathbf v_1} {\mathbf v_2}\)










Since $\lambda_1 \ne \lambda_2$, this is only possible if $\innerprod {\mathbf v_1} {\mathbf v_2} = 0$, which means the eigenvectors of our normal operator are orthogonal.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{II}.5.7$




