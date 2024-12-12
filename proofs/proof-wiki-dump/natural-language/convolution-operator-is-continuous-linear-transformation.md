# 

Source: https://proofwiki.org/wiki/Convolution_Operator_is_Continuous_Linear_Transformation

Theorem
Let $\map {L^1} \R$ and $\map {L^\infty} \R$ be the real Lebesgue $1$- and  real Lebesgue $\infty$-spaces respectively.
Let $f \in \map {L^1} \R$.
Let $f* : \map {L^\infty} \R \to \map {L^\infty} \R$ be the convolution operator such that:

$\ds \forall t \in \R : \forall g \in \map {L^\infty} \R : \map {\paren {f * g} } t = \int_{-\infty}^\infty \map f {t - \tau} \map g \tau \rd \tau$

Then $f*$ is well defined and $f* \in \map {CL} {\map {L^\infty} \R}$, where $CL$ denotes the continuous linear transformation space.


Proof







\(\ds \forall t \in \R : \forall g \in \map {L^\infty} \R : \ \ \)





\(\ds \size {\map {\paren {f*g} } t}\)

\(=\)







\(\ds \size {\int_{-\infty}^\infty \map f {t - \tau} \map g \tau \rd \tau }\)





Definition of Convolution Integral














\(\ds \)

\(\le\)







\(\ds \int_{-\infty}^\infty \size {\map f {t - \tau} } \size {\map g \tau} \rd \tau\)




















\(\ds \)

\(\le\)







\(\ds \int_{-\infty}^\infty \size {\map f {t - \tau} } \norm g_\infty \rd \tau\)





Definition of Supremum Norm














\(\ds \)

\(=\)







\(\ds \norm g_\infty \int_{-\infty}^\infty \size {\map f {t - \tau} } \rd \tau\)




















\(\ds \)

\(=\)







\(\ds \norm g_\infty \int_{-\infty}^\infty \size {\map f \sigma } \rd \sigma\)





Integration by Substitution, $\sigma = t - \tau$














\(\ds \)

\(=\)







\(\ds \norm g_\infty \norm f_1\)





Definition of P-Seminorm














\(\ds \)

\(<\)







\(\ds \infty\)





Definition of Lebesgue Space



Thus, an element of the image of $f*$ is bounded.
Therefore, $f*$ is well-defined.


Further research is required in order to fill out the details.In particular: What does "well-defined" mean here? How does boundedness translate to well-definedness of $f*$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.
By definition, $f*$ is integral operator.
By Integral Operator is Linear, $f*$ is linear.
We have that $\norm f_1 \in \R$.
By Continuity of Linear Transformation between Normed Vector Spaces, $f*$ is continuous.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




