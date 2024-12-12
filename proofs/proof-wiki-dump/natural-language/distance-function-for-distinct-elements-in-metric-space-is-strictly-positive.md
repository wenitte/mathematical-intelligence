# 

Source: https://proofwiki.org/wiki/Distance_Function_for_Distinct_Elements_in_Metric_Space_is_Strictly_Positive

Theorem
Let $A$ be a set.
Let $d: A \times A \to \R$ be a real-valued function on $A$ with the following properties:




\((\text M 1')\)  

$:$  





  \(\ds \forall x, y \in A:\)

\(\ds \map d {x, y} = 0 \iff x = y \)   







  


\((\text M 2)\)  

$:$  





  \(\ds \forall x, y, z \in A:\)

\(\ds \map d {x, y} + \map d {y, z} \ge \map d {x, z} \)   







  


\((\text M 3)\)  

$:$  





  \(\ds \forall x, y \in A:\)

\(\ds \map d {x, y} = \map d {y, x} \)   







  

which can be considered as being an alternative formulation of the metric space axioms.

Then:

$\forall x, y \in A: x \ne y \implies \map d {x, y} > 0$
which is Metric Space Axiom $(\text M 4)$.

Thus $d$ is a distance function, so making $M := \struct {A, d}$ a metric space.


Proof









\(\ds \forall x, y \in A: \, \)



\(\ds \map d {x, y} + \map d {y, x}\)

\(\ge\)







\(\ds \map d {x, x}\)





from Metric Space Axiom $(\text M 2)$: Triangle Inequality








\(\ds \leadsto \ \ \)





\(\ds 2 \map d {x, y}\)

\(\ge\)







\(\ds 0\)





from Axiom $(\text M 1')$ above and Metric Space Axiom $(\text M 3)$








\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(\ge\)







\(\ds 0\)









$\blacksquare$





