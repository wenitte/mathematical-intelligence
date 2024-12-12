# 

Source: https://proofwiki.org/wiki/Condition_for_Infimum_of_Subset_to_equal_Infimum_of_Set



Lemma
Let $S$ be a real set.
Let $T$ be a subset of $S$.
Let $S$ and $T$ admit infima.

Then:

$\inf S = \inf T \iff \forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: s + \epsilon > t$


Proof
Necessary Condition
Let $\inf S = \inf T$.
The aim is to establish that $\forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: s + \epsilon > t$.

We have:














\(\ds \inf S\)

\(=\)







\(\ds \inf T\)














\(\ds \leadsto \ \ \)





\(\ds \inf S\)

\(\ge\)







\(\ds \inf T\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: \, \)



\(\ds s + \epsilon\)

\(>\)







\(\ds t\)





Infima of two Real Sets





Sufficient Condition
Let $\forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: s + \epsilon > t$.
The aim is to establish that $\inf S = \inf T$.

We have:










\(\ds \forall \epsilon \in \R_{>0}: \forall s \in S: \exists t \in T: \, \)



\(\ds s + \epsilon\)

\(>\)







\(\ds t\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \inf S\)

\(\ge\)







\(\ds \inf T\)





Infima of two Real Sets








\(\ds \leadstoandfrom \ \ \)





\(\ds \inf S\)

\(\ge\)







\(\ds \inf T \ge \inf S\)





as $\inf T \ge \inf S$ is true by Infimum of Subset








\(\ds \leadstoandfrom \ \ \)





\(\ds \inf S\)

\(=\)







\(\ds \inf T\)









$\blacksquare$





