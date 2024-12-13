# 

Source: https://proofwiki.org/wiki/Reciprocal_of_Holomorphic_Function

Theorem
Let $f: \C \to \C$ be a complex function.
Let $U \subseteq \C$ be an open set such that $f$ has no zeros in $U$.
Suppose further that $f$ is holomorphic in $U$.

Then the complex function

$\dfrac 1 {f_{\restriction U} } : U \to \C$
is holomorphic.


Proof
Let $g: U \to \C$ be such that $\map g x = 1 / \map f x$.
Since $\map f x$ is nonzero for $x \in U$, $g$ is well-defined.
By Quotient Rule for Continuous Complex Functions, $g$ is continuous.
Let $z_0 \in U$.
As $g$ is continuous:

$\ds \lim_{h \mathop \to 0} \frac 1 {\map f {z_0 + h} } = \frac 1 {\map f {z_0} }$
As $f$ is holomorphic:

$\ds \lim_{h \mathop \to 0} \frac {\map f {z_0 + h} - \map f {z_0} } h = \map {f'} {z_0}$
By the Combination Theorem for Limits of Complex Functions:














\(\ds \lim_{h \mathop \to 0} \frac {\map g {z_0 + h} - \map g {z_0} } h\)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac {\frac 1 {\map f {z_0 + h} } - \frac 1 {\map f {z_0} } } h\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {\map f {z_0} } \lim_{h \mathop \to 0} \paren {\paren {\frac 1 {\map f {z_0 + h} } } \paren {\frac {\map f {z_0 + h} - \map f {z_0} } h} }\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 {\map f {z_0}^2} \cdot \map {f'} {z_0}\)









It follows that $g$ is holomorphic.
$\blacksquare$





