# 

Source: https://proofwiki.org/wiki/Hermitian_Operator_has_Orthogonal_Eigenvectors


This article needs to be linked to other articles.In particular: throughout -- usually the most important terms -- including bra-ket notationYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
The eigenvectors of a Hermitian operator are orthogonal.


Proof
Let $\hat H$ be a Hermitian operator on an inner product space $V$ over the complex numbers $\C$, with a simple spectrum:

$\hat H \left\vert{x_i}\right\rangle = \lambda_i \left\vert{x_i}\right\rangle$
$\lambda_i \ne \lambda_j$
$\forall i, j \in \N: i \ne j$

Now we compute the following:














\(\ds \left\langle{x_j}\middle \vert{\hat H}\middle \vert{x_i}\right\rangle\)

\(=\)







\(\ds \left\langle{x_j}\middle \vert{\left({\hat H}\middle \vert{x_i}\right\rangle}\right)\)




















\(\ds \)

\(=\)







\(\ds \left\langle{x_j}\middle \vert{\lambda_i}\middle \vert{x_i}\right\rangle\)




















\(\ds \)

\(=\)







\(\ds \lambda_i \left\langle{x_j}\middle \vert{x_i}\right\rangle\)









and:














\(\ds \left\langle{x_i}\middle \vert{\hat H}\middle \vert{x_j}\right\rangle^*\)

\(=\)







\(\ds \left({\left\langle{x_i}\middle \vert{\left({\hat H}\middle \vert{x_j}\right\rangle}\right)}\right)^*\)




















\(\ds \)

\(=\)







\(\ds \left\langle{x_i}\middle \vert{\lambda_j}\middle \vert{x_j}\right\rangle^*\)




















\(\ds \)

\(=\)







\(\ds \left({\lambda_j \braket {x_i} {x_j} }\right)^*\)










This article, or a section of it, needs explaining.In particular: Justification for the above is needed.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
From the property $\lambda_j = \lambda_j^*$ and the conjugate symmetry of the inner product:

$\braket {x_i} {x_j} = \braket {x_j} {x_i}^*$
this becomes:

$\left\langle{x_i}\middle \vert{\hat H}\middle \vert{x_j}\right\rangle^* = \lambda_j \braket {x_j} {x_i}$
It can be shown that the following relation holds since $\hat H = \hat H^\dagger$:

$\left\langle{x_j}\middle \vert{\hat H}\middle \vert{x_i}\right\rangle = \left\langle{x_i}\middle \vert{\hat H}\middle \vert{x_j}\right\rangle^*$

This article contains statements that are justified by handwavery.In particular: "can be shown" -- link to a page which demonstrates thisYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This now gives us the equations:

$(1): \quad \left\langle{x_j}\middle \vert{\hat H}\middle \vert{x_i}\right\rangle = \lambda_i \braket {x_j} {x_i}$
$(2): \quad \left\langle{x_j}\middle \vert{\hat H}\middle \vert{x_i}\right\rangle = \lambda_j \braket {x_j} {x_i}$
Subtracting $(2)$ from $(1)$ gives:

$\paren {\lambda_i - \lambda_j} \braket {x_j} {x_i} = 0$
Note that $\paren {\lambda_i - \lambda_j} \ne 0$ since we were given $\lambda_i \ne \lambda_j$.
Therefore:

$\braket {x_j} {x_i} = 0$
Two vectors have inner product $0$ if and only if they are orthogonal.
Therefore the eigenvectors of $\hat H$ are orthogonal.
$\blacksquare$


Source
Hermitian Operator has Real Eigenvalues




