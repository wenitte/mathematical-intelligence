# 

Source: https://proofwiki.org/wiki/Distribution_Space_over_Smooth_Functions_is_Unitary_Module



Theorem
The distribution space over smooth functions is a unitary module.


Proof
Let $\phi \in \map \DD {\R^d}$ be a test function.

Module Axiom $\text M 1$: Distributivity over Module Addition













\(\ds \alpha \map {\paren {T_1 + T_2} } \phi\)

\(=\)







\(\ds \map {\paren {T_1 + T_2} } {\alpha \phi}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds \map {T_1} {\alpha \phi} + \map {T_2} {\alpha \phi}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map {T_1} \phi + \alpha \map {T_2} \phi\)





Definition of Multiplication of Distribution by Smooth Function




Further research is required in order to fill out the details.In particular: How does a mapping of sum become a sum of mappingsYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.
Hence:

$\alpha \paren {T_1 + T_2} = \alpha T_1 + \alpha T_2$
$\Box$

Module Axiom $\text M 2$: Distributivity over Scalar Addition













\(\ds \map {\paren {\alpha_1 + \alpha_2} T} \phi\)

\(=\)







\(\ds \map T {\paren {\alpha_1 + \alpha_2}\phi}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds \map T {\alpha_1 \phi + \alpha_2 \phi}\)





Real Multiplication Distributes over Addition














\(\ds \)

\(=\)







\(\ds \map T {\alpha_1 \phi} + \map T {\alpha_2 \phi}\)





Definition of Distribution














\(\ds \)

\(=\)







\(\ds \alpha_1 \map T \phi + \alpha_2 \map T \phi\)





Definition of Multiplication of Distribution by Smooth Function



Hence:

$\paren {\alpha_1 + \alpha_2} T = \alpha_1 T + \alpha_2 T$
$\Box$

Module Axiom $\text M 3$: Associativity













\(\ds \paren {\alpha \beta} \map T \phi\)

\(=\)







\(\ds \map T {\paren {\alpha \beta} \phi}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds \map T {\beta \paren {\alpha \phi} }\)





Real Multiplication is Associative, Real Multiplication is Commutative














\(\ds \)

\(=\)







\(\ds \map {\paren {\beta T} } {\alpha \phi}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds \map {\paren {\alpha \paren {\beta T} } } \phi\)





Definition of Multiplication of Distribution by Smooth Function




Hence:

$\paren {\alpha \beta} T = \alpha \paren {\beta T}$
$\Box$

Unitary Module Axiom $\text {UM} 4$: Unity of Scalar Ring
Let $\mathbf 1 \in \map {C^\infty} {\R^d}$ be a constant mapping such that:

$\R^d \stackrel {\mathbf 1} {\mapsto} 1$
Then:














\(\ds \mathbf 1 \cdot \map T \phi\)

\(=\)







\(\ds \map T {1 \cdot \phi}\)





Definition of Multiplication of Distribution by Smooth Function














\(\ds \)

\(=\)







\(\ds \map T \phi\)









Hence:

$1 \cdot T = T$
$\Box$
$\blacksquare$


Further research is required in order to fill out the details.In particular: Establish group and ring aspects to finish the proofYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.4$: A glimpse of distribution theory. Multiplication by $C^\infty$ functions




