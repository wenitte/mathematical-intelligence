# 

Source: https://proofwiki.org/wiki/Ordering_on_Cuts_is_Transitive

Theorem
Let $\alpha$, $\beta$ and $\gamma$ be cuts.
Let:




\(\text {(1)}: \quad\)









\(\ds \alpha\)

\(<\)







\(\ds \beta\)










\(\text {(2)}: \quad\)









\(\ds \beta\)

\(<\)







\(\ds \gamma\)









where $<$ denotes the strict ordering of cuts:

$\alpha < \beta \iff \exists p \in \Q: p \in \alpha, p \notin \beta$

Then:

$\alpha < \gamma$

Hence the ordering of cuts $\le$ is a transitive relation.


Proof
We have that:

$\alpha < \beta$
By definition of strict ordering of cuts:

$\exists p \in \Q: p \in \beta, p \notin \alpha$

Similarly, we have that:

$\beta < \gamma$
and so:

$\exists q \in \Q: q \in \gamma, q \notin \beta$
We have by definition of a cut that:

$p \in \beta$ and $q \notin \beta$ implies that $p < q$
Together with $p \notin \alpha$, this implies that $q \notin \alpha$.
Thus we have:

$q \in \gamma$ and $q \notin \alpha$
from which by definition of strict ordering of cuts:

$\alpha < \gamma$
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Dedekind Cuts: $1.11$. Theorem




