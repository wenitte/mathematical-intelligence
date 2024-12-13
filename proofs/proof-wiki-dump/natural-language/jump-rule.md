# 

Source: https://proofwiki.org/wiki/Jump_Rule



Theorem
Let $f : \R \to \R$ be a piecewise continuously differentiable real function with a discontinuity at $c \in \R$.
Suppose the limits $\map f {c^+}, \map f {c^-}, \map {f'} {c^+}, \map {f'} {c^-}$ exist.
Let $T \in \map {\DD'} \R$ be a distribution associated with $f$.

Then in the distributional sense we have that:

$T_f' = T_{f'} + \paren {\map f {c^+} - \map f {c^-}} \delta_c$
where $\delta_c$ is the Dirac delta distribution.


Proof
Let $\phi \in \map \DD {\R}$ be a test function with its support on $\closedint a b \subset \R$.
Let $c \in \closedint a b$.
Then:














\(\ds \map {T_f'} \phi\)

\(=\)







\(\ds - \map {T_f} {\phi'}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds - \int_a^b \map f x \map {\phi'} x \rd x\)




















\(\ds \)

\(=\)







\(\ds - \int_a^c \map f x \map {\phi'} x \rd x - \int_c^b \map f x \map {\phi'} x \rd x\)




















\(\ds \)

\(=\)







\(\ds \map f a \map \phi a - \map f {c^-} \map \phi {c^-} + \int_a^c \map {f'} x \map \phi x + \map f {c^+} \map \phi {c^+} - \map f b \map \phi b + \int_c^b \map {f'} x \map \phi x \rd x\)





Integration by parts














\(\ds \)

\(=\)







\(\ds \int_a^b \map {f'} x \map \phi x \rd x + \paren {\map f {c^+} - \map f {c^-} } \map \phi c\)





Definition of Test Function














\(\ds \)

\(=\)







\(\ds \map {T_{f'} } \phi + \paren {\map f {c^+} - \map f {c^-} } \map {\delta_c} \phi\)





Definition of Dirac Delta Distribution














\(\ds \)

\(=\)







\(\ds \map {\paren {T_{f'} + \paren {\map f {c^+} - \map f {c^-} }\delta_c} } \phi\)





Distribution is linear mapping



$\blacksquare$


Further research is required in order to fill out the details.In particular: It this strict enough? We do not have a limit in the beginning, but later we have to introduce it. Is this the aspect of the distribution or of the Riemannian integral.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by finding out more.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Research}} from the code.
Also see
Definition:Jump Discontinuity


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




