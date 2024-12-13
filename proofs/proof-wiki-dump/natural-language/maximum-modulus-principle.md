# 

Source: https://proofwiki.org/wiki/Maximum_Modulus_Principle


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $D$ be an open region of the complex plane $\C$.
Let $f: D \to \C$ be a non-constant holomorphic function.
Then $\cmod f$ does not have any maximum points in the interior of $D$.

That is, for each $z \in D$ and $\delta > 0$, there exists some $\omega \in \map {B_\delta} z \cap D$, such that:

$\cmod {\map f \omega} > \cmod {\map f z}$


Proof
Pick some $r > 0$ such that $\map {B_r} z \subset D$.
By the Mean Value Theorem for Holomorphic Functions:

$\ds \map f z = \dfrac 1 {2 \pi} \int_0^{2 \pi} \map f {z + r e^{i \theta} } \rd \theta$
Then:














\(\ds \cmod {\map f z}\)

\(\le\)







\(\ds \frac 1 {2 \pi} \int_0^{2 \pi} \cmod {\map f {z + r e^{i \theta} } } \rd \theta\)




















\(\ds \)

\(\le\)







\(\ds \max_\theta \cmod {\map f {z + r e^{i \theta} } }\)





Darboux's Theorem



So it must be that there exists $\omega \in \map {C_r} z$ such that:

$\cmod {\map f z} \le \cmod {\map f \omega}$
where $\map {C_r} z$ is the circle of radius $r$ centered at $z$.

Note that equality is only obtained when $\cmod f$ is constant on $\map {C_r} z$.

However, since this holds for all sufficiently small $r > 0$, $\cmod f$ would be constant in $\map {B_r} z$.
Then $f$ must be constant in $D$, contradicting our assumption.
It follows that there exists $\omega \in \map {C_r} z$ such that: 

$\cmod {\map f z} < \cmod {\map f \omega}$
$\blacksquare$


Also known as
The Maximum Modulus Principle is also known as the Maximum Modulus Theorem.


Sources
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): maximum modulus theorem




