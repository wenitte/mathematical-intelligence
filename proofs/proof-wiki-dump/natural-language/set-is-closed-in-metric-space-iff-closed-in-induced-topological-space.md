# 

Source: https://proofwiki.org/wiki/Set_is_Closed_in_Metric_Space_iff_Closed_in_Induced_Topological_Space

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\tau$ be the topology induced by the metric $d$.
Let $F$ be a subset of $M$.

Then:

$F$ is closed in $M$ if and only if $F$ is closed in $\struct {A, \tau}$


Proof
By definition of a closed set in $M$:

$F$ is closed set in $M$ if and only if $A \setminus F$ is open in $M$
By definition of the topology $\tau$ induced by the metric $d$:

$A \setminus F$ is open in $M$ if and only if $A \setminus F$ is open in $\struct {A, \tau}$
By definition of a closed set in $\struct{A, \tau}$:

$A \setminus F$ is open in $\struct {A, \tau}$ if and only if $F$ is closed set in $\struct {A, \tau}$
The result follows.
$\blacksquare$





