# 

Source: https://proofwiki.org/wiki/Condition_for_Supremum_of_Subset_to_equal_Supremum_of_Set



Lemma
Let $S$ be a real set.
Let $T$ be a subset of $S$.
Let $S$ and $T$ admit suprema.

Then:

$\sup S = \sup T \iff \forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: s < t + \epsilon$


Proof
Necessary Condition
Let $\sup S = \sup T$.
The aim is to establish that $\forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: s < t + \epsilon$.

We have:














\(\ds \sup S\)

\(=\)







\(\ds \sup T\)














\(\ds \leadsto \ \ \)





\(\ds \sup S\)

\(\le\)







\(\ds \sup T\)














\(\ds \leadsto \ \ \)





\(\ds \forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: s\)

\(<\)







\(\ds t + \epsilon\)





Suprema of two Real Sets





Sufficient Condition
Let $\forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: s < t + \epsilon$.
The aim is to establish that $\sup S = \sup T$.

We have:














\(\ds \forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: s\)

\(<\)







\(\ds t + \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds \sup S\)

\(\le\)







\(\ds \sup T\)





Suprema of two Real Sets








\(\ds \leadsto \ \ \)





\(\ds \sup S\)

\(\le\)







\(\ds \sup T \le \sup S\)





as $\sup T \le \sup S$ is true by Supremum of Subset








\(\ds \leadsto \ \ \)





\(\ds \sup S\)

\(=\)







\(\ds \sup T\)









$\blacksquare$





