# 

Source: https://proofwiki.org/wiki/Contour_Integration_by_Substitution

Theorem
Let $f$ be a holomorphic function on a simply connected domain $V \subseteq \mathbb C$.
Let $\gamma$ be a contour in $V$ starting at $z_1$ and ending at $z_2$.
Let $U$ be a connected domain.
Let $\phi: U \to V$ be a holomorphic function with $\phi^{-1} \sqbrk {\set {z_1, z_2} } \ne \O$.
Let $\omega$ be a contour in $U$ starting at $u_1$ and ending at $u_2$, such that $\map \phi {u_1} = z_1$ and $\map \phi {u_2} = z_2$.

Then the contour integral of $f$ over $\gamma$ satisfies the following substitution:

$\ds \int_\gamma \map f z \rd z = \int_\omega \map f {\map \phi u} \map {\phi'} u \rd u$


Proof

This article needs to be linked to other articles.In particular: relationship between holomorphic on s.c. domain and having a primitiveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Because $V$ is simply connected, $f$ has a primitive.

Let one such primitive $F$ be established.
By the Fundamental Theorem of Calculus for Contour Integrals:














\(\ds I_1\)

\(=\)







\(\ds \int_\gamma \map f z \rd z\)




















\(\ds \)

\(=\)







\(\ds \map F {z_2} - \map F {z_1}\)










Next, observe that $\map f {\map \phi u} \map {\phi'} u$ also has a primitive, that is $\map F {\map \phi u}$.
Again by the Fundamental Theorem of Calculus for Contour Integrals:














\(\ds I_2\)

\(=\)







\(\ds \int_\omega \map f {\map \phi u} \map {\phi'} u \rd u\)




















\(\ds \)

\(=\)







\(\ds \map F {\map \phi {u_2} } - \map F {\map \phi {u_1} }\)










Because $\map \phi {u_1} = z_1$, we have that:

$\map F {\map \phi {u_1} } = \map F {z_1}$
and likewise for $\map \phi {u_2}$. 
Thus $I_1 = I_2$.
$\blacksquare$





