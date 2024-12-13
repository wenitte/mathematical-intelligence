# 

Source: https://proofwiki.org/wiki/Order_of_Automorphism_Group_of_Cyclic_Group

Theorem
Let $C_n$ denote the cyclic group of order $n$.
Let $\Aut {C_n}$ denote the automorphism group of $C_n$.
Then:

$\order {\Aut {C_n} } = \map \phi n$
where:

$\order {\, \cdot \,}$ denotes the order of a group
$\map \phi n$ denotes the Euler $\phi$ function.


Proof
Let $g$ be a generator of $C_n$.
Let $\varphi$ be an automorphism on $C_n$.

By Homomorphic Image of Cyclic Group is Cyclic Group, $\map \varphi g$ is a generator of $C_n$.
By Homomorphism of Generated Group, $\varphi$ is uniquely determined by $\map \varphi g$.
By Finite Cyclic Group has Euler Phi Generators, there are $\map \phi n$ possible values for $\map \varphi g$.

Therefore there are $\map \phi n$ automorphisms on $C_n$:

$\order {\Aut {C_n} } = \map \phi n$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Group Homomorphism and Isomorphism: $\S 64 \delta$




