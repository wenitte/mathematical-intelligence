# 

Source: https://proofwiki.org/wiki/Linear_Integral_Bounded_Operator_is_Continuous

Theorem
Let $I = \closedint 0 1$ be a closed real interval.
Let $A : I \times I \to \R$ be a real function such that:

$\ds \int_0^1 \int_0^1 \paren {\map A {t, \tau} }^2 \rd t \rd \tau < \infty$

Further research is required in order to fill out the details.In particular: For now "bounded" means above. Need to check if this meaning is standardYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.
where $\times$ denotes the cartesian product.
Let $T_A : \map {L^2} I \to \map {L^2} I$ be an integral operator such that:

$\ds \map {\paren {T_A \mathbf x} } t := \int_0^1 \map A {t, \tau} \map {\mathbf x} \tau \rd \tau$
where $\mathbf x \in \map {L^2} I$, and $\map {L^2} I$ is the Lebesgue $2$-space.

Then $T_A$ is a continuous transformation. 


Proof
We have that Riemann Integral Operator is Linear Mapping.


Further research is required in order to fill out the details.In particular: Probably this should be replaced with Lebesgue integral. The source does not say anything about compatibility of Riemann integral and Lebesgue spaceYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.
Hence, $T_A$ is a linear transformation.
Furthermore:














\(\ds \norm {T_A \mathbf x}_2^2\)

\(=\)







\(\ds \int_0^1 \paren {\int_0^1 \map A {t, \tau} \map {\mathbf x} \tau \rd \tau}^2 \rd t\)





Definition of P-Seminorm














\(\ds \)

\(\le\)







\(\ds \int_0^1 \paren{\int_0^1 \paren{\map A {t, \tau} }^2 \rd \tau} \paren {\int_0^1 \paren{\map {\mathbf x} \tau}^2 \rd \tau }\rd t\)





Cauchy-Bunyakovsky-Schwarz Inequality for Definite Integrals














\(\ds \)

\(\le\)







\(\ds \paren {\int_0^1 \int_0^1 \paren{\map A {t, \tau} }^2 \rd \tau \rd t} \paren {\int_0^1 \paren{\map {\mathbf x} \tau}^2 \rd \tau }\)




















\(\ds \)

\(=\)







\(\ds \paren {\int_0^1 \int_0^1 \paren{\map A {t, \tau} }^2 \rd \tau \rd t} \norm {\mathbf x}_2^2\)





Definition of P-Seminorm














\(\ds \)

\(<\)







\(\ds \infty\)









Hence:

$T_A \mathbf x \in \map {L^2} I$
By Continuity of Linear Transformation between Normed Vector Spaces:

$T_A \in \map {CL} {\map {L^2} I}$
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




