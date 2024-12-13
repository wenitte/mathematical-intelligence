# 

Source: https://proofwiki.org/wiki/Pointwise_Product_of_Simple_Functions_is_Simple_Function



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f, g : X \to \R$ be simple functions.

Then $f \cdot g: X \to \R, \map {\paren {f \cdot g} } x := \map f x \cdot \map g x$ is also a simple function.


Proof
From Measurable Function is Simple Function iff Finite Image Set, it follows that there exist $x_1, \ldots, x_n$ and $y_1, \ldots y_m$ comprising the image of $f$ and $g$, respectively.
But then it immediately follows that any value attained by $f \cdot g$ is of the form $x_i \cdot y_j$.
Hence, there are at most $n \times m$ distinct values $f \cdot g$ can take.
From Pointwise Product of Measurable Functions is Measurable, $f \cdot g$ is also measurable.


Due to the organization of pages at $\mathsf{Pr} \infty \mathsf{fWiki}$, this argument is circular.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving this issue.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{CircularStructure}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Hence by Measurable Function is Simple Function iff Finite Image Set, $f \cdot g$ is a simple function.
$\blacksquare$


Also see
Definition:Pointwise Operation, of which the definition of $f \cdot g$ is an instantiation
Scalar Multiple of Simple Function is Simple Function
Pointwise Sum of Simple Functions is Simple Function
Space of Simple Functions forms Ring


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.7 \ \text{(iv)}$




