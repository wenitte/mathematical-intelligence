# 

Source: https://proofwiki.org/wiki/Composite_of_Homeomorphisms_between_Metric_Spaces_is_Homeomorphism

Theorem
Let $M_1, M_2, M_3$ be metric spaces. 
Let $f: M_1 \to M_2$ and $g: M_2 \to M_3$ be homeomorphisms.

Then $g \circ f: M_1 \to M_3$ is also a homeomorphism.


Proof
By definition of homeomorphism, $f$ and $g$ are both bijections.
From Composite of Bijections is Bijection it follows that $g \circ f$ is also a bijection.

Similarly, also by definition of homeomorphism, $f$ and $g$ are both continuous mappings.
From Composite of Continuous Mappings on Metric Spaces is Continuous it follows that $g \circ f$ is also a continuous mapping.

From Inverse of Bijection is Bijection, $f^{-1}: M_2 \to M_1$ and $g^{-1}: M_3 \to M_2$ are also both bijections.
From Composite of Bijections is Bijection it follows that $f^{-1} \circ g^{-1} : M_3 \to M_1$ is also a bijection.

By definition of homeomorphism, $f^{-1}$ and $g^{-1}$ are both continuous mappings.
Again from Composite of Continuous Mappings on Metric Spaces is Continuous it follows that $f^{-1} \circ g^{-1}$ is also a continuous mapping.

Hence the result, from definition of homeomorphism.
$\blacksquare$





