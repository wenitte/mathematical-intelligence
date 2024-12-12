# 

Source: https://proofwiki.org/wiki/Finite_Intersection_of_Open_Sets_of_Neighborhood_Space_is_Open



Corollary to Intersection of two Open Sets of Neighborhood Space is Open
Let $\struct {S, \NN}$ be a neighborhood space.
Let $n \in \N_{>0}$ be a natural number.
Let $\ds \bigcap_{i \mathop = 1}^n U_i$ be a finite intersection of open sets of $\struct {S, \NN}$.

Then $\ds \bigcap_{i \mathop = 1}^n U_i$ is an open set of $\struct {S, \NN}$.


Proof
Proof by induction:
Let $U_1, U_2, \ldots$ be open sets of $\struct {S, \NN}$.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\ds \bigcap_{i \mathop = 1}^n U_i$ is an open set of $\struct {S, \NN}$.

$\map P 1$ is true, as this just says:

$U_1$ is an open set of $\struct {S, \NN}$.


Basis for the Induction
$\map P 2$ is the case:

$U_1 \cap U_2$ is an open set of $\struct {S, \NN}$
which has been proved above.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \bigcap_{i \mathop = 1}^k U_i$ is an open set of $\struct {S, \NN}$.

Then we need to show:

$\ds \bigcap_{i \mathop = 1}^{k + 1} U_i$ is an open set of $\struct {S, \NN}$.


Induction Step
This is our induction step:

We have that:

$\ds \bigcap_{i \mathop = 1}^{k + 1} U_i = \bigcap_{i \mathop = 1}^k U_i \cap U_{k + 1}$
From the induction hypothesis:

$\ds \bigcap_{i \mathop = 1}^k U_i$ is an open set of $\struct {S, \NN}$.
From the basis for the induction:

$\ds \bigcap_{i \mathop = 1}^k U_i \cap U_{k + 1}$ is an open set of $\struct {S, \NN}$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N_{>0}: \bigcap_{i \mathop = 1}^n U_i$ is an open set of $\struct {S, \NN}$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 3$: Neighborhoods and Neighborhood Spaces: Lemma $3.6$




