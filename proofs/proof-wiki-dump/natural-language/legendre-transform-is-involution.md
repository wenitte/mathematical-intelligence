# 

Source: https://proofwiki.org/wiki/Legendre_Transform_is_Involution

Theorem
The Legendre transform is an Involution.


Proof
Let $\map f x$ be a strictly convex real function.
Let $p = \map {f'} x$.
By definition of the Legendre transform, the transformed real function is of the form:

$\map {f^*} p = - \map f {\map x p} + p \map x p$
By Legendre Transform of Strictly Convex Real Function is Strictly Convex, $f^*$ is strictly convex.

Let $t = \map { {f^*}'} p$.
Let $\map {\paren {f^*}^*} t = - \map {f^*} {\map p t} + t \map p t$.
Then:














\(\ds \paren {f^*}^*\)

\(=\)







\(\ds -f^* + t p\)




















\(\ds \)

\(=\)







\(\ds -\paren {-f + p t} + t p\)




















\(\ds \)

\(=\)







\(\ds f\)









$t$ is an arbitrary independent variable, hence can be renamed.
Set $t = x$.
Then:

$\tuple {t,f^{**} } = \tuple {x, f}$
which is the original pair of function and its variable.
Hence, by definition, the Legendre transform is an involution.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.18$: The Legendre Tranformation




