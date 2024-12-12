# 

Source: https://proofwiki.org/wiki/Convolution_of_Real_Function_with_Rectangle_Function

Theorem
Let $f: \R \to \R$ be a bounded piecewise continuous real function.
Consider the rectangle function $\Pi: \R \to \R$.
Then:

$\forall x \in \R: \map \Pi x * \map f x = \ds \int_{x \mathop - \frac 1 2}^{x \mathop + \frac 1 2} \map f u \rd u$
where $*$ denotes the convolution integral.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
By definition of convolution integral:

$\ds \map \Pi x * \map f x  = \int_{-\infty}^\infty \map \Pi {x - t} \map f x \rd t$
The above integral exists because $f$ is discontinuous on a countable set (see Lebesgue-Vitali Theorem).
This is equal to:

$\ds \int_{-\infty}^{x - \frac 1 2} \map \Pi {x - t} \map f t \rd t + \int_{x - \frac 1 2}^{x + \frac 1 2} \map \Pi {x - t} \map f t \rd t + \int_{x + \frac 1 2}^\infty \map \Pi {x - t} \map f t \rd t$
By definition of the rectangle function we have:

$\map \Pi {x - t} = 1 \iff \size {x - t} \le \dfrac 1 2$
$\map \Pi {x - t} = 0 \iff \size {x - t} > \dfrac 1 2$
Therefore:














\(\ds \int_{-\infty}^{x - \frac 1 2} \map \Pi {x - t} \map f t \rd t\)

\(=\)







\(\ds \int_{x + \frac 1 2}^\infty \map \Pi {x - t} \map f t \rd t\)




















\(\ds \)

\(=\)







\(\ds 0\)









What remains is:














\(\ds \int_{x - \frac 1 2}^{x + \frac 1 2} \map \Pi {x - t}\map f t \rd t\)

\(=\)







\(\ds \int_{x - \frac 1 2}^{x + \frac 1 2} \map f t \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \map \Pi x * \map f x\)

\(=\)







\(\ds \int_{x - \frac 1 2}^{x + \frac 1 2} \map f t \rd t\)









$\blacksquare$


Sources
1978: Ronald N. Bracewell: The Fourier Transform and its Applications (2nd ed.) ... (previous) ... (next): Chapter $1$: Introduction




