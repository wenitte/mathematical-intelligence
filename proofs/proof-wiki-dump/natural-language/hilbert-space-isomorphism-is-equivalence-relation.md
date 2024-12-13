# 

Source: https://proofwiki.org/wiki/Hilbert_Space_Isomorphism_is_Equivalence_Relation



Theorem
Hilbert space isomorphism is an equivalence relation.


Proof
Checking the three defining properties of an equivalence relation in turn:


Reflexivity
For any Hilbert space $H$, we have the identity map $I_H: H \to H$.

Identity Mapping is Linear yields $I_H$ to be a linear map.
Also, Identity Mapping is Bijection ensures that $I_H$ is a surjection.
Lastly, for any $g, h \in H$, we have:

$\innerprod g h = \innerprod {\map {I_H} g} {\map {I_H} h}$
Therefore, the three defining properties for a Hilbert space isomorphism are satisfied by $I_H$.

Hence, any Hilbert space $H$ is isomorphic to itself.
It follows that Hilbert space isomorphism is reflexive.
$\Box$


Symmetry
Let $H, K$ be isomorphic Hilbert spaces, and let $U: H \to K$ be a Hilbert space isomorphism.

From Hilbert Space Isomorphism is Bijection and the definition of bijection, it follows that $U$ has a two-sided inverse, $U^{-1}: K \to H$.
Inverse of Linear Map is Linear yields $U^{-1}$ to be a linear map as well.
Bijection iff Inverse is Bijection yields that $U^{-1}$ is also a surjection.
For $k, l \in K$, the computation $\innerprod k l _K = \innerprod {U U^{-1}k} {U U^{-1} l}_K = \innerprod {U^{-1} k} {U^{-1} l}_H$ shows that $U^{-1}$ preserves the inner product (where in the last step, the fact that $U$ is an isomorphism is used).

Hence, $U^{-1}$ is an isomorphism, so $K$ and $H$ are also isomorphic.
It follows that Hilbert space isomorphism is symmetric.
$\Box$


Transitivity
Let $H, K, L$ be Hilbert spaces, and let $U: H \to K, V: K \to L$ be Hilbert space isomorphisms.
Consider the composition $VU : H \to L$.

From Composition of Linear Maps is Linear, $VU$ is a linear map.
Composite of Surjections is Surjection yields $VU$ to be a surjection.
Lastly, for $g, h \in H$, we have:

$\innerprod g h_H = \innerprod {U g} {U h}_K = \innerprod {V U g} {V U h}_L$
Hence $VU$ is a Hilbert space isomorphism, and $H$ and $L$ are isomorphic.

It follows that Hilbert space isomorphism is transitive.
$\Box$

Having verified these three conditions, it follows that Hilbert space isomorphism is an equivalence relation, 
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.): $\S \text I.5$




