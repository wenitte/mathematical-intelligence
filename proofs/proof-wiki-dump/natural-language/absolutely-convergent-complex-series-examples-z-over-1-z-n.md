# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Complex_Series/Examples/(z_over_(1-z))%5En

Example of Absolutely Convergent Complex Series
The complex series defined as:

$\ds S = \sum_{n \mathop = 1}^\infty \paren {\dfrac z {1 - z} }^n$
is absolutely convergent, provided $\Re \paren z < \dfrac 1 2$.


Proof
Suppose $S$ is absolutely convergent.
Then $\ds \sum_{n \mathop = 1}^\infty \cmod {\dfrac z {1 - z} }^n$ is convergent.
By Terms in Convergent Series Converge to Zero, this means that:

$\lim_{n \mathop \to \infty} \cmod {\dfrac z {1 - z} }^n \to 0$
which means in turn that:














\(\ds \cmod {\dfrac z {1 - z} }\)

\(<\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \cmod z^2\)

\(<\)







\(\ds \cmod {1 - z}^2\)














\(\ds \leadsto \ \ \)





\(\ds x^2 + y^2\)

\(<\)







\(\ds \paren {1 - x}^2 + y^2\)





Definition of Complex Modulus, where $z = x + i y$








\(\ds \leadsto \ \ \)





\(\ds x^2 + y^2\)

\(<\)







\(\ds 1 - 2 x + x^2 + y^2\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds 1 - 2 x\)














\(\ds \leadsto \ \ \)





\(\ds 2 x\)

\(<\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(<\)







\(\ds \dfrac 1 2\)









$\Box$

It remains to be shown that $S' := \ds \sum_{n \mathop = 1}^\infty \cmod {\dfrac z {1 - z} }^n$ is in fact a convergent series when $z < \dfrac 1 2$.

When $z < \dfrac 1 2$, we have that $\cmod {\dfrac z {1 - z} } < 1$, from above.
Let $w = \cmod {\dfrac z {1 - z} }$.
Then we have that:














\(\ds S'\)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty w^n\)




















\(\ds \)

\(=\)







\(\ds \dfrac w {1 - w}\)





Sum of Infinite Geometric Sequence: Corollary 1



The result follows.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 4.3$. Series: Example $\text{(iii)}$




