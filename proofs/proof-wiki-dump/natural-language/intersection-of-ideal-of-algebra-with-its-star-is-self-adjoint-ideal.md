# 

Source: https://proofwiki.org/wiki/Intersection_of_Ideal_of_*-Algebra_with_its_Star_is_Self-Adjoint_Ideal

Theorem
Let $\struct {A, \ast}$ be a $\ast$-algebra over $\C$. 
Let $I$ be an ideal of $A$.
Define:

$I^\ast = \set {x^\ast : x \in I}$

Then $I \cap I^\ast$ is a self-adjoint ideal.


Proof
From Star of Ideal of *-Algebra is Ideal, $I^\ast$ is an ideal.
From Intersection of Algebra Ideals is Ideal, $I \cap I^\ast$ is an ideal.
Further, if $x \in I \cap I^\ast$, then $x \in I$ and there exists $y \in I$ such that $x = y^\ast$.
From $(\text C^\ast 1)$ in the definition of an involution, we have $x^\ast = y^{\ast \ast} = y$. 
So $x^\ast \in I$.
Since $x \in I$ we also clearly have $x^\ast \in I^\ast$.
Hence $x^\ast \in I \cap I^\ast$ for all $x \in I \cap I^\ast$.
Hence $I \cap I^\ast$ is self-adjoint.
$\blacksquare$





