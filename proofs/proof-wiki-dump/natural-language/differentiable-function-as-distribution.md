# 

Source: https://proofwiki.org/wiki/Differentiable_Function_as_Distribution

Theorem
Let $T \in \map {\DD'} \R$ be a distribution.
Let $f : \R \to \R$ be a continuously differentiable real function.
Suppose $T_f$ is a distribution identified with $f$.

Then $T_f' = T_{f'}$.


Proof
Let $\phi \in \map \DD \R$ be a test function with a support on $\closedint a b$.
Then:














\(\ds \map {T'_f} \phi\)

\(=\)







\(\ds -\map {T_f} {\phi'}\)





Definition of Distributional Derivative














\(\ds \)

\(=\)







\(\ds -\int_{-\infty}^\infty \map f x \map {\phi'} x \rd x\)




















\(\ds \)

\(=\)







\(\ds -\int_a^b \map f x \map {\phi'} x \rd x\)





Definition of Test Function, Integral of Compactly Supported Function














\(\ds \)

\(=\)







\(\ds -\paren {\map f b \map \phi b - \map f a \map \phi a} + \int_a^b \map \phi x \map {f'} x \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \int_a^b \map \phi x \map {f'} x \rd x\)





Definition of Test Function














\(\ds \)

\(=\)







\(\ds \map {T_{f'} } \phi\)









$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 6.2$: A glimpse of distribution theory. Derivatives in the distributional sense




