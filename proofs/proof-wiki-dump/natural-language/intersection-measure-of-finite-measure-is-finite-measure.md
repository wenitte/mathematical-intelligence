# 

Source: https://proofwiki.org/wiki/Intersection_Measure_of_Finite_Measure_is_Finite_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a finite measure on $\struct {X, \Sigma}$. 
Let $A \in \Sigma$. 
Let $\mu_A$ be the intersection measure of $\mu$ by $A$.

Then $\mu_A$ is a finite measure.


Proof
From Intersection Measure is Measure, $\mu_A$ is a measure.
Since $\mu$ is a finite measure, we have: 

$\map \mu X < \infty$
Then, we have: 














\(\ds \map {\mu_A} X\)

\(=\)







\(\ds \map \mu {A \cap X}\)





Definition of Intersection Measure














\(\ds \)

\(=\)







\(\ds \map \mu A\)





Intersection with Subset is Subset














\(\ds \)

\(\le\)







\(\ds \map \mu X\)





Measure is Monotone














\(\ds \)

\(<\)







\(\ds \infty\)









So $\mu_A$ is a finite measure.
$\blacksquare$





