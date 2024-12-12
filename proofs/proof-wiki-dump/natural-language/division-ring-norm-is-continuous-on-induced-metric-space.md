# 

Source: https://proofwiki.org/wiki/Division_Ring_Norm_is_Continuous_on_Induced_Metric_Space

Theorem
Let $\struct {R, \norm {\,\cdot\,}}$ be a normed division ring.
Let $d$ be the metric induced by the norm $\norm {\,\cdot\,}$.
The mapping $\norm {\,\cdot\,} : \struct {R, d} \to \R$ is continuous.


Proof
Let $x_0 \in R$.
Let $\epsilon \in \R_{>0}$. 
Let $x \in R: \norm {x - x_0} < \epsilon$.
Then:














\(\ds \size {\norm x - \norm {x_0} }\)

\(\le\)







\(\ds \norm {x - x_0}\)





Reverse Triangle Inequality on Normed Division Ring














\(\ds \)

\(<\)







\(\ds \epsilon\)









By the definition of metric induced by a norm and the definition of a continuous mapping, $\norm {\,\cdot\,}$ is continuous.
$\blacksquare$





