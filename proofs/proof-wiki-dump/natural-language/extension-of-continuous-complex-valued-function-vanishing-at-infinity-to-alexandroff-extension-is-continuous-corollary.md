# 

Source: https://proofwiki.org/wiki/Extension_of_Continuous_Complex-Valued_Function_Vanishing_at_Infinity_to_Alexandroff_Extension_is_Continuous/Corollary

Theorem
Let $X$ be a locally compact Hausdorff space.
Let $f : X \to \C$ be a continuous complex-valued function vanishing at infinity.

Then $f \sqbrk X \cup \set 0$ is compact.


Proof
Let $X^\ast = X \cup \set p$ be the Alexandroff extension of $X$.
From Alexandroff Extension is Compact, $X^\ast$ is compact.
Define $f^\ast : X^\ast \to \C$ by taking:

$\map {f^\ast} x = \begin{cases}\map f x & x \in X \\ 0 & x = p\end{cases}$
for each $x \in X^\ast$. 
From Extension of Continuous Complex-Valued Function Vanishing at Infinity to Alexandroff Extension is Continuous, $f^\ast$ is continuous.
From Continuous Image of Compact Space is Compact, $f^\ast \sqbrk {X^\ast}$ is compact.
We have:














\(\ds f^\ast \sqbrk {X^\ast}\)

\(=\)







\(\ds \set {\map {f^\ast} x : x \in X \cup \set p}\)





Definition of Alexandroff Extension














\(\ds \)

\(=\)







\(\ds \set {\map {f^\ast} x : x \in X} \cup \set {\map {f^\ast} p}\)




















\(\ds \)

\(=\)







\(\ds \set {\map f x : x \in X} \cup \set 0\)




















\(\ds \)

\(=\)







\(\ds f \sqbrk X \cup \set 0\)









Hence $f \sqbrk X \cup \set 0$ is compact.
$\blacksquare$





