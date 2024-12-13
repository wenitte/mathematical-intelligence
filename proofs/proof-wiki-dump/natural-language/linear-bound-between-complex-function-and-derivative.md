# 

Source: https://proofwiki.org/wiki/Linear_Bound_between_Complex_Function_and_Derivative

Theorem
Let $f: D \to \C$ be a complex-differentiable function, where $D \subseteq \C$ is an open set.
Let $z_0 \in D$.
Let $\epsilon \in \R_{>0}$.

Then there exists $r \in \R_{>0}$ such that for all $z \in \map {B_r} {z_0}$:

$\size {\map f z - \map f {z_0} - \map {f'} {z_0} \paren {z - z_0} } < \epsilon \size {z - z_0}$
where $\map {B_r} {z_0}$ denotes the open ball with center $z_0$ and radius $r$.


Proof













\(\ds \map {f'} {z_0}\)

\(=\)







\(\ds \ds \lim_{z \mathop \to z_0} \dfrac{ \map f z - \map f {z_0} } {z - z_0}\)





Definition of Complex-Differentiable at Point








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \lim_{z_0 \mathop \to z} \dfrac {\map f z - \map f {z_0} - \map {f'} {z_0} \paren{ z - z_0 } } {z - z_0}\)





Combination Theorem for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \lim_{z_0 \mathop \to z} \size {\dfrac {\map f z - \map f {z_0} - \map {f'} {z_0} \paren {z - z_0} } {z - z_0} }\)





Modulus of Limit














\(\ds \)

\(=\)







\(\ds \lim_{z_0 \mathop \to z} \dfrac {\size {\map f z - \map f {z_0} - \map {f'} {z_0} \paren {z - z_0} } } {\size {z - z_0} }\)





Complex Modulus of Quotient of Complex Numbers




Given $\epsilon > 0$, we can find $r > 0$ by definition of limit such that for all $z \in \map {B_r} {z_0}$:

$\dfrac {\size {\map f z - \map f {z_0} - \map {f'} {z_0} \paren {z - z_0} } } {\size {z - z_0} } < \epsilon$
We rearrange to:

$\size {\map f z - \map f {z_0} - \map {f'} {z_0} \paren {z - z_0} } < \epsilon \size {z - z_0}$
$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 3.1$




