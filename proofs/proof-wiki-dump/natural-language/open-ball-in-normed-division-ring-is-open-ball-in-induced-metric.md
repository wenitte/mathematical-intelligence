# 

Source: https://proofwiki.org/wiki/Open_Ball_in_Normed_Division_Ring_is_Open_Ball_in_Induced_Metric

Theorem
Let $\struct{R, \norm {\,\cdot\,} }$ be a normed division ring.
Let $d$ be the metric induced by the norm $\norm {\,\cdot\,}$.

Let $a \in R$.
Let $\epsilon \in \R_{>0}$ be a strictly positive real number.

Let $\map {B_\epsilon} {a; \norm {\,\cdot\,} }$ denote the open ball in the normed division ring $\struct {R, \norm {\,\cdot\,} }$.
Let $\map {B_\epsilon} {a; d }$ denote the open ball in the metric space $\struct {R, d}$.

Then:

$\map {B_\epsilon} {a; \norm {\,\cdot\,} }$ = $\map {B_\epsilon} {a; d }$


Proof













\(\ds x \in \map {B_\epsilon} {a; \norm {\,\cdot\,} }\)

\(\leadstoandfrom\)







\(\ds \norm {x - a} < \epsilon\)





Definition of Open Ball in $\struct {R, \norm {\,\cdot\,} }$














\(\ds \)

\(\leadstoandfrom\)







\(\ds \map d {x, a} < \epsilon\)





Definition of Metric Induced by $\norm {\,\cdot\,}$














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \map {B_\epsilon} {a; d }\)





Definition of Open Ball in $\struct {R, d}$



The result follows from Equality of Sets.
$\blacksquare$


Also see
Closed Ball in Normed Division Ring is Closed Ball in Induced Metric
Sphere in Normed Division Ring is Sphere in Induced Metric




