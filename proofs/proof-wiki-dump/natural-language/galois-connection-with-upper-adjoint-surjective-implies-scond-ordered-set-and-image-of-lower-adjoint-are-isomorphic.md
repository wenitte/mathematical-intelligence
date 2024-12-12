# 

Source: https://proofwiki.org/wiki/Galois_Connection_with_Upper_Adjoint_Surjective_implies_Scond_Ordered_Set_and_Image_of_Lower_Adjoint_are_Isomorphic

Theorem
Let $L = \left({S, \preceq}\right), R = \left({T, \precsim}\right)$ be ordered sets.
Ley $g:S \to T, d:T \to S$ be mappings such that

$\left({g, d}\right)$ is Galois connection
and

$g$ is a surjection/
Let $N = \left({d\left[{T}\right], \preceq'}\right)$ be an ordered subset of $L$.

Then $R$ and $N$ are order isomorphic.


Proof
By Galois Connection implies Upper Adjoint is Surjection iff Lower Adjoint is Injection:

$d$ is an injection.
Define $d' = d:T \to g\left[{T}\right]$
By definition:

$d'$ is an injection.
By definition of Galois connection:

$d$ is an increasing mapping.
We will prove that

$d$ is order embedding.
Let $x, y \in T$.
By definition of increasing mapping:

$x \precsim y \implies d\left({x}\right) \preceq d\left({y}\right)$
Thus by definition of $d'$ and ordered subset:

$x \precsim y \implies d'\left({x}\right) \preceq' d'\left({y}\right)$
Assume that

$d'\left({x}\right) \preceq' d'\left({y}\right)$
By Upper Adjoint of Galois Connection is Surjection implies Lower Adjoint at Element is Minimum of Preimage of Singleton of Element

$\forall t \in T: d\left({t}\right) = \min\left({g^{-1}\left[{\left\{ {t}\right\} }\right]}\right)$
By Lower Adjoint at Element is Minimum of Preimage of Singleton of Element implies Composition is Identity:

$g \circ d = I_T$
By definition of Galois connection:

$g$ is an increasing mapping.
Thus by definition of $d'$ and ordered subset:

$d\left({x}\right) \preceq d\left({y}\right)$
By definition of increasing mapping:

$g\left({d\left({x}\right)}\right) \precsim g\left({d\left({y}\right)}\right)$
Thus by definitions of composition of mappings and identity mapping:

$x \precsim y$
$\Box$
By definition:

$d'$ is a surjection.
Hence $d'$ is order isomorphism between $R$ and $N$.
$\blacksquare$


Sources
Mizar article WAYBEL15:4




