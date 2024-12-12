# 

Source: https://proofwiki.org/wiki/Distance_in_Pseudometric_is_Non-Negative

Theorem
Let $X$ be a set on which a pseudometric $d: X \times X \to \R$ has been imposed.

Then:

$\forall x, y \in X: \map d {x, y} \ge 0$


Proof
By definition of pseudometric, we have that:




\((\text M 1)\)  

$:$  





  \(\ds \forall x \in A:\)

\(\ds \map d {x, x} = 0 \)   







  


\((\text M 2)\)  

$:$  





  \(\ds \forall x, y, z \in A:\)

\(\ds \map d {x, y} + \map d {y, z} \ge \map d {x, z} \)   







  


\((\text M 3)\)  

$:$  





  \(\ds \forall x, y \in A:\)

\(\ds \map d {x, y} = \map d {y, x} \)   







  


Hence:










\(\ds \forall x, y \in X: \, \)



\(\ds \map d {x, y} + \map d {y, x}\)

\(\ge\)







\(\ds \map d {x, x}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality








\(\ds \leadsto \ \ \)





\(\ds 2 \map d {x, y}\)

\(\ge\)







\(\ds 0\)





Metric Space Axiom $(\text M 1)$ and Metric Space Axiom $(\text M 3)$








\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(\ge\)







\(\ds 0\)









$\blacksquare$





