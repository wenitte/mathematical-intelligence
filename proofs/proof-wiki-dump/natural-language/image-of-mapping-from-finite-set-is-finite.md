# 

Source: https://proofwiki.org/wiki/Image_of_Mapping_from_Finite_Set_is_Finite

Theorem
Let $X, Y$ be sets.
Let $f: X \to Y$ be a mapping.
Let $X$ be a finite set.

Then $f \sqbrk X$ is a finite set.


Proof
By definition of surjection:

$f: X \to f \sqbrk X$ is a surjection.
The case when $X \ne \O$:
By Surjection iff Cardinal Inequality:

$\card {f \sqbrk X} \le \card X$
Thus by Set of Cardinality not Greater than Cardinality of Finite Set is Finite:

$f \sqbrk X$ is finite.
$\Box$

The case when $X = \O$:
By a corollary to Image of Empty Set is Empty Set:

$f \sqbrk X = \O$
Thus the result holds.
$\blacksquare$


Sources
Mizar article FINSET_1:8




