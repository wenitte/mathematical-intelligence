# 

Source: https://proofwiki.org/wiki/Holomorphic_Function_with_Constant_Imaginary_Part_is_Constant/Corollary

Theorem
Let $D \subseteq \C$ be an open subset of the set of complex numbers $\C$.
Let $f: D \to \C$ be a holomorphic function such that $\map \Re f$ is constant.

Then $f$ is constant.


Proof
From Combination Theorem for Complex Derivatives: Multiple Rule, $i f$ is holomorphic.
From Imaginary Part of Imaginary Unit times Element of *-Algebra, we have:

$\map \Im {i f} = \map \Re f$
Hence $\map \Im {i f}$ is constant.
From Holomorphic Function with Constant Imaginary Part is Constant, there exists $c \in \C$ such that:

$i \map f z = c$
for all $z \in D$.
Hence $\map f z = -i c$ for all $z \in D$.
So $f$ is constant.
$\blacksquare$





