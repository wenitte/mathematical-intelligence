# 

Source: https://proofwiki.org/wiki/Composite_of_Homeomorphisms_is_Homeomorphism

Theorem
Let $T_1, T_2, T_3$ be topological spaces. 
Let $f: T_1 \to T_2$ and $g: T_2 \to T_3$ be homeomorphisms.

Then $g \circ f: T_1 \to T_3$ is also a homeomorphism.


Proof
By definition of homeomorphism, $f$ and $g$ are both bijections.
From Composite of Bijections is Bijection it follows that $g \circ f$ is also a bijection.

By definition of homeomorphism, $f$ and $g$ are both continuous mappings.
From Composite of Continuous Mappings is Continuous it follows that $g \circ f$ is also a continuous mapping.

From Inverse of Bijection is Bijection, $f^{-1}: T_2 \to T_1$ and $g^{-1}: T_3 \to T_2$ are also both bijections.
From Composite of Bijections is Bijection it follows that $f^{-1} \circ g^{-1}$ is also a bijection.

By definition of homeomorphism, $f^{-1}$ and $g^{-1}$ are both continuous mappings.
Again from Composite of Continuous Mappings is Continuous it follows that $f^{-1} \circ g^{-1}$ is also a continuous mapping.

Hence the result, from definition of homeomorphism.
$\blacksquare$





