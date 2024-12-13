# 

Source: https://proofwiki.org/wiki/Limits_of_Real_and_Imaginary_Parts

Theorem
Let $f: D \to \C$ be a complex function, where $D \subseteq \C$.
Let $z_0 \in D$ be a complex number.

Suppose $f$ is continuous at $z_0$.

Then:

$(1): \quad \ds \lim_{z \mathop \to z_0} \map \Re {\map f z} = \map \Re {\lim_{z \mathop \to z_0} \map f z}$
$(2): \quad \ds \lim_{z \mathop \to z_0} \map \Im {\map f z} = \map \Im {\lim_{z \mathop \to z_0} \map f z}$

where:

$\map \Re {\map f z}$ denotes the real part of $\map f z$
$\map \Im {\map f z}$ denotes the imaginary part of $\map f z$.


Proof
By definition of continuity:

$\forall \epsilon > 0: \exists \delta > 0: \cmod {z - z_0} < \delta \implies \cmod {\map f z - \map f {z_0} } < \epsilon$

Given $\epsilon > 0$, we find $\delta > 0$ so for all $z \in \C$ with $\cmod {z - z_0} < \delta$:














\(\ds \epsilon\)

\(>\)







\(\ds \cmod {\map f z - \map f {z_0} }\)




















\(\ds \)

\(\ge\)







\(\ds \cmod {\map \Re {\map f z - \map f {z_0} } }\)





Modulus Larger than Real Part














\(\ds \)

\(=\)







\(\ds \cmod {\map \Re {\map f z} - \map \Re {\map f {z_0} } }\)





Addition of Real and Imaginary Parts




It follows that:

$\forall \epsilon > 0: \exists \delta > 0: \cmod {z - z_0} < \delta \implies \cmod {\map \Re {\map f z} - \map \Re {\map f {z_0} } } < \epsilon$

Then equation $(1)$ is proven by:














\(\ds \lim_{z \mathop \to z_0} \map \Re {\map f z}\)

\(=\)







\(\ds \map \Re {\map f {z_0} }\)





Definition of Limit of Complex Function














\(\ds \)

\(=\)







\(\ds \map \Re {\lim_{z \mathop \to z_0} \map f z}\)





Definition of Continuous Complex Function




The proof for equation $(2)$ with imaginary parts follows when $\Re$ is replaced by $\Im$ in the equations above.
$\blacksquare$





